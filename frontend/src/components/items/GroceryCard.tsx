import { userContext } from '@/context/userContext'
import { calculateDiscountedPrice } from '@/helper/calculateItemPrice'
import { IndianRupee } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'

interface Props{
    name:string,
    imgUrl:string,
    originalPrice:number,
    discount:number,
    quentity:string,
    storeName:string,
    inStock:boolean
}

const GroceryCard = ({name,imgUrl,originalPrice,discount,quentity,storeName,inStock}:Props) => {
  const price = calculateDiscountedPrice(originalPrice,discount)
  return (
    <div className='py-2 px-4 w-[20%] max-md:w-full h-[20rem] bg-white rounded mr-4'>

    <Link href={"/"} className='flex justify-center items-center h-[50%] w-full'>
          <Image src={`${imgUrl}`} height={105} width={105} alt='jj' />
    </Link>

    <Link href={'/'}>
    <p className='w-full line-clamp-2 mt-2 hover:text-blue-600 duration-100 text-[.9rem] font-semibold'>
    {name}
    </p>
    </Link>

    <p className='text-[.9rem] line-clamp-1 w-full'>{storeName}</p>

    <div className=' w-full flex gap-2 items-center my-1'>

      <p className='flex items-center'>
        <IndianRupee size={14}/>
       {price}</p>

       <p className='flex items-center line-through text-[.9rem]'>
        <IndianRupee size={14}/>
       {originalPrice}</p>

      <p className='text-green-600'>{discount}% off</p>
    </div>

    <div className='flex justify-between items-center mt-3'>
        
        {
            inStock ?
            <>
            <button className='w-[48%] py-2 bg-[#222] text-white cursor-default'>{quentity}</button>
            <Link href={"/"} className='w-[48%]'>
              <button className='w-[100%] py-2 border bg-green-500 text-white'>Add Item</button>
            </Link>
            </> 
             :<button className='w-full py-2 bg-red-500 text-white cursor-not-allowed'>Out of Stock</button>
        }
          
    </div>

</div>
  )
}

export default GroceryCard