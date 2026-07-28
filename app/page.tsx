"use client";
import Image from "next/image";
import Header from "@/components/header";
import ContactForm from "@/components/contact";
import AdForm from "@/components/Ads";
import ImageForm from "@/components/img_Form";
import IntroSection from "@/components/Intro";
import React, { useState } from 'react';



export default function Home() {
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(e.currentTarget);

    setLoading(true);

    try {

      const response = await fetch('/api/save-data', {
        method: 'POST',
        body: formData
      })

      const result = await response.json();

      if (response.ok) {
        console.log("Success:", result);
        // Show success message or reset the form
        form.reset();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setSubmit(true);
    }

  }

  return (
    <div className="bg-gray-200">
      <Header />
      <div className="flex flex-col items-center">
        <IntroSection />
      </div>
      <form
        className=" flex flex-col items-center py-5"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <ContactForm />
        <AdForm />
        <ImageForm />

        {/* SUBMIT */}
        <div className="bg-white w-3/5 p-4 flex flex-col rounded-sm mt-5">
          {!submit ? (
            // BEFORE SUBMISSION
            <div className="flex flex-row justify-between">
              <div>
                <p>Your Privacy Matters</p>
                <p>We do not sell your information.</p>
                <p>Responses are used only for research.</p>
              </div>
              {/* SUBMIT BUTTON */}
              <button
                className="bg-blue-500 text-white font-semibold text-2xl py-2 px-14 h-13 mt-2 mr-30 rounded-md flex flex-row items-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
                type="submit"
                disabled={loading}>
                {loading && (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                )}
                {loading ? "uploading..." : "Submit"}
              </button>
            </div>
          )
            :
            // AFTER SUBMISSION
            <div >
              <p>Thank you!</p>
              <p>Your response has been received.</p>
              <p>We appreciate your participation.</p>
            </div>
          }
        </div>

      </form>
    </div>
  );
}

