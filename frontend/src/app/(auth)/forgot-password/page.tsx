'use client'
import axios from 'axios'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const ForgotPassword = () => {
    const router = useRouter()
    const[email,setEmail] = useState("")
    const[error,setError] = useState("")

    const handleSubmit = async (e: any) => {
        e.preventDefault();
    
        const api = axios.create({
            baseURL: "http://localhost:4000",
            withCredentials: true
        });
    
        try {
            const data = { email };
    
            const res = await api.post("/v1/api/forgot-password", data);
    
            // Handle the response from the backend
            
            setError(res.data.message);
            
        } catch (error) {
            console.error("An error occurred:", error);
            setError("Something went wrong, please try again later");
        }
    };
    
  return (
    <div className='w-full h-[50vh] bg-transparent flex justify-center items-center'>
        <div className='bg-white py-4 px-6'>
            <p>Email</p>
            <input 
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Bhanu@gmail.com'
            required
            className='py-2 px-6 border w-full mt-2'
            />
            {error && <p className='text-green my-2'>check your email</p>}
            <button className='w-full bg-black mt-3 text-white py-2 px-4'
            onClick={(e) => handleSubmit(e)}
            >
                submit
            </button>
        </div>
    </div>
  )
}

export default ForgotPassword