'use client'

import { motion } from 'framer-motion'
import { Lock, Send, Play, CheckCircle2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pt-3 pb-1">
      <span className="text-[10px] font-medium text-white/50">9:41</span>
      <div className="flex items-center gap-1">
        <div className="flex gap-[2px]">
          {[1, 0.8, 0.6, 0.3].map((opacity, i) => (
            <div key={i} className="w-[3px] rounded-full bg-white" style={{ height: `${6 + i * 2}px`, opacity }} />
          ))}
        </div>
        <div className="w-1" />
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="text-white/50">
          <rect x="0.5" y="0.5" width="11" height="9" rx="1.5" stroke="currentColor" strokeWidth="1" />
          <rect x="2" y="2" width="7" height="6" rx="0.5" fill="currentColor" />
          <rect x="12" y="3" width="2" height="4" rx="0.5" fill="currentColor" />
        </svg>
      </div>
    </div>
  )
}

function Notch() {
  return (
    <div className="flex justify-center pt-1">
      <div className="w-[90px] h-[22px] bg-black rounded-full" />
    </div>
  )
}

function MessagingScreen() {
  return (
    <div className="flex flex-col h-full">
      <Notch />
      <StatusBar />

      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5">
        <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-white">Messages</span>
        <Badge variant="accent" className="text-[9px]">Verified</Badge>
      </div>

      <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5">
        <div className="w-9 h-9 rounded-full flex-shrink-0 ring-2 ring-[color:var(--accent-border)]" style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-2))' }} />
        <div className="flex-1 min-w-0">
          <div className="relative">
            <div className="h-4 w-24 rounded bg-white/10 blur-md" />
            <div className="absolute inset-0 flex items-center gap-1">
              <Lock className="h-2.5 w-2.5 text-white/30" />
              <span className="text-[9px] text-white/30">Hidden</span>
            </div>
          </div>
        </div>
        <Badge variant="muted" className="text-[8px]">Athlete</Badge>
      </div>

      <div className="flex-1 px-3 py-3 space-y-2.5 overflow-hidden">
        <div className="flex justify-end">
          <div className="max-w-[80%] rounded-2xl rounded-br-md px-3 py-2" style={{ background: 'var(--accent-soft)', border: '1px solid var(--accent-border)' }}>
            <p className="text-[10px] text-white/80 leading-relaxed">I keep fading late in games. What should I focus on this week?</p>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="max-w-[80%] rounded-2xl rounded-bl-md bg-white/[0.06] border border-white/8 px-3 py-2">
            <p className="text-[10px] text-white/70 leading-relaxed">Got you. Two sessions: speed endurance + repeat efforts. I&apos;ll tailor it to your schedule.</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="max-w-[80%] rounded-2xl rounded-br-md px-3 py-2" style={{ background: 'var(--accent-soft)', border: '1px solid var(--accent-border)' }}>
            <p className="text-[10px] text-white/80 leading-relaxed">I can train Tue/Thu + game Sat.</p>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="max-w-[80%] rounded-2xl rounded-bl-md bg-white/[0.06] border border-white/8 px-3 py-2">
            <p className="text-[10px] text-white/70 leading-relaxed">Perfect — here&apos;s your week. Keep it simple and hit the targets.</p>
          </div>
        </div>

        <div className="flex justify-center pt-1">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-xl px-3 py-1">
            <CheckCircle2 className="h-3 w-3" style={{ color: 'var(--accent)' }} />
            <span className="text-[9px] font-medium text-white/60">Plan updated</span>
          </div>
        </div>
      </div>

      <div className="px-3 pb-4 pt-1">
        <div className="flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/8 px-3 py-2">
          <span className="text-[10px] text-white/25 flex-1">Message...</span>
          <Send className="h-3.5 w-3.5 text-white/30" />
        </div>
      </div>
    </div>
  )
}

function CheckInScreen() {
  return (
    <div className="flex flex-col h-full">
      <Notch />
      <StatusBar />

      <div className="px-4 py-2.5 border-b border-white/5">
        <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-white">Check-in</span>
      </div>

      <div className="px-3 py-4 space-y-4">
        <div className="rounded-xl bg-white/[0.06] border border-white/8 p-4 space-y-3">
          <p className="text-[11px] font-medium text-white/70">Request a quick call</p>
          <p className="text-[9px] text-white/35">Limited availability per invite wave</p>
          <div className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1" style={{ background: 'var(--accent-soft)', border: '1px solid var(--accent-border)' }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
            <span className="text-[9px] font-medium" style={{ color: 'var(--accent)' }}>Next invite wave</span>
          </div>
          <div className="pt-1">
            <div className="w-full rounded-lg bg-white text-black text-[10px] font-semibold text-center py-2">
              Request check-in
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white/[0.06] border border-white/8 p-4 space-y-2.5">
          <p className="text-[10px] font-medium text-white/60">Voice note received</p>
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
              <Play className="h-3 w-3 text-white/60 ml-0.5" />
            </div>
            <div className="flex items-center gap-[2px] flex-1">
              {[3, 5, 8, 6, 10, 7, 4, 9, 6, 3, 7, 10, 5, 8, 4, 6, 9, 3, 7, 5, 8, 4, 6, 3].map((h, i) => (
                <div
                  key={i}
                  className="w-[2px] rounded-full"
                  style={{ height: `${h}px`, background: 'var(--accent)', opacity: 0.5 }}
                />
              ))}
            </div>
            <span className="text-[9px] text-white/30">0:42</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function PhoneMockups() {
  return (
    <div className="relative w-full max-w-[380px] mx-auto lg:mx-0 h-[520px] sm:h-[560px]">
      <motion.div
        animate={{ y: [0, -6, 0], rotate: [-1, 1, -1] }}
        transition={{ duration: 10, ease: 'easeInOut', repeat: Infinity }}
        className="absolute top-0 left-0 w-[220px] sm:w-[240px] h-[420px] sm:h-[460px] rounded-[32px] bg-white/[0.06] border border-white/[0.12] backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden z-10 opacity-70"
        style={{ boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.08), 0 25px 50px -12px rgba(0,0,0,0.5)' }}
      >
        <CheckInScreen />
      </motion.div>

      <motion.div
        animate={{ y: [0, 6, 0], rotate: [1, -0.5, 1] }}
        transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity }}
        className="absolute top-12 right-0 w-[240px] sm:w-[260px] h-[460px] sm:h-[500px] rounded-[32px] bg-white/[0.08] border border-white/[0.14] backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden z-20"
        style={{ boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.1), 0 25px 50px -12px rgba(0,0,0,0.6)' }}
      >
        <MessagingScreen />
      </motion.div>
    </div>
  )
}
