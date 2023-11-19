"use client";
import logo from "./../../../assets/img/propertpoia-01.png";
import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import React from "react";
import { Link } from "react-router-dom";
function Footers() {
  return (
    <Footer container>
      <div className="w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto font-serif">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <img
              className="mr-3 h-28 uppercase font-[Poppins]"
              href="https://flowbite.com"
              src={logo}
              alt="Logo"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Link to="/about">About Us</Link>
                <Link to="/service">Contact Us</Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Link to="/service">Contact</Link>
                <Link to="/service">customer service</Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Link to="/">Privacy Policy</Link>
                <Link to="/">Terms &amp; Conditions</Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright by="Propertopia" year={2023} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/"
              icon={BsFacebook}
              className=" hover:text-beige"
            />
            <Footer.Icon
              href="https://www.instagram.com/"
              icon={BsInstagram}
              className=" hover:text-beige"
            />
            <Footer.Icon
              href="https://twitter.com/?lang=ar"
              icon={BsTwitter}
              className=" hover:text-beige"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
export default Footers;
