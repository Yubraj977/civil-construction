import React from 'react'
import Card from '../components/Card'
import { useNavigate } from 'react-router-dom'
function Home() {
  const navigate=useNavigate()
  return (
    <div>
      <div className=' relative first'>
        <div className='absolute text-white font-extrabold top-[60%] text-4xl left-5 flex flex-col gap-8 z-20'>
          <h1 >BUILDING FOR </h1>
          <h1>OUR BETTTER TOMORROW</h1>
        </div>
        <div className='h-screen z-0 '>
          <img
            src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-full w-full object-cover ' />
        </div>
      </div>

      <div className="second px-20 mt-32">
        <h1 className='text-4xl  w-4/6'> We shape our buildings, Thereafter They Shape us. With this beautiful moto we serve different services for your better future</h1>
        <button className=' border px-8 py-3 bg-[#005eb8] text-white font-bold mt-12 hover:bg-transparent hover:border-[#005eb8] hover:text-black'>Learn More </button>
      </div>
      <div className="third w-full bg-black text-white flex flex-col items-center py-6 mt-10">
      <h1 className='font-bold text-7xl'>OUR PORTFOLIO</h1>
      <p className='font-bold text-2xl mt-2'> EXPERIENCE OUR WORK</p>
      </div>


<div className="fourth  flex flex-wrap gap-0 p-0 m-0 " >


<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>


</div>


<div className="fifth  bg-[#005eb8] flex flex-col justify-center items-center text-white mx-10 mt-32 py-12">
 <h1 className='font-bold text-4xl'>Get In Touch</h1>
 <p className='font-semibold mt-2'> Have a question, or want to get in touch with a member of the Clark team? We’d love to hear from you.</p>
 <button className='mt-4 border py-3 px-10 bg-white text-[#005eb8] font-bold hover:bg-transparent hover:text-white  transition-transform duration-1000 '
   onClick={()=>{navigate('/contact')}}
 > contact us</button>
</div>


    </div>
  )
}

export default Home