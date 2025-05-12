import React, { ReactNode } from 'react'
interface subheadingProps{
    children:ReactNode,
    size ?: "sm"|"md"|"lg"|"xl"
}
export function SubHeading({children, size="md"}:subheadingProps) {
    const sizes={
        "sm": "text-sm",
        "md": "text-md",
        "lg" : "text-lg",
        "xl": "text-xl",
    }
  return (
    <p className={`text-gray-100 text-center ${sizes[size]}`}>{children}</p>
  )
}

