import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
export default function PopularlocalitiesComponent({data}) {
    return (
        <div className='largemob:basis-[32%] basis-[100%] shadow-md hover:shadow-lg relative border mt-5 p-3 rounded-lg'>
            <p className='text-[22px] overflow-hidden'>{data.heading}</p>
            <p className='font-light'>{data.places}</p>
            <IoIosArrowForward className='absolute right-4 top-9' />


        </div>
    )
}
