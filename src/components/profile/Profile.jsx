import { useState } from "react";
import UserData from "./../usersData/UserData";
import EditUserData from "./../editUserData/EditUserData";
import ChangePassword from "./../changePass/ChangePassword";
import Wishlist from "./../wishlist/Wishlist";
import { Card, Typography, List, ListItem } from "@material-tailwind/react";
import styles from "./profile.module.css";

const dummyUserData = {
  name: "Aya Muhammad",
  email: "Aya676670@gmail.com",
  photo:
    "https://cdn.vectorstock.com/i/preview-1x/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.jpg",
  phone: "123-456-7890",
  address: "123 Main St, City, Country",
  addToCard: [{}, {}, {}, {}],
};

const Profile = () => {
  const [activeButton, setActiveButton] = useState("UserData");

  const handleEditClickUserBtn = () => {
    setActiveButton("UserData");
  };

  const handleEditClickEditBtn = () => {
    setActiveButton("EditUserData");
  };

  const handleEditClickChangePassBtn = () => {
    setActiveButton("ChangePass");
  };
  const handleEditClickSaved = () => {
    setActiveButton("Wishlist");
  };

  return (
  
      <div className={styles.profile_container}>
        <Card className="h-[calc(100vh-2rem)] w-full max-w-[17rem] flex flex-col shadow-xl shadow-blue-gray-900/5 flex-col font-[Poppins] text-left text-3xl ">
          <div className="mb-2">
            <Typography variant="h5" color="blue-gray">
              <span className="text-base md:text-base lg:text-lg xl:text-xl ">
                {dummyUserData.name}
              </span>
            </Typography>
          </div>
          <List>
            <ListItem
              className={
                `${activeButton === "UserData"
                  ? styles.active_select
                  : styles.not_active_select} font-[Poppins]`
              }
              onClick={handleEditClickUserBtn}
            >
              User Data
            </ListItem>
            <ListItem
              className={
               `${ activeButton === "EditUserData"
                  ? styles.active_select
                  : styles.not_active_select} font-[Poppins]`
              }
              onClick={handleEditClickEditBtn}
            >
              Edit User Data
            </ListItem>
            <ListItem
              className={`${
                activeButton === "ChangePass"
                  ? styles.active_select
                  : styles.not_active_select} font-[Poppins]`
              }
              onClick={handleEditClickChangePassBtn}
            >
              Change Password
            </ListItem>
            <ListItem
              className={`${
                activeButton === "Wishlist"
                  ? styles.active_select
                  : styles.not_active_select} font-[Poppins]`
              }
              onClick={handleEditClickSaved}
            >
             Favorite
            </ListItem>
          </List>
        </Card>
        <div className={styles.profile_content}>
          {activeButton === "EditUserData" ? (
            <EditUserData user={dummyUserData} />
          ) : activeButton === "ChangePass" ? (
            <ChangePassword />
          ) : activeButton === "Wishlist" ? (
            <Wishlist />
          )  : (
            <UserData user={dummyUserData} />
          )}
        </div>
      </div>

  );
};

export default Profile;