'use client'

import { SectionHeading } from '@/components/ui/section-heading'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/visual/Reveal'

const screens = [
  {
    label: 'YOUR PLAN',
    title: 'Weekly training plan',
    content: (
      <div className="flex flex-col gap-2">
        {[
          { day: 'MON', session: 'Speed intervals', detail: '8 × 200m @ 85%', tag: 'Track' },
          { day: 'WED', session: 'Skill drills', detail: 'Ball control + 1v1', tag: 'Field' },
          { day: 'FRI', session: 'Hill repeats', detail: '6 × 60m incline', tag: 'Strength' },
          { day: 'SAT', session: 'Game day', detail: 'Full match — rest after', tag: 'Competition' },
        ].map((item) => (
          <div key={item.day} className="flex items-center gap-3 rounded-xl bg-white/[0.05] px-3 py-2.5">
            <span className="text-[9px] font-bold uppercase tracking-widest text-white/30 w-7 flex-shrink-0">{item.day}</span>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-semibold text-white/80 leading-tight">{item.session}</p>
              <p className="text-[10px] text-white/35 mt-0.5">{item.detail}</p>
            </div>
            <span className="text-[8px] font-medium uppercase tracking-wider rounded-full px-2 py-0.5 border border-[color:var(--accent-border)] text-[color:var(--accent)] bg-[color:var(--accent-soft)] flex-shrink-0">{item.tag}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: 'YOUR CONVERSATIONS',
    title: 'Direct guidance',
    content: (
      <div className="flex flex-col gap-2">
        {/* User message */}
        <div className="flex justify-end">
          <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-white/[0.08] px-3 py-2">
            <p className="text-[11px] text-white/70 leading-snug">Hamstring feeling tight before Friday's session — should I push through?</p>
          </div>
        </div>
        {/* Athlete reply */}
        <div className="flex items-start gap-2">
          <div className="w-6 h-6 rounded-full bg-[color:var(--accent-soft)] border border-[color:var(--accent-border)] flex-shrink-0 mt-0.5" />
          <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white/[0.04] border border-white/[0.06] px-3 py-2">
            <p className="text-[9px] font-semibold text-[color:var(--accent)] mb-1">Your athlete</p>
            <p className="text-[11px] text-white/60 leading-snug">Swap hills for a tempo run instead — 20 min easy. Don't risk it before game day.</p>
          </div>
        </div>
        {/* System pill */}
        <div className="flex justify-center mt-1">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--accent-soft)] border border-[color:var(--accent-border)] px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--accent)]" />
            <span className="text-[9px] font-medium uppercase tracking-wider text-[color:var(--accent)]">Plan adjusted</span>
          </span>
        </div>
      </div>
    ),
  },
  {
    label: 'YOUR CHECK-INS',
    title: 'Check-in moment',
    content: (
      <div className="flex flex-col gap-3">
        {/* Upload area */}
        <div className="rounded-xl border border-dashed border-white/10 bg-white/[0.03] p-4 flex flex-col items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center">
            <svg className="w-4 h-4 text-white/30" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
          </div>
          <p className="text-[10px] text-white/30 text-center leading-tight">Upload your training video<br />for this week's check-in</p>
          <span className="text-[9px] font-medium text-[color:var(--accent)] uppercase tracking-wider">Select file</span>
        </div>
        {/* Status pill */}
        <div className="flex items-center justify-between rounded-xl bg-white/[0.05] px-3 py-2.5">
          <div>
            <p className="text-[10px] font-semibold text-white/60">Review status</p>
            <p className="text-[9px] text-white/30 mt-0.5">Athlete responds within 48h</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--accent-soft)] border border-[color:var(--accent-border)] px-2.5 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--accent)]" />
            <span className="text-[9px] font-medium text-[color:var(--accent)]">2 remaining</span>
          </span>
        </div>
      </div>
    ),
  },
]

export function SocialProof() {
  return (
    <Section>
      <Container>
        <SectionHeading
          title="Built around how you actually train"
          subtitle="Not another dashboard you'll forget to open. One place for your plan, your athlete, and your progress."
        />

        <div className="grid gap-5 sm:grid-cols-3">
          {screens.map((screen, i) => (
            <Reveal key={screen.label} delay={i * 0.1}>
              <div className="flex flex-col h-full">
                {/* Screen label */}
                <p className="text-[10px] uppercase tracking-[0.15em] text-white/30 mb-3 px-1">
                  {screen.label}
                </p>

                {/* Glass frame */}
                <div className="flex-1 rounded-2xl bg-white/[0.04] border border-white/[0.07] backdrop-blur-xl p-4 glass-sheen">
                  {/* Screen header bar */}
                  <div className="flex items-center gap-1.5 mb-4 pb-3 border-b border-white/[0.06]">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                    <p className="ml-2 text-[9px] font-medium text-white/25 uppercase tracking-wider">{screen.title}</p>
                  </div>

                  {/* Screen content */}
                  {screen.content}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
