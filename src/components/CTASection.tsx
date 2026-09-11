import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full bg-[#f9f8f6] py-24 lg:py-32 overflow-hidden">
      
      {/* ============================================================ */}
      {/* DESKTOP LAYOUT (>= 1024px)                                   */}
      {/* ============================================================ */}
      <div className="hidden lg:flex w-full max-w-[1300px] mx-auto px-8 xl:px-12 items-center justify-between gap-10 xl:gap-12">
        
        {/* Left Image */}
        <div className="relative w-[150px] h-[460px] flex-shrink-0">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/1b9495e0-ce39-4826-9df9-e24de99da82f/Jennifer+A+-+Images+%2812%29.jpg"
            alt="Sandy beach with seashells"
            fill
            sizes="150px"
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Center Content */}
        <div className="flex flex-col items-start max-w-[580px] flex-1">
          {/* Label */}
          <p 
            className="font-sans font-medium uppercase text-[#739294] tracking-[0.15em] mb-3" 
            style={{ fontSize: "10.5px" }}
          >
            SCHEDULE AN APPOINTMENT
          </p>

          {/* Heading */}
          <h2 
            className="font-['beaufort-pro',serif] text-[#2b2b2b] tracking-normal font-normal mb-5"
            style={{ fontSize: "37px", lineHeight: "1.25" }}
          >
            <span className="whitespace-nowrap">Find a therapist who is the right</span><br className="hidden xl:block" /> fit for <span className="text-[#86b3b3] italic font-medium" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.25em", marginLeft: "0.05em", paddingRight: "0.1em" }}>you.</span>
          </h2>

          {/* Body Text */}
          <p 
            className="font-light text-[#555] mb-5" 
            style={{ fontSize: "14.5px", lineHeight: "1.8", fontFamily: "var(--font-mulish), system-ui, sans-serif" }}
          >
            Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we&apos;re here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.
          </p>
          <p 
            className="font-light text-[#555] mb-8" 
            style={{ fontSize: "14.5px", lineHeight: "1.8", fontFamily: "var(--font-mulish), system-ui, sans-serif" }}
          >
            Click the button below to schedule an appointment.
          </p>

          {/* Book Now Button */}
          <Link
            href="/contact"
            className="flex items-center justify-center font-sans font-medium uppercase text-[#555] tracking-[0.15em] border border-[#d5d5d5] rounded-full hover:bg-black/5 transition-colors"
            style={{ width: "100px", height: "36px", fontSize: "9.5px" }}
          >
            BOOK NOW
          </Link>
        </div>

        {/* Right Image */}
        <div className="relative w-[360px] lg:w-[380px] h-[460px] flex-shrink-0">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7557312a-044d-4489-a9d1-6f43ee9888b1/Jennifer+A+-+Images+%2811%29.jpg"
            alt="A person in a striped dress pointing at shells"
            fill
            sizes="380px"
            priority
            className="object-cover object-[30%_center]"
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
        <h2 className="font-['beaufort-pro',serif] text-[#2b2b2b] tracking-normal font-normal text-[34px] sm:text-[38px] leading-[1.25]">
          Find a therapist who is the right fit for <span className="text-[#86b3b3] italic font-medium" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.25em", marginLeft: "0.05em" }}>you.</span>
        </h2>

        {/* Body Text */}
        <div className="flex flex-col gap-5 mt-2">
          <p className="font-light text-[#555] text-[14.5px] leading-[1.8]" style={{ fontFamily: "var(--font-mulish), system-ui, sans-serif" }}>
            Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we&apos;re here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.
          </p>
          <p className="font-light text-[#555] text-[14.5px] leading-[1.8]" style={{ fontFamily: "var(--font-mulish), system-ui, sans-serif" }}>
            Click the button below to schedule an appointment.
          </p>
        </div>

        {/* Book Now Button */}
        <div className="mt-2 mb-6">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center font-sans font-medium uppercase text-[#555] tracking-[0.15em] border border-[#d5d5d5] rounded-full hover:bg-black/5 transition-colors"
            style={{ width: "100px", height: "36px", fontSize: "9.5px" }}
          >
            BOOK NOW
          </Link>
        </div>

        {/* Images stacked for mobile */}
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="relative w-full sm:w-1/3 h-[300px] sm:h-[400px]">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/1b9495e0-ce39-4826-9df9-e24de99da82f/Jennifer+A+-+Images+%2812%29.jpg"
              alt="Sandy beach with seashells"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="relative w-full sm:w-2/3 h-[400px] sm:h-[400px]">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7557312a-044d-4489-a9d1-6f43ee9888b1/Jennifer+A+-+Images+%2811%29.jpg"
              alt="A person in a striped dress pointing at shells"
              fill
              sizes="100vw"
              className="object-cover object-[30%_center]"
            />
          </div>
        </div>

      </div>

    </section>
  );
}
