"use client";
import Image from "next/image";
import Header from "@/components/header";
import ContactForm from "@/components/contact";
import AdForm from "@/components/Ads";
import ImageForm from "@/components/img_Form";
import IntroSection from "@/components/Intro";
import SubmitSection from "@/components/submit";
import ReCAPTCHA from "react-google-recaptcha";
import React, { useState, useRef } from 'react';


export default function Home() {
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(e.currentTarget);

    const captchaToken = recaptchaRef.current?.getValue();
    

    if (!captchaToken) {
      alert('Please complete the CAPTCHA before submitting.');
      return;
    }

    formData.append('g-recaptcha-response', captchaToken);

    setLoading(true);

    try {

      const response = await fetch('/api/save-data', {
        method: 'POST',
        body: formData
      })

      const result = await response.json();

      if (response.ok) {
        // Show success message or reset the form
        console.log("Success:", result);
        form.reset();
        // Resets the reCAPTCHA checkbox on success
        recaptchaRef.current?.reset();
      }
    } catch (error) {
      console.error(error);
      recaptchaRef.current?.reset();
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
        <SubmitSection submit={submit} loading={loading} capRef={recaptchaRef} />

      </form>
    </div>
  );
}

