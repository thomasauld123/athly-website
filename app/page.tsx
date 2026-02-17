'use client'

import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { LogoMarquee } from '@/components/LogoMarquee'
import { SocialProof } from '@/components/sections/SocialProof'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { FeaturedAthletes } from '@/components/sections/FeaturedAthletes'
import { ComingSoon } from '@/components/sections/ComingSoon'
import { Waitlist } from '@/components/sections/Waitlist'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoMarquee />
      <SocialProof />
      <HowItWorks />
      <FeaturedAthletes />
      <ComingSoon />
      <Waitlist />
      <Footer />
    </>
  )
}
