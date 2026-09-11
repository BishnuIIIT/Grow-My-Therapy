import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full bg-[#f7f4ed] overflow-hidden relative">
      
      {/* ============================================================ */}
      {/* DESKTOP LAYOUT (>= 1024px)                                   */}
      {/* ============================================================ */}
      <div className="hidden lg:flex flex-row w-full items-stretch justify-between min-h-[760px] lg:min-h-[820px] xl:min-h-[880px] gap-6 xl:gap-10">
        
        {/* Left Image (Starts lower, flush to left edge) */}
        <div className="relative w-[15vw] max-w-[270px] min-w-[100px] flex flex-col justify-end flex-shrink">
          <div className="relative w-full h-[calc(100%-180px)]">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/1b9495e0-ce39-4826-9df9-e24de99da82f/Jennifer+A+-+Images+%2812%29.jpg"
              alt="Sandy beach with seashells"
              fill
              sizes="20vw"
              priority
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Center Content (Comfortably between images, text will wrap) */}
        <div className="relative flex-1 flex flex-col items-start justify-center max-w-[760px] xl:max-w-[800px] py-32 lg:py-40 px-2 sm:px-6 min-w-0">
          
          {/* Eyebrow Label */}
          <p className="font-sans font-medium uppercase text-[#6e7372] tracking-[0.2em] mb-4 text-[13px] sm:text-[13.5px] leading-normal">
            SCHEDULE AN APPOINTMENT
          </p>

          {/* Heading */}
          <h2 className="font-serif text-[#2b2b2b] tracking-normal font-light mb-7 leading-[1.2] text-[38px] sm:text-[44px] lg:text-[48px] xl:text-[52px]">
            <span>Find a therapist who is the right</span><br className="hidden sm:inline" /> fit for{" "}
            <span className="font-['PrintedMoments'] text-[#86b3b3] text-[1.25em] font-normal not-italic inline-block ml-1.5 leading-none">
              you.
            </span>
          </h2>

          {/* Body Text 1 */}
          <p className="font-body font-light text-[#555] mb-5 text-[15.5px] lg:text-[16px] xl:text-[16.5px] leading-[1.8]">
            Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we&apos;re here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.
          </p>
          
          {/* Body Text 2 */}
          <p className="font-body font-light text-[#555] mb-8 text-[15.5px] lg:text-[16px] xl:text-[16.5px] leading-[1.8]">
            Click the button below to schedule an appointment.
          </p>

          {/* Book Now Button */}
          <Link
            href="https://www.conejovalleycounseling.com/contact"
            className="inline-flex items-center justify-center font-body font-normal uppercase text-[#2b2b2b] tracking-[0.12em] border border-[#2b2b2b] hover:border-[#86b3b3] hover:text-[#86b3b3] hover:bg-transparent transition-all duration-200 text-[12.5px]"
            style={{ borderRadius: "100%", width: "124px", height: "47px" }}
          >
            BOOK NOW
          </Link>
        </div>

        {/* Right Image (Pinned to right corner, full height) */}
        <div className="relative w-[34vw] lg:w-[36vw] xl:w-[38vw] max-w-[720px] min-w-[280px] flex-shrink">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7557312a-044d-4489-a9d1-6f43ee9888b1/Jennifer+A+-+Images+%2811%29.jpg"
            alt="A person in a striped dress pointing at shells"
            fill
            sizes="40vw"
            priority
            className="object-cover object-[48%_center]"
          />
        </div>
      </div>

      {/* ============================================================ */}
      {/* MOBILE / TABLET LAYOUT (< 1024px)                            */}
      {/* ============================================================ */}
      <div className="lg:hidden flex flex-col px-6 sm:px-10 pt-20 sm:pt-28 pb-16 gap-8">
        
        {/* Label */}
        <p className="font-sans font-medium uppercase text-[#6e7372] tracking-[0.2em] text-[12px] sm:text-[13px]">
          SCHEDULE AN APPOINTMENT
        </p>

        {/* Heading */}
        <h2 className="font-serif text-[#2b2b2b] tracking-normal font-light text-[32px] sm:text-[40px] leading-[1.25]">
          Find a therapist who is the right fit for{" "}
          <span className="font-['PrintedMoments'] text-[#86b3b3] text-[1.25em] font-normal not-italic inline-block ml-1 leading-none">
            you.
          </span>
        </h2>

        {/* Body Text */}
        <div className="flex flex-col gap-5 mt-2">
          <p className="font-body font-light text-[#555] text-[15px] sm:text-[16px] leading-[1.8]">
            Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we&apos;re here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.
          </p>
          <p className="font-body font-light text-[#555] text-[15px] sm:text-[16px] leading-[1.8]">
            Click the button below to schedule an appointment.
          </p>
        </div>

        {/* Book Now Button - Pure geometric oval / ellipse matching target website */}
        <div className="mt-2 mb-6">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center font-body font-normal uppercase text-[#2b2b2b] tracking-[0.12em] border border-[#2b2b2b] hover:border-[#86b3b3] hover:text-[#86b3b3] hover:bg-transparent transition-all duration-200 text-[12.5px]"
            style={{ borderRadius: "100%", width: "126px", height: "48px" }}
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
              className="object-cover object-[48%_center]"
            />
          </div>
        </div>

      </div>

    </section>
  );
}
