import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from "flowbite-react";
import { Link ,NavLink} from 'react-router-dom';
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

function Nav() {
 

  return (
    <div>
      <div className=''>
     

      <Navbar fluid rounded className='py-8 fixed  w-full z-20 '>
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
        <Navbar.Link > <NavLink to='/' className='text-lg'><NavLink to='/contact' className='text-lg'>Contact</NavLink></NavLink></Navbar.Link>
        <Navbar.Link > <NavLink to='/' className='text-lg'>Work</NavLink></Navbar.Link>
      </Navbar.Collapse>
    </Navbar>


      </div>
      <Outlet />
      <Footer container className='mt-16'>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="https://flowbite.com"
              src="https://scontent.fktm14-1.fna.fbcdn.net/v/t39.30808-6/411745074_1079378766418778_1103519292417383800_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zt8APi-BHy0AX82MPR8&_nc_ht=scontent.fktm14-1.fna&oh=00_AfCs19HAR1dZ4cKyn-Fb4JuPxcWxA71t10pISBixhAQbEw&oe=660A3A60"
              alt="civil Logo"
              name="civil company"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Works</Footer.Link>
                <Footer.Link href="#"> contribution</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Facebook</Footer.Link>
                <Footer.Link href="#">Instagram</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Civil srilinka" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
    </div>
  );
}

export default Nav;
