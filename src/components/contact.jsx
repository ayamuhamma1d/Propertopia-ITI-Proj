import React from "react";
import { useForm } from "react-hook-form";
import { TextInput } from "flowbite-react";
import "./contact.css";
function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section className="bg__contact mt-10">
      <div className="layer">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
              </div>
              <div className="max-w-xl mb-6">
                <h6 className="max-w-lg mb-3   font-bold font-serif  tracking-tight text-white sm:text-4xl text-3xl sm:leading-none">
                  Welcome to our community of creativity and innovation!
                </h6>
                <p className="max-w-lg mb-3 		font-serif  text-lg  tracking-tight text-gray-300  sm:leading-10 ">
                  You can share your opinion or any suggestions with us
                </p>

                <p className="my-3 flex text-gray-300 items-center font-serif">
                  <span>
                    {" "}
                    <ion-icon name="call"></ion-icon>
                  </span>
                  <span className="ms-3">+0123456789</span>
                </p>
                <p className="my-3 flex text-gray-300 items-center font-serif">
                  <span>
                    {" "}
                    <ion-icon name="mail-open"></ion-icon>
                  </span>
                  <span className="ms-3">service@gmail.com</span>
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center bg-white flex-col rounded-md py-3 px-5">
              <h2 className="text-4xl font-bold my-5 font-serif text-beige">Add any Questions ...?</h2>
              <form className="flex max-w-md flex-col gap-4 w-full" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <TextInput
                    id="email1"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    type="email"
                    placeholder="Enter Your Email"
                  />
                  {errors.email && <p className="text-beige font-serif">{errors.email.message}</p>}
                </div>
                <div>
                  <textarea rows="4" className=" resize-none	 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="large"
                    type="text"
                    sizing="lg"
                    {...register("message", { required: "Message is required" })}
                    placeholder="Enter Your Message"
                  />
                  {errors.message && <p className="text-beige font-serif">{errors.message.message}</p>}
                </div>
                <button
                  type="submit"
                  className="rounded-none py-3 mb-10 bg-beige1 hover:bg-beige hover:text-white"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

