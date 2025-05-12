
import React from 'react'
import { Heading } from '@/components/Heading'
import Image from 'next/image';
import logo from "../../../../public/icons/logo.png"
import { useFormStore } from '@/store/useFormStore';
function page() {
    const {FormData} = useFormStore();
     const logoIcon = (
    <Image
      src={logo}
      alt="logo"
      className="w-full h-full"
    />
  );
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black">
          <div className="flex justify-center align-middle items-center flex-col gap-3 mb-5">
            <Heading size="lg" iconSize="md" startIcon={logoIcon}>Coding Conf</Heading>
            <Heading size="xl">Your Journey to Coding Conf </Heading>
            <Heading size="xl">2025 starts Here!</Heading>
          </div>
          <div className='text-gray-50'>{FormData.email}</div>
          </div>
  )
}

export default page