import React, { useState } from 'react'
import phone from '../assets/images/phones.avif'
import appstore from '../assets/images/app.webp'
import playstore from '../assets/images/play.webp'
export default function Getthezomatoapp() {
  let[change ,setchange]=useState()
  let changeEmail =()=>{
    setchange(true)
  }
  let changeNum=()=>{
    setchange(false)
  }
  console.log(change)
  return (
    <>
    <div className='w-[100%] bg-[#FFFBF7] '>
      <div className='max-w-[1000px] tablet:px-12 flex mx-auto'>
        <div className='basis-[46%] largemob:block hidden'>
        <img src={phone} alt="" />
        </div>
        <div className='largemob:basis-[54%] basis-[100%] py-5 px-5 '>
            <h2 className='tablet:text-[45px] text-[33px] font-medium tracking-[1px]'>
            Get the Zomato app
            </h2>
            <p className='font-light text-[17px] leading-9 '>
            We will send you a link, open it on your phone to <br /> download the app
            </p>
            <div className='flex py-3 gap-14'>
                <div className=''>
                <input type="radio"  className='mr-1' name='input' id='email' onClick={changeEmail} /> <label className='text-[17px] font-light' htmlFor="email">Email</label>
                </div>
                <div>
                <input type="radio" className='mr-1' name='input' id='phone' onClick={changeNum} /> <label className='text-[17px] font-light' htmlFor="phone">Phone</label>
                </div>
               
            </div>
            <div className='flex gap-2'>
                <div className='basis-[66%] border rounded-md '>
                <input className='w-[100%] rounded-md placeholder:text-[18px] p-3 text-[17px]' type={`${change ? 'email' : 'tel'}`} placeholder={`${change ? 'Email' : 'Number'}`} />
                </div>
                <div className='basis-[34%] rounded-md'>
                    <button className='w-[100%] rounded-md h-[100%] bg-[#E03546] text-white \'>
                        Share App Link
                    </button>
                </div>

            </div>
            <p className='py-4'>
            Download app from
            </p>
            <div className='flex gap-5'>
             <div>
            <img src={appstore} width={137} alt="" />
             </div>
             <div>
            <img src={playstore} width={137} alt="" />
             </div>
            </div>
        </div>

      </div>
      </div>
    </>
    
  )
}
