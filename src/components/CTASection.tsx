import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full bg-[#f9f8f6] overflow-hidden" style={{ paddingTop: '148px', paddingBottom: '148px' }}>
      
      {/* ============================================================ */}
      {/* DESKTOP LAYOUT (>= 1024px)                                   */}
      {/* ============================================================ */}
      <div className="hidden lg:flex w-full items-center justify-center relative min-h-[378px]">
        
        {/* Left Image (Pinned to left corner) */}
        <div className="absolute left-0 top-0 w-[12vw] max-w-[200px] min-w-[120px] h-full flex-shrink-0">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/1b9495e0-ce39-4826-9df9-e24de99da82f/Jennifer+A+-+Images+%2812%29.jpg"
            alt="Sandy beach with seashells"
            fill
            sizes="15vw"
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Center Content (w=470px) */}
        <div className="relative z-10 flex flex-col items-start w-[470px] flex-shrink-0 px-4">
          
          {/* Label */}
          <p 
            className="font-sans font-medium uppercase text-[#739294] tracking-[0.15em] mb-[14px]" 
            style={{ fontSize: "9.5px", lineHeight: "1" }}
          >
            SCHEDULE AN APPOINTMENT
          </p>

          {/* Heading */}
          <h2 
            className="font-['beaufort-pro',serif] text-[#2b2b2b] tracking-normal font-normal mb-[32px]"
            style={{ fontSize: "28px", lineHeight: "1.2" }}
          >
            <span className="whitespace-nowrap">Find a therapist who is the right</span><br /> fit for <span className="text-[#86b3b3] italic font-medium" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.25em", marginLeft: "0.05em", paddingRight: "0.1em" }}>you.</span>
          </h2>

          {/* Body Text 1 */}
          <p 
            className="font-light text-[#555] mb-[15px]" 
            style={{ fontSize: "10.5px", lineHeight: "1.6", fontFamily: "var(--font-mulish), system-ui, sans-serif" }}
          >
            Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we&apos;re here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.
          </p>
          
          {/* Body Text 2 */}
          <p 
            className="font-light text-[#555] mb-[25px]" 
            style={{ fontSize: "10.5px", lineHeight: "1.6", fontFamily: "var(--font-mulish), system-ui, sans-serif" }}
          >
            Click the button below to schedule an appointment.
          </p>

          {/* Book Now Button */}
          <Link
            href="/contact"
            className="flex items-center justify-center font-sans font-medium uppercase text-[#555] tracking-[0.15em] border border-[#d5d5d5] rounded-full hover:bg-black/5 transition-colors"
            style={{ width: "80px", height: "32px", fontSize: "8.5px" }}
          >
            BOOK NOW
          </Link>
        </div>

        {/* Right Image (Pinned to right corner) */}
        <div className="absolute right-0 top-0 w-[20vw] max-w-[350px] min-w-[280px] h-full flex-shrink-0">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7557312a-044d-4489-a9d1-6f43ee9888b1/Jennifer+A+-+Images+%2811%29.jpg"
            alt="A person in a striped dress pointing at shells"
            fill
            sizes="25vw"
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
