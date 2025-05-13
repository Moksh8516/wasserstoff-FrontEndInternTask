import React, { InputHTMLAttributes, ReactElement } from 'react'

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  errorMessage?: string;
  type?: string;
  icon?: ReactElement;
}


function InputBox({label,placeholder, type, icon,errorMessage, ...inputprops}:inputProps) {
  return (
    <div className='flex flex-col gap-2'>
        <label className='text-gray-50'>{label}</label>
        <div className='flex align-middle items-center gap-2'>
            {icon &&
             <div className='w-16 h-16'>
                {icon}
            </div>}
        <input
        className='text-gray-100 border text-base border-gray-300 rounded-xl px-3 py-2 w-full bg-transparent outline-none'
        type={type} 
        placeholder={placeholder}
        {...inputprops}/>
        </div>
          {errorMessage && <span className='text-red-500 text-sm'>{errorMessage}</span>}
    </div>
  )
}

export {InputBox};