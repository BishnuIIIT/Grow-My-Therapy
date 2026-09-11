import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#f7f6f2] overflow-hidden min-h-[auto] lg:min-h-[850px] xl:min-h-[920px] pt-14 pb-16 lg:pt-0 lg:pb-0">
      
      {/* ========================================================================= */}
      {/* DESKTOP HERO COMPOSITION (>= lg: 1024px)                                  */}
      {/* ========================================================================= */}
      <div className="hidden lg:flex w-full h-[860px] xl:h-[950px] relative items-center justify-between">
        
        {/* 1. MAIN LEFT IMAGE (Width increased by 20%) */}
        <div className="relative w-[48vw] max-w-[840px] min-w-[400px] h-[82%] xl:h-[88%] z-10 flex-shrink-0">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/80513bd1-30ee-4a2d-aaf6-782d9be095ce/Jennifer+A+-+Images+%2866%29.jpg"
            alt="Family therapy session in a warm, welcoming counseling setting"
            fill
            priority
            sizes="(max-width: 1440px) 50vw, 840px"
            className="object-cover object-[center_35%]"
          />
        </div>

        {/* 2. HERO HEADING + SUPPORTING TEXT + CTA BLOCK (Exact target styling) */}
        <div className="flex flex-col w-full max-w-[680px] xl:max-w-[780px] text-left z-20 px-4 xl:px-8 self-start pt-[77px] xl:pt-[57px] min-w-0">
          
          {/* Eyebrow: Top edge aligns exactly with where the main left image starts */}
          <p className="mt-0 text-[15px] xl:text-[17px] font-sans font-medium tracking-[0.14em] uppercase text-[#555] mb-[80px] xl:mb-[110px] max-w-[660px] leading-[1.6]">
            ONLINE &amp; IN-PERSON COUNSELING IN NEWBURY PARK &amp;
            <br className="hidden sm:inline" />
            ACROSS CA
          </p>

          {/* Heading + Supporting Text + CTA Block: Lowered position towards bottom */}
          <div className="flex flex-col mt-10 lg:mt-16 xl:mt-20">
            {/* Main Heading with PrintedMoments cursive thrive (1.5x size) */}
            <h1 className="font-serif text-[52px] lg:text-[58px] xl:text-[68px] leading-[1.12] font-light text-[#2b2b2b] tracking-[-0.01em] mb-[28px] xl:mb-[34px]">
              Rebuild your foundation on<br />
              solid ground and finally begin to<br />
              <span className="font-['PrintedMoments'] text-[#86b3b3] text-[1.25em] font-normal not-italic inline-block mr-1 leading-none">thrive</span>.
            </h1>
            
            {/* Supporting text (Image 1) - Single line */}
            <p className="font-body text-[15.5px] lg:text-[16.5px] xl:text-[18px] leading-[1.6] text-[#555] font-light mb-[36px] xl:mb-[44px]">
              Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.
            </p>
            
            {/* CTA Link (1.5x size) */}
            <div>
              <Link
                href="https://www.conejovalleycounseling.com/contact"
                className="inline-block text-[13px] xl:text-[13.5px] font-body font-normal tracking-[0.14em] uppercase text-[#2b2b2b] border-b border-[#2b2b2b] pb-0.5 hover:text-[#86b3b3] hover:border-[#86b3b3] transition-colors"
              >
                BOOK AN APPOINTMENT
              </Link>
            </div>
          </div>
        </div>

        {/* 3. SECONDARY RIGHT IMAGE (Height decreased by 20%) */}
        <div className="relative w-[9.5vw] max-w-[160px] min-w-[100px] h-[52%] xl:h-[58%] z-10 overflow-hidden mt-[100px] xl:mt-[130px] flex-shrink-0">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/3643a7ac-ff62-4927-b96e-9e65ecff0521/Jennifer+A+-+Images+%2867%29.jpg"
            alt="Ocean waves and shoreline serenity"
            fill
            priority
            sizes="160px"
            className="object-cover object-[87%_56%]"
          />
        </div>

      </div>

      {/* ========================================================================= */}
      {/* MOBILE / TABLET ADAPTIVE LAYOUT (< lg: 1024px)                           */}
      {/* ========================================================================= */}
      <div className="lg:hidden flex flex-col px-6 sm:px-10 overflow-hidden">
        {/* Eyebrow */}
        <p className="text-[14px] sm:text-[15px] font-sans font-medium tracking-[0.14em] uppercase text-[#555] mb-6 leading-[1.6]">
          ONLINE & IN-PERSON COUNSELING IN NEWBURY PARK & ACROSS CA
        </p>
        
        {/* Main Heading */}
        <h1 className="font-serif text-[46px] sm:text-[54px] leading-[1.1] font-light text-[#2b2b2b] tracking-[-0.01em] mb-7">
          Rebuild your foundation on solid ground and finally begin to{" "}
          <span className="font-['PrintedMoments'] text-[#86b3b3] text-[1.2em] font-normal not-italic inline-block">thrive</span>.
        </h1>
        
        {/* Supporting text */}
        <p className="font-body text-[17px] sm:text-[19px] leading-[1.7] text-[#555] font-light mb-7">
          Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.
        </p>
        
        {/* CTA Link */}
        <div className="mb-10">
          <Link
            href="https://www.conejovalleycounseling.com/contact"
            className="inline-block text-[12.5px] sm:text-[13px] font-body font-normal tracking-[0.14em] uppercase text-[#2b2b2b] border-b border-[#2b2b2b] pb-0.5 hover:text-[#86b3b3] hover:border-[#86b3b3] transition-colors"
          >
            BOOK AN APPOINTMENT
          </Link>
        </div>

        {/* Images Container */}
        <div className="relative w-full h-[500px] sm:h-[600px] flex">
          {/* Main Left Image */}
          <div className="relative w-[85%] h-full z-10 flex-shrink-0">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/80513bd1-30ee-4a2d-aaf6-782d9be095ce/Jennifer+A+-+Images+%2866%29.jpg"
              alt="Family therapy session in a warm, welcoming counseling setting"
              fill
              priority
              sizes="(max-width: 1024px) 85vw"
              className="object-cover object-[center_35%]"
            />
          </div>
          {/* Secondary Right Image (partially off-screen) */}
          <div className="relative w-[30%] h-[70%] z-10 ml-4 mt-auto mb-10 flex-shrink-0">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/3643a7ac-ff62-4927-b96e-9e65ecff0521/Jennifer+A+-+Images+%2867%29.jpg"
              alt="Ocean waves and shoreline serenity"
              fill
              priority
              sizes="(max-width: 1024px) 30vw"
              className="object-cover object-[87%_56%]"
            />
          </div>
        </div>
      </div>

    </section>
  );
}
