import Link from 'next/link'
import React from 'react'
import {MdOutlineKeyboardArrowRight} from "react-icons/Md"

const HomeHero = () => {
  return (
  
    <div className='flex max-w-4xl mx-auto md:flex-row flex-col mt-10' id="home">
      <div className='max-w-lg'>
        <h1 className='p-4 text-white font-autograph'>Ungraduate Software Engineer</h1>
        <p className='p-4  text-white'>A highly motivated undergraduate software engineer seeking to get a position in a reputed company, where I can use my skills and knowledge to learn new things and grow as a software developer.</p>
        <div className='mx-4'>
         <Link href="/areeb-resume-undergraduate-software-engineer (2).pdf" >
        <button className='group flex  items-center bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded-lg'>Profile
        <MdOutlineKeyboardArrowRight size={20} className='group-hover:rotate-90 duration-200'/></button>
        </Link>  
        </div>
      </div> 
       
         <div >
              <img src="/WhatsApp Image 2023-04-02 at 4.24.10 PM.jpeg" className='md:w-full mx-auto' alt="myImage"  />
          </div>
        
    </div>
    
  
  )
}

export default HomeHero