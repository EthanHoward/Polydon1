/*
* Authored by Ethan Howard,
* Copyright Polydon Industries 2023
* All Rights Reserved
*
* Contact page of PDI website
* */
import {NextPage} from "next";
import ContentPage from "@/components/ContentPage";
import React from "react";
import {useForm, ValidationError} from "@formspree/react";

const ContactPage: NextPage = () => {
  return (
    <>
      <ContentPage title={"Polydon Industries - Contact"}>
        <div className="flex flex-grow">
          <ContactForm/>
        </div>
      </ContentPage>
    </>
  )
}

export default ContactPage

function ContactForm() {
  const [state, handleSubmit] = useForm("mnqynlpy");
  if (state.succeeded) {
    return <p>Thank you for Emailing us.</p>;
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center w-full h-full text-xl mt-10"
    >
      <label
        htmlFor="email"
      >
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="focus:border-PDIBLUE rounded-md mb-5 bg-zinc-200 dark:bg-zinc-700"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <label
        htmlFor="message"
      >
        Message
      </label>
      <textarea
        id="message"
        name="message"
        className="mx-2.5 h-[calc(50vw)] w-[calc(100vw-10vw)] md:h-[calc(5vh*5)] md:w-[calc(10vw*5)] rounded-md bg-zinc-200 dark:bg-zinc-700"
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button
        type="submit"
        disabled={state.submitting}
        className="bg-PDIBLUE mt-5 p-2 w-[100px] h-[calc(100/3)] rounded-md text-white"
      >
        Submit
      </button>
    </form>
  );
}