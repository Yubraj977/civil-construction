import React from 'react'

function Home() {
  return (
    <div className=' relative'>

<div className='absolute text-white font-extrabold top-[60%] text-5xl left-5 flex flex-col gap-8 z-20'>
<h1 >We shape our buildings, </h1>
 <h1>Thereafter they shape us</h1>
</div>
      <div className='h-screen z-0 '>
        <img 
        src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  className='h-full w-full object-cover '/>
      </div>
  

    </div>
  )
}

export default Home