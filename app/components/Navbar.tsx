"use client";
import {GiHamburgerMenu} from "react-icons/gi";
import React,{useState} from  "react";
import {RxCross2}from "react-icons/rx";

const navbar = () => {
  const [toggle,setToggle]=useState(true)

  return (
    <>
    <div className='flex justify-between text-white bg-gray-500 items-center '>
        
        <h1 className='text-4xl text-white-300 py-6 font-autograph'>Areeb Ahmed</h1>
        <ul className=' py-4  font-nav md:flex hidden '>
          <a className="cursor-pointer" href="#home">
            <li className='mx-4 my-2 hover:scale-150 duration-200'>Home</li>
          </a>
          <a className="cursor-pointer" href="#about">
            <li className='mx-4 my-2 hover:scale-150 duration-200'>About</li>
          </a>
          <a className="cursor-pointer" href="#portfolio">
            <li className='mx-4 my-2 hover:scale-150 duration-200'>Portfolio</li>
          </a>
          <a className="cursor-pointer" href="#skill">
            <li className='mx-4 my-2 hover:scale-150 duration-200'>Skills</li>
          </a>
          <a className="cursor-pointer" href="#contact">
            <li className='mx-4 my-2 hover:scale-150 duration-200' >Contact</li>
          </a>         
        </ul>
        <div className=' p-5 md:hidden z-20' onClick={()=>{setToggle(!toggle);console.log(toggle)}}>
          {toggle ?  <GiHamburgerMenu size={30} /> :  <RxCross2 size={30} /> }

        </div>
        {!toggle &&(
        <div className="fixed top-0 left-0 bg-black text-white h-screen w-full flex justify-center items-center ">
        <ul className='  font-nav'>
            <li className='text-8xl my-4 '>Home</li>
            <li className='text-8xl my-4 '>About</li>
            <li className='text-8xl my-4 '>Portfolio</li>
            <li className='text-8xl my-4 '>Skills</li>
            <li className='text-8xl my-4 ' >Contact</li>
        </ul>

        </div>)}
        
        
      
    </div>
    
    </>    
  )
}

export default navbar
