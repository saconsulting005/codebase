import CareerHero from '@/components/features/Careers/components/CareerHero'
import CompensationAndBenefits from '@/components/features/Careers/components/CompensationAndBenefits'
import FindAtCrowe from '@/components/features/Careers/components/FindAtCrowe'
import GrowYourCareer from '@/components/features/Careers/components/GrowYourCareer'


import React from 'react'

export default function page() {
  return (
   <>
   <CareerHero/>
   <FindAtCrowe/>
   <GrowYourCareer/>
   <CompensationAndBenefits/>
   <div className='bg-white pb-8 '>
  
   </div>

   </>
  )
}
