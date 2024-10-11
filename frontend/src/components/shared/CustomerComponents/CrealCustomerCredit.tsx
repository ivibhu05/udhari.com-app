import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import axios from "axios";
import { useRouter } from "next/navigation";

interface Props{
  customerId:String
}

const GetcashCustomer = ({customerId}:Props) => {
  const router = useRouter()
  const[money,setMoney] = useState();

    const handleSubmit = async(e:any) => {
      const data = {
        customerId,
        money
      }
      try {
        const res = await axios.post("http://localhost:4000/v1/api/add-customer-history",data)
        if(res.statusText){
          window.location.reload();
        }
      } catch (error) {
        throw(error)
      }
    }

  return (
    <div className="w-[33%]">
      <Sheet>
        <SheetTrigger className="w-full">
        <p className="py-2 px-2 bg-yellow-400 text-white font-semibold rounded-xl w-[90%] flex 
        justify-center cursor-pointer hover:bg-yellow-600 hover:text-white duration-200">CLEAR CREDIT</p>
        </SheetTrigger>
        <SheetContent className="bg-white">
          <SheetHeader>
            <SheetTitle>CLEAR YOUR CREDIT</SheetTitle>
            <SheetDescription className="">

                <div className="flex flex-col mt-6">
                    <label id="money">Money</label>
                    <input type="number" 
                    placeholder="90" 
                    id="money" 
                    value={money}
                    onChange={(e:any) => setMoney(e.target.value)}
                    required
                    className="py-2 px-4 border border-black" 
                    /> 
                </div>

                <div className="w-full mt-10 cursor-pointer ">
                    <p 
                    className="bg-yellow-500 text-white py-2.5 px-4 border-[1px] border-black
                    rounded-xl flex justify-center items-center font-semibold"
                    onClick={(e) => handleSubmit(e)}
                    >
                      CLEAR CREDIT
                    </p>
                </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default GetcashCustomer;
