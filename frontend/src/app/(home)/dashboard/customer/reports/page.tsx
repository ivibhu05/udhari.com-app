import { ArrowLeftRight } from 'lucide-react'
import React from 'react'

const CustomerReports = () => {
  return (
    <div className='text-white py-6 px-6 mt-12 w-full'>
        <div className="flex gap-4 justify-start items-center my-3">
            <div className="py-3 px-3 bg-blue-600 rounded-full"><ArrowLeftRight color='white'/></div>
            <h1 className="text-[1.75rem]">Transaction Reports</h1>
        </div>

        <div className='flex gap-12 my-4 w-[60%] justify-between px-2'>
            <div className='w-[45%]'>
                <p>Customer Name</p>
                <input placeholder="Search By name"
                className='py-2 px-4 w-full bg-transparent border-[1px] border-white outline-none'/>
            </div>

            <div className='w-[45%]'>
                <p>Period</p>
                <input className='py-2 px-4 w-full'/>
            </div>
        </div>

        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default CustomerReports