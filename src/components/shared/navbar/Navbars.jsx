import React from 'react'
'use client';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import logo from './../../../assets/img/Group 1.png'
import style from './nav.module.css'
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
       
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#"  >
            Home
          </Navbar.Link>
          <Navbar.Link href="#" >About us</Navbar.Link>
          <Navbar.Link href="#" >
            <Dropdown label="Units" inline>
              <Dropdown.Item>Unit for sell</Dropdown.Item>
              <Dropdown.Item>Unit for rent</Dropdown.Item>
            </Dropdown>
          </Navbar.Link>
          <Navbar.Link href="#" >
            <Dropdown label="Maintenance" inline>
              <Dropdown.Item>Finish</Dropdown.Item>
              <Dropdown.Item>3D Max</Dropdown.Item>
            </Dropdown>
          </Navbar.Link>
          <Navbar.Link href="#" >Service</Navbar.Link>

        </Navbar.Collapse>
      </Navbar>
    </nav>
  )
}

export default Navbars