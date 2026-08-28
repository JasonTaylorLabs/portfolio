import { useEffect, useRef } from 'react'

const VERTEX_SHADER = /* glsl */ `
  uniform float uTime;
  uniform float uPixelRatio;
  attribute float aSeed;
  varying float vFade;
  varying float vCrest;

  void main() {
    vec3 p = position;
    float t = uTime * 0.35;
    float wave =
      sin(p.x * 0.55 + t) * 0.45 +
      sin(p.z * 0.85 - t * 1.25) * 0.30 +
      sin((p.x + p.z) * 0.35 + t * 0.6) * 0.35;
    p.y += wave * 0.5;

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;

    float size = 1.1 + aSeed * 1.5;
    gl_PointSize = size * uPixelRatio * (3.4 / -mv.z);

    // Fade toward the horizon; vary brightness per particle.
    float depthFade = smoothstep(-10.0, -1.6, mv.z);
    vFade = depthFade * (0.35 + 0.65 * aSeed);
    vCrest = smoothstep(0.15, 1.05, wave);
  }
`

const FRAGMENT_SHADER = /* glsl */ `
  precision mediump float;
  varying float vFade;
  varying float vCrest;

  void main() {
    float d = distance(gl_PointCoord, vec2(0.5));
    float a = smoothstep(0.5, 0.15, d);
    vec3 base = vec3(0.09, 0.09, 0.11);  // near-black (normal-blended over white)
    vec3 crest = vec3(0.42, 0.42, 0.46); // grey highlights on wave crests
    vec3 color = mix(base, crest, vCrest);
    gl_FragColor = vec4(color, a * vFade * 0.5);
  }
`

/**
 * Lazy-loaded three.js particle ocean for the hero.
 * - `three` is dynamically imported so it stays out of the main bundle.
 * - No WebGL -> renders nothing (the CSS aurora gradients behind it remain).
 * - prefers-reduced-motion -> renders a single static frame, no animation loop.
 * - Pauses when scrolled out of view (IntersectionObserver).
 */
export function HeroScene() {
  const hostRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    let disposed = false
    let cleanup: (() => void) | null = null

    import('three').then((THREE) => {
      if (disposed) return

      let renderer
      try {
        renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: false,
          powerPreference: 'low-power',
        })
      } catch {
        return // no WebGL: CSS gradient fallback stays
      }
      if (!renderer) return

      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.75)
      renderer.setPixelRatio(pixelRatio)
      renderer.setSize(host.clientWidth, host.clientHeight)
      renderer.domElement.style.position = 'absolute'
      renderer.domElement.style.inset = '0'
      host.appendChild(renderer.domElement)

      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(
        55,
        host.clientWidth / Math.max(host.clientHeight, 1),
        0.1,
        100,
      )
      const baseCam = { x: 0, y: 1.35, z: 4.2 }
      camera.position.set(baseCam.x, baseCam.y, baseCam.z)
      camera.lookAt(0, 0.1, 0)

      // Particle field
      const isNarrow = window.innerWidth < 768
      const cols = isNarrow ? 140 : 220
      const rows = isNarrow ? 70 : 110
      const fieldWidth = 15
      const fieldDepth = 9
      const count = cols * rows
      const positions = new Float32Array(count * 3)
      const seeds = new Float32Array(count)
      let i = 0
      for (let r = 0; r < rows; r += 1) {
        for (let c = 0; c < cols; c += 1) {
          positions[i * 3] = (c / (cols - 1) - 0.5) * fieldWidth
          positions[i * 3 + 1] = 0
          positions[i * 3 + 2] = (r / (rows - 1) - 0.5) * fieldDepth
          seeds[i] = Math.random()
          i += 1
        }
      }
      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1))

      const uniforms = {
        uTime: { value: 0 },
        uPixelRatio: { value: pixelRatio },
      }
      const material = new THREE.ShaderMaterial({
        uniforms,
        vertexShader: VERTEX_SHADER,
        fragmentShader: FRAGMENT_SHADER,
        transparent: true,
        depthWrite: false,
        blending: THREE.NormalBlending,
      })
      const points = new THREE.Points(geometry, material)
      points.position.y = -0.9
      scene.add(points)

      // Gentle pointer parallax
      const pointer = { x: 0, y: 0 }
      const onPointerMove = (event: PointerEvent) => {
        pointer.x = (event.clientX / window.innerWidth - 0.5) * 2
        pointer.y = (event.clientY / window.innerHeight - 0.5) * 2
      }
      window.addEventListener('pointermove', onPointerMove, { passive: true })

      let rafId = 0
      let inView = true
      const clock = new THREE.Clock()
      let elapsed = 0

      const renderFrame = () => {
        camera.position.x += (baseCam.x + pointer.x * 0.35 - camera.position.x) * 0.04
        camera.position.y += (baseCam.y - pointer.y * 0.2 - camera.position.y) * 0.04
        camera.lookAt(0, 0.1, 0)
        uniforms.uTime.value = elapsed
        renderer.render(scene, camera)
      }

      const tick = () => {
        elapsed += Math.min(clock.getDelta(), 0.05)
        renderFrame()
        rafId = requestAnimationFrame(tick)
      }

      const start = () => {
        if (reduceMotion) {
          elapsed = 4
          renderFrame()
          return
        }
        clock.getDelta()
        cancelAnimationFrame(rafId)
        rafId = requestAnimationFrame(tick)
      }
      const stop = () => cancelAnimationFrame(rafId)

      const io = new IntersectionObserver(([entry]) => {
        inView = entry.isIntersecting
        if (inView) start()
        else stop()
      })
      io.observe(host)

      const ro = new ResizeObserver(() => {
        const w = host.clientWidth
        const h = Math.max(host.clientHeight, 1)
        renderer.setSize(w, h)
        camera.aspect = w / h
        camera.updateProjectionMatrix()
        if (reduceMotion || !inView) renderFrame()
      })
      ro.observe(host)

      start()

      cleanup = () => {
        stop()
        io.disconnect()
        ro.disconnect()
        window.removeEventListener('pointermove', onPointerMove)
        geometry.dispose()
        material.dispose()
        renderer.dispose()
        renderer.domElement.remove()
      }
    })

    return () => {
      disposed = true
      cleanup?.()
    }
  }, [])

  return <div ref={hostRef} aria-hidden="true" className="pointer-events-none absolute inset-0" />
}
