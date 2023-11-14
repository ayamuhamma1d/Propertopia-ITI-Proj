'use client';
import logo from './../../../assets/img/palm-beach-travel-hotel-seabird-260nw-2161616503-removebg-preview.png'
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import React from 'react'

function Footers() {
  return (
    <Footer container  >
      <div className="w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto ">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <img className="mr-3 h-24 uppercase font-[Poppins]"
              href="https://flowbite.com"
              src={logo}
              alt="Flowbite Logo" 
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" c />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Flowbite</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
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
          <Footer.Copyright  by="Propertopia" year={2023} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} className=' hover:text-beige'/>
            <Footer.Icon href="#" icon={BsInstagram} className=' hover:text-beige'/>
            <Footer.Icon href="#" icon={BsTwitter}   className=' hover:text-beige'/>
            <Footer.Icon href="#" icon={BsGithub}  className=' hover:text-beige' />
            <Footer.Icon href="#" icon={BsDribbble}   className=' hover:text-beige'/>
          </div>
        </div>
      </div>
    </Footer>

  )
}

export default Footers