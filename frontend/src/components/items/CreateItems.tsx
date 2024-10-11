'use client'
import React, { useContext, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CircleFadingPlus } from "lucide-react";
import Image from "next/image";
import axios from "axios";
import { userContext } from "@/context/userContext";

const CreateItems = () => {
  const id = useContext(userContext) 
  const userId = id.userId;
  const[title,setTitle] = useState("");
  const[Description,setDescription] = useState("");
  const[tag,setTag] = useState("");
  const[weight,setWeight] = useState("");
  const[image,setImage] = useState("");
  const[originalPrice,setOriginalPrice] = useState("");
  const[discount,setDiscount] = useState("");
  const[previewImage,setPreviewImage] = useState("")

  const previewFile = (image:any) => {
      const reader = new FileReader()
      reader.readAsDataURL(image);

      reader.onloadend = () => {
        //@ts-ignore
        setPreviewImage(reader.result)
      }
  }  

  // const preview = () => {
  //   previewFile(image)
  // }

  const handleSubmit = async () => {
    previewFile(image)

    const formData ={
      title,
      tag,
      image:previewImage,
      originalPrice:originalPrice,
      totalWeight:weight,
      discount,
      description:Description,
      userId
    }
  
    try {
      const res = await axios.post("http://localhost:4000/v1/api/create-items", formData);
      if(res.statusText === "OK"){
        window.location.reload();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  

  return (
    <div>
      <Dialog>
        <DialogTrigger>
           <CircleFadingPlus size={42} strokeWidth={2.5} color="white"/>
        </DialogTrigger>
        <DialogContent className="bg-white overflow-y-scroll h-screen py-2 ">
          <DialogHeader>
            <DialogTitle>Create Item</DialogTitle>
            <DialogDescription>
              <div className="my-2 w-full">
                    <p className="text-left">Title</p>
                    <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} 
                    type="text" placeholder="enter your title" className="py-2 px-4 border border-black w-full" required/>
              </div>

              <div className="my-2">
                    <p className="text-left">Description</p>
                    <input
                    value={Description}
                    onChange={(e) => setDescription(e.target.value)} 
                    type="text" placeholder="enter your Description" className="py-2 px-4 border border-black w-full" required/>
              </div>

              <div className="my-2">
                    <p className="text-left">Tags</p>
                    <input
                    value={tag}
                    onChange={(e) => setTag(e.target.value)} 
                    type="text" placeholder="enter your Tag" className="py-2 px-4 border border-black w-full" required/>
              </div>

              <div className="my-2">
                    <p className="text-left">Original Price</p>
                    <input
                    value={originalPrice}
                    onChange={(e) => setOriginalPrice(e.target.value)} 
                    type="number" placeholder="enter your original Price" className="py-2 px-4 border border-black w-full" required/>
              </div>

              <div className="my-2">
                    <p className="text-left">Discount</p>
                    <input
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)} 
                    type="number" placeholder="enter your Discount" className="py-2 px-4 border border-black w-full"/>
              </div>

              <div className="my-2">
                    <p className="text-left">Total Weight or Liter</p>
                    <input
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)} 
                    type="text" placeholder="enter your title" className="py-2 px-4 border border-black w-full" required/>
              </div>

              <div className="my-2 w-full flex justify-between">
                <div>
                    <p className="text-left">add Image</p>
                    <input //@ts-ignore
                    onChange={(e) => {setImage(e.target.files[0])}}
                    type="file"
                    placeholder="enter your title"
                    className="py-2"
                    required
                    accept="image/png, image/jpeg, image/jpg, image/jfif, image/webp"
                  />
                  </div>
                  
              </div>

             
                {
                  previewImage &&
                  <div className="w-full flex justify-center my-2">
                    <Image src={previewImage} height={90} width={90} alt="image" />
                  </div>
                }
              

              {
                image && <p 
                onClick={handleSubmit}
                className="py-2.5 cursor-pointer w-full bg-black text-white flex justify-center items-center">
                Add item
                </p>
              }
              
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateItems;
