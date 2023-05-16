import React from 'react'
import Link from 'next/link'
import {RxLinkedinLogo} from "react-icons/rx"
import {AiFillGithub} from "react-icons/ai" 
import {AiOutlineMail} from "react-icons/ai"
const sideComponent = () => {
  return (
    <div>
     <Link href={"https://Linkedin.com/"} target={"_blank"} >
       <div className='ml-[-83px] hover:ml-0 duration:200 fixed top-[30vh] gap-3 bg-gray-600 text-white w-32 px-4 py-2 rounded-r-lg flex items-center justify-between'>
       
         Linkedin <RxLinkedinLogo size={25} /></div>
    </Link>
    <Link href={"https://Github.com"} target={"_blank"} className=''>  

      <div className='ml-[-83px] hover:ml-0 duration:200 fixed top-[40vh] gap-3 bg-gray-600 text-white w-32 px-4 py-2 rounded-r-lg flex items-center justify-between'>
        
        Github <AiFillGithub size={25}/></div>
    </Link > 
    <Link href="mailto:your.areebahmed575@gmail.com" target={"_blank"}> 
      <div className='ml-[-83px] hover:ml-0 duration:200 fixed top-[50vh] gap-3 bg-gray-600 text-white w-32 px-4 py-2 rounded-r-lg flex items-center justify-between'>
        Email <AiOutlineMail size={25} />
      </div>
      </Link >  
    </div>
  )
}

export default sideComponent
