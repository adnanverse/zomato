import React, { useState } from 'react'
import {questions} from '../assets/faqquaetions'
import Faq from './Faq'

export default function Faqsection() {
  let [show,setshow]=useState()
  return (
    <>
     <div className='w-[100%] bg-[#FCFCFC]'>
        <div className='max-w-[1100px]  px-4 tablet:px-0  py-7 mx-auto'>
            <div>
                <p className='text-[30px] tracking-[0.5px] font-medium'>Explore options near me</p>
            </div>
            {
              questions.map((v,i)=>{
                return(
                    <Faq v={v} i={i} show={show} setshow={setshow}/>
                )
              })  
            }
          
        </div>
      
      </div>
    </>
   
  )
}
