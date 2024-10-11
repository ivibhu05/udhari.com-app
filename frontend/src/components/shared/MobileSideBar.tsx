'use client'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import axios from "axios";
import { AlignRight, BellRing, ClipboardMinus, Newspaper, Package, Settings, UsersRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Props{
    url:String;
    icons:React.ReactNode;
    title:String;
  }
  const SidebarBtnComponent = ({url,icons,title}:Props) => {
    const param = usePathname();
    return(
      <Link href={`${url}`} className={`sidebar-button ${param === url ?"bg-[#333]" : "" }`}>
        {icons}
        {title}
      </Link>
    )
  }

const MobileSidebar = () => {
  const router = useRouter()
  const [id,setId] = useState("");

  useEffect(() => {
    const getUserInfo = async() => {
      try {
        const res = await axios.get("/api/userinfo");
        setId(res.data);
      } catch (error) {
        throw(error)
      }
    }
    getUserInfo()
  },[])

  const handleLogout = async () =>{
    try {
      const res = await axios.get('/api/log-out')

      if(res.data.success){
        router.push('/')
      }
    } catch (error) {
      throw(error)
    }
  }

  return (
    <div className="max-lg:block hidden">
      <Sheet>
        <SheetTrigger>
        <AlignRight size={28}/>
        </SheetTrigger>
        <SheetContent className="bg-white">
          <SheetHeader>
            <SheetTitle>
                <Link href={"/"} className="flex gap-2 items-center">
                    <Image src={"/icons/money.png"} height={30} width={30} alt="logo" />
                    <p>udhari.com</p>
                </Link>
            </SheetTitle>
            <SheetDescription className="flex flex-col py-6 gap-2">
            <div>
            <h1 className='text-[1.15rem] text-white font-semibold mt-10'>PARTIES</h1>
            <div className='flex flex-col mt-1'>
              <SidebarBtnComponent 
              key={1} 
              url={'/dashboard/customer'}
              title={'customer'}
              icons={<UsersRound size={18} />}
              />
              </div>
              <div className='flex flex-col mt-1'>
              <SidebarBtnComponent 
              key={1} 
              url={'/dashboard/Invoices'}
              title={'Invoice'}
              icons={<Newspaper size={18} />}
              />
              </div>
        </div>

        <div>
            <h1 className='text-[1.15rem] text-white font-semibold mt-10'>MANAGE ITEMS</h1>
            <div className='flex flex-col mt-1'>

             <SidebarBtnComponent 
              key={3} 
              url={'/dashboard/items'}
              title={'items'}
              icons={<Package size={20} />}
              />

              <SidebarBtnComponent 
              key={4} 
              url={'/dashboard/notifications'}
              title={'notification'}
              icons={<BellRing size={20} />}
              />
            </div>
        </div>

        <div>
            <h1 className='text-[1.15rem] text-white font-semibold mt-10'>OTHERS</h1>
            <div className='flex flex-col mt-1'>

            <SidebarBtnComponent 
              key={5} 
              url={'/dashboard/reports'}
              title={'Reports'}
              icons={<ClipboardMinus size={20}/>}
              />

             <SidebarBtnComponent 
              key={6} 
              url={'/dashboard/settings'}
              title={'settings'}
              icons={<Settings size={20} />}
              />
            </div>
        </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;
