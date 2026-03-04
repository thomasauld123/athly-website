'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Container } from '@/components/ui/Container'
import { appendWaitlistEntry } from '@/lib/storage'
import { useToast } from '@/components/ui/use-toast'
import { CheckCircle2 } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

interface FormErrors {
  sport?: string
  team?: string
  athlete?: string
  goal?: string
}

export function Waitlist() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [form, setForm] = useState({
    sport: '',
    team: '',
    athlete: '',
    goal: '',
    email: '',
  })
  const { toast } = useToast()
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const formWrapRef = useRef<HTMLDivElement>(null)

  // GSAP entrance
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 22,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
          once: true,
        },
      })
      gsap.from(formWrapRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: formWrapRef.current,
          start: 'top 82%',
          once: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  /* ─── Form logic (unchanged) ─── */
  function validate(): boolean {
    const newErrors: FormErrors = {}
    if (!form.sport.trim()) newErrors.sport = 'Pick a sport.'
    if (!form.team.trim()) newErrors.team = 'Who do you follow?'
    if (!form.athlete.trim()) newErrors.athlete = "Name someone you'd want."
    if (!form.goal.trim()) newErrors.goal = "Tell us what you're working toward."
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return

    appendWaitlistEntry({
      sport: form.sport.trim(),
      team: form.team.trim(),
      athlete: form.athlete.trim(),
      goal: form.goal.trim(),
      email: form.email.trim(),
      createdAt: new Date().toISOString(),
    })

    toast({ title: "You're on the list." })
    setSubmitted(true)
  }

  function resetForm() {
    setForm({ sport: '', team: '', athlete: '', goal: '', email: '' })
    setErrors({})
    setSubmitted(false)
  }

  function updateField(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <section ref={sectionRef} id="waitlist" className="relative py-[var(--section-py)]">
      {/* Radial accent glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(200,255,0,0.03) 0%, transparent 70%)',
        }}
      />

      <Container className="max-w-[560px] relative z-10">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-10">
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] mb-3" style={{ color: 'var(--accent)' }}>
            Early access
          </p>
          <h2
            className="font-[family-name:var(--font-display)] tracking-tight text-white mb-3"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            Get early access
          </h2>
          <p className="text-white/45 text-sm leading-relaxed max-w-md mx-auto">
            Tell us who you want to train with and what you&apos;re working on. We&apos;ll save you a spot.
          </p>
        </div>

        {/* Form / success (Framer Motion AnimatePresence preserved) */}
        <div ref={formWrapRef}>
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="glass-surface rounded-2xl p-10 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.15 }}
                >
                  <CheckCircle2 className="h-10 w-10 mx-auto mb-4" style={{ color: 'var(--accent)' }} strokeWidth={1.5} />
                </motion.div>
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold mb-2">
                  You&apos;re in.
                </h3>
                <p className="text-sm text-white/40 mb-6">
                  We&apos;ll email you when invite waves open.
                </p>
                <Button variant="secondary" onClick={resetForm}>
                  Submit another
                </Button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                className="glass-surface rounded-2xl p-8 space-y-5 backdrop-blur-[32px]"
                noValidate
              >
                <div className="space-y-1.5">
                  <label htmlFor="sport" className="text-[11px] font-medium uppercase tracking-wider text-white/50">
                    Favourite sport *
                  </label>
                  <Input
                    id="sport"
                    placeholder="e.g. AFL, Football, Rugby, Swimming"
                    value={form.sport}
                    onChange={(e) => updateField('sport', e.target.value)}
                  />
                  {errors.sport && <p className="text-xs text-red-400">{errors.sport}</p>}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="team" className="text-[11px] font-medium uppercase tracking-wider text-white/50">
                    Favourite team *
                  </label>
                  <Input
                    id="team"
                    placeholder="e.g. Collingwood, Man City, Wallabies"
                    value={form.team}
                    onChange={(e) => updateField('team', e.target.value)}
                  />
                  {errors.team && <p className="text-xs text-red-400">{errors.team}</p>}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="athlete" className="text-[11px] font-medium uppercase tracking-wider text-white/50">
                    Athlete you want to see on Athly *
                  </label>
                  <Input
                    id="athlete"
                    placeholder="e.g. Nick Daicos, Sam Kerr, Latrell Mitchell"
                    value={form.athlete}
                    onChange={(e) => updateField('athlete', e.target.value)}
                  />
                  {errors.athlete && <p className="text-xs text-red-400">{errors.athlete}</p>}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="goal" className="text-[11px] font-medium uppercase tracking-wider text-white/50">
                    What are you training for? *
                  </label>
                  <textarea
                    id="goal"
                    rows={3}
                    placeholder="e.g. Make first team, get faster, return from injury, build strength for pre-season"
                    value={form.goal}
                    onChange={(e) => updateField('goal', e.target.value)}
                    className="flex w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 backdrop-blur-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] focus-visible:border-[color:var(--accent-border)] resize-none"
                  />
                  {errors.goal && <p className="text-xs text-red-400">{errors.goal}</p>}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-[11px] font-medium uppercase tracking-wider text-white/50">
                    Email <span className="text-white/25">(optional, for invites)</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => updateField('email', e.target.value)}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full border-0 text-black font-semibold hover:opacity-90"
                  style={{ background: 'var(--accent)' }}
                >
                  Join the waitlist
                </Button>

                <p className="text-xs text-white/25 text-center">
                  No spam. Just early access.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  )
}
