"use client"
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LogIn = () => {
  const router = useRouter()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    const api = axios.create({
      baseURL:"http://localhost:4000",
      withCredentials:true
    })
    const res = await api.post("/v1/api/log-in",formData);
    if(res.data.success){
      router.push("/dashboard/customer")
    }
  };

  return (
    <div className="w-[70%] mb-20 bg-white flex mx-auto border overflow-hidden mt-32">
        <div className="w-[45%] max-md:hidden">
        <Image
            src={"/icons/sign_up_last.jpg"}
            width={700}
            height={400}
            alt="sign-up"
            className=" h-[450px] w-[420px]"
        />
        </div>


   
       <div className="w-[55%] max-md:w-full">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleChange(e)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={(e) => handleChange(e)}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <Link href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link>
              </div>
              <button
                onClick={(e)=>handleSubmit(e)}
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-black"
              >
                Log-in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet? <Link href="/sign-up" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
    </div>
  );
};

export default LogIn;
