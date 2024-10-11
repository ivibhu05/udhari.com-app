import { formatTime } from '@/helper/formatTime'
import React from 'react'

interface Props{
    time:Date | String,
    description:String,
    form:String,
    money:Number
}

const SelectedCustomerHistory = ({time,description,form,money}:Props) => {
    const date = formatTime(`${time}`);
  return (
    <div className='w-full py-4 px-6 flex justify-between border-b-[1px] border-[#777]'>
        <div>
            <p className="text-white text-[.9rem] font-semibold">{date}</p>
            <p className='text-[.9rem] text-white'>{`${description}`}</p>
        </div>

        <div className='flex gap-[7.5rem] items-center'>
        <div className='text-green-500 '>{form === "CASH" ? `${money}`:"_"}</div>
        <div className='text-red-500 '>{form === "CREDIT" ? `${money}`:"_"}</div>
        </div>
    </div>
  )
}

export default SelectedCustomerHistory