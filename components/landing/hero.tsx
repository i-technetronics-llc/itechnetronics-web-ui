// components/Hero.tsx
import Image from "next/image";
import heroImage from "@/public/assets/hero2.svg";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="container max-w-6xl mx-auto  flex flex-col-reverse lg:flex-row items-center lg:justify-between py-16">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl capitalize sm:text-5xl font-bold text-gray-900 leading-tight">
            Build your apps <br /> faster and better
          </h1>
          <p className="mt-6 text-gray-600 text-lg">
           Welcome to the Future of Digital Innovation.
          </p>
          <button className="mt-8 bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-blue-500 cursor-pointer transition">
            Get a Free Consultation Now
          </button>
          <p className="mt-4 text-gray-500 text-sm">
            We are <strong>Itechnetronics</strong>. We create solutions that are friendly, easy to use,
affordable, and accessible, ensuring we serve the
underserved.
We are a dynamic force dedicated to developing
cutting-edge hardware and software solutions with a
strong focus on people
          </p>
          {/* Partners */}
          {/* <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            <Image width={100} height={100} src="/partners/uk.png" alt="UK" className="h-8" />
            <Image width={100} height={100} src="/partners/microsoft.png" alt="Microsoft" className="h-8" />
            <Image width={100} height={100} src="/partners/oracle.png" alt="Oracle" className="h-8" />
            <Image width={100} height={100} src="/partners/dell.png" alt="Dell" className="h-8" />
            <Image width={100} height={100} src="/partners/sap.png" alt="SAP" className="h-8" />
          </div> */}
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 mb-12 lg:mb-0 flex justify-center lg:justify-end">
          <Image
            src={heroImage}
            alt="AI and Data Illustration"
            width={1200}
            height={900}
            className="object-contain  "
          />
        </div>
      </div>
    </section>
  );
}
