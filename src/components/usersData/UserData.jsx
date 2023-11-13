import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./userData.module.css";
import { useEffect, useState } from "react";
import { auth } from "../auth/firebase/Firebase";

const UserData = () => {
  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userPhone, setUserPhone] = useState(null);
  const [userImage, setUserImage] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        setUserEmail(user.email);
        setUserPhone(user.phoneNumber);
        setUserImage(user.photoURL);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [userEmail, userName, userPhone]);

  return (
    <div
      className={` flex justify-between items-center px-10  border-beige flex-wrap`}
    >
      <div className=" w-full mb-10">
        <div className="flex flex-col gap-10">
          {userName != null && (
            <div
              className={`${styles.profile_left_content_ele} bg-white shadow`}
            >
              <div className={styles.profile_left_content_ele_svg}>
                <FontAwesomeIcon icon={faUser} />
              </div>
              <p>
                <span className="ms-4 text-slate-700 font-[Poppins] ">
                  {" "}
                  {userName}
                </span>
              </p>
            </div>
          )}
          {userEmail != null && (
            <div
              className={`${styles.profile_left_content_ele} bg-white shadow`}
            >
              <div className={styles.profile_left_content_ele_svg}>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <p>
                <span className="ms-4 text-slate-700 font-[Poppins] ">
                  {" "}
                  {userEmail}
                </span>
              </p>
            </div>
          )}

          {userPhone != null && (
            <div
              className={`${styles.profile_left_content_ele} bg-white shadow`}
            >
              <div className={styles.profile_left_content_ele_svg}>
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <p>
                <span className="ms-4 text-slate-700 font-[Poppins] ">
                  {" "}
                  {userPhone}
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
      <div
        className={`${styles.profile_left_content_ele} bg-white w-full py-3  border-beige1 border-solid  mb-10 justify-end`}
      >
        <p
          className={`${styles.ele_svg} flex items-center text-2xl font-[Poppins]  mx-3 text-beige`}
        >
          <FontAwesomeIcon
            icon={faHeart}
            className="text-2xl me-3 text-beige"
          />
          Favorite Units :
        </p>
        {/* <span className={`${styles.addtocard_num} text-2xl text-gray-500`}>
          {user.addToCard.length}
        </span> */}
      </div>
    </div>
  );
};

export default UserData;
