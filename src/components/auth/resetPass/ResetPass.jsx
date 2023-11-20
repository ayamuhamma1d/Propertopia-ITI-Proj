import { useEffect, useState } from "react";
import { auth } from "../firebase/Firebase";
import { sendPasswordResetEmail } from "firebase/auth";

import { Button, Label, TextInput } from "flowbite-react";

import signImg from "../../../assets/img/login.jpg";
import style from "../Auth.module.css";
import styleLogin from "../login/login.module.css";

const ResetPass = () => {
  const [userEmail, setUserEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserEmail(user.email);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [userEmail]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userEmail = document.getElementById("email1").value;

    if (userEmail) {
      const emailPattern = /^[^\s@]+@(gmail|yahoo|hotmail|outlook)\.com$/;

      let isValid = true;

      if (!emailPattern.test(userEmail)) {
        setErrorMessage("Please enter a valid email address.");
        isValid = false;
        setUserEmail(userEmail);
      }

      if (isValid) {
        verifyEmail(userEmail);
      }
    } else {
      window.location.href = "./Home";
    }
  };
  const verifyEmail = (userEmail) => {
    sendPasswordResetEmail(auth, userEmail)
      .then(() => {
        window.location.href = "./login";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  useEffect(() => {
    const messageArea = document.getElementById("message_area");
    if (messageArea) {
      messageArea.classList.add("block");
    }
  }, []);

  return (
    <div className={`${style.container} ${styleLogin.customContainer}`}>
      <div
        className={`flex ${style.full_height} ${styleLogin.customFullHeight}`}
      >
        <div
          className={`col-span-2 basis-1/2  font-serif ${style.bg_project} ${styleLogin.customBgProject} ${styleLogin.col_span_2} ps-5 py-12  font-serif`}
        >
          <div
            className={`flex ${style.parent_card} ${styleLogin.customParentCard}`}
          >
            <div
              className={`col-span-2 basis-1/2 p-2  font-serif ${style.text_center} ${
                (styleLogin.customTextCenter, styleLogin.header_text)
              }`}
            >
              <h3 className="text-3xl font-bold mb-7  font-serif">Real estate</h3>
              <p className={`${style.sign_in_parag} ${styleLogin.loginParag}  font-serif`}>
                Rumah Impian hadir untuk temukan rumah terbaik untukmu, untuk di
                jual ataupun di sewa dengan sumber terpercaya.
              </p>
            </div>
            <div className="col-span-2 mt-3 basis-1/2">
              <img
                src={signImg}
                className={`${style.signin_img} ${styleLogin.customSigninImg}`}
                alt=""
                srcSet=""
              />
            </div>
          </div>
        </div>
        <div className={`col-span-2 basis-1/2  `}>
          <form
            onSubmit={handleSubmit}
            className={`flex max-w-xl flex-col gap-4 ms-10 ${style.form} ${styleLogin.customForm} px-10 py-14`}
          >
            <div>
              <div className="form_header flex flex-col ">
                <h2 className={`mb-8 text-muted w-full mx-auto text-center  font-serif `}>
                  Enter you email to reset your password
                </h2>
              </div>
              <div>
                <Label htmlFor="email1" value="Email" />
              </div>
              <TextInput
                required
                id="email1"
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div
              className={`flex w-1/2 mx-auto justify-around  ${styleLogin.parent_btns}`}
            >
              <Button
                type="submit"
                className={` ${style.signin_btn} ${styleLogin.customSigninBtn}`}
              >
                Send
              </Button>{" "}
            </div>

            <div
              className={` bg-red-500 text-white font-bold p-2 text-center  font-serif${
                errorMessage ? "block" : "hidden"
              }`}
              id="message_area"
            >
              {errorMessage && <p>{errorMessage}</p>}
            </div>
          </form>
          <div className="label"></div>
        </div>
      </div>
    </div>
  );
};

export default ResetPass;
