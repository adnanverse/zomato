import React from 'react'
import image1 from '../assets/images/sectionTwoImg1.avif'
import image2 from '../assets/images/sectionTwoImg2.avif'
import SecondSectionComponent from './SecondSectionComponent'

export default function SecondSection() {
  return (
    <div className='w-[100%]'>
        <div className='max-w-[1100px] gap-5 flex  px-4 tablet:px-0  largemob:flex-row flex-col mx-auto py-10'>
        <SecondSectionComponent des=' Stay home and order to your doorstep ' heading='Order Online' image={image1}/>
        <SecondSectionComponent des="View the city's favourite dining venues" heading="Dining" image={image2}/>
        </div>
      
    </div>
  )
}
