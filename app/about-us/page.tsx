import AboutHero from '@/components/features/About-Us/components/AboutHero'
import AboutOffer from '@/components/features/About-Us/components/AboutOffer'
import BusinessConsultingSection from '@/components/features/About-Us/components/BusinessConsultingSection'
import BusinessStatsSection from '@/components/features/About-Us/components/BusinessStatsSection'
import FAQSection from '@/components/features/About-Us/components/FAQSection'
import TeamSection from '@/components/features/About-Us/components/TeamSection'
import FeaturedInsights from '@/components/features/Insights/FeaturedInsights'
import React from 'react'

export default function page() {
  return (
   <>
   
   <AboutHero/>
   <AboutOffer/>
   <BusinessConsultingSection/>
   <TeamSection/>
   <BusinessStatsSection/>
   <FeaturedInsights/>
   <FAQSection/>
   </>
  )
}
