"use client";
import Image from "next/image";
import Header from "@/components/header";
import ContactForm from "@/components/contact";
import AdForm from "@/components/Ads";



export default function Home() {
  return (
    <div className="bg-gray-50">
      <Header />
      <form 
        className="bg-gray-200 flex flex-col items-center py-5" 
        action="/api/save-data" 
        method="POST"
        encType="multipart/form-data"
      >
        <ContactForm />
        <AdForm />
        <input
          type="file"
          id="analytics"
          name="analytics"
          accept="image/png, image/jpeg, image/webp"
        />
        <input
          className="bg-blue-500 text-white font-semibold text-2xl py-2 px-14 m-2 rounded-md transition-all duration-200 hover:-translate-y-0.5"
          type="submit" name="user-data" id="user-data" />
      </form>
    </div>
  );
}
