import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full bg-[#f9f8f6] relative overflow-hidden" style={{ minHeight: "850px" }}>
      
      {/* ============================================================ */}
      {/* DESKTOP LAYOUT (>= 1024px)                                   */}
      {/* ============================================================ */}
      <div className="hidden lg:block w-full relative mx-auto max-w-[1920px]" style={{ minHeight: "850px" }}>
        
        {/* Left Image */}
        <div 
          className="absolute"
          style={{ 
            left: 0, 
            top: "250px", 
            width: "clamp(120px, 12vw, 220px)", 
            height: "520px" 
          }}
        >
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/1b9495e0-ce39-4826-9df9-e24de99da82f/Jennifer+A+-+Images+%2812%29.jpg"
            alt="Sandy beach with seashells"
            fill
            sizes="250px"
            className="object-cover object-center"
          />
        </div>

        {/* Center Content */}
        <div 
          className="absolute flex flex-col items-start"
          style={{ 
            left: "clamp(150px, 20.5vw, 365px)", 
            top: "125px", 
            width: "clamp(450px, 40vw, 680px)" 
          }}
        >
          {/* Label */}
          <p 
            className="font-sans font-medium uppercase text-[#739294] tracking-[0.15em] mb-[30px]" 
            style={{ fontSize: "11px" }}
          >
            SCHEDULE AN APPOINTMENT
          </p>

          {/* Heading */}
          <h2 
            className="font-['beaufort-pro',serif] text-[#2b2b2b] tracking-normal font-normal mb-[45px]"
            style={{ fontSize: "clamp(38px, 2.8vw, 48px)", lineHeight: "1.25" }}
          >
            <span className="whitespace-nowrap">Find a therapist who is the right</span><br className="hidden xl:block" /> fit for <span className="text-[#86b3b3] italic font-medium" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.2em", marginLeft: "0.05em", paddingRight: "0.1em" }}>you.</span>
          </h2>

          {/* Body Text */}
          <p 
            className="font-light text-[#555] mb-[25px]" 
            style={{ fontSize: "15.5px", lineHeight: "1.75", fontFamily: "var(--font-mulish), system-ui, sans-serif" }}
          >
            Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we&apos;re here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.
          </p>
          <p 
            className="font-light text-[#555] mb-[45px]" 
            style={{ fontSize: "15.5px", lineHeight: "1.75", fontFamily: "var(--font-mulish), system-ui, sans-serif" }}
          >
            Click the button below to schedule an appointment.
          </p>

          {/* Book Now Button */}
          <Link
            href="/contact"
            className="flex items-center justify-center font-sans font-medium uppercase text-[#555] tracking-[0.15em] border border-[#a0a0a0] rounded-full hover:bg-black/5 transition-colors"
            style={{ width: "110px", height: "38px", fontSize: "10px" }}
          >
            BOOK NOW
          </Link>
        </div>

        {/* Right Image */}
        <div 
          className="absolute"
          style={{ 
            right: 0, 
            top: "120px", 
            width: "clamp(300px, 34vw, 600px)", 
            height: "650px" 
          }}
        >
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7557312a-044d-4489-a9d1-6f43ee9888b1/Jennifer+A+-+Images+%2811%29.jpg"
            alt="A person in a striped dress pointing at shells"
            fill
            sizes="600px"
            className="object-cover object-[20%_center]"
          />
        </div>
      </div>

      {/* ============================================================ */}
      {/* MOBILE / TABLET LAYOUT (< 1024px)                            */}
      {/* ============================================================ */}
      <div className="lg:hidden flex flex-col px-6 sm:px-10 py-16 gap-8">
        
        {/* Label */}
        <p className="font-sans font-medium uppercase text-[#739294] tracking-[0.15em]" style={{ fontSize: "11px" }}>
          SCHEDULE AN APPOINTMENT
        </p>

        {/* Heading */}
        <h2 className="font-['beaufort-pro',serif] text-[#2b2b2b] tracking-normal font-normal text-[36px] sm:text-[42px] leading-[1.25]">
          Find a therapist who is the right fit for <span className="text-[#86b3b3] italic font-medium" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.2em", marginLeft: "0.05em" }}>you.</span>
        </h2>

        {/* Body Text */}
        <div className="flex flex-col gap-6 mt-2">
          <p className="font-light text-[#555] text-[15px] leading-[1.75]" style={{ fontFamily: "var(--font-mulish), system-ui, sans-serif" }}>
            Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we&apos;re here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.
          </p>
          <p className="font-light text-[#555] text-[15px] leading-[1.75]" style={{ fontFamily: "var(--font-mulish), system-ui, sans-serif" }}>
            Click the button below to schedule an appointment.
          </p>
        </div>

        {/* Book Now Button */}
        <div className="mt-2 mb-6">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center font-sans font-medium uppercase text-[#555] tracking-[0.15em] border border-[#a0a0a0] rounded-full hover:bg-black/5 transition-colors"
            style={{ width: "110px", height: "38px", fontSize: "10px" }}
          >
            BOOK NOW
          </Link>
        </div>

        {/* Images stacked for mobile */}
        <div className="flex flex-col gap-6">
          <div className="relative w-full h-[300px] sm:h-[400px]">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/1b9495e0-ce39-4826-9df9-e24de99da82f/Jennifer+A+-+Images+%2812%29.jpg"
              alt="Sandy beach with seashells"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="relative w-full h-[400px] sm:h-[500px]">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7557312a-044d-4489-a9d1-6f43ee9888b1/Jennifer+A+-+Images+%2811%29.jpg"
              alt="A person in a striped dress pointing at shells"
              fill
              sizes="100vw"
              className="object-cover object-[20%_center]"
            />
          </div>
        </div>

      </div>

    </section>
  );
}
