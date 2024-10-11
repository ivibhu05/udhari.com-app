import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const CreditCardSection = () => {
  return (
    <div className='w-[90%] mx-auto  py-6 px-4 flex max-md:flex-col'>
        <div className=' w-[40%] max-md:w-full flex justify-center items-center max-md:justify-start mx-auto'>
            <Image src={'/icons/credit-card.png'} height={400} width={400} alt='creditard' />
        </div>
        <div className=' w-[40%] max-md:w-full px-6 py-4 mt-10'>
            <div>
                <h1 className='text-[2.5rem] text-white'>Set the use of payment card as appropriate</h1>
            </div>
            <div>
                <p className='text-[#888] mt-2'>You can choose add and manage the use of payment cards as your need.</p>
            </div>

            <div className='flex gap-4 mt-8 max-md:mt-4'>
                <div>
                    <div className='flex gap-1'>
                        <CheckCircle2 color='green'/>
                        <p className='text-white line-clamp-1'>check and pass</p>
                    </div>
                    <div className='flex gap-1'>
                        <CheckCircle2 color='green'/>
                        <p className='text-white line-clamp-1'>check and pass</p>
                    </div>
                </div>
                <div>
                <div className='flex gap-1'>
                        <CheckCircle2 color='green'/>
                        <p className='text-white line-clamp-1'>check and pass</p>
                    </div>
                    <div className='flex gap-1'>
                        <CheckCircle2 color='green'/>
                        <p className='text-white line-clamp-1'>check and pass</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreditCardSection