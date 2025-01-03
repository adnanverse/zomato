import React from 'react'

export default function SecondSectionComponent({image,heading,des}) {
  return (
    <>
      <div className='basis-[50%] rounded-xl hover:scale-105 border'>
            <div style={{backgroundImage: `url(${image})`}} className={`rounded-t-xl bg-center bg-no-repeat bg-cover py-20`}>
             </div>
             <div className='p-5 '>
                <h3 className='text-[20px] tracking-[1px] font-medium'>
                    {heading}
                </h3>
                <p>
                   {des}
                </p>
             </div>
           </div>
    </>
  
  )
}
