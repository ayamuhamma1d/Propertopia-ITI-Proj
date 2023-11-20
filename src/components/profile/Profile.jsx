import { useEffect, useState } from "react";
import UserData from "./../usersData/UserData";
import EditUserData from "./../editUserData/EditUserData";
import ChangePassword from "./../changePass/ChangePassword";
import Wishlist from "./../wishlist/Wishlist";
import { Card, Typography, List, ListItem } from "@material-tailwind/react";
import styles from "./profile.module.css";
import { auth } from "../auth/firebase/Firebase";
const Profile = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [userName]);
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
    <div className={`flex ${styles.profile}`}>
      <Card className= {`shadow-xl shadow-blue-gray-900/5 me-3  font-serif text-left text-3xl ${styles.links}`} >
        <div className="mb-2">
          <Typography variant="h5" color="blue-gray">
            <span className="text-base md:text-base lg:text-lg xl:text-xl ">
              {userName}
            </span>
          </Typography>
        </div>
        <List>
          <ListItem
            className={`${
              activeButton === "UserData"
                ? styles.active_select
                : styles.not_active_select
            } font-serif`}
            onClick={handleEditClickUserBtn}
          >
            User Data
          </ListItem>
          <ListItem
            className={`${
              activeButton === "EditUserData"
                ? styles.active_select
                : styles.not_active_select
            } font-serif`}
            onClick={handleEditClickEditBtn}
          >
            Edit User Data
          </ListItem>
          <ListItem
            className={`${
              activeButton === "ChangePass"
                ? styles.active_select
                : styles.not_active_select
            } font-serif`}
            onClick={handleEditClickChangePassBtn}
          >
            Change Password
          </ListItem>
          <ListItem
            className={`${
              activeButton === "Wishlist"
                ? styles.active_select
                : styles.not_active_select
            } font-serif`}
            onClick={handleEditClickSaved}
          >
            Favorite
          </ListItem>
        </List>
      </Card>
      <div className={styles.profile_content}>
        {activeButton === "EditUserData" ? (
          <EditUserData />
        ) : activeButton === "ChangePass" ? (
          <ChangePassword />
        ) : activeButton === "Wishlist" ? (
          <Wishlist />
        ) : (
          <UserData />
        )}
      </div>
    </div>
  );
};
export default Profile;
