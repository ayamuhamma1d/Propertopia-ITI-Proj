import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth, provider, providerFb } from "../firebase/Firebase";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  FacebookAuthProvider,
} from "firebase/auth";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Button, Label, TextInput } from "flowbite-react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import signImg from "../../../assets/img/login.jpg";
import style from "../Auth.module.css";
import styleLogin from "./login.module.css";
const Login = () => {
  let userEmail, userPass;
  let userToken;
  const [signInWithGoogle] = useSignInWithGoogle(auth, provider);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorCode, setErrorCode] = useState("");
  const signInWithFacebook = async () => {
    try {
      const result = await signInWithPopup(auth, providerFb);
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      window.location.href = "../../Home";
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData?.email;
      const credential = FacebookAuthProvider.credentialFromError(error);
    }
  };
  const signInWithGoogleHandler = async () => {
    try {
      await signInWithGoogle();
      window.location.href = "../../Home";
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      userToken = user.accessToken;
      window.location.href = "../../Home";
     

    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorMessage == "Firebase: Error (auth/invalid-login-credentials).") {
        setErrorMessage("Your email or pass  is wrong");
      } else {
        setErrorMessage(errorMessage);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userEmail = document.getElementById("email1").value;
    const userPass = document.getElementById("password1").value;

    if (userPass && userEmail) {
      const emailPattern = /^[^\s@]+@(gmail|yahoo|hotmail|outlook)\.com$/;
      let isValid = true;

      if (!emailPattern.test(userEmail)) {
        setErrorMessage("Please enter a valid email address.");
        isValid = false;
      }

      if (isValid) {
        await signIn(userEmail, userPass);
      }
    } else {
      userToken = null;
    }
  };

  useEffect(() => {
    const messageArea = document.getElementById("message_area");
    if (messageArea) {
      messageArea.classList.add("block");
    }
  }, []);

  return (
    <div className={`${style.container} ${styleLogin.customContainer} font-serif`}>
      <div
        className={`flex ${style.full_height} ${styleLogin.customFullHeight} font-serif`}
      >
        <div
          className={`col-span-2 basis-1/2 ${style.bg_project} ${styleLogin.customBgProject} ${styleLogin.col_span_2} ps-5 py-12`}
        >
          <div
            className={`flex ${style.parent_card} ${styleLogin.customParentCard}`}
          >
            <div
              className={`col-span-2 basis-1/2 p-2 ${style.text_center} ${
                (styleLogin.customTextCenter, styleLogin.header_text)
              }`}
            >
              <h3 className="text-3xl font-bold mb-7">Illuminate Your Home Search with Unrivaled Brilliance.</h3>
              <p className={`${style.sign_in_parag} ${styleLogin.loginParag} font-serif`}>
              Discover the home of your dreams with confidence
              </p>
            </div>
            <div className="col-span-2 mt-3 basis-1/2">
              <img
                src={signImg}
                className={`${style.signin_img} ${styleLogin.customSigninImg} font-serif`}
                alt=""
                srcSet=""
              />
            </div>
          </div>
        </div>
        <div className={`col-span-2 basis-1/2  `}>
          <form
            onSubmit={handleSubmit}
            className={`flex max-w-xl flex-col gap-4 ms-10 ${style.form} ${styleLogin.customForm} px-10 py-14 font-serif`}
          >
            <div>
              <div className="form_header flex flex-col ">
                <p className={`mb-8 text-muted w-full mx-auto text-center font-serif `}>
                  A new way to experience real state in the infinite virtual
                  space.
                </p>
                <h2 className="text-3xl mb-8">Login</h2>
              </div>
              <div>
                <Label htmlFor="email1" value="Email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="robert.langster@gmail.com"
              />
            </div>
            <div className="mb-1 block">
              <div className=" block">
                <Label htmlFor="password1" value="Password" />
              </div>
              <TextInput
                id="password1"
                type="password"
                placeholder="********"
              />
            </div>
            <div
              className={`flex w-1/2 mx-auto justify-around   ${styleLogin.parent_btns} `}
            >
              <Button
                type="submit"
                className={`bg-white text-dark ${styleLogin.customButton} font-serif hover:bg-beige`}
              >
                Log  in
              </Button>
              <Button
                type="submit"
                className={`${style.signin_btn} ${styleLogin.customSigninBtn} `}
              >
                <Link to="/signup">Sign up</Link>
              </Button>{" "}
            </div>
            <div
              className={` bg-red-500 text-white font-bold p-2 text-center ${
                errorMessage ? "block" : "hidden"
              }`}
              id="message_area"
            >
              {errorMessage && <p>{errorMessage}</p>}
            </div>
            <div
              className={`flex  w-1/2 mx-auto justify-around  ${styleLogin.parent_btns}`}
            >
              <Button
                onClick={signInWithGoogleHandler}
                type="submit"
                className={`${style.signin_btn} ${styleLogin.customSigninBtn}   mb-2 me-2`}
              >
                <FcGoogle className="me-2" />
                Google
              </Button>

              <Button
                onClick={signInWithFacebook}
                type="submit"
                className={`${style.signin_btn}  mb-2`}
              >
                <BsFacebook className="me-2" />
                Facebook
              </Button>
            </div>
            <Button
              type="submit"
              className={` m-auto ${style.signin_btn} ${styleLogin.customSigninBtn} pt-0`}
            >
              <Link to="/resetPass">Reset Password</Link>
            </Button>{" "}
            <p className={`text-center ${styleLogin.polices_parag}`}>
              By signing in or creating an account, you agree with our{" "}
              <span className="text-blue-600">Terms & Conditions</span> and{" "}
              <span className="text-blue-600"> Privacy Statement </span>
            </p>
          </form>
          <div className="label"></div>
        </div>
      </div>
    </div>
  );
};
export default Login;
