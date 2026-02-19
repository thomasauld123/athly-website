'use client'

import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { LogoMarquee } from '@/components/LogoMarquee'
import { SocialProof } from '@/components/sections/SocialProof'
import { Comparison } from '@/components/sections/Comparison'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { WeekTimeline } from '@/components/sections/WeekTimeline'
import { RosterMarquee } from '@/components/roster/RosterMarquee'
import { AthleteEndorsements } from '@/components/sections/AthleteEndorsements'
import { ComingSoon } from '@/components/sections/ComingSoon'
import { Waitlist } from '@/components/sections/Waitlist'
import { Footer } from '@/components/sections/Footer'
import { SectionDivider } from '@/components/visual/SectionDivider'
import { CursorGlow } from '@/components/visual/CursorGlow'

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Header />
      <Hero />
      <LogoMarquee />
      <SectionDivider />
      <SocialProof />
      <SectionDivider />
      <Comparison />
      <SectionDivider />
      <HowItWorks />
      <SectionDivider />
      <WeekTimeline />
      <SectionDivider />
      <RosterMarquee />
      <SectionDivider />
      <AthleteEndorsements />
      <SectionDivider />
      <ComingSoon />
      <SectionDivider />
      <Waitlist />
      <Footer />
    </>
  )
}
