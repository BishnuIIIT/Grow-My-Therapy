import React from "react";
import Image from "next/image";

export default function HopeSection() {
  return (
    <section className="relative w-full bg-[#f7f6f2] overflow-hidden flex flex-col lg:block">
      {/* Inject Typekit fonts just for this section without touching layout */}
      <link rel="stylesheet" href="https://use.typekit.net/fsc1wsd.css" />
      
      {/* Desktop Background Image (Bleeds Right) */}
      <div className="hidden lg:block absolute right-0 top-[8%] bottom-[8%] w-[33%] xl:w-[30%] z-10">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7a40691c-70a5-4307-b9ae-974592087a8f/Jennifer+A+-+Images+%283%29.jpg"
          alt="Sandy beach with gentle ocean waves and a cloudy sky representing calm and healing"
          fill
          sizes="35vw"
          className="object-cover object-center"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-24 pb-20 lg:pt-36 lg:pb-36">
        {/* Left Content Area (~65-70%) */}
        <div className="w-full lg:w-[67%] xl:w-[65%] flex flex-col">
          
          {/* Heading */}
          <div className="mb-14 lg:mb-20 w-full">
            <h2 className="text-[38px] sm:text-[44px] md:text-[50px] lg:text-[46px] xl:text-[52px] leading-[1.2] font-light text-[#2b2b2b] tracking-[-0.01em] font-['beaufort-pro',serif]">
              You&apos;re holding onto hope that life can be better than it is right now.
            </h2>
          </div>
          
          {/* Two Text Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 lg:pr-8">
            
            {/* Left Column */}
            <div className="space-y-8">
              <p className="text-[12px] sm:text-[13px] md:text-[14px] font-[500] uppercase tracking-[0.18em] text-[#2b2b2b] leading-[1.6] font-['gravesend-sans',sans-serif]">
                AT CONEJO VALLEY FAMILY COUNSELING WE WANT TO MAKE THAT HOPE A REALITY.
              </p>
              <p className="text-[15.5px] sm:text-[16.5px] leading-[1.8] text-[#555] font-[300] font-['gravesend-sans',sans-serif]">
                Whether you&apos;re an adult seeking personal growth, looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life&apos;s ups and downs.
              </p>
            </div>

            {/* Right Column */}
            <div>
              <p className="text-[15.5px] sm:text-[16.5px] leading-[1.8] text-[#555] font-[300] font-['gravesend-sans',sans-serif]">
                First and foremost, we believe what you&apos;re going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles. As we tap into the power of connection and understanding, you can find your footing again and take a transformative path forward.
              </p>
            </div>
            
          </div>
        </div>
      </div>

      {/* Mobile Image Layer (Stacks below text) */}
      <div className="lg:hidden w-full h-[50vh] sm:h-[60vh] relative">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7a40691c-70a5-4307-b9ae-974592087a8f/Jennifer+A+-+Images+%283%29.jpg"
          alt="Sandy beach with gentle ocean waves and a cloudy sky representing calm and healing"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      
    </section>
  );
}
