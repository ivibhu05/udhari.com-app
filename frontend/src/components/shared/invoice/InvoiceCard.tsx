// InvoiceCard.js

import { IndianRupee } from 'lucide-react';
import React from 'react';

interface Props {
  name: string;
  description: string;
  date: string;
  id: string;
  transactionType: string;
  money: number;
  onClick?: () => void; // Callback function type
}

const InvoiceCard = ({ name, description, date, money, id, transactionType, onClick }: Props) => {
  return (
    <div className='w-[17rem] rounded-3xl h-[12rem] py-4 px-6 text-Black mt-4 mx-auto bg-white flex flex-col justify-between items-center mb-6 border-[1px] border-[#666]'>
      
      <div className='flex w-full justify-between'>
        <p className='text-[1.25rem] w-[70%] line-clamp-1'>{name}</p>
        
        <div className='flex items-center'>
            <IndianRupee size={18} />
            <p>{money}</p>
          
          </div>
      </div>

      <div className='w-full flex justify-between'>
        <p className='w-[70%] line-clamp-1'>{description}</p>
        <span className={`${transactionType === "CASH" ? "text-green-500" : "text-red-500"}`}>{transactionType}</span>

      </div>

      <button
        onClick={onClick}
        className={`py-1.5 w-full rounded-xl text-white px-3 line-clamp-1 ${transactionType === "CASH" ? "bg-green-500" : "bg-red-500"}`}
        >
          Generate Invoice
        </button>
    </div>
  );
};

export default InvoiceCard;
