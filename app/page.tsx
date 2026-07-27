"use client";
import Image from "next/image";
import Header from "@/components/header";
import ContactForm from "@/components/contact";
import AdForm from "@/components/Ads";
import ImageForm from "@/components/img_Form";
import React, { useState } from 'react';



export default function Home() {
  const [loading, setLoading] = useState(false);

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
    }

  }

  return (
    <div className="bg-gray-50">
      <Header />
      <form
        className="bg-gray-200 flex flex-col items-center py-5"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <ContactForm />
        <AdForm />
        <ImageForm />

        {/* SUBMIT */}
        <button
          className="bg-blue-500 text-white font-semibold text-2xl py-2 px-14 m-2 rounded-md flex flex-row items-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
          type="submit"
          disabled={loading}>
            {loading && (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            )}
            {loading ? "uploading..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

