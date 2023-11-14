import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import styles from "./changePassword.module.css";

const ChangePassword = () => {
  const { handleSubmit, control, watch, setError, formState } = useForm();
  const { errors } = formState;
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  const passwordMatch = (value) => {
    const newPassword = watch("newPassword");
    return newPassword === value || "Passwords do not match";
  };

  const togglePasswordVisibility = (field) => {
    switch (field) {
      case "oldPassword":
        setShowOldPassword((prevShowPassword) => !prevShowPassword);
        break;
      case "newPassword":
        setShowNewPassword((prevShowPassword) => !prevShowPassword);
        break;
      case "confirmPassword":
        setShowConfirmPassword((prevShowPassword) => !prevShowPassword);
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto mb-10">
              <h5 className="text-left mb-10 ms-2 text-2xl capitalize">Change Your password</h5>
      <form onSubmit={handleSubmit(onSubmit)} className="gap-6">
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-center mb-5">
            <div onClick={() => togglePasswordVisibility("oldPassword")} className="bg-beige py-3 rounded-s-2xl px-5 text-white"> 
              {showOldPassword ? (
                <FontAwesomeIcon icon={faEye} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} />
              )}
            </div>
            <Controller
              name="oldPassword"
              control={control}
              defaultValue=""
              rules={{ required: "Old Password is required" }}
              render={({ field }) => (
                <>
                  <input
                    type={showOldPassword ? "text" : "password"}
                    placeholder="Old Password"
                    {...field}
                    className="border-none w-full font-[Poppins] py-3 me-4 focus:border-beige bg-white shadow rounded-e-2xl"
                  />
                  {errors.oldPassword && (
                    <p className="bg-beige1 border border-beige text-beige px-4 py-3 text-xs rounded relative">{errors.oldPassword.message}</p>
                  )}
                </>
              )}
            />
          </div>
          <div  className="flex items-center justify-center mb-5">
            <div onClick={() => togglePasswordVisibility("newPassword")} className="bg-beige py-3 rounded-s-2xl px-5 text-white">
              {showNewPassword ? (
                <FontAwesomeIcon icon={faEye} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} />
              )}
            </div>
            <Controller
              name="newPassword"
              control={control}
              defaultValue=""
              rules={{ required: "New Password is required" }}
              render={({ field }) => (
                <>
                  <input
                    type={showNewPassword ? "text" : "password"}
                    placeholder="New Password"
                    {...field}
                    className="border-none w-full font-[Poppins] py-3 me-4 focus:border-beige bg-white shadow rounded-e-2xl"
                  />
                  {errors.newPassword && (
                    <p className="bg-beige1 border border-beige text-beige px-4 py-3 text-xs rounded relative">{errors.newPassword.message}</p>
                  )}
                </>
              )}
            />
          </div>
          <div  className="flex items-center justify-center mb-5">
            <div onClick={() => togglePasswordVisibility("confirmPassword")} className="bg-beige py-3 rounded-s-2xl px-5 text-white">
              {showConfirmPassword ? (
                <FontAwesomeIcon icon={faEye} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} />
              )}
            </div>
            <Controller
              name="confirmPassword"
              control={control}
              defaultValue=""
              rules={{
                required: "Confirm New Password is required",
                validate: passwordMatch,
              }}
              render={({ field }) => (
                <>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm New Password"
                    {...field}
                    className="border-none w-full font-[Poppins] py-3 me-4 focus:border-beige bg-white shadow rounded-e-2xl"
                  />
                  {errors.confirmPassword && (
                    <p className="bg-beige1 border border-beige text-beige px-4 py-3 text-xs rounded relative">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>
        </div>
        <button
          type="submit"
          className={` text-white bg-beige font-semibold py-2 px-4 rounded-3xl shadow-lg text-lg font-[Poppins] w-48 `}
        >
          Confirm
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;