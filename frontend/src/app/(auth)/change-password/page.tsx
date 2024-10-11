"use client"
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ChangePassword = () => {

  const router = useRouter()

  const[error,setError] = useState('')
  const [formData, setFormData] = useState({
    email:'',
    oldpassword:'',
    newpassword:'',
    confirmpassword:''
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
    const res = await api.post("/v1/api/change-password",formData);
    if(res.data.success){
      router.push("/dashboard")
    }
  };

  return (
    <section className="bg-transparent py-12 h-[90vh]">
      <div className="flex flex-col items-center px-6 py-4 mx-auto md:h-screen lg:py-0">
        <Link href="/" className="flex items-center mb-4 text-2xl font-semibold text-white dark:text-white">
          udhari.com
        </Link>
        <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Change Password
          </h2>
          <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
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
                required
              />
            </div>
            <div>
              <label htmlFor="oldpassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">old Password</label>
              <input
                type="password"
                name="oldpassword"
                id="oldpassword"
                value={formData.oldpassword}
                onChange={(e) => handleChange(e)}
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="newpassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">new password</label>
              <input
                type="password"
                name="newpassword"
                id="newpassword"
                value={formData.newpassword}
                onChange={(e) => handleChange(e)}
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                required
              />
            </div>
            <div>
              <label htmlFor="confirmpassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
              <input
                type="password"
                name="confirmpassword"
                id="confirmpassword"
                value={formData.confirmpassword}
                onChange={(e) => handleChange(e)}
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                required
              />
            </div>
            <button
              onClick={(e) => handleSubmit(e)}
              className="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Reset password
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ChangePassword;
