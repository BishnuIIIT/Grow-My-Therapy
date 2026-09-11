import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full bg-[#f9f8f6] overflow-hidden" style={{ paddingTop: '140px', paddingBottom: '140px' }}>
      
      {/* ============================================================ */}
      {/* DESKTOP LAYOUT (>= 1024px)                                   */}
      {/* ============================================================ */}
      <div className="hidden lg:flex w-full items-center justify-center relative min-h-[580px]">
        
        {/* Left Image (Pinned to left corner, 1.5x scale) */}
        <div className="absolute left-0 top-0 w-[18vw] max-w-[320px] min-w-[180px] h-full flex-shrink-0">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/1b9495e0-ce39-4826-9df9-e24de99da82f/Jennifer+A+-+Images+%2812%29.jpg"
            alt="Sandy beach with seashells"
            fill
            sizes="25vw"
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Center Content (2x scale) */}
        <div className="relative z-10 flex flex-col items-start w-full max-w-[700px] flex-shrink-0 px-8 py-6">
          
          {/* Label (2x) */}
          <p 
            className="font-sans font-medium uppercase text-[#739294] tracking-[0.18em] mb-4" 
            style={{ fontSize: "15px", lineHeight: "1.2" }}
          >
            SCHEDULE AN APPOINTMENT
          </p>

          {/* Heading (2x) */}
          <h2 
            className="font-['beaufort-pro',serif] text-[#2b2b2b] tracking-normal font-normal mb-8 leading-[1.2] text-[44px] xl:text-[52px]"
          >
            <span className="whitespace-nowrap">Find a therapist who is the right</span><br /> fit for <span className="text-[#86b3b3] italic font-medium" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.2em", marginLeft: "0.05em", paddingRight: "0.1em" }}>you.</span>
          </h2>

          {/* Body Text 1 (2x) */}
          <p 
            className="font-light text-[#555] mb-6 text-[18px] xl:text-[19px] leading-[1.7]" 
            style={{ fontFamily: "var(--font-mulish), system-ui, sans-serif" }}
          >
            Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we&apos;re here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.
          </p>
          
          {/* Body Text 2 (2x) */}
          <p 
            className="font-light text-[#555] mb-8 text-[18px] xl:text-[19px] leading-[1.7]" 
            style={{ fontFamily: "var(--font-mulish), system-ui, sans-serif" }}
          >
            Click the button below to schedule an appointment.
          </p>

          {/* Book Now Button (2x) */}
          <Link
            href="/contact"
            className="flex items-center justify-center font-sans font-medium uppercase text-[#555] tracking-[0.15em] border border-[#d5d5d5] rounded-full hover:bg-black/5 transition-colors"
            style={{ width: "150px", height: "48px", fontSize: "13px" }}
          >
            BOOK NOW
          </Link>
        </div>

        {/* Right Image (Pinned to right corner, 1.5x scale) */}
        <div className="absolute right-0 top-0 w-[30vw] max-w-[550px] min-w-[360px] h-full flex-shrink-0">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7557312a-044d-4489-a9d1-6f43ee9888b1/Jennifer+A+-+Images+%2811%29.jpg"
            alt="A person in a striped dress pointing at shells"
            fill
            sizes="35vw"
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
        <p className="font-sans font-medium uppercase text-[#739294] tracking-[0.15em] text-[13px]">
          SCHEDULE AN APPOINTMENT
        </p>

        {/* Heading */}
        <h2 className="font-['beaufort-pro',serif] text-[#2b2b2b] tracking-normal font-normal text-[36px] sm:text-[44px] leading-[1.25]">
          Find a therapist who is the right fit for <span className="text-[#86b3b3] italic font-medium" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.25em", marginLeft: "0.05em" }}>you.</span>
        </h2>

        {/* Body Text */}
        <div className="flex flex-col gap-5 mt-2">
          <p className="font-light text-[#555] text-[16px] leading-[1.8]" style={{ fontFamily: "var(--font-mulish), system-ui, sans-serif" }}>
            Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we&apos;re here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.
          </p>
          <p className="font-light text-[#555] text-[16px] leading-[1.8]" style={{ fontFamily: "var(--font-mulish), system-ui, sans-serif" }}>
            Click the button below to schedule an appointment.
          </p>
        </div>

        {/* Book Now Button */}
        <div className="mt-2 mb-6">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center font-sans font-medium uppercase text-[#555] tracking-[0.15em] border border-[#d5d5d5] rounded-full hover:bg-black/5 transition-colors"
            style={{ width: "130px", height: "44px", fontSize: "12px" }}
          >
            BOOK NOW
          </Link>
        </div>

        {/* Images stacked for mobile */}
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="relative w-full sm:w-1/3 h-[320px] sm:h-[420px]">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/1b9495e0-ce39-4826-9df9-e24de99da82f/Jennifer+A+-+Images+%2812%29.jpg"
              alt="Sandy beach with seashells"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="relative w-full sm:w-2/3 h-[420px] sm:h-[420px]">
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
