import { useForm, Controller } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faPhone, faMapMarkerAlt, faCamera } from "@fortawesome/free-solid-svg-icons";
import styles from "./editUserData.module.css";

function EditProfile({ user }) {
  const { handleSubmit, control, setError, formState } = useForm();
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto mb-10">
      <h5 className="text-left mb-10 ms-2 text-2xl">Edit Your Data</h5>
      <form onSubmit={handleSubmit(onSubmit)} className="gap-6">
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-center mb-5">
            <div className="bg-beige py-3 rounded-s-2xl px-5 text-white">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <Controller
              name="name"
              control={control}
              defaultValue={user.name}
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <>
                  <input
                    type="text"
                    {...field}
                    className="border-none w-full font-[Poppins] py-3 me-4 focus:border-beige bg-white shadow rounded-e-2xl"
                  />
                  {errors.name && (
                    <div className="bg-beige1 border border-beige text-beige px-4 py-3 text-xs rounded relative" role="alert">
                      <span className="block sm:inline font-bold">{errors.name.message}</span>
                    </div>
                  )}
                </>
              )}
            />
          </div>
          <div  className="flex items-center justify-center mb-5">
        <div className="bg-beige py-3 rounded-s-2xl  px-5 text-white">
        <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <Controller
          name="email"
          control={control}
          defaultValue={user.email}
          rules={{ required:"Email is required" }}
          render={({ field }) => (
            <>
              <input type="text" {...field} className=" border-none w-full font-[Poppins] py-3 bg-white shadow rounded-e-2xl me-4 " />
              {errors.email && (
         
                <div class="bg-beige1 border border-beige text-beige px-4 py-3 text-xs rounded relative" role="alert">
                <span class="block sm:inline font-bold">{errors.email.message}</span>
   
              </div>
              )}
            </>
          )}
        />
      </div >
      <div  className="flex items-center justify-center mb-5">
        <div className="bg-beige py-3 rounded-s-2xl  px-5 text-white">
        <FontAwesomeIcon icon={faPhone} />
        </div>
        <Controller
          name="phone"
          control={control}
          defaultValue={user.phone}
          rules={{ required: "Phone is required" }}
          render={({ field }) => (
            <>
              <input type="text" {...field} className=" border-none w-full me-4 font-[Poppins] py-3 bg-white shadow rounded-e-2xl " />
              {errors.phone && (
                <div className="bg-beige1 border border-beige text-beige px-4 py-3 text-xs rounded relative" role="alert">
                <span className="block sm:inline font-bold">{errors.phone.message}</span>
   
              </div>
              )}
            </>
          )}
        />
      </div>
      <div  className="flex items-center justify-center mb-5">
        <div className="bg-beige py-3 rounded-s-2xl  px-5 text-white">
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        </div>
        <Controller
          name="address"
          control={control}
          defaultValue={user.address}
          rules={{ required: "Address is required" }}
          render={({ field }) => (
            <>
              <input type="text" {...field} className=" border-none w-full font-[Poppins] py-3 bg-white shadow rounded-e-2xl me-4 "/>
              {errors.address && (
             
                <div className="bg-beige1 border border-beige text-beige px-4 py-3 text-xs rounded relative " role="alert">
                <span className="block sm:inline font-bold ">{errors.address.message}</span>
   
              </div>
              )}
            </>
          )}
        />
      </div>
      <div  className="flex items-center justify-center mb-5">
        <div className="bg-beige py-3 rounded-s-2xl  px-5 text-white">
        <FontAwesomeIcon icon={faCamera} />
        </div>
        <Controller
          name="photo"
          control={control}
          defaultValue={user.photo}
          rules={{ required: "Photo is required" }}
          render={({ field }) => (
            <>
              <input type="text" {...field} className=" border-none w-full font-[Poppins] py-3 bg-white shadow rounded-e-2xl me-4 " />
              {errors.photo && (
                <div className="bg-beige1 border border-beige text-beige px-4 py-3 text-xs rounded relative" role="alert">
                <span className="block sm:inline font-bold">{errors.photo.message}</span>
              </div>
              )}
            </>
          )}
        />
      </div>
        </div>
        <button
          type="submit"
          className={` text-white bg-beige font-semibold py-2 px-4 rounded-3xl shadow-lg text-lg font-[Poppins] w-48`}
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditProfile;