import React from 'react'


const Button = ({text = 'contact' } ) => {
  return (
    <div className='px-5 p-2 text-xs md:text-base capitalize bg-transparent border w-fit h-fit rounded-full text-white duration-150 hover:bg-gray-700  ' >{text}</div>
  )
}

export default Button