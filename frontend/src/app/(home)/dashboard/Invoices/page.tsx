"use client"
import InvoiceCard from '@/components/shared/invoice/InvoiceCard'
import { userContext } from '@/context/userContext';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'


interface Transaction {
    _id: string;
    sortingDate: string;
    customerName: string;
    number: number;
    description: string;
    money: number;
    date: string;
    transactionType: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }

  const Invoices = () => {
    const [arr, setArr] = useState<Transaction[]>([]);
    const {userId} = useContext(userContext);
    console.log(userId)
    const[name,setName] = useState("")
    const[money,setMoney] = useState(0)
    const[description,setDescription] = useState("")
    const[createdAt,setCreatedAt] = useState("")
    const[transactionType,setTransactionType] = useState("")


    const sortedTransactions = (transactions: Transaction[]) => {
        return transactions.sort((a, b) => {
          const dateA = new Date(a.sortingDate);
          const dateB = new Date(b.sortingDate);
    
          return dateB.getTime() - dateA.getTime();
        });
      };
      const getAllCustomers = async () => {
        try {
          const data = {
            userId:userId
          }
          const res = await axios.post(
            "http://localhost:4000/v1/api/total-customers-transactions",data
          );
    
          setArr(sortedTransactions(res.data.totalCustomer));
        } catch (error) {
          throw error
        }
      };
      useEffect(() => {
        getAllCustomers();
      }, []);

      const handleCustomerCardClick = async(
        name:string,
        money:number,
        description:string,
        createdAt:string,
        transactionType:string
        ) => {
          setCreatedAt(createdAt)
          setDescription(description)
          setName(name)
          setMoney(money)
          setTransactionType(transactionType)
        try {
          const invoiceData = {
            name:"1A0AA1",
            companyInfo:{
              companyName:"udhari.com",
              companySubLocation:"JagdishPur,277001, Ballia",
              companyLocation:"udhari_com@gmail.com",
              conpanyContactInfo:"9919206676",
              GSTIN:"969696BH95ER"
            },
            UserInfo:{
              userName:name,
              itemsBought:description,
              totalPrice:money,
              TransactionMode:transactionType
            },
            date:createdAt
          }
          const response = await axios.post('http://localhost:4000/v1/api/generate-invoice', {
            invoiceData: invoiceData,
          }, {
            responseType: 'blob', // Set responseType to 'blob' to handle binary data
          });
    
          // Create a blob from the binary data
          const blob = new Blob([response.data], { type: 'application/pdf' });
    
          // Create a download link and trigger a click event
          const downloadLink = document.createElement('a');
          downloadLink.href = window.URL.createObjectURL(blob);
          downloadLink.download = 'invoice.pdf';
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
        } catch (error) {
          console.error('Error generating PDF:', error);
        }

      };

  return (
    <div className='overflow-y-scroll mt-20 px-4 w-full'>
    <h1 className='text-[2rem] text-white font-semibold'>Generate Invoices</h1>
    <div className='mt-4 text-black py-2 flex flex-wrap w-full'>
        {
            arr.map((items,index) => 
            <InvoiceCard key={index}
            name={items.customerName}
            description={items.description}
            date={items.createdAt}
            money={items.money}
            id={items._id}
            transactionType={items.transactionType}//@ts-ignore
            onClick={() => handleCustomerCardClick(items.customerName,items.description,items.createdAt,items.money,items.transactionType)}
            />
            )
        }
    </div>
    </div>
  )
}

export default Invoices