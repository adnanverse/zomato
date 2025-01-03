import React from 'react'
import HomeHeader from './HomeHeader'
import Faqsection from './Faqsection'
import Popularlocalities from './Popularlocalities'
import SecondSection from './SecondSection'
import Getthezomatoapp from './Getthezomatoapp'
import Collections from './Collections'

export default function Home() {
  return (
    <div>
    <HomeHeader/>
    <SecondSection/>
    <Collections/>
    <Popularlocalities/>
    <Getthezomatoapp/>
    <Faqsection/>
    </div>
  )
}
