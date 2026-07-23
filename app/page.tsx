import Image from "next/image";
import Header from "@/components/header";
import ContactForm from "@/components/contact";
import AdForm from "@/components/Ads";

export default function Home() {
  return (
    <div className="bg-gray-50"> 
      <Header />
      <div className="bg-gray-200 flex flex-col items-center py-5">
        <ContactForm />
        <AdForm />
      </div>
    </div>
  );
}
