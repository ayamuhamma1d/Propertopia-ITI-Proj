import React from "react";
import { Button, TextInput } from "flowbite-react";
import "./contact.css";
import { FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section className="bg__contact">
      <div className="layer">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
                {/* Icon */}

              </div>
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                  Let us handle
                  <br className="hidden md:block" />
                  your next{" "}
                  <span className="inline-block text-deep-purple-accent-400">
                    destination
                  </span>
                </h2>
                <p className="my-3 flex text-gray-300 items-center">
                  <span>
                    {" "}
                    <FaMapMarkerAlt className="text-white" />
                  </span>
                  <span className="ms-3">
                    {" "}
                    Jl. Pelajar Pejuang 123 Majalaya Bandung Indonesia
                  </span>
                </p>
                <p className="my-3 flex text-gray-300 items-center">
                  <span>
                    {" "}
                    <FaMapMarkerAlt className="text-white" />
                  </span>
                  <span className="ms-3"> 022-6545-2041</span>
                </p>

              </div>
              <div>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  Learn more
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center bg-white flex-col rounded-md">
              <h2 className="text-4xl font-bold my-10">Have a question..?</h2>
              <form className="flex max-w-md flex-col gap-4 w-full">
                <div>
                  <TextInput
                    id="email1"
                    href="mailto:aya676670@gmail.com"
                    type="email"
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
                <div>
                  <TextInput id="large" type="text" sizing="lg" />
                </div>
                <Button
                  type="submit"
                  className="rounded-none py-3 mb-10"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

