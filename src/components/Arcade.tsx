import type { CSSProperties } from 'react'
import { Reveal } from './Reveal'

const arcadeUrl = (path: string) => `${import.meta.env.BASE_URL}arcade/${path}`
const shotUrl = (name: string) => `${import.meta.env.BASE_URL}arcade-shots/${name}.jpg`

const GAMES = [
  {
    emoji: '🧱',
    name: 'Brick Breaker',
    blurb: 'Neon breakout with multi-hit bricks and paddle english.',
    tech: 'Canvas 2D',
    path: 'games/brick-breaker/',
    shot: 'brick-breaker',
    alt: 'Brick Breaker gameplay — the ball carving a channel through rows of glowing neon bricks',
    glow: '#22d3ee',
  },
  {
    emoji: '👻',
    name: 'Chomp',
    blurb: 'Maze chase with four distinct ghost personalities.',
    tech: 'Canvas 2D',
    path: 'games/chomp/',
    shot: 'chomp',
    alt: 'Chomp gameplay — the chomper working through a pellet maze while four ghosts hunt it down',
    glow: '#facc15',
  },
  {
    emoji: '🏀',
    name: 'Arcade Hoops',
    blurb: '60-second pop-a-shot with streak bonuses.',
    tech: 'Three.js',
    path: 'games/basketball/',
    shot: 'basketball',
    alt: 'Arcade Hoops gameplay — a basketball mid-flight at the backboard with the shot clock running',
    glow: '#fb923c',
  },
  {
    emoji: '⛳',
    name: 'Mini Golf',
    blurb: 'Six holes of ramps, walls, and sand traps.',
    tech: 'Three.js · physics',
    path: 'games/mini-golf/',
    shot: 'mini-golf',
    alt: 'Mini Golf gameplay — lining up a putt across a dogleg hole with the aim arrow pointed at the flag',
    glow: '#4ade80',
  },
  {
    emoji: '🎯',
    name: 'Skee-Ball',
    blurb: 'Flick-to-roll physics up the classic lane.',
    tech: 'Three.js · physics',
    path: 'games/skeeball/',
    shot: 'skeeball',
    alt: 'Skee-Ball gameplay — the ball airborne over the neon ring target at the top of the lane',
    glow: '#f87171',
  },
]

/**
 * Playable browser games, built from scratch and bundled into the site as a
 * static sub-app (public/arcade). The one dark band on the page: each game is
 * previewed with a real mid-gameplay screenshot (public/arcade-shots) on an
 * arcade-cabinet card that glows in the game's neon accent. Clicking a card
 * opens the game itself.
 */
export function Arcade() {
  return (
    <section id="arcade" className="relative overflow-hidden bg-cream text-ink">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_0%,rgba(255,255,255,0.06),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-28 sm:px-10">
        <Reveal>
          <h2 className="flex items-center gap-5 font-mono text-[11px] font-medium tracking-[0.25em] text-ink/40 uppercase">
            Arcade
            <span aria-hidden="true" className="h-px flex-1 bg-ink/[0.08]" />
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <h3 className="mt-10 font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl">
            Insert coin<span className="text-ink/40">.</span>
          </h3>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-ink/55 sm:text-base">
            Five browser games built from scratch — canvas, WebGL, and a physics engine. High
            scores are kept. Have a go.
          </p>
        </Reveal>

        {/* Horizontal snap carousel on small screens (next card peeks in); a
            single row of all five cabinets from lg up. */}
        <div className="-mx-6 mt-14 sm:-mx-10 lg:mx-0">
          <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-2 sm:scroll-px-10 sm:px-10 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0 lg:pb-0">
            {GAMES.map((game, index) => (
              <Reveal
                key={game.name}
                delay={index * 0.06}
                className="w-[68%] flex-none snap-start sm:w-[38%] lg:w-auto"
              >
                <a
                  href={arcadeUrl(game.path)}
                  target="_blank"
                  rel="noreferrer"
                  style={{ '--glow': game.glow } as CSSProperties}
                  className="group relative block overflow-hidden rounded-2xl border border-ink/10 bg-white/[0.02] transition-[border-color,box-shadow,transform] duration-300 hover:border-(--glow) hover:shadow-[0_0_50px_-12px_var(--glow)] motion-safe:hover:-translate-y-1"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#0b0d14]">
                    <img
                      src={shotUrl(game.shot)}
                      alt={game.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.045]"
                    />
                    {/* Faint CRT scanlines over the screen */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.045)_0px,rgba(255,255,255,0.045)_1px,transparent_1px,transparent_4px)]"
                    />
                    {/* Legibility gradient behind the label */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/75 via-black/35 to-transparent"
                    />
                    <span className="absolute top-3 right-3 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 font-mono text-[9px] tracking-[0.28em] text-(--glow) uppercase opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                      Play ↗
                    </span>
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <p className="flex items-center gap-2 font-mono text-[11px] font-medium tracking-[0.18em] text-white uppercase">
                        <span className="text-sm leading-none">{game.emoji}</span>
                        {game.name}
                      </p>
                      <p className="mt-1.5 font-mono text-[9px] tracking-[0.22em] text-white/45 uppercase">
                        {game.tech}
                      </p>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href={arcadeUrl('')}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-ink/20 px-5 py-2.5 font-mono text-[11px] tracking-[0.25em] text-ink/75 uppercase transition-colors duration-200 hover:border-ink/60 hover:text-ink"
            >
              Enter the arcade →
            </a>
            <p className="text-sm text-ink/40">The full hub, all five games, one token.</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
