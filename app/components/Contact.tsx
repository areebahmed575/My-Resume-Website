import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className='flex items-center max-w-7xl mx-auto leading-8 mb-10' id="contact">
            <div className='text-gray-500 px-10 mt-32 mx-auto'>
                <h1 className='text-center text-white mt-10 font-autograph'>Contact</h1>
                <p className='text-center text-white mt-4'>Get in touch with me</p>
                <form action="https://formspree.io/f/myyanqnw" method="POST"
>
                    <div>
                        <input required placeholder='Enter Name' type='text' name="name" className=' mt-4 text-white width-80 p-2 bg-transparent focus:outline-none border-4 rounded-md'/>
                    </div>

                    <div>
                        <input required placeholder='Enter Email' type='text' name='email' className=' mt-4 text-white width-80 p-2 bg-transparent focus:outline-none border-4 rounded-md'/>
                    </div>

                    <div>
                        
                        <textarea placeholder='Enter Message....' required  name="myMessage"  rows={8} className=' mt-4 text-white width-80 p-2 bg-transparent focus:outline-none border-4 rounded-md'/>
                    </div>

                    <button type="submit" className='bg-gradient-to-b from-black-400 to-gray-600 text-black px-5  border-2 rounded-md mx-auto block'>Submit</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
