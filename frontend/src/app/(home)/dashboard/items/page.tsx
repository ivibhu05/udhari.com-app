'use client'
import GroceryCard from '@/components/items/GroceryCard'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { userContext } from './../../../../context/userContext';

interface Item {
  _id: string;
  title: string;
  description: string;
  tag: string;
  totalWeight: string;
  originalPrice: number;
  discount: number;
  stock: boolean;
  image: string;
  __v: number;
}

const DashboardItems = () => {
  const [items, setItems] = useState<Item[]>([]);


  useEffect(() => {
    const fetchAllItemsData = async () => {
      const res = await axios.get("http://localhost:4000/v1/api/get-all-items");
      const array = res.data.response;
      setItems(array)
    }
    fetchAllItemsData()
  },[])
  
  return (
    <div className='mt-16 px-6  overflow-y-scroll mx-auto max-sm:px-6 w-full'>

        <div className='mt-4 w-[90%] flex justify-between'>
          <h1 className='text-[1.75rem] font-semibold text-white'>
            udhari.com <span className='text-green-500'> Grocery</span>
          </h1>

          <div>
            <input type='search' placeholder='search by name' className='py-1.5 px-2 outline-none text-white bg-transparent border' />
          </div>
        </div>

        <div className='flex flex-wrap gap-8 w-full my-4 '>
              {
                items.map((items,index) => (
                    <GroceryCard
                    key={index}
                    name={items.title}
                    imgUrl={items.image}
                    originalPrice={items.originalPrice}
                    discount={items.discount}
                    quentity={items.totalWeight}
                    storeName={items.description}
                    inStock={items.stock}
                    />
                ))
              }
        </div>
    </div>
  )
}

export default DashboardItems