import { twMerge } from 'tailwind-merge'

export default function Pill({ children, className, ...props }) {
  return (
    <button {...props} className={twMerge('border-2 border-solid border-blue-500 transition-all duration-200 hover:scale-102 rounded-full text-md cursor-pointer p-2.5 text-blue-950 font-bold', className)}>{children}</button>
  )
}
