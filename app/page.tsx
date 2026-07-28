"use client";
import Image from "next/image";
import Header from "@/components/header";
import ContactForm from "@/components/contact";
import AdForm from "@/components/Ads";
import ImageForm from "@/components/img_Form";
import IntroSection from "@/components/Intro";
import SubmitSection from "@/components/submit";
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
        <SubmitSection submit={submit} loading={loading} />

      </form>
    </div>
  );
}

