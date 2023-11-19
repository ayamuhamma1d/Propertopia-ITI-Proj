import { useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { auth, db, storage } from "./auth/firebase/Firebase";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const AddForm = () => {
  const [imageUploads, setImageUploads] = useState([]);
  const [urls, setUrls] = useState([]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "files",
  });

  const uploadFiles = async () => {
    try {
      const uploadPromises = imageUploads
        .slice(0, 5)
        .map(async (fileData, index) => {
          const imageRef = ref(storage, `/UnitImages/${fileData.name}`);
          const snapshot = await uploadBytes(imageRef, fileData);
          const downloadURL = await getDownloadURL(snapshot.ref);
          return downloadURL;
        });

      const newUrls = await Promise.all(uploadPromises);
      setUrls(newUrls.filter((url) => url !== null));

      return newUrls;
    } catch (error) {
      console.error("Error uploading files:", error);
      return [];
    }
  };

  const onFormSubmit = async (data) => {
    try {
      const uploadedUrls = await uploadFiles();

      const user = auth.currentUser;
      const paymentDocRef = doc(db, "Payment", user.uid);

      await setDoc(paymentDocRef, {
        email: data.email,
        exp_price: data.price,
        fullname: data.fullname,
        images: uploadedUrls,
        phone: data.phone,
        purpose: data.unitType,
        unit_address: data.unitaddress,
        unit_desc: data.description,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <section className="w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto">
        <div className="w-full lg:w-4/6 bg-beige1 shadow-2xl mx-auto p-5">
          <h5 className="text-center font-bold text-xl md:text-3xl text-beige font-[Poppins] py-3">
            Add Units
          </h5>
          <p className="text-slate-600 mx-auto text-xl text-center font-[Poppins]">
            You can list your unit on our website for sale or lease. Just fill
            out this form.
          </p>
          <form
            onSubmit={handleSubmit(onFormSubmit)}
            className="rounded px-10 pt-6 pb-8 mb-4"
          >
            <div className="mb-5">
              <input
                type="text"
                {...register("fullname", { required: true })}
                className="font-[Poppins] border-0 border-b-4 shadow border-beige rounded-md w-full py-3 px-3 text-gray-700
                        placeholder-gray-400"
                id="uname"
                placeholder="Full Name"
              />
              {errors?.fullname?.type === "required" && (
                <p className="form-text text-beige">This field is required</p>
              )}
            </div>

            <div className="mb-5">
              <input
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /^[^\s@]+@(gmail|yahoo|hotmail|outlook)\.com$/,
                })}
                className="font-[Poppins] border-0 border-b-4 shadow border-beige rounded-md w-full py-3 px-3 text-gray-700
                                placeholder-gray-400"
                id="email"
                placeholder="E-mail"
              />
              {errors?.email?.type === "required" && (
                <p className="form-text text-beige">This field is required</p>
              )}
              {errors?.email?.type === "pattern" && (
                <p className="form-text text-beige">Email is invalid</p>
              )}
            </div>

            <div className="mb-5 flex   ">
              <label className="bg-beige p-3 rounded-s-md  font-[Poppins] shadow text-white">
                +20
              </label>
              <input
                type="tel"
                {...register("phone", {
                  required: true,
                  pattern: /^(10|11|12|14|15|16|17|18|19)[0-9]{8}$/,
                })}
                className="font-[Poppins] border-0 border-b-4  w-full shadow border-beige rounded-e-md py-3 px-3 text-gray-700
                                placeholder-gray-400"
                id="tel"
                placeholder="Phone"
              />
              {errors?.phone?.type === "required" && (
                <p className="form-text text-beige">This field is required</p>
              )}
              {errors?.phone?.type === "pattern" && (
                <p className="form-text text-beige">
                  Enter a valid phone number
                </p>
              )}
            </div>

            <div className="mb-5">
              <input
                type="text"
                {...register("unitaddress", { required: true })}
                className=" font-[Poppins] border-0 border-b-4 shadow border-beige rounded-md w-full py-3 px-3 text-gray-700
                                placeholder-gray-400"
                id="address"
                placeholder="Unit Address"
              />
              {errors?.unitaddress?.type === "required" && (
                <p className="form-text text-beige">This field is required</p>
              )}
            </div>

            <div className="mb-5">
              <input
                type="text"
                {...register("description", { required: true })}
                className="font-[Poppins] border-0 border-b-4 shadow border-beige rounded-md w-full py-3 px-3 text-gray-700
                                placeholder-gray-400"
                id="desc"
                placeholder="Unit Description"
              />
              {errors?.description?.type === "required" && (
                <p className="form-text text-beige">This field is required</p>
              )}
            </div>

            <div className="mb-5">
              <input
                type="text"
                {...register("price", { required: true, pattern: /^[0-9]*$/ })}
                className="font-[Poppins] border-0 border-b-4 shadow border-beige rounded-md w-full py-3 px-3 text-gray-700
                                placeholder-gray-400"
                id="price"
                placeholder="Expected Price"
              />

              {errors?.price?.type === "required" && (
                <p className="form-text text-beige font-[Poppins]">
                  This field is required
                </p>
              )}
              {errors?.price?.type === "pattern" && (
                <p className="form-text text-beige font-[Poppins]">
                  Please enter numbers only
                </p>
              )}
            </div>

            <div className=" mb-5">
              <div className=" me-5">
                <Controller
                  name="unitType"
                  control={control}
                  defaultValue="For Sell"
                  render={({ field }) => (
                    <select
                      {...field}
                      className="appearance-none bg-white   border-0 border-b-2 border-0 border-b-4 shadow border-beige hover:border-beige py-3 rounded-md w-1/2 shadow leading-tight text-beige "
                    >
                      <option value="For Sell">For Sell</option>
                      <option value="For Rent">For Rent</option>
                    </select>
                  )}
                />
              </div>
              <div className=" my-3 flex items-center">
                <label
                  htmlFor="files"
                  className="block text-gray-700 font-[Poppins] me-3"
                >
                  Upload your unit photos (Only 5 images)
                </label>
                {fields.map((file, index) => (
                  <div key={file.id}>
                    <Controller
                      name={`files[${index}].files`}
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="file"
                          id={`images${index}`}
                          multiple
                          onChange={(event) => {
                            const filesArray = Array.from(
                              event.target.files
                            ).slice(0, 5);
                            setImageUploads([...filesArray]);
                          }}
                          className="border-gray-300 focus:border-beige my-1 focus:ring rounded-md"
                        />
                      )}
                    />
                    <button
                      type="button"
                      className="me-5"
                      onClick={() => remove(index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button type="button" onClick={() => append({ files: [] })}>
                  +
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="mt-3 w-full shadow-2xl text-white font-bold py-3 px-4 rounded bg-beige"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddForm;


