import type { CSSProperties } from 'react'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const arcadeUrl = (path: string) => `${import.meta.env.BASE_URL}arcade/${path}`

const GAMES = [
  {
    emoji: '🧱',
    name: 'Brick Breaker',
    blurb: 'Neon breakout with multi-hit bricks and paddle english.',
    tech: 'Canvas 2D',
    path: 'games/brick-breaker/',
    glow: '#22d3ee',
  },
  {
    emoji: '👻',
    name: 'Chomp',
    blurb: 'Maze chase with four distinct ghost personalities.',
    tech: 'Canvas 2D',
    path: 'games/chomp/',
    glow: '#facc15',
  },
  {
    emoji: '🏀',
    name: 'Arcade Hoops',
    blurb: '60-second pop-a-shot with streak bonuses.',
    tech: 'Three.js',
    path: 'games/basketball/',
    glow: '#fb923c',
  },
  {
    emoji: '⛳',
    name: 'Mini Golf',
    blurb: 'Six holes of ramps, walls, and sand traps.',
    tech: 'Three.js · physics',
    path: 'games/mini-golf/',
    glow: '#4ade80',
  },
  {
    emoji: '🎯',
    name: 'Skee-Ball',
    blurb: 'Flick-to-roll physics up the classic lane.',
    tech: 'Three.js · physics',
    path: 'games/skeeball/',
    glow: '#f87171',
  },
]

/**
 * Playable browser games, built from scratch and bundled into the site as a
 * static sub-app (public/arcade). Each card's neon accent is revealed on hover.
 */
export function Arcade() {
  return (
    <section id="arcade" className="mx-auto max-w-4xl px-6 py-28 sm:px-10">
      <Reveal>
        <SectionHeading label="Arcade" />
      </Reveal>
      <Reveal delay={0.08}>
        <p className="mt-10 max-w-md text-sm leading-relaxed text-cream/55 sm:text-base">
          Five browser games built from scratch — canvas, WebGL, and a physics engine. High scores
          are kept. Have a go.
        </p>
      </Reveal>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {GAMES.map((game, index) => (
          <Reveal key={game.name} delay={index * 0.05}>
            <a
              href={arcadeUrl(game.path)}
              target="_blank"
              rel="noreferrer"
              style={{ '--glow': game.glow } as CSSProperties}
              className="group flex h-full flex-col rounded-xl border border-cream/10 p-5 transition-colors duration-200 hover:border-(--glow)"
            >
              <span className="text-3xl">{game.emoji}</span>
              <span className="mt-4 font-medium text-cream transition-colors duration-200 group-hover:text-(--glow)">
                {game.name}
              </span>
              <span className="mt-1.5 text-sm leading-relaxed text-cream/55">{game.blurb}</span>
              <span className="mt-4 font-mono text-[10px] tracking-[0.2em] text-cream/35 uppercase">
                {game.tech}
              </span>
            </a>
          </Reveal>
        ))}
        <Reveal delay={GAMES.length * 0.05}>
          <a
            href={arcadeUrl('')}
            target="_blank"
            rel="noreferrer"
            className="group flex h-full flex-col items-start justify-center rounded-xl border border-dashed border-cream/15 p-5 transition-colors duration-200 hover:border-cream/50"
          >
            <span className="font-mono text-[11px] tracking-[0.2em] text-cream/45 uppercase transition-colors duration-200 group-hover:text-cream">
              Enter the arcade →
            </span>
            <span className="mt-1.5 text-sm text-cream/40">The full hub, all games.</span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
