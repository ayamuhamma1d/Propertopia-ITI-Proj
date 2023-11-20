import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../../auth/firebase/Firebase";

const NavLinks = ({ setOpen }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const links = [

    {
      name: "Units",
      path: "/units",
      submenu: true,
      subLinks: [
        {
          Head: "Unit for sale",
          path: "/units/unit-for-sale",
        },
        {
          Head: "Unit for rent",
          path: "/units/unit-for-rent",
        },
        {
          Head: "Add Unit",
          path: "/addUnit",
          hidden: !user,
        },
      ],
    },
    {
      name: "Maintenance",
      path: "/maintenance",
      submenu: true,
      subLinks: [
        {
          Head: "Finishes",
          path: "/maintenance/finishes",
        },
        {
          Head: "3D Max",
          path: "/maintenance/3d-max",
        },
      ],
    },

  ];

  const [heading, setHeading] = useState("");

  const toggleSubMenu = (linkName) => {
    if (heading === linkName) {
      setHeading("");
    } else {
      setHeading(linkName);
    }
  };
  const handelOpen = () => {
    setOpen(true);
  };
  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <li className="py-3 px-2 text-left hover:text-beige md:cursor-pointer group">
            <NavLink
              to={link.path}
              className="hover:text-beige flex justify-between items-center md:pr-0 pr-5 group"
              activeClassName="active"
              onClick={() => {
                toggleSubMenu(link.name);
              }}
            >
              {link.name}
              {link.submenu && (
                <span className="text-xl md:hidden inline">
                  <ion-icon
                    name={heading === link.name ? "chevron-up" : "chevron-down"}
                  ></ion-icon>
                </span>
              )}
              {link.submenu && (
                <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 ">
                  <ion-icon name="chevron-down"></ion-icon>
                </span>
              )}
            </NavLink>
            {link.submenu && (
              <div
                className={`absolute top-16 lg:${
                  heading === link.name ? "block" : "hidden"
                } hidden group-hover:lg:block`}
              >
                <div className="py-3">
                  <div className="w-4 h-4 left-3 absolute mt-1 bg-beige1 rotate-45 "></div>
                </div>
                <div className="bg-beige1 p-3.5 ">
                  <ul>
                    {link.subLinks.map((subLink, subIndex) => (
                      <li
                        key={subIndex}
                        className="text-sm text-gray-800 my-2.5 "
                      >
                        {!subLink.hidden && (
                          <NavLink
                            to={subLink.path}
                            activeClassName="active"
                            className="hover:text-beige"
                          >
                            {subLink.Head}
                          </NavLink>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </li>
          {/* mobile */}
          {link.submenu && (
            <ul className={`${heading === link.name ? "lg:hidden" : "hidden"}`}>
              {link.subLinks.map((subLink, subIndex) => (
                <li
                  key={subIndex}
                  className="text-sm text-gray-800 my-2.5  "
                  onClick={handelOpen}
                >
                  {!subLink.hidden && (
                    <NavLink
                      to={subLink.path}
                      activeClassName="active"
                      className="hover:text-beige py-4 pl-7 font-semibold md:pr-0 pr-6 "
                    >
                      {subLink.Head}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </>
  );
};

export default NavLinks;
