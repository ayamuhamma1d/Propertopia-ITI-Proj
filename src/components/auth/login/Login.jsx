import { Button, Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../firebase/Firebase";
import signImg from "../../../assets/img/login.jpg";
import style from "../Auth.module.css";
import styleLogin from "./login.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

const Login = () => {
  let userEmail, userPass;
  let userToken;

  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorCode, setErrorCode] = useState("");

  const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      userToken = user.accessToken;
      window.location.href = "../../home/Home.jsx";

    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorMessage);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userEmail = document.getElementById("email1").value;
    const userPass = document.getElementById("password1").value;

    const emailPattern = /^[^\s@]+@(gmail|yahoo|hotmail)\.com$/;
    let isValid = true;

    if (!emailPattern.test(userEmail)) {
      setErrorMessage("Please enter a valid email address.");
      isValid = false;
    }

    if (isValid) {
      await signIn(userEmail, userPass);
    }
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
              <h3 className="text-3xl font-bold mb-7">Real estate</h3>
              <p className={`${style.sign_in_parag} ${styleLogin.loginParag}`}>
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
                <p className={`mb-8 text-muted w-full mx-auto text-center `}>
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

            <div
              className={`flex w-1/2 mx-auto justify-around  ${styleLogin.parent_btns}`}
            >
              <Button
                type="submit"
                className={`bg-white text-dark ${styleLogin.customButton}`}
              >
                Login
              </Button>
              <Button
                type="submit"
                className={`${style.signin_btn} ${styleLogin.customSigninBtn}`}
              >
                  <Link to="/signup">Signup</Link>
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
            <p className="text-center">Or login with</p>
            <Button
              onClick={() => signInWithGoogle()}
              type="submit"
              className={`${style.signin_btn} ${styleLogin.customSigninBtn} w-1/2 mx-auto mb-8`}
            >
              Google
            </Button>
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
