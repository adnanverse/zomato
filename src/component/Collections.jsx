import React from 'react'
import { RiArrowRightSFill } from "react-icons/ri";
import { collection } from '../assets/faqquaetions';
import CollectionsComponent from './CollectionsComponent';
export default function Collections() {
    return (
        <div className='w-[100%] py-10'>
            <div className='mx-auto max-w-[1100px]  px-4 tablet:px-0 '>
                <h2 className='text-[35px] tracking-[0.5px] font-medium'>
                    Collections
                </h2>
                <div className='flex text-[18px] font-light justify-between'>
                    <p>
                        Explore curated lists of top restaurants, cafes, pubs, and bars in Jodhpur, based on trends
                    </p>
                    <div className='flex items-center'>
                        <p className='text-[red]'>
                            All collections in Jodhpur
                        </p>
                        <RiArrowRightSFill className='text-[red] text-[25px]'/>
                    </div>
                </div>
                <div className='flex flex-wrap w-[100%] justify-evenly tablet:gap-2 gap-7 py-7 '>
                    {
                        collection.map((v,i)=>{
                            return(
                                <CollectionsComponent data={v} key={i}/>
                            )
                        })
                    }
                    
                </div>


            </div>

        </div>
    )
}
