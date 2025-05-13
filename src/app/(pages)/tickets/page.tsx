"use client"
import React from 'react'
import { Heading } from '@/components/Heading'
import Image from 'next/image';
import logo from "../../../../public/icons/logo.png"
import { useFormStore } from '@/store/useFormStore';
import { Ticket } from '@/components/Ticket';
function Tickets() {
  const {formData} = useFormStore()
     const logoIcon = (
    <Image
      src={logo}
      alt="logo"
      className="w-full h-full"
    />
  );
  const date = new Date();
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black">
          <div className="flex justify-center align-middle text-center items-center flex-col gap-3 mb-5">
            <Heading size="lg" iconSize="md" startIcon={logoIcon}>Coding Conf</Heading>
            <div className="text-2xl text-gray-50 font-bold ">Congrats, <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-gray-50'> hello </span></div>
            <Heading size="xl">your Ticket is ready.</Heading>
            <p className='text-sm mb-5 text-gray-50'>we are emailed your ticket so <br/> <span className='text-orange-500'>{formData.email || "jonatank@gmail.com"}</span> and will send update in <br/> the run up to the email </p>
          <Ticket name={formData.name? formData.name : "jonatank"} email={formData.email? formData.email : "jonatank@gmail.com"} date={date}></Ticket>
          </div>
          </div>
  )
}

export default Tickets