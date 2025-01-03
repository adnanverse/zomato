import React from 'react'

import { popularlocalities } from '../assets/faqquaetions'
import PopularlocalitiesComponent from './PopularlocalitiesComponent';

export default function Popularlocalities() {
  return (
    <>
    <div className='w-[100%]'>
        <div className='max-w-[1100px]  px-4 tablet:px-0  mx-auto py-6 '>

            <h2 className='text-[35px] tracking-[0.5px] font-medium'>
            Popular localities in and around Jodhpur
            </h2>
            <div  className=' flex  gap-[2%] flex-wrap'>
              {
                popularlocalities.map((v,i)=>{
                  return(
                    <PopularlocalitiesComponent data={v} key={i}/>
                  )
                })
              }
              

            </div>

        </div>
      
      </div>
    </>
    
  )
}
