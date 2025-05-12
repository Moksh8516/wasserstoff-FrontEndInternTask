import React, { ReactElement, ReactNode } from 'react'
interface headProps{
    children: ReactNode;
    size?: "md"|"xl"|"lg";
    startIcon?: ReactNode,
    endIcon ?: ReactElement,
    iconSize ?: "sm"|"md"|"xl"|"lg",
}

export function Heading({children, size="lg", startIcon, endIcon, iconSize="md"}:headProps) {
    const sizes={
        "md": "text-xl",
        "lg" : "text-2xl",
        "xl": "text-4xl",
    }
    const iconsizes= {
        "sm": "w-16 h-16 p-1",
        "md": "w-20 h-20 p-2",
        "lg": "w-24 h-24 p-3",
        "xl": "w-28 h-28 p-4",
    }
  return (
    <>
    <div className='flex gap-2 items-center align-middle'>
    {startIcon && <div className={`${iconsizes[iconSize]}`}>{startIcon}</div> }
        <span className={`text-shadow-amber-50 font-bold text-gray-50 ${sizes[size]}`}>{children}</span>
    {endIcon && <div className={`${iconsizes[iconSize]}`}>{endIcon}</div> }
    </div>
    </>
  )
}
