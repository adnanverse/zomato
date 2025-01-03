import React from 'react'
import { RiArrowUpSLine } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";

export default function Faq({v,i,setshow,show}) {
  let Check = (id) => {

    if (show == id)
       {
        setshow(0)
        console.log(show)
    }

    else {
      setshow(id)
      console.log(show)

    }
  }
  return (
    <div className='bg-[#FFFFFF] border mt-5 rounded-lg'>
      <div className='flex justify-between p-5 text-[22px]' onClick={()=>Check(v.id)}>
       <p>{v.ques}</p>
       
       {
          (show==v.id)
          ?
          <RiArrowUpSLine/>
          :
          <RiArrowDownSLine/>
       } 
      </div>
      <div className={`${ (v.id==show)? '' : 'hidden'}  px-5 pb-5 pt-2 font-light`}>
        {v.ans}
      </div>
    </div>
  )
}
