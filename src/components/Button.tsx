import React, { ReactNode } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children:ReactNode;
    className?:"";
    size? : "md"|"lg"|"xl";
    type : "submit"|"reset"|"button";
}



function Button({children,type="button",size="md"}:ButtonProps) {
    const sizes ={
        "md":"px-2 py-2 text-base font-semibold",
        "lg":"px-4 py-3 text-lg font-semibold",
        "xl":"px-6 py-4 text-xl font-semibold",
    };
  return (
    <button
     type={type}
     className={`w-full text-center text-gray-900 outline-none border-none shadow-md bg-amber-600 rounded-2xl ${sizes[size]}`}
     >{children}</button>
  )
}

export default Button