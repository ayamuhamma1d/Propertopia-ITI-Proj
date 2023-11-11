import { auth } from "../../auth/firebase/Firebase";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logo from "./../../../assets/img/palm-beach-travel-hotel-seabird-260nw-2161616503-removebg-preview.png";
import style from "./nav.module.css";
import { NavLink, Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useEffect } from "react";
function Navbars() {
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserToken(user.accessToken);
      } else {
        setUserToken(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [userToken]);

  const logOut = async () => {
    try {
      await signOut(auth);
      setUserToken(null);
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={`${style.navbar} z-50 md:w-auto w-full flex justify-center items-center `}
      >
        {" "}
        <h5 className=" uppercase font-[Poppins] text-2xl  ">Propertopia</h5>
      </div>
      <nav className="bg-white my-1">
        <div className="  flex item-center justify-between  w-full sm:max-w-full md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto ">
          <div className="z-50 lg:w-auto w-full flex justify-between items-center ">
        <Link to=" "> <img src={logo} className="mr-3 h-24 " alt="Flowbite React Logo" /></Link>
            <div
              className="text-4xl cursor-pointer lg:hidden"
              onClick={() => setOpen(!open)}
            >
              <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
            </div>
          </div>
          <ul className="lg:flex hidden ms-24  items-center gap-8 uppercase font-[Poppins] justify-center">
            <li>
              <NavLink
                to="./"
                className="py-3 px-2 inline-block hover:text-beige"
                activeClassName="active"
              >
                Home{" "}
              </NavLink>
            </li>
            <NavLinks />
          </ul>
          <div className=" uppercase font-[Poppins] lg:block hidden items-center lg:flex ">
            <NavLink
              to="./signup"
              className={`${userToken ? "hidden" : "block"}`}
            >
              Sign up
            </NavLink>
            <NavLink
              to="./login"
              className={`${style.btn} ${userToken ? "hidden" : "block"}`}
            >
              Login
            </NavLink>
            <NavLink
            to="./profile"
              className={`${style.btn} ${
                userToken != null ? "block" : "hidden"
              }`}
            >
              Profile
            </NavLink>
            <NavLink
              onClick={logOut}
              id="logout_btn"
              className={`${style.btn} ${
                userToken != null ? "block" : "hidden"
              }`}
            >
              Logout
            </NavLink>
          </div>
          {/* Mobile */}
          <ul
            className={`lg:hidden absolute bg-white w-full h-full bottom-0 py-36 pl-4 duration-500 ${
              open ? "left-0" : "left-[-100%]"
            }`}
          >
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
