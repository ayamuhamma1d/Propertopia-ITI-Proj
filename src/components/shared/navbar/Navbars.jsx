"use client";
import React, { useState } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logo from "./../../../assets/img/palm-beach-travel-hotel-seabird-260nw-2161616503-removebg-preview.png";
import style from "./nav.module.css";
import { NavLink, Link } from "react-router-dom";
import NavLinks from "./NavLinks";
function Navbars() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={`${style.navbar} z-50 md:w-auto w-full flex justify-center items-center `}>
        {" "}
        <h5 className=" uppercase font-[Poppins] text-2xl  ">Propertopia</h5>
      </div>
      <nav className="bg-white my-1">
        <div className="  flex item-center justify-between  w-full sm:max-w-full md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto ">
          <div className="z-50 lg:w-auto w-full flex justify-between items-center ">
            <img src={logo} className="mr-3 h-24 " alt="Flowbite React Logo" />
            <div
              className="text-4xl cursor-pointer lg:hidden"
              onClick={() => setOpen(!open)}
            >
              <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
            </div>
          </div>
          <ul className="lg:flex hidden ms-24  items-center gap-8 uppercase font-[Poppins] justify-center">
            <li>
              <NavLink to="./" className="py-3 px-2 inline-block hover:text-beige" activeClassName="active">
                Home{" "}
              </NavLink>
            </li>
            <NavLinks />
          </ul>
          <div className=" uppercase font-[Poppins] lg:block hidden items-center lg:flex ">
            <NavLink to="./signup" >Sign up</NavLink>
            <NavLink to="./login" className={style.btn}>Login</NavLink>
            <NavLink to="./login" className={`${style.btn} hidden`}>Logout</NavLink>
          </div>
          {/* Mobile */}
          <ul
            className={`lg:hidden absolute bg-white w-full h-full bottom-0 py-36 pl-4 duration-500 ${open ? "left-0" : "left-[-100%]"
              }`}>
            <li>
              <Link to="./" className="py-3 px-3 inline-block">
                Home{" "}
              </Link>
            </li>
            <NavLinks />

          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbars;
{
  /* <nav className={style.navbar} >
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
</nav> */
}
