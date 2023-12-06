import React from 'react'

export default function NewsComponent({newsItem}) {
    
    return (
    <div className='relative cursor-pointer flex items-center shadow-md  border border-slate-200 my-6 w-full h-[100px] md:h-[260px] mx-auto md:w-[500px]  lg:w-[700px] rounded-md p-2 md:p-4 lg:p-6  '>
        <div>
            <img className='w-[100px] h-fit md:w-200px lg:w-[300px] shadow-md rounded-md' src={newsItem.urlToImage} alt="" />
        </div>
        <div className='p-2 flex flex-col gap-3'>
            <p className='font-sans font-bold truncate w-[150px] md:w-[300px] lg:w-[500px] text-[12px]  md:text-[20px] '>{newsItem.title}</p>
            <p className='hidden md:block truncate w-[150px]  md:w-[300px] lg:w-[500px]'>{newsItem.description}</p>
            <p>{ new Date(newsItem.publishedAt).toDateString()}</p>
        </div>
        <div className='absolute top-1 right-2 cursor-pointer'>
            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
        </div>
      

    </div>
  )
}
