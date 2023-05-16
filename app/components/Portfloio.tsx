import Link from 'next/link'
import React from 'react'

const Portfloio = () => {
  return (
    <div>
        <h1 className='text-center font-autograph text-white mt-10'>PortFolio</h1>
        
        <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-x-8 gap-y-8 p-8'id="portfolio">
            <div className='card'>
                <img src="/pexels-josh-hild-2422254.jpg"  alt="card image"/>
                
                <div className='text-black flex  text-2xl '>

                <Link href={"https://github.com/areebahmed575/railwayGuiSystem" }target={"_blank"}>
                <button className='hover:scale-105 duration-200'>Railway management app</button>
                </Link>
                </div>
                
            </div>
            

            <div className='card'>
                <img src="/pexels-breakingpic-3299 (1).jpg"  alt="card image"/>
                <div className='text-black flex  text-2xl '>
                <Link href={"https://github.com/areebahmed575/Todo-App" }target={"_blank"}>
                <button className='hover:scale-105 duration-200'>Todo App</button>
                </Link>



                </div>
            </div>

            <div className='card'>
                <img src="/panaverse-logo.png"  alt="card image"/>
                <div className='text-black flex  text-2xl '>
                <Link href={"https://github.com/areebahmed575/Panaverse-Website-Tailwind-Css" }target={"_blank"}>
                <button className='hover:scale-105 duration-200'>Panaverse Website</button>
                </Link>  
               

                </div>            
                </div>
           
           

           
           
        </div>
      
    </div>
  )
}

export default Portfloio
