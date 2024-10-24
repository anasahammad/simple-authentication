"use client"


import { Logout } from "@/app/actions";
import Image from "next/image";
import Link from "next/link";

import {  useState } from "react";







const Navbar =   ({session}) => {


   

    const [isDropDownOpen, setIsDropDownOpen] = useState(false)

    const handleToggle = ()=>{
        setIsDropDownOpen(!isDropDownOpen)
    }
    const navLinks = [
        {
            path: "/",
            title: "Home"
        },
        {
            path: "/login",
            title: "Login"
        },
        {
            path: "/signup",
            title: "SignUp"
        }
    ]
    return (
        <div className="sticky top-0 w-full bg-slate-200 shadow-sm z-30">
      <div className="py-4 border-b-[1px]">
            <div className="container mx-auto">
            <div className="flex items-center justify-between gap-3 md:gap-0">
            <Link href="/" className="font-bold text-2xl">
              Next Auth
            </Link>
            <div className="hidden md:block">
              {navLinks.map((item) => (
                <Link className="text-xl ml-4" key={item.title} href={item.path}>
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-8 md:gap-12">
           <div className="relative" >
                <Image
                  src="/profile.png"
                  alt={"profile"}
                  className="w-10 h-10 rounded-full cursor-pointer"
                  width={40} height={40}
                  sizes="10"
                  onClick={handleToggle}
                />
               
               {isDropDownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg z-20">
                    <p
                    
                      className="block px-4 py-2  "
                     
                    >
                      {session?.user?.name}
                    </p>
                    
                    <form action={Logout}>

                    <button type="submit" className="block px-4 py-2">Sign Out</button>
                    </form>
                  </div>
                )}
               
              </div>
              
            </div>
          </div>
            </div>
          
        
      </div>
    </div>
    );
};

export default Navbar;