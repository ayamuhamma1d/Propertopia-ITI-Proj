import React from 'react'
'use client';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import logo from './../../../img/Group 1.png'
import style from'./nav.module.css'
function Navbars() {
  return (
    <nav className={style.navbar} >
      <Navbar fluid className='px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 bg-transparent' >
        <Navbar.Brand href="https://flowbite-react.com">
          <img src={logo} className="mr-3 h-6 sm:h-7" alt="Flowbite React Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
        </Navbar.Brand>
        <div className="flex md:order-2 items-center">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">name@flowbite.com</span>
            </Dropdown.Header>
            <Dropdown.Item>Account</Dropdown.Item>
            <Dropdown.Item>WishList</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
          <Navbar.Link href="#" className='ms-3'>
          <svg class="w-4 h-4 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
    <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z"/>
  </svg>
          </Navbar.Link>
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#"  className='text-white'>
            Home
          </Navbar.Link>
          <Navbar.Link href="#" className='text-white'>About</Navbar.Link>

          <Dropdown label="Units" inline>
            <Dropdown.Item>Unit for sell</Dropdown.Item>
            <Dropdown.Item>Unit for rent</Dropdown.Item>
          </Dropdown>
          <Dropdown label="Maintenance" inline>
            <Dropdown.Item>Finish</Dropdown.Item>
            <Dropdown.Item>3D Max</Dropdown.Item>
          </Dropdown>
          <Navbar.Link href="#" className='text-white'>Service</Navbar.Link>

        </Navbar.Collapse>
      </Navbar>
    </nav>
  )
}

export default Navbars