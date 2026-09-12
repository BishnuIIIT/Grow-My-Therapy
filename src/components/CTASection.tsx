import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full bg-secondary-bg overflow-hidden relative">
      
      {/* ============================================================ */}
      {/* DESKTOP LAYOUT (>= 1024px)                                   */}
      {/* ============================================================ */}
      <div className="hidden lg:flex flex-row w-full items-center justify-between min-h-[600px] lg:min-h-[700px] xl:min-h-[760px] gap-6 xl:gap-12 py-16">
        
        {/* Left Image (Square aspect ratio to preserve full image) */}
        <div className="relative w-[22vw] max-w-[340px] min-w-[150px] flex-shrink-0">
          <div className="relative w-full aspect-square">
            <Image
              src="/images/cta-left.jpg"
              alt="A cozy, sunlit therapy space with a light beige sofa, a grey chair, and large indoor plants."
              fill
              sizes="(max-width: 1024px) 100vw, 50vw" quality={100} unoptimized={true}
              priority
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Center Content (Comfortably between images, text will wrap) */}
        <div className="relative flex-1 flex flex-col items-start justify-center max-w-[700px] xl:max-w-[760px] px-4 sm:px-6 min-w-0">
          
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

        {/* Right Image (Width reduced by ~20%, height increased via taller aspect ratio, with 10% top/bottom bg color framing) */}
        <div className="relative w-[29vw] xl:w-[34vw] max-w-[600px] min-w-[260px] flex-shrink-0 py-[5%] xl:py-[8%]">
          <div className="relative w-full aspect-[5/4]">
            <Image
              src="/images/cta-right.jpg"
              alt="A therapy session in progress, showing a therapist taking notes while listening attentively to a client."
              fill
              sizes="(max-width: 1024px) 100vw, 50vw" quality={100} unoptimized={true}
              priority
              className="object-cover object-center"
            />
          </div>
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
        <div className="mt-2 mb-2">
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center font-body font-normal uppercase text-primary-text tracking-[0.12em] border border-primary-text hover:border-primary hover:text-primary hover:bg-transparent transition-all duration-200 text-[12.5px]"
            style={{ borderRadius: "100%", width: "190px", height: "48px" }}
          >
            BOOK CONSULTATION
          </Link>
        </div>

        {/* Images stacked for mobile, maintaining their full aspect ratios */}
        <div className="flex flex-col gap-6 mt-4">
          <div className="relative w-full aspect-square">
            <Image
              src="/images/cta-left.jpg"
              alt="A cozy, sunlit therapy space with a light beige sofa, a grey chair, and large indoor plants."
              fill
              sizes="100vw" quality={100} unoptimized={true}
              className="object-cover object-center"
            />
          </div>
          <div className="relative w-full aspect-[3/2]">
            <Image
              src="/images/cta-right.jpg"
              alt="A therapy session in progress, showing a therapist taking notes while listening attentively to a client."
              fill
              sizes="100vw" quality={100} unoptimized={true}
              className="object-cover object-center"
            />
          </div>
        </div>

      </div>

    </section>
  );
}
