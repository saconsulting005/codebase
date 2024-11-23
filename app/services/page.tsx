import GetInTouchSection from '@/components/common/GetInTouchSection'
import IndustrySection from '@/components/common/IndustrySection'
import FeaturedInsights from '@/components/features/Insights/FeaturedInsights'
import ClientExperienceSection from '@/components/features/Services/components/ClientExperienceSection'
import ServiceHero from '@/components/features/Services/components/ServiceHero'
import WhatWeDo from '@/components/features/Services/components/WhatWeDo'
import React from 'react'

export default function page() {
  return (
   <>
   
   <ServiceHero/>
   <WhatWeDo/>
   <ClientExperienceSection/>
   <div className="bg-[#F7F6F6] py-10">
   <IndustrySection/>
   </div>
   <FeaturedInsights/>
   <GetInTouchSection/>

   </>
  )
}
