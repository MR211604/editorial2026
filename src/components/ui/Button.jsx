import React from 'react'
import { twMerge } from 'tailwind-merge'

export default function Button({ children, className, ...props }) {
  return (
    <button {...props} className={twMerge('bg-amber-300 transition-all duration-250 hover:bg-amber-400 rounded-2xl text-xs cursor-pointer p-2.5', className)}>{children}</button>
  )
}
