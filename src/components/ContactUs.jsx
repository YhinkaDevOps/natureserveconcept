"use client";
import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import emailsent from "../../public/assets/email-sent.gif";
import Image from "next/image";
import Link from "next/link";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("");
  if (state.succeeded) {
    return (
      <div className="products-bg service-header contact-form-bg font-bold flex flex-col gap-5 justify-center items-center min-h-[600px] md:min-h-screen">
        <span className="rounded">
          <Image src={emailsent} width={100} height={100} alt="email" />
        </span>
        <h4 className="text-4xl text-white">Thank You!</h4>
        <h4 className="text-3xl text-center text-white">
          Your submission has been sent
        </h4>
        <button className="text-white px-7 py-3 rounded-md bg-red-600 hover:bg-orange-600 transition duration-300 ease-in-out">
          <Link href="/">Home</Link>
        </button>
      </div>
    );
  }
  return (
    <div name="contact" className="min-h-screen pt-[79px]">
      <div className="max-w-[1100px] mx-auto mb-7">
      </div>
      {/* Contact Container */}
      <div className="mx-auto max-w-[1099px] my-10 px-4 md:px-0 w-full grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-4">
        <div className="contact-form border shadow-lg shadow-[rgb(4,12,22)] container rounded-md p-7 order-last">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="input-group mb-7">
              <label htmlFor="name">Name</label>
              <input id="name" type="name" name="name" required />
            </div>
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <div className="input-group mb-7">
              <label htmlFor="email">Email Address</label>
              <input id="email" type="email" name="email" required />
            </div>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <div className="input-group mb-7">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required rows={5} />
            </div>

            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              className="px-7 py-3 rounded-md border-[1px] border-[#000000] hover:bg-orange-600 hover:text-white transition duration-300 ease-in-out"
              type="submit"
              disabled={state.submitting}
              // onClick={notify}
            >
              SUBMIT
            </button>
            {/* <ToastContainer /> */}
          </form>
        </div>
        <div className="contact-form border shadow-lg shadow-[rgb(4,12,22)] flex flex-col gap-2 p-7">
          <h3 className="text-[#000000] text-2xl font-semibold">Visit Us</h3>
          <div>
            <p>5, Ikorodu Road </p>
            <p>Maryland</p>
            <p>Lagos State</p>
            <p>Nigeria</p>
          </div>

          <h3 className="text-[#000000]] text-2xl font-semibold">Phone Us</h3>
          <div>
            <p>Customer Service:</p>
            <p> 08033301526</p>
          </div>

          <h3 className="text-[#000000] text-2xl font-semibold">Email Us</h3>
          <div>
            <p>natureserveconcept@gmail.com</p>
            <p>sam_olajide@yahoo.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
