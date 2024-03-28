import React, { useState } from 'react';

function Card() {
    const [showContent, setShowContent] = useState(false);
    console.log(showContent);
  
    return (
        <div className='lg:w-1/3 lg:h-[20rem]  relative overflow-hidden'
        onMouseEnter={() => setShowContent(true)}
        onMouseLeave={() => setShowContent(false)}
           >
       
            <div className={`absolute text-white z-10 ${showContent ? 'opacity-100' : 'opacity-5'} flex flex-col items-center justify-center bg-black bg-opacity-70 h-full w-full transition-opacity duration-300`}
          
            >
                <h1 className='font-bold text-white text-3xl'>Cyber Villla</h1>
                <p className='font-bold mt-2'>Srilinka warp giga</p>
                <button className='border px-4 py-2 mt-10 font-bold'>View project</button>
            </div>

            <div className={`h-full w-full z-10 transition-transform duration-1000 ${showContent ? 'scale-125 ' : ''}`}>
                <img 
                    src="https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="" 
                    className='h-full w-full object-cover transform origin-center transition-transform duration-1000' 
                />
            </div>
        </div>
    );
}

export default Card;
