import React from 'react'

export default function CollectionsComponent({data}) {
    return (
        <div style={{ backgroundImage: `url(${data.image})`}} className={`tablet:basis-[24.3%] largemob:basis-[40%] basis-[100%] largemob:justify-between rounded-lg bg-cover bg-center `}>
            <div className='pt-64 px-3 pb-2 text-white '>
                <p className='text-[20px]'>{data.heading}</p>
                <p>
                    {data.places}
                </p>

            </div>
        </div>
    )
}
