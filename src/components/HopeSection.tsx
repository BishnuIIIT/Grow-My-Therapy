import React from "react";
import Image from "next/image";

export default function HopeSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden flex flex-col lg:block">
      
      {/* Desktop Background Image (Bleeds Right) */}
      <div className="hidden lg:block absolute right-0 top-[8%] bottom-[8%] w-[36%] xl:w-[32%] z-10">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7a40691c-70a5-4307-b9ae-974592087a8f/Jennifer+A+-+Images+%283%29.jpg"
          alt="Sandy beach with gentle ocean waves and a cloudy sky representing calm and healing"
          fill
          sizes="35vw"
          className="object-cover object-center"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 pt-20 pb-16 lg:pt-32 lg:pb-32">
        {/* Left Content Area (~65%) */}
        <div className="w-full lg:w-[63%] xl:w-[60%] flex flex-col">
          
          {/* Heading */}
          <div className="mb-14 lg:mb-20">
            <h2 className="font-serif text-[38px] sm:text-[46px] md:text-[54px] lg:text-[62px] leading-[1.15] font-light text-[#2b2b2b] tracking-[-0.01em]">
              You&apos;re holding onto hope that life can be<br className="hidden md:block"/> better than it is right now.
            </h2>
          </div>
          
          {/* Two Text Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 lg:pr-10">
            
            {/* Left Column */}
            <div className="space-y-6">
              <p className="font-sans text-[11px] sm:text-[12px] md:text-[13px] font-bold italic uppercase tracking-[0.15em] text-[#2b2b2b] leading-[1.6]">
                AT CONEJO VALLEY FAMILY COUNSELING WE WANT TO MAKE THAT HOPE A REALITY.
              </p>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#555] font-light">
                Whether you&apos;re an adult seeking personal growth, looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life&apos;s ups and downs.
              </p>
            </div>

            {/* Right Column */}
            <div>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#555] font-light">
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
