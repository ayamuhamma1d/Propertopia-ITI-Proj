import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./userData.module.css";

const UserData = ({ user }) => {
  return (
    <div className={` flex justify-between items-center px-10  border-beige flex-wrap`}>
      <div className=' w-full mb-10'>
        <img src={user.photo} alt={user.name} className={`${styles.user_photo} mb-10 shadow-xl `} />
        <div className="flex flex-col gap-10">
          <div className={`${styles.profile_left_content_ele} bg-white shadow`}>
            <div className={styles.profile_left_content_ele_svg}>
              <FontAwesomeIcon icon={faUser} />
            </div>
            <p>
              <span className="ms-4 text-slate-700 font-[Poppins] "> {user.name}</span>
            </p>
          </div>
          <div className={`${styles.profile_left_content_ele} bg-white shadow`}>
            <div className={styles.profile_left_content_ele_svg}>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <p>
              <span className="ms-4 text-slate-700 font-[Poppins] "> {user.email}</span>
            </p>
          </div>
          <div className={`${styles.profile_left_content_ele} bg-white shadow`}>
            <div className={styles.profile_left_content_ele_svg}>
              <FontAwesomeIcon icon={faPhone}/>
            </div>
            <p>
              <span className="ms-4 text-slate-700 font-[Poppins] "> {user.phone}</span>
            </p>
          </div>
          <div className={`${styles.profile_left_content_ele} bg-white shadow`}>
            <div className={styles.profile_left_content_ele_svg}>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
            <p>
              <span className="ms-4 text-slate-700 font-[Poppins] "> {user.address}</span>
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.profile_left_content_ele} bg-white w-full py-3  border-beige1 border-solid  mb-10 justify-end`}>
          <p className={`${styles.ele_svg} flex items-center text-2xl font-[Poppins]  mx-3 text-beige`}>
            <FontAwesomeIcon icon={faHeart} className="text-2xl me-3 text-beige"/>Favorite Units :
          </p>
          <span className={`${styles.addtocard_num} text-2xl text-gray-500`}>{user.addToCard.length}</span>
      </div>
    </div>
  );
};

export default UserData;