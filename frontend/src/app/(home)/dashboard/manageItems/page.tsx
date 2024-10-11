'use client'
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { IndianRupee, PackageOpen, SquarePen, Trash2 } from 'lucide-react';
import CreateItems from '@/components/items/CreateItems';
import { userContext } from '@/context/userContext';

interface Item {
  _id: string;
  title: string;
  description: string;
  stock: boolean;
}

const ManageItems: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const {userId} = useContext(userContext);
  console.log(userId)
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.post<{ data: Item[] }>(
          'http://localhost:4000/v1/api/get-individual-created-items',
           {userId} 
        );
        //@ts-ignore
        const array = response.data.res
        console.log(array)
        //@ts-ignore
        const extractedItems = array.map(item => ({
          _id: item._id,
          title: item.title,
          description: item.description,
          stock: item.stock,
          price:item.originalPrice
        }));
        setItems(extractedItems);
        console.log(items)
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, [userId]); // Re-fetch items when userId changes

  return (
    <div className='mt-16 px-2 w-full'>
      <div className='w-full flex justify-between items-center px-10'>
        <h1 className='text-[2rem] font-semibold text-white'>Manage Items</h1>
        <CreateItems />
      </div>

      <div className=''>
        {items.length === 0 ? (
          <div className='w-full h-[80vh] flex justify-center items-center'>
            <PackageOpen size={90} color='white' className='w-full flex justify-center items-center'/>
          </div>
        ) : (
          <div className="w-full px-12 py-2 max-md:px-2 mt-6 flex mx-auto flex-col gap-2 h-[80vh] overflow-y-scroll">
            {items.map(item => (
              <div key={item._id} className='bg-white flex justify-between px-4 py-2 rounded-xl'>

                <div className='w-[80%]'>
                <p className='text-[.9rem] font-semibold line-clamp-2'>{item.title}</p>
                <p className='line-clamp-1'>{item.description}</p>
                <p className={`${item.stock ? "text-green-600" : "text-red-500"}`}>{item.stock ? 'In Stock' : 'Out of Stock'}</p>
                </div>

                <div className='flex flex-col items-end gap-1'>
                  
                <p className="flex items-center">
                  <IndianRupee size={16}/>
                  {/* @ts-ignore */}
                  {item.price}
                  </p>
                <SquarePen  size={20} color="blue"/>
                <Trash2  size={20} color="red"/>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageItems;
