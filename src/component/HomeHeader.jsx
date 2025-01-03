import React, { useState } from 'react'
import banner from '../assets/images/bannerr.webp'
import whitelogo from '../assets/images/logowhite.webp'
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { IoMenuSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import Mobilemenu from './Mobilemenu';
export default function HomeHeader() {
  let [menu,setmenu]=useState()
let  openmenu= ()=>{
    setmenu(true)
    console.log(menu)
  }
  return (
    <>
    <div className='w-[100%] pb-16 bg-cover bg-center bg-center  relative bg-[url("https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png")]'>
        <nav className='max-w-[1100px]   px-4 tablet:px-0 py-5 flex justify-between  mx-auto'>
        <div className='text-white hidden  tablet:flex gap-1 items-center'> <HiOutlineDevicePhoneMobile />
        Get the App</div>
        <div className='text-white   tablet:hidden pl-6 text-[28px]'>
          <IoMenuSharp onClick={openmenu} />
          <Mobilemenu menu={menu} setmenu={setmenu}/>
        </div>
        <div className='hidden tablet:block'>
            <ul className='flex items-center gap-8 text-[19px] tracking-[1px] font-sans font-light text-white'>
                <li>Investor Relations</li>
                <li>Add restaurant</li>
                <li>Log in </li>
                <li>Sign In </li>
            </ul>
        </div>
        </nav>
        <div className='max-w-[776px] py-10   mx-auto'>
            <div className='max-w-[280px] mx-auto'>
                <img src={whitelogo} width='100%' alt="" />
            </div>
            <p className='text-center py-6 text-[38px] text-white'>
            Discover the best food & drinks in Jodhpur
            </p>
            <div className=' rounded-lg tablet:flex-row gap-5 tablet:gap-0 flex-col tablet:bg-white  flex ]'> 
              <div className='bg-[white] p-4 rounded-lg tablet:rounded-s-lg basis-[32%] items-center gap-1 flex'>
                <FaLocationDot className='text-[red] text-[20px]'/>
                <input className='px-2 outline-none tablet:border-r-[3px]' type="text" placeholder='jodhpur' />

              </div>
              <div className='bg-white basis-[68%] rounded-lg p-4 tablet:rounded-e-lg gap-1 items-center flex'>
                  <FiSearch className='text-[23px] text-[#9CA3AF]'/>
                  <input className='outline-none px-2 w-[100%]' type="text" placeholder='Serach for restaurant,cuisine or a dish'/>
              </div>
            </div>

        </div>
      
      </div>    
    </>
    
  )
}
