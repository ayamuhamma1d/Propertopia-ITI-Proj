import React, { useEffect, useState } from "react";
import { auth, db } from "../auth/firebase/Firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faBath } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft as arrowLeft } from "@fortawesome/free-solid-svg-icons";

import style from "./UserUnit.module.css";
const UserUnit = () => {
  const [userId, setUserId] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserId(user.uid);
    }
  }, []);

  const getCollectionData = async () => {
    try {
      if (!userId) {
        console.error("User ID is empty.");
        return;
      }

      const querySnapshot = await getDocs(collection(db, "Payment"));
      const collectionData = querySnapshot.docs
        .filter((doc) => doc.exists())
        .map((doc) => {
          const data = { ...doc.data() };
          const docId = doc.id;

          if (docId === "cEC1fpg1VDLce8YRSzWw") {
            return null;
          }

          return { docId, ...data };
        })
        .filter(Boolean);

      setData(collectionData);
    } catch (error) {
      console.error("Error getting collection data: ", error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getCollectionData();
    };

    fetchData();
  }, [userId ? userId : []]);

  return (
    <div className={`flex flex-col ${style.div_width} `}>
      <div className={`flex ${style.flex_div}`}>
        {data &&
          data.map(
            (item) =>
              item && (
                <div
                  key={item.docId}
                  className="w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto mt-10"
                >
                  <div className="flex gap-5 justify-center items-center">
                    <div className="w-full max-w-sm font-serif bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <div className="relative">
                        <img src={item.images[0]} alt="" />
                        <div className={`absolute top-2 left-3 bg-black p-2`}>
                          <p className="text-white font-serif ">
                            {item.purpose}
                          </p>
                        </div>
                      </div>
                      <div className="px-5 pb-5">
                        <div className="flex items-center justify-between mb-3 pt-3">
                          <Link className="font-medium capitalize font-serif">
                            {item.type_of_unit}
                          </Link>
                          <span className="text-lg font-bold font-serif ">
                            $
                            {item.purpose === "For Sale"
                              ? item.price.toLocaleString()
                              : item.price.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between font-serif items-center border-b pb-2">
                          <div>
                            <p>
                              <FontAwesomeIcon
                                icon={faBed}
                                style={{ color: "#000000" }}
                                className="me-2"
                              />
                              {item.bedrooms}
                            </p>
                          </div>
                          <div>
                            <p>
                              <FontAwesomeIcon
                                icon={faBath}
                                style={{ color: "#000000" }}
                                className="me-2"
                              />
                              {item.Bathrooms}
                            </p>
                          </div>
                          <div>
                            <p className="font-serif ">
                              <FontAwesomeIcon
                                icon={faHome}
                                className="me-2 font-serif "
                              />
                              {item.area}m
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-2.5 mb-5">
                          <div>
                            <p className="">
                              <FontAwesomeIcon
                                className="pr-1 font-serif "
                                icon={faMapMarkerAlt}
                              />
                              {item.location
                                .split(" ")
                                .slice(0, 3)
                                .join(" ")}
                            </p>
                          </div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
      </div>
      <div className="flex justify-start items-center w-3/4  m-auto my-8">
        <Link to="/addUnit" className="ml-2 flex items-center">
          <FontAwesomeIcon
            size="1x"
            style={{ color: "#bca37f" }}
            className="me-1"
            icon={arrowLeft}
          />
        </Link>
        <Link to="/addUnit" className="text-beige text-xl">
          Add your unit
        </Link>
      </div>
    </div>
  );
};

export default UserUnit;
