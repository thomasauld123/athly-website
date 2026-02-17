'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SectionHeading } from '@/components/ui/section-heading'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { appendWaitlistEntry } from '@/lib/storage'
import { useToast } from '@/components/ui/use-toast'
import { CheckCircle2, Users } from 'lucide-react'

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

  function validate(): boolean {
    const newErrors: FormErrors = {}
    if (!form.sport.trim()) newErrors.sport = 'Pick a sport.'
    if (!form.team.trim()) newErrors.team = 'Who do you follow?'
    if (!form.athlete.trim()) newErrors.athlete = 'Name someone you\'d want.'
    if (!form.goal.trim()) newErrors.goal = 'Tell us what you\'re working toward.'
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
    <Section id="waitlist">
      <Container className="max-w-[560px]">
        <div className="relative">
          {/* Floating invite card */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
            className="absolute -right-72 top-24 hidden xl:flex glass-surface rounded-xl px-4 py-3 shadow-xl opacity-60 flex-col gap-2.5 w-56"
          >
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-[color:var(--accent)]" />
              <span className="text-[10px] font-medium text-white/70">Invite wave 1</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-[20%] rounded-full bg-[color:var(--accent)]" />
            </div>
            <p className="text-[9px] text-white/35">Filling up — 20% claimed</p>
          </motion.div>

          <SectionHeading
            title="Get early access"
            subtitle="Tell us who you want to train with and what you're working on. We'll save you a spot."
          />

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
                  <CheckCircle2 className="h-10 w-10 mx-auto mb-4 text-[color:var(--accent)]" strokeWidth={1.5} />
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

                <Button type="submit" size="lg" className="w-full bg-[color:var(--accent)] text-black hover:bg-[color:var(--accent-2)] border-0">
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
    </Section>
  )
}
