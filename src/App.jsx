import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/shared/footer/Footers";
import Navbar from "./components/shared/navbar/Navbars";
import Home from "./components/home/Home";
import Login from "./components/auth/login/Login";
import SignUp from "./components/auth/signup/SignUp";
import NotFoundPage from "./components/shared/notFoundPage/NotFoundPage";
import Profile from "./components/profile/Profile";
import ResetPass from "./components/auth/resetPass/resetPass";
import AddUnit from "./components/addUnit/addUnit";
import axios from "axios";
import withLoadingSpinner from "./Spinner/withLoadingSpinner";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import Form from "./components/shared/chatform/Form";
import LoadingSpinner from "./Spinner/LoadingSpinner";
import Wishlist from "./components/wishlist/Wishlist";
import UserUnit from "./components/userUnit/UserUnit";
const LazyRent = React.lazy(() =>
  import("./components/units/unitForRent/UnitForRent")
);
const LazySale = React.lazy(() =>
  import("./components/units/UnitForSale/UnitForSale")
);
const LazyDetails = React.lazy(() =>
  import("./components/shared/details/Details")
);
const LazyMaintenance = React.lazy(() =>
  import("./components/maintenance/Maintenance")
);
const LazyFinishes = React.lazy(() =>
  import("./components/maintenance/finishes/Finishes")
);
const LazyMax3d = React.lazy(() =>
  import("./components/maintenance/max3d/Max3d")
);
const LazyUnits = React.lazy(() => import("./components/units/Units"));
const LazyService = React.lazy(() => import("./components/services/Service"));
const LazyAbout = React.lazy(() => import("./components/about/About"));
const steps = [
  {
    id: "0",
    message: "Hi, I'm here to help you.",
    trigger: "1",
  },
  {
    id: "1",

    message: "Please write your username",
    trigger: "2",
  },
  {
    id: "2",
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    message: " hi {previousValue}, how can I help you?",
    trigger: "4",
  },
  {
    id: "4",
    options: [
      { value: 1, label: "sell", trigger: "5" },
      { value: 2, label: "rent", trigger: "6" },
      { value: 3, label: "Add Unit", trigger: "7" },
      { value: 4, label: "maintenance", trigger: "8" },
      { value: 5, label: "3d model", trigger: "9" },
      { value: 6, label: "add your information", trigger: "15" },
    ],
  },
  {
    id: "5",
    component: (
      <>
        <div className="Sall_boot">
          <p>
            Discover an extensive selection of properties available for purchase
            on our
          </p>
          <button type="button" id="boot_button">
            <Link to="/units/unit-for-sale" id="Link">
              See more
            </Link>
          </button>
        </div>
      </>
    ),
    trigger: "11",
  },

  {
    id: "6",
    component: (
      <>
        <div className="Sall_boot">
          <p>
            Discover a wide range of properties available for rent on our
            website{" "}
          </p>
          <button type="button" id="boot_button">
            <Link to="/units/unit-for-rent" id="Link">
              See more
            </Link>
          </button>
        </div>
      </>
    ),
    trigger: "11",
  },
  {
    id: "7",
    component: (
      <>
        <div className="Sall_boot">
          <p>
            Add your apartment for sale to our real estate website and give it
            the opportunity to reach the targeted audience, increasing the
            likelihood of a quick sale{" "}
          </p>
          <button type="button" id="boot_button">
            <Link to="/addUnit" id="Link">
              See more
            </Link>
          </button>
        </div>
      </>
    ),
    trigger: "11",
  },
  {
    id: "8",
    component: (
      <>
        <div className="Sall_boot">
          <p>
            Using our extensive experience in maintenance, we provide
            comprehensive property maintenance services that include preventive
            and repair maintenance.{" "}
          </p>
          <button type="button" id="boot_button">
            <Link to="/maintenance/finishes" id="Link">
              See more
            </Link>
          </button>
        </div>
      </>
    ),
    trigger: "11",
  },
  {
    id: "9",
    component: (
      <>
        <div className="Sall_boot">
          <p>
            Experience the next level of immersive visualization with our
            state-of-the-art 3D design feature on our real estate website{" "}
          </p>
          <button type="button" id="boot_button">
            <Link to="/maintenance/3d-max" id="Link">
              See more
            </Link>
          </button>
        </div>
      </>
    ),
    trigger: "11",
  },
  {
    id: "10",
    component: (
      <>
        <div className="Sall_boot">
          <p>
            Please follow the form to complete the reservation process and we
            will inform you of available appointments{" "}
          </p>
          <button type="button" id="boot_button">
            <Link to="/signup" id="Link">
              See more
            </Link>
          </button>
        </div>
      </>
    ),
    trigger: "11",
  },
  {
    id: "11",
    message: " Do you still need more help ?",
    trigger: "12",
  },
  {
    id: "12",
    options: [
      { value: 1, label: " continue with boot", trigger: "4" },
      { value: 2, label: "customers service", trigger: "13" },
      { value: 3, label: "End", trigger: "14" },
    ],
  },
  {
    id: "13",
    component: (
      <>
        <div className="Sall_boot">
          <button type="button" id="boot_button">
            <Link to="/signup" id="Link">
              service@gmail.com
            </Link>
          </button>
          <button type="button" id="boot_button">
            <Link to="/signup" id="Link">
              +0123456789{" "}
            </Link>
          </button>
        </div>
      </>
    ),
    trigger: "11",
  },
  {
    id: "14",
    message: "Thanks!",
    end: true,
  },
  {
    id: "15",
    message: "What is your name?",
    trigger: "name",
  },
  {
    id: "name",
    user: true,
    trigger: "16",
  },
  {
    id: "16",
    message: "Hi {previousValue}! What you need?",
    trigger: "need",
  },
  {
    id: "need",
    options: [
      { value: "sell", label: "sell", trigger: "17" },
      { value: "rent", label: "rent", trigger: "17" },
      { value: "maintenance", label: "maintenance", trigger: "17" },
      { value: "3D model", label: "3d", trigger: "17" },
    ],
  },
  {
    id: "17",
    message: "phone number",
    trigger: "phone",
  },
  {
    id: "phone",
    user: true,
    trigger: "18",
    validator: (value) => {
      if (isNaN(value)) {
        return "value must be a number";
      } else if (value < 0) {
        return "value must be positive";
      } else if (value > 9999999999999) {
        return `${value}? Come on!`;
      }

      return true;
    },
  },
  {
    id: "18",
    message: "Great! Check out your information",
    trigger: "review",
  },
  {
    id: "review",
    component: <Form />,
    asMessage: true,
    trigger: "update",
  },
  {
    id: "update",
    message: "Would you like to update some field?",
    trigger: "update-question",
  },
  {
    id: "update-question",
    options: [
      { value: "yes", label: "Yes", trigger: "update-yes" },
      { value: "no", label: "No", trigger: "end-message" },
    ],
  },
  {
    id: "update-yes",
    message: "What field would you like to update?",
    trigger: "update-fields",
  },
  {
    id: "update-fields",
    options: [
      { value: "name", label: "Name", trigger: "update-name" },
      { value: "need", label: "need", trigger: "update-need" },
      { value: "phone", label: "phone", trigger: "update-phone" },
    ],
  },
  {
    id: "update-name",
    update: "name",
    trigger: "18",
  },
  {
    id: "update-need",
    update: "need",
    trigger: "18",
  },
  {
    id: "update-phone",
    update: "phone",
    trigger: "18",
  },
  {
    id: "end-message",
    message:
      "Thanks! Your data was submitted successfully! We will contact you as soon as possible",
    end: true,
  },
];

const theme = {
  background: "#ffffff",
  headerBgColor: "#bca37f",
  headerFontSize: "20px",
  botBubbleColor: "#EAE0DA",
  headerFontColor: "white",
  botFontColor: "#000",
  userBubbleColor: "#ffffff",
  userFontColor: "black",
};

const config = {
  floating: true,
};
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route
            path="/details/:id/:purpose"
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <LazyDetails />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <LazyAbout />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/units"
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <LazyUnits />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/units/unit-for-sale"
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <LazySale />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/units/unit-for-rent"
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <LazyRent />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/maintenance"
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <LazyMaintenance />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/maintenance/finishes"
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <LazyFinishes />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/maintenance/3d-max"
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <LazyMax3d />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/service"
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <LazyService />
              </React.Suspense>
            }
          ></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/resetPass" element={<ResetPass />}></Route>
          <Route path="/addUnit" element={<AddUnit />}></Route>
          <Route path="/favorite" element={<Wishlist />}></Route>
          <Route path="/UserUnit" element={<UserUnit />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
        <div className="App">
          <ThemeProvider theme={theme}>
            <ChatBot
              headerTitle="RealEstate Boot"
              steps={steps}
              {...config}
              recognitionEnable={true}
            />
          </ThemeProvider>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default withLoadingSpinner(App, axios);
