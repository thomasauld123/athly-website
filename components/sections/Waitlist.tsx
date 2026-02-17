'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SectionHeading } from '@/components/ui/section-heading'
import { FloatCluster } from '@/components/visual/FloatCluster'
import { appendWaitlistEntry } from '@/lib/storage'
import { useToast } from '@/components/ui/use-toast'
import { CheckCircle2 } from 'lucide-react'

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
    <section id="waitlist" className="relative px-6" style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
      <div className="mx-auto relative" style={{ maxWidth: '560px' }}>
        <FloatCluster variant="invite" className="absolute -right-72 top-24 hidden xl:block opacity-30" />

        <SectionHeading
          title="Get early access"
          subtitle="Tell us who you want to train with and what you're working on. We'll save you a spot."
        />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl p-10 text-center"
              >
                <CheckCircle2 className="h-10 w-10 mx-auto mb-4" style={{ color: 'var(--accent)' }} strokeWidth={1.5} />
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
                className="glass rounded-2xl p-8 space-y-5"
                noValidate
              >
                <div className="space-y-1.5">
                  <label htmlFor="sport" className="text-sm font-medium text-white/70">
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
                  <label htmlFor="team" className="text-sm font-medium text-white/70">
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
                  <label htmlFor="athlete" className="text-sm font-medium text-white/70">
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
                  <label htmlFor="goal" className="text-sm font-medium text-white/70">
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
                  <label htmlFor="email" className="text-sm font-medium text-white/70">
                    Email <span className="text-white/30">(optional, for invites)</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => updateField('email', e.target.value)}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Join the waitlist
                </Button>

                <p className="text-xs text-white/25 text-center">
                  No spam. Just early access.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
