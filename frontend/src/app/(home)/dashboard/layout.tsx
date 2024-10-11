'use client'
import Sidebar from '@/components/shared/Sidebar';
import axios from 'axios';
import React,{useEffect, useState} from 'react';
import {userContext} from '@/context/userContext';


const DashBoard = ({children}:{children:React.ReactNode}) => {
  const [userId,setUserId] = useState("")

  
  const getUserInfo = async() => {
    try {
      const payResponse = await axios.get("/api/userinfo");
      const id = payResponse.data.payload.id;
      setUserId(id)
    }
      catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    getUserInfo();
  },[])

  const userInfo = {
    userId:userId
}
  return (
    <div className='w-full h-full-screen flex'>
        <div className='w-[15%] h-screen max-lg:hidden bg-[#111] border-r-[1px] border-[#777]'>
          <Sidebar />
        </div>
      
        <div className='w-[85%] max-lg:w-full mx-auto h-screen flex bg-[#111]'>
          <userContext.Provider value={userInfo}>
            {children}
          </userContext.Provider>
        </div>
    </div>
  );
};

export default DashBoard;
