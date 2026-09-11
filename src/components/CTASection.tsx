import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full bg-secondary-bg overflow-hidden relative">
      
      {/* ============================================================ */}
      {/* DESKTOP LAYOUT (>= 1024px)                                   */}
      {/* ============================================================ */}
      <div className="hidden lg:flex flex-row w-full items-stretch justify-between min-h-[760px] lg:min-h-[820px] xl:min-h-[880px] gap-6 xl:gap-10">
        
        {/* Left Image (Starts lower, flush to left edge) */}
        <div className="relative w-[15vw] max-w-[270px] min-w-[100px] flex flex-col justify-end flex-shrink">
          <div className="relative w-full h-[calc(100%-180px)]">
            <Image
              src="/images/cta-left.jpg"
              alt="A bright, welcoming therapy office with brick walls, a comfortable grey sofa, and natural light."
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
          <p className="font-sans font-medium uppercase text-muted-text tracking-[0.2em] mb-4 text-[13px] sm:text-[13.5px] leading-normal">
            TAKE THE NEXT STEP
          </p>

          {/* Heading */}
          <h2 className="font-serif text-primary-text tracking-normal font-light mb-7 leading-[1.2] text-[38px] sm:text-[44px] lg:text-[48px] xl:text-[52px]">
            Ready to begin?
          </h2>

          {/* Body Text 1 */}
          <p className="font-body font-light text-muted-text mb-5 text-[15.5px] lg:text-[16px] xl:text-[16.5px] leading-[1.8]">
            Finding the right therapist is a crucial first step. I offer a free 15-minute phone consultation so we can discuss what you&apos;re looking for and see if my approach feels like a good fit for your needs.
          </p>
          
          {/* Body Text 2 */}
          <p className="font-body font-light text-muted-text mb-8 text-[15.5px] lg:text-[16px] xl:text-[16.5px] leading-[1.8]">
            Click the button below to schedule an appointment.
          </p>

          {/* Book Now Button */}
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center font-body font-normal uppercase text-primary-text tracking-[0.12em] border border-primary-text hover:border-primary hover:text-primary hover:bg-transparent transition-all duration-200 text-[12.5px]"
            style={{ borderRadius: "100%", width: "190px", height: "47px" }}
          >
            BOOK CONSULTATION
          </Link>
        </div>

        {/* Right Image (Pinned to right corner, full height) */}
        <div className="relative w-[34vw] lg:w-[36vw] xl:w-[38vw] max-w-[720px] min-w-[280px] flex-shrink">
          <Image
            src="/images/cta-right.jpg"
            alt="A modern therapy room featuring a grey sofa, curated bookshelves, and a dark leather chair."
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
        <p className="font-sans font-medium uppercase text-muted-text tracking-[0.2em] text-[12px] sm:text-[13px]">
          TAKE THE NEXT STEP
        </p>

        {/* Heading */}
        <h2 className="font-serif text-primary-text tracking-normal font-light text-[32px] sm:text-[40px] leading-[1.25]">
          Ready to begin?
        </h2>

        {/* Body Text */}
        <div className="flex flex-col gap-5 mt-2">
          <p className="font-body font-light text-muted-text text-[15px] sm:text-[16px] leading-[1.8]">
            Finding the right therapist is a crucial first step. I offer a free 15-minute phone consultation so we can discuss what you&apos;re looking for and see if my approach feels like a good fit for your needs.
          </p>
          <p className="font-body font-light text-muted-text text-[15px] sm:text-[16px] leading-[1.8]">
            Click the button below to schedule an appointment.
          </p>
        </div>

        {/* Book Now Button */}
        <div className="mt-2 mb-6">
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center font-body font-normal uppercase text-primary-text tracking-[0.12em] border border-primary-text hover:border-primary hover:text-primary hover:bg-transparent transition-all duration-200 text-[12.5px]"
            style={{ borderRadius: "100%", width: "190px", height: "48px" }}
          >
            BOOK CONSULTATION
          </Link>
        </div>

        {/* Images stacked for mobile */}
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="relative w-full sm:w-1/3 h-[320px] sm:h-[420px]">
            <Image
              src="/images/cta-left.jpg"
              alt="A bright, welcoming therapy office with brick walls, a comfortable grey sofa, and natural light."
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="relative w-full sm:w-2/3 h-[420px] sm:h-[420px]">
            <Image
              src="/images/cta-right.jpg"
              alt="A modern therapy room featuring a grey sofa, curated bookshelves, and a dark leather chair."
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
