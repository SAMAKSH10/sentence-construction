import React from 'react'
import { MdMoreVert } from "react-icons/md";

const Navbar = () => {
  return (
    <div className='w-full h-[35%] bg-white shadow-lg p-5 shadow-gray-50 font-semibold flex justify-center'>
        <div className='flex gap-6'>
        <span>Sentence Construction</span>
        <MdMoreVert size={23} color='bg-gray-100' className='justify-self-end absolute right-16'/>
        </div>
    </div>
  )
}

export default Navbar
