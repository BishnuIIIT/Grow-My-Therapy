import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full bg-[#f7f4ed] overflow-hidden relative">
      
      {/* ============================================================ */}
      {/* DESKTOP LAYOUT (>= 1024px)                                   */}
      {/* ============================================================ */}
      <div className="hidden lg:flex w-full items-start relative min-h-[760px] lg:min-h-[820px] xl:min-h-[880px] pt-32 lg:pt-40 xl:pt-48 pb-24 lg:pb-32">
        
        {/* Left Image (Starts aligned with heading, flush to left edge and bottom) */}
        <div className="absolute left-0 top-[140px] lg:top-[160px] xl:top-[180px] bottom-0 w-[15vw] max-w-[270px] min-w-[150px] z-0">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/1b9495e0-ce39-4826-9df9-e24de99da82f/Jennifer+A+-+Images+%2812%29.jpg"
            alt="Sandy beach with seashells"
            fill
            sizes="20vw"
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Center Content (Shifted to the left, positioned comfortably between images) */}
        <div className="relative z-10 flex flex-col items-start w-full max-w-[760px] xl:max-w-[800px] ml-[15vw] lg:ml-[16vw] xl:ml-[17vw] 2xl:ml-[18vw] mr-auto px-6 xl:px-8">
          
          {/* Eyebrow Label */}
          <p className="font-sans font-medium uppercase text-[#6e7372] tracking-[0.2em] mb-4 text-[13px] sm:text-[13.5px] leading-normal">
            SCHEDULE AN APPOINTMENT
          </p>

          {/* Heading */}
          <h2 className="font-serif text-[#2b2b2b] tracking-normal font-light mb-7 leading-[1.2] text-[38px] sm:text-[44px] lg:text-[48px] xl:text-[52px]">
            <span className="whitespace-nowrap">Find a therapist who is the right</span><br className="hidden sm:inline" /> fit for{" "}
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

          {/* Book Now Button - Pure geometric oval / ellipse matching target website */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center font-body font-normal uppercase text-[#2b2b2b] tracking-[0.12em] border border-[#2b2b2b] hover:border-[#86b3b3] hover:text-[#86b3b3] hover:bg-transparent transition-all duration-200 text-[12.5px]"
            style={{ borderRadius: "100%", width: "124px", height: "47px" }}
          >
            BOOK NOW
          </Link>
        </div>

        {/* Right Image (Pinned to right corner, full height top to bottom, wider framing) */}
        <div className="absolute right-0 top-0 bottom-0 w-[34vw] lg:w-[36vw] xl:w-[38vw] max-w-[720px] min-w-[420px] h-full z-0">
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
