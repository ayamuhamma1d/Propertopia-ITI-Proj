import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import styles from "./userData.module.css";
import { useEffect, useState } from "react";
import { auth, db } from "../auth/firebase/Firebase";
import { collection, getDocs } from "firebase/firestore";
const UserData = () => {
  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userPhone, setUserPhone] = useState(null);

  const getCollectionData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));

      const collectionData = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        if (data.email === userEmail) {
          setUserPhone(data.phoneNumber);
        }
        const docId = doc.id;
        return { docId, ...data };
      });

      return collectionData;
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
  }, [userName]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        setUserEmail(user.email);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className=" flex justify-between items-center px-10  border-beige flex-wrap">
      <h5 className="text-left mb-10 ms-2 text-2xl font-[Poppins] capitalize ">
        Your Information
      </h5>
      <div className=" w-full mb-10">
        <div className="flex flex-col gap-10">
          {userName != null && (
            <div
              className={`flex border-none w-full font-[Poppins] items-center me-4 focus:border-beige   rounded-2xl bg-white shadow`}
            >
              <div className="bg-beige py-3 rounded-s-2xl  px-5 text-white">
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
              className={`flex border-none w-full font-[Poppins]  items-center me-4 focus:border-beige   rounded-2xl bg-white shadow`}
            >
              <div className="bg-beige py-3 rounded-s-2xl  px-5 text-white">
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
              className={`flex border-none w-full font-[Poppins] py-3 me-4 focus:border-beige   rounded-2xl bg-white shadow`}
            >
              <div className="bg-beige py-3 rounded-s-2xl  px-5 text-white">
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
    </div>
  );
};

export default UserData;
