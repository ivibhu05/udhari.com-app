'use client'
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";



const Sign_Up = () => {
  const router = useRouter()


  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
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
    const res = await api.post("/v1/api/sign-up",formData);
    if(res.data.success){
      router.push("/dashboard/customer")
    }
  };


  return (
    <div className="w-[80%] mb-24 bg-white flex mx-auto border overflow-hidden mt-28 max-md:w-[90%]">
        <div className="w-[45%] max-lg:hidden">
        <Image
            src={"/icons/sign_up_last.jpg"}
            width={600}
            height={400}
            alt="sign-up"
            className="p object-cover w-[500px] h-[610px]"
        />
        </div>


         <div className="w-[55%] max-md:w-full max-md:p-2 mt-2">
            <div className="min-w-full h-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0">
              <div className=" space-y-4 md:space-y-6 sm:p-8 mt-[-2rem] max-md:mt-0">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Create an account
                </h1>
                <form className="space-y-4 md:space-y-6 " action="#">
                <div className="mt-[-1rem] max-md:mt-0">
                    <label
                      htmlFor="firstname"
                      className="block text-sm font-medium text-gray-900"
                    >
                      firstname
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      value={formData.firstname}
                      onChange={(e)=>handleChange(e)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                      placeholder="Bhanu"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastname"
                      className="block text-sm font-medium text-gray-900"
                    >
                      lastname
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      value={formData.lastname}
                      onChange={(e)=>handleChange(e)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                      placeholder="Singh"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-900"
                    >
                      username
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      value={formData.username}
                      onChange={(e)=>handleChange(e)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                      placeholder="username"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={(e)=>handleChange(e)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-900 "
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e)=>handleChange(e)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                      required
                    />
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="terms"
                        className="font-light text-gray-500"
                      >
                        I accept the{" "}
                        <Link
                          className="font-medium text-primary-600 hover:underline"
                          href="#"
                        >
                          Terms and Conditions
                        </Link>
                      </label>
                    </div>
                  </div>
                  <button
                  onClick={(e)=>handleSubmit(e)}
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 bg-black text-center "
                  >
                    Create an account
                  </button>
                  <p className="text-sm font-light text-gray-500">
                    Already have an account?{" "}
                    <Link
                      href="/log-in"
                      className="font-medium text-primary-600 hover:underline "
                    >
                      Login here
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
    </div>
  );
};

export default Sign_Up;
