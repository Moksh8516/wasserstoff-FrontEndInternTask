"use client"
import Image from "next/image";
import logo from "../../public/icons/logo.png"
import Button from "@/components/Button";
import FileUpload from "@/components/FileUpload";
import { InputBox } from "@/components/InputBox";
import { Heading } from "@/components/Heading";
import { SubHeading } from "@/components/SubHeading";
import { FormEvent, useState } from "react";
import { useFormStore } from "@/store/useFormStore";
import { useRouter } from "next/navigation";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [github, setGithub] = useState("");
  
  const {setFormData} = useFormStore();
  const router = useRouter();

  const logoIcon = (
    <Image
      src={logo}
      alt="logo"
      className="w-full h-full"
    />
  );

  function handleSubmit(e:FormEvent){
   e.preventDefault();
    setFormData({ name, email, github });
    router.push("/tickets")
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black">
      <div className="flex justify-center align-middle items-center flex-col gap-3 mb-5">
        <Heading size="lg" iconSize="md" startIcon={logoIcon}>Coding Conf</Heading>
        <Heading size="xl">Your Journey to Coding Conf </Heading>
        <Heading size="xl">2025 starts Here!</Heading>
      </div>
      <SubHeading>secure your sport at next years biggest coding conference</SubHeading>
      <div className="h-full w-full flex justify-center mt-4">
        <form onSubmit={handleSubmit} className="max-w-lg flex gap-3 flex-col">
        <FileUpload></FileUpload>
        <InputBox type={"text"} onChange={e=>setName(e.target.value)} placeholder="Name" label="Full Name"></InputBox>
        <InputBox type={"email"} placeholder="name@gmail.com" onChange={e=>setEmail(e.target.value)} label="Email"></InputBox>
        <InputBox type={"text"} placeholder="Github name" onChange={e=>setGithub(e.target.value)} label="Github Username"></InputBox>
        <Button type="submit">Generate My Ticket</Button>
        </form>
      </div>
    </div>
  );
}
