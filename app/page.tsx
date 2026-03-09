'use client'

import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { LogoMarquee } from '@/components/LogoMarquee'
import { SocialProof } from '@/components/sections/SocialProof'
import { Comparison } from '@/components/sections/Comparison'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { RosterMarquee } from '@/components/roster/RosterMarquee'
import { ComingSoon } from '@/components/sections/ComingSoon'
import { Waitlist } from '@/components/sections/Waitlist'
import { Footer } from '@/components/sections/Footer'
import { CursorGlow } from '@/components/visual/CursorGlow'

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Header />
      <Hero />
      <LogoMarquee />
      <SocialProof />
      <Comparison />
      <HowItWorks />
      <RosterMarquee />
      <ComingSoon />
      <Waitlist />
      <Footer />
    </>
  )
}
