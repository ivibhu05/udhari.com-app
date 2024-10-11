import Image from 'next/image';
import React from 'react'

interface props{
  title:String;
  imgurl:String;
  description:String;
}

const Cards = ({title,imgurl,description}:props) => {
  return (
    <div className='bg-white w-72 h-64 max-md:w-full max-md:h-48 flex flex-col items-center px-2 py-4'>
        <Image src={`${imgurl}`} height={30} width={30} alt='logo'/>
        <h1 className='text-[1.5rem] max-md:text-[1.25rem] font-semibold text_light text-center my-2'>{title}</h1>
        <p className='text-center'>{description}</p>
    </div>
  )
}

export default Cards