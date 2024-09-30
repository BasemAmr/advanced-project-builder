import  { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    className?: string,
    width?: "w-full" | "w-fit"
}

const Button = ({children, className, width, ...rest}:ButtonProps) => {
  return (
    <button className= {`${className} ${width} p-4 w-full  rounded-lg text-white`} {...rest}>
        {children}
    </button>
  )
}

export default Button