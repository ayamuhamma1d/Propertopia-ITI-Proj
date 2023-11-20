import { useForm, Controller } from "react-hook-form";
import { updateProfile } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./editUserData.module.css";
import { useEffect } from "react";
import { useState } from "react";
import { auth, db } from "../auth/firebase/Firebase";
import {
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
function EditProfile() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState("");
  const { handleSubmit, formState } = useForm();
  const { errors } = formState;
  const getCollectionData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const collectionData = querySnapshot.docs.map((doc) => {
        const data = { ...doc.data() };
        if (data.email === userEmail) {
          setUserPhone(data.phoneNumber);
        }
        const docId = doc.id;
        return { docId, ...data };
      });
      setData(collectionData);
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
  const onSubmit = async () => {
    try {
      const emailPattern = /^[^\s@]+@(gmail|yahoo|hotmail|outlook)\.com$/;
      const phoneNumberPattern = /^01[1025]\d{8}$/;
      let isValid = true;
      if (!emailPattern.test(userEmail)) {
        setErrorMessage("Please enter a valid email address.");
        isValid = false;
      }
      if (!phoneNumberPattern.test(userPhone)) {
        setErrorMessage("Please enter a valid phone number");
        isValid = false;
      }
      if (isValid) {
        const currentUser = auth.currentUser;
        await updateProfile(auth.currentUser, {
          displayName: userName,
          email: userEmail,
        });
        const collectionData = await getCollectionData();
        const user = collectionData.find((data) => data.email === userEmail);
        if (user) {
          await updateDoc(doc(db, "users", user.docId), {
            displayName: userName,
            phoneNumber: userPhone,
          });
          setUserPhone(userPhone);
          setUserName(userName);
          window.location.href = "./profile";
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto mb-10">
      <h5 className="text-left mb-10 ms-2 text-2xl  font-serif capitalize">Edit Your Data</h5>
      <form onSubmit={handleSubmit(onSubmit)} className="gap-6">
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-center mb-5">
            <div className="bg-beige py-3 rounded-s-2xl px-5 text-white">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="border-none w-full font-serif py-3 me-4 focus:border-beige bg-white shadow rounded-e-2xl"
            />
            {errors.name && (
              <div
                className="bg-beige1 border border-beige text-beige px-4 py-3 text-xs rounded relative"
                role="alert"
              >
                <span className="block sm:inline font-bold">
                  {errors.name.message}
                </span>
              </div>
            )}
          </div>
          <div className="flex items-center justify-center mb-5">
            <div className="bg-beige py-3 rounded-s-2xl  px-5 text-white">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <input
              readOnly
              type="text"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className="border-none w-full font-serif py-3 bg-white shadow rounded-e-2xl me-4 "
            />
            {errors.email && (
              <div
                className="bg-beige1 border border-beige text-beige px-4 py-3 text-xs rounded relative"
                role="alert"
              >
                <span className="block sm:inline font-bold">
                  {errors.email.message}
                </span>
              </div>
            )}
          </div>
          {userPhone && (
            <div className="flex items-center justify-center mb-5">
              <div className="bg-beige py-3 rounded-s-2xl  px-5 text-white">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <input
                type="text"
                value={userPhone}
                onChange={(e) => setUserPhone(e.target.value)}
                className=" border-none w-full me-4 font-serif py-3 bg-white shadow rounded-e-2xl "
              />
              {errors.phone && (
                <div
                  className="bg-beige1 border border-beige text-beige px-4 py-3 text-xs rounded relative"
                  role="alert"
                >
                  <span className="block sm:inline font-bold">
                    {errors.phone.message}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
        <button
          type="submit"
          className={` text-white bg-beige font-semibold py-2 px-4 rounded-3xl shadow-lg text-lg font-serif w-48`}
        >
          Save Changes
        </button>
        <div
          className={` ${
            styles.errorArea
          } my-3 text-white font-bold p-2 text-center ${
            errorMessage ? "block" : "hidden"
          }`}
          id="message_area"
        >
          {errorMessage && <p>{errorMessage}</p>}
        </div>
      </form>
    </div>
  );
}
export default EditProfile;
