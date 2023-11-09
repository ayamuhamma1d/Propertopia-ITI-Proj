import { useEffect, useState } from "react";
import { auth, provider } from "../firebase/Firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Button, Label, TextInput } from "flowbite-react";
import { FcGoogle } from "react-icons/fc";
import signImg from "../../../assets/img/signup.jpg";
import style from "../Auth.module.css";
import style_resp from "./signup.module.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  let userName, userEmail, userPass, userPhone;
  const [errorMessage, setErrorMessage] = useState("");
  const [errorCode, setErrorCode] = useState("");
  let userToken;

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData?.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    }
  };

  const getFormData = (e) => {
    e.preventDefault();
    userName = document.getElementById("uname").value;
    userEmail = document.getElementById("email1").value;
    userPass = document.getElementById("password1").value;
    userPhone = document.getElementById("unumber").value;

    const emailPattern = /^[^\s@]+@(gmail|yahoo|hotmail)\.com$/;
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
      sendUser();
    }
  };
  const sendUser = async () => {
    await createUserWithEmailAndPassword(
      auth,
      userEmail,
      userPass,
      userName,
      userPhone
    )
      .then((userCredential) => {
        const user = userCredential.user;
        user.phoneNumber = userPhone;
        user.displayName = userName;
        userToken = user.accessToken;

        window.location.href = "../../home";
      })
      .catch((error) => {
        const code = error.code;
        const message = code.split("/")[1].replace(/-/g, " ");
        setErrorCode(code);
        setErrorMessage(message);
      });
  };

  useEffect(() => {
    const messageArea = document.getElementById("message_area");
    if (messageArea) {
      messageArea.classList.add("block");
    }
  }, []);

  return (
    <div className={`${style.container} ${style_resp.container} `}>
      <div className={`flex ${style.full_height} ${style_resp.full_height}`}>
        <div
          className={`col-span-2 basis-1/2 ${style.bg_project} ps-5 py-20  ${style_resp.bg_project}`}
        >
          <div
            className={`flex ${style.parent_card} ${style_resp.parent_card}`}
          >
            <div
              className={`col-span-2 basis-1/2 p-2 ${
                (style.text_center, style_resp.header_text)
              }`}
            >
              <h3 className={`text-3xl font-bold mb-7 ${style_resp.site_name}`}>
                Real estate
              </h3>
              <p
                className={`${(style.sign_in_parag, style_resp.sign_in_parag)}`}
              >
                Rumah Impian hadir untuk temukan rumah terbaik untukmu, untuk di
                jual ataupun di sewa dengan sumber terpercaya.
              </p>
            </div>
            <div className="col-span-2 basis-1/2">
              <img
                src={signImg}
                className={style.signin_img}
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>

        <div className={`col-span-2 basis-1/2 flex flex-col `}>
          <div className="flex w-1/2 justify-center p-0  m-auto  my-10  ">
            <Button
              onClick={signInWithGoogle}
              type="submit"
              className={`${style.signin_btn} `}
            >
              <FcGoogle className="me-2" />
              Sign in with Google
            </Button>
          </div>
          <form
            onSubmit={getFormData}
            className={` flex max-w-xl flex-col gap-4 ms-10 ${style.form} px-10   ${style_resp.form}`}
          >
            <div>
              <div className="form_header flex flex-col items-center">
                <h2
                  className={`text-3xl mb-8 text-center pe-0 ${style_resp.form_h2} `}
                >
                  Join & Connect the Fastest Growing Online Community
                </h2>
              </div>
              <div className="mb-1 block">
                <Label htmlFor="uname" value="Username" />
              </div>
              <TextInput
                className="mb-2"
                id="uname"
                type="uname"
                required
                placeholder="robert langster"
              />
              <div>
                <Label htmlFor="email1" value="Email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                required
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
                required
                placeholder="********"
              />
            </div>

            <div className="mb-1 block">
              <div className="block">
                <Label htmlFor="unumber" value="Phone number" />
              </div>

              <TextInput
                className="mb-2"
                id="unumber"
                type="tel"
                required
                placeholder=" e.g. 123-456-7890"
              />
            </div>
            <Button type="submit" className={`${style.signin_btn}`}>
              Sign up
            </Button>
            <div
              className={` bg-red-500 text-white font-bold p-2 text-center ${
                errorMessage ? "block" : "hidden"
              }`}
              id="message_area"
            >
              {errorMessage && <p>{errorMessage}</p>}
            </div>

            <p className="text-center">
              Have an account?{" "}
              <span className="font-bold">
               <Link to="/login">login</Link>
              </span>
            </p>
          </form>
          <div className="label"></div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;