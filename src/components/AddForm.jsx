import { useEffect, useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { auth, db, storage } from "./auth/firebase/Firebase";
import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Textarea } from "flowbite-react";
import styles from "./editUserData/editUserData.module.css";

const AddForm = () => {
  const [imageUploads, setImageUploads] = useState([]);
  const [urls, setUrls] = useState([]);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userID, setUserID] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [units, setUnits] = useState([]); 
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserName(user.displayName);
      setUserEmail(user.email);
      setUserID(user.uid);
    }
  }, []);

  const getCollectionData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const collectionData = querySnapshot.docs.map((doc) => {
        const data = { ...doc.data() };
        setUserPhone(data.phoneNumber);
        const docId = doc.id;
        return { docId, ...data };
      });
      return collectionData;
    } catch (error) {
      console.error("Error getting collection data: ", error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getCollectionData();
    };

    fetchData();
  }, [userName]);

  const {
    register,
    handleSubmit,
    control,
    setValue,
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
      if (imageUploads.length > 5) {
        setErrorMessage(
          "You uploaded more than 5 images. Upload only 5 images."
        );
        return;
      }

      const uploadedUrls = await uploadFiles();

      const user = auth.currentUser;
      const paymentCollectionRef = collection(db, "Payment");

      const newPaymentDocRef = await addDoc(paymentCollectionRef, {
        userID: userID,
        fullname: userName,
        price: data.price,
        images: uploadedUrls,
        phone: userPhone,
        purpose: data.purpose,
        unit_desc: data.description,
        type_of_unit: data.type_of_unit,
        Bathrooms: data.Bathrooms,
        area: data.area,
        bedrooms: data.bedrooms,
        floor: data.floor,
        location: data.location,
      });
      setUnits((prevUnits) => [...prevUnits, newPaymentDocRef.id]);

      reset();
      setImageUploads([]);
      remove();
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
          <p className="text-slate-600 mx-auto text-lg text-center font-[Poppins]">
            Unleash the power of 3D allure! Our fee, dancing between 3% to 5%
            per unit, covers stunning 3D models and targeted advertising for
            your property's spotlight moment.
          </p>
          <form
            onSubmit={handleSubmit(onFormSubmit)}
            className="rounded px-10 pt-6 pb-8 mb-4"
          >
            <div className="mb-5">
              <input
                type="text"
                {...register("bedrooms", {
                  required: true,
                  pattern: /^[0-9]*$/,
                })}
                className="font-[Poppins] border-0 border-b-4 shadow border-beige rounded-md w-full py-3 px-3 text-gray-700
                                placeholder-gray-400"
                id="bedrooms"
                placeholder="Bedroom Count"
              />

              {errors?.bedrooms?.type === "required" && (
                <p className="form-text text-beige font-[Poppins]">
                  This field is required
                </p>
              )}
              {errors?.bedrooms?.type === "pattern" && (
                <p className="form-text text-beige font-[Poppins]">
                  Please enter numbers only
                </p>
              )}
            </div>
            <div className="mb-5">
              <input
                type="text"
                {...register("Bathrooms", {
                  required: true,
                  pattern: /^[0-9]*$/,
                })}
                className="font-[Poppins] border-0 border-b-4 shadow border-beige rounded-md w-full py-3 px-3 text-gray-700
                                placeholder-gray-400"
                id="Bathrooms"
                placeholder="Bathroom count"
              />

              {errors?.Bathrooms?.type === "required" && (
                <p className="form-text text-beige font-[Poppins]">
                  This field is required
                </p>
              )}
              {errors?.Bathrooms?.type === "pattern" && (
                <p className="form-text text-beige font-[Poppins]">
                  Please enter numbers only
                </p>
              )}
            </div>
            <div className="mb-5">
              <input
                type="text"
                {...register("floor", {
                  required: true,
                  pattern: /^[0-9]*$/,
                })}
                className="font-[Poppins] border-0 border-b-4 shadow border-beige rounded-md w-full py-3 px-3 text-gray-700
                                placeholder-gray-400"
                id="floor"
                placeholder="Floor"
              />

              {errors?.floor?.type === "required" && (
                <p className="form-text text-beige font-[Poppins]">
                  This field is required
                </p>
              )}
              {errors?.floor?.type === "pattern" && (
                <p className="form-text text-beige font-[Poppins]">
                  Please enter numbers only
                </p>
              )}
            </div>
            <div className="mb-5">
              <input
                type="text"
                {...register("area", {
                  required: true,
                  pattern: /^[0-9]*$/,
                })}
                className="font-[Poppins] border-0 border-b-4 shadow border-beige rounded-md w-full py-3 px-3 text-gray-700
                                placeholder-gray-400"
                id="area"
                placeholder="Unit area in meter"
              />

              {errors?.area?.type === "required" && (
                <p className="form-text text-beige font-[Poppins]">
                  This field is required
                </p>
              )}
              {errors?.area?.type === "pattern" && (
                <p className="form-text text-beige font-[Poppins]">
                  Please enter numbers only
                </p>
              )}
            </div>

            <div className="mb-5">
              <input
                type="text"
                {...register("location", { required: true })}
                className=" font-[Poppins] border-0 border-b-4 shadow border-beige rounded-md w-full py-3 px-3 text-gray-700
                                placeholder-gray-400"
                id="location"
                placeholder="Unit Location"
              />
              {errors?.location?.type === "required" && (
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
                placeholder="Price (Sale) or Price/Day (Rent) "
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
            <div className="mb-5">
              <Textarea
                style={{ resize: "none" }}
                type="text"
                rows={5}
                cols={20}
                {...register("description", { required: true })}
                className="font-[Poppins] border-0 border-b-4 shadow border-beige rounded-md w-full py-3 px-3 text-gray-700
                                placeholder-gray-400"
                id="description"
                placeholder="Unit Description"
              />
              {errors?.description?.type === "required" && (
                <p className="form-text text-beige">This field is required</p>
              )}
            </div>
            <div className=" mb-5">
              <div className=" me-5">
                <Controller
                  name="purpose"
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

              <div className=" me-5 mt-4">
                <Controller
                  name="type_of_unit"
                  control={control}
                  defaultValue="villa"
                  render={({ field }) => (
                    <select
                      {...field}
                      className="appearance-none bg-white   border-0 border-b-2 border-0 border-b-4 shadow border-beige hover:border-beige py-3 rounded-md w-1/2 shadow leading-tight text-beige "
                    >
                      <option value="villa">Villa</option>
                      <option value="apartment">Apartment</option>
                      <option value="studio">Studio</option>
                      <option value="duplex">Duplex</option>
                    </select>
                  )}
                />
              </div>
              <div className="my-3">
                {fields.map((file, index) => (
                  <div key={file.id} className="flex items-center mb-2">
                    <div className="relative">
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
                            className="hidden"
                          />
                        )}
                      />
                      <label
                        htmlFor={`images${index}`}
                        className="cursor-pointer border border-gray-300 bg-white rounded-md px-4 py-2 inline-block"
                      >
                        Choose File
                      </label>
                    </div>
                    <span className="mx-3">
                      {imageUploads.length > 0
                        ? `${imageUploads.length} images`
                        : ""}
                    </span>
                    <button
                      type="button"
                      className="border border-gray-300 bg-white rounded-md px-4 py-2"
                      onClick={() => remove(index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => append({ files: [] })}
                  className="border border-gray-300 bg-white rounded-md px-4 py-2"
                >
                  Upload Images
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="mt-3 w-full shadow-2xl text-white font-bold py-3 px-4 rounded bg-beige"
            >
              Submit
            </button>
            <div
              className={` ${
                styles.errorArea
              } my-3 text-white font-bold p-2 text-center ${
                errorMessage ? "block" : "hidden"
              }`}
              id="message_area"
            >
              {errorMessage && <p>{errorMessage}</p>}
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddForm;
