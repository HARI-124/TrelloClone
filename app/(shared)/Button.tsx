import React, { HTMLAttributes } from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &{
    className?:string,
    text:string,
}

const Button = ({className,text,...props}: Props) => {
  return (
    <button  className={`${className} rounded-md px-6 py-2 bg-blue-600 text-white text-xl w-fit outline-none focus:ring-0 `}>
        {text}
    </button>
  )
}

export default Button