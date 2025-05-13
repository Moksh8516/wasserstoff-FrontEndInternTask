import React, { ReactElement, ReactNode } from 'react'

// components/Ticket.js
import Image, { StaticImageData } from "next/image";
import userIcon from "../../public/icons/user-png.jpg"
import logo from "../../public/icons/logo.png"
import { Heading } from './Heading';

interface ticketProp{
    name: string;
    email: string;
    date: string | Date;
    location?:string;
    avatar?: StaticImageData|string;
}

export function Ticket({
  name = "Jonatan Kristof",
  email = "@jonatankristofen",
  date = "May 13, 2025",
  location = "India, In",
  avatar = userIcon, // Replace with real image path
}:ticketProp) {
    const logoIcon = (
    <Image
      src={logo}
      alt="logo"
      className="w-full h-full"
    />
  );
   const formattedDate =
    typeof date === "string"
      ? date
      : date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })

  return (
    <div className="relative flex items-center bg-white/10 backdrop-blur-xl  text-white rounded-2xl p-4 w-[350px] shadow-lg font-mono">
  <div className="flex flex-col">
    <div className="flex items-center gap-2 mb-2">
      <Heading size="md" iconSize="md" startIcon={logoIcon}>Coding Conf</Heading>
    </div>
    <div className="text-xs text-gray-300">{formattedDate} | {location}</div>
    <div className="flex items-center gap-3 mt-4">
      <Image
        src={avatar}
        alt={name}
        width={40}
        height={40}
        className="rounded-full"
      />
      <div>
        <div className="font-semibold">{name}</div>
        <div className="text-sm text-gray-400">{email}</div>
      </div>
    </div>
  </div>
  <div className="absolute right-0 top-0 bottom-0 w-8  border-white/20 border-dashed border-r-2  bg-white/10 backdrop-blur-xl rounded-r-2xl flex shadow-lg items-center justify-center text-xs tracking-widest text-gray-300 rotate-180 origin-right">
    <span className='rotate-90'>000199</span>
  </div>
</div>
  );
}
