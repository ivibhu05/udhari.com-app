import { Plus } from "lucide-react";
import React, { useContext, useState } from "react";
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
import { userContext } from "@/context/userContext";

interface Props {
  label: string;
  placeholder: string;
  optional?: boolean;
  value?: string;
  onChange: (value: string) => void;
}

const InputField = ({
  label,
  placeholder,
  optional = false,
  value,
  onChange,
}: Props) => (
  <div className="w-full">
    <div className="w-full flex justify-between">
      <span className="py-1 text-[#333] text-[1.05rem]">{label}</span>
      {optional && (
        <span className="py-1 text-[#333] text-[1.05rem]">(optional)</span>
      )}
    </div>
    <input
      placeholder={`${placeholder}`}
      type="text"
      className="py-2 px-4 w-full border-[1px] border-[#444] rounded-[8px] mb-6"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

// ... (other imports)

const Addcutomer = () => {
  const router = useRouter()
  const [name, setName] = useState("");
  const [mode, setMode] = useState("");
  const [description, setDescription] = useState("");
  const [money, setMoney] = useState("");
  const [number, setNumber] = useState("");

  const [selectedValue, setSelectedValue] = useState(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const dropdownItems = ["CASH", "CREDIT"];

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const userId = useContext(userContext) 
  const id = userId.userId;

  const handleItemClick = (value: any) => {
    setSelectedValue(value);
    setDropdownOpen(false);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data ={
      customerName:name,
      number,
      money,
      description:description,
      transactionType:selectedValue,
      userId:id
    }

    try {
    const res = await axios.post("http://localhost:4000/v1/api/create-customer",data);
    if(res.statusText === "Created"){
      window.location.reload();
    }
    } catch (error) {
      throw(error)
    }

  };

  
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <p
            className="w-full py-2 px-6 bg-green-600
        text-white flex items-center justify-center font-semibold"
          >
            <Plus size={22}/>
            Add Customer
          </p>
        </SheetTrigger>
        <SheetContent className="bg-white">
          <SheetHeader className="flex justify-around items-between">
            <SheetTitle className="mb-4">Add customer</SheetTitle>
            <SheetDescription className="my-4">
              <InputField
                label="Name"
                placeholder="Bhanu singh"
                value={name}
                onChange={(value) => setName(value)}
              />
              <InputField
                label="Description"
                placeholder="Bought a beautiful girlfriend...."
                optional
                value={description}
                onChange={(value) => setDescription(value)}
              />

              <InputField
                label="Number"
                placeholder="999999999"
                value={number}
                onChange={(value) => setNumber(value)}
              />
              <InputField
                label="money"
                placeholder="0"
                value={money}
                onChange={(value) => setMoney(value)}
              />

              <div className="w-full mb-6">
                <div className="dropdown w-full py-2 px-4 border">
                  <button
                    onClick={handleDropdownToggle}
                    className={`dropdown-toggle px-2 py-1 ${selectedValue === 'CASH'?"text-green-500":`text-red-500`}`}
                  >
                    {selectedValue || "Select an item"}
                  </button>
                  {isDropdownOpen && (
                    <ul className="dropdown-menu w-full">
                      {dropdownItems.map((item, index) => (
                        <li
                          key={index}
                          onClick={() => handleItemClick(item)}
                          className={`text-black cursor-pointer mt-1 border py-2 px-2 ${
                            item === "CASH" ? "text-green-500" : "text-red-500"
                          }`}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </SheetDescription>
            <p
              onClick={(e) => handleSubmit(e)}
              className="py-2 px-4 bg-green-500 border-[1px] border-black text-white mt-4 flex items-center justify-center"
            >
              Add Customer
            </p>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Addcutomer;
