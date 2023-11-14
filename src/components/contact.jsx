import React from "react";
import { useForm } from "react-hook-form";
import { Button, TextInput } from "flowbite-react";
import "./contact.css";
import { FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic here
  };

  return (
    <section className="bg__contact ">
      <div className="layer">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
              </div>
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold  tracking-tight text-white sm:text-4xl sm:leading-none">
                  Let us handle
                  <br className="hidden md:block" />
                  your next{" "}
                  <span className="inline-block text-deep-purple-accent-400">
                    destination
                  </span>
                </h2>
                <p className="my-3 flex text-gray-300 items-center ">
                  <span>
                    {" "}
                    <FaMapMarkerAlt className="text-white" />
                  </span>
                  <span className="ms-3 font-[Poppins]">
                    {" "}
                    Jl. Pelajar Pejuang 123 Majalaya Bandung Indonesia
                  </span>
                </p>
                <p className="my-3 flex text-gray-300 items-center font-[Poppins]">
                  <span>
                    {" "}
                    <ion-icon name="call"></ion-icon>
                  </span>
                  <span className="ms-3"> 022-6545-2041</span>
                </p>
                <p className="my-3 flex text-gray-300 items-center font-[Poppins]">
                  <span>
                    {" "}
                    <ion-icon name="mail-open"></ion-icon>
                  </span>
                  <span className="ms-3">Aya676670@gmail.com</span>
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center bg-white flex-col rounded-md">
              <h2 className="text-4xl font-bold my-5 font-[Poppins] text-beige">Have a question..?</h2>
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
                  {errors.email && <p className="text-beige font-[Poppins]">{errors.email.message}</p>}
                </div>
                <div>
                  <TextInput
                    id="large"
                    type="text"
                    sizing="lg"
                    {...register("message", { required: "Message is required" })}
                    placeholder="Enter Your Message"
                  />
                  {errors.message && <p className="text-beige font-[Poppins]">{errors.message.message}</p>}
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

