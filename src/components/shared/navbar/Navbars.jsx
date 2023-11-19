import { auth } from "../../auth/firebase/Firebase";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logo from "./../../../assets/img/propertpoia-01.png";
import style from "./nav.module.css";
import { NavLink, Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useEffect } from "react";
function Navbars() {
  const dummyUserData = {
    photo:
      "https://cdn.vectorstock.com/i/preview-1x/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.jpg",
  };
  const [userToken, setUserToken] = useState(null);
  const [userImage, setUserImage] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserToken(user.accessToken);
        setUserImage(user.photoURL);
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
      window.location.href = "../../Home";
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
      <nav className={`bg-white my-1 ${style.nav}`}>
        <div className="  flex item-center justify-between  w-full sm:max-w-full md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto ">
          <div className={`z-50 lg:w-auto w-full flex justify-between items-center ${style.navsm}  `}>
            <Link to=" ">
              {" "}
              <img
                src={logo}
                className=" h-24 "
                alt="Flowbite React Logo"
              />
            </Link>
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
              onClick={logOut}
              id="logout_btn"
              className={`${style.btn} text-black ${
                userToken != null ? "block" : "hidden"
              }`}
            >
              Logout
            </NavLink>
            <NavLink
              to="./profile"
              className={` ${userToken != null ? "block" : "hidden"}`}
            >
              {userImage != null ? (
                <img
                  src={userImage}
                  className={`${style.user_photo} mb-10 shadow-xl `}
                />
              ) : (
                <img
                  src={dummyUserData.photo}
                  className={`${style.user_photo} mb-10 shadow-xl `}
                />
              )}
            </NavLink>
          </div>
          {/* Mobile */}
          <ul
            className={`lg:hidden absolute bg-white w-full h-fit pt-20  pl-4 duration-500 ${style.nav_sm} ${
              open ? "left-0" : "left-[-100%]" 
            }`} activeClassName="active"  
          >
          
              <Link to="./" className="py-4 px-2 inline-block" activeClassName="active"  >
                Home{" "}
              </Link>
         
            <NavLinks setOpen={setOpen} />
           
              <Link to="/profile" className="py-3 px-2 inline-block mb-5"  activeClassName="active" >
                Profile
              </Link>
      
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbars;
