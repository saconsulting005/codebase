import GetInTouchSection from '@/components/common/GetInTouchSection'
import ClientExperienceSection from '@/components/features/Services/components/ClientExperienceSection'
import ServiceHero from '@/components/features/Services/components/ServiceHero'
import ServicesSection from '@/components/features/Services/Services'
import React from 'react'

export default function page() {
  return (
   <>
   
   <ServiceHero/>
   <ServicesSection />
   <ClientExperienceSection/>
   <GetInTouchSection/>

   </>
  )
}
