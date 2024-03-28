import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from "flowbite-react";
import { Link ,NavLink} from 'react-router-dom';

function Nav() {
 

  return (
    <div>
      <div className=''>
     

      <Navbar fluid rounded className='py-8 f  w-full z-20 '>
      <Navbar.Brand as={Link} href="https://flowbite-react.com " className='pl-8'>
        <img src="https://scontent.fktm14-1.fna.fbcdn.net/v/t39.30808-6/411745074_1079378766418778_1103519292417383800_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zt8APi-BHy0AX82MPR8&_nc_ht=scontent.fktm14-1.fna&oh=00_AfCs19HAR1dZ4cKyn-Fb4JuPxcWxA71t10pISBixhAQbEw&oe=660A3A60" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"> Civil Construction</span>
      </Navbar.Brand>


      <Navbar.Toggle />


      <Navbar.Collapse className='pr-16'>
        <Navbar.Link  >
         <NavLink to='/' className='text-lg'>Home</NavLink>
        </Navbar.Link>
        <Navbar.Link>
        <NavLink to='/about' className='text-lg'>About</NavLink>
        </Navbar.Link>

        <Navbar.Link > <NavLink to='/' className='text-lg'>Works</NavLink></Navbar.Link>
        <Navbar.Link > <NavLink to='/' className='text-lg'>Contact</NavLink></Navbar.Link>
        <Navbar.Link > <NavLink to='/' className='text-lg'>Work</NavLink></Navbar.Link>
      </Navbar.Collapse>
    </Navbar>


      </div>
      <Outlet />
    </div>
  );
}

export default Nav;
