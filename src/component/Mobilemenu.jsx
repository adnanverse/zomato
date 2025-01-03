import React from 'react'
import logo from '../assets/images/logo.webp'
import { RxCross2 } from "react-icons/rx";

export default function Mobilemenu({ menu, setmenu }) {

  let close = () => {
    setmenu(false)
    console.log(menu)
  }
  return (
    <div className={`h-[100%]  w-[100%]  transition-all z-50 fixed ${(menu == true) ? 'top-0 left-0' : ' top-0 left-[-100%] '} bg-white text-[30px] `}>

      <div className='flex justify-between py-4 px-3'>
        <div>
          <RxCross2 className='text-black' onClick={close} />
        </div>
        <div className='h-7'>
          <img src={logo} className='h-[100%]' alt="" />
        </div>
      </div>
      <div className='px-6  py-7'>
        <ul className='flex text-black flex-col text-[19px] tracking-[1px] font-light gap-10'>
          <li>
            Invertor Relations
          </li>
          <li>
            Add Restaureant
          </li>
          <li> Log in</li>
          <li>
            Sign in
          </li>
        </ul>

      </div>


    </div>
  )
}
