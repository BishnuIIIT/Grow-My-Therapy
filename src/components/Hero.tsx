import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#f7f6f2] overflow-hidden min-h-[auto] lg:min-h-[850px] xl:min-h-[880px] pt-14 pb-16 lg:pt-0 lg:pb-0">
      
      {/* ========================================================================= */}
      {/* DESKTOP HERO COMPOSITION (>= lg: 1024px)                                  */}
      {/* Exact pixel-match to Target Screenshot at reference viewport:             */}
      {/* - Left Image: left: 0px, top: 148px, width: 617px, height: 645px           */}
      {/* - Eyebrow: left: 758px, top: 148px, single line                           */}
      {/* - Heading Block: left: 758px, top: 395px, width: 740px, 3 lines           */}
      {/* - Right Image: right: 0, top: 380px, height: 415px, ocean waves crop       */}
      {/* ========================================================================= */}
      <div className="hidden lg:block w-full h-[850px] xl:h-[880px] relative">
        
        {/* 1. MAIN LEFT IMAGE */}
        <div className="absolute left-0 top-[148px] w-[617px] h-[645px] z-10">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/80513bd1-30ee-4a2d-aaf6-782d9be095ce/Jennifer+A+-+Images+%2866%29.jpg"
            alt="Family therapy session in a warm, welcoming counseling setting"
            fill
            priority
            sizes="617px"
            className="object-cover object-center"
          />
        </div>

        {/* 2. EYEBROW (Aligned with top of left image at y=148px) */}
        <div className="absolute left-[758px] top-[148px] z-20">
          <p className="text-[11px] xl:text-[12px] font-sans font-medium tracking-[0.18em] uppercase text-[#666] whitespace-nowrap">
            ONLINE &amp; IN-PERSON COUNSELING IN NEWBURY PARK &amp; ACROSS CA
          </p>
        </div>

        {/* 3. HERO HEADING + SUPPORTING TEXT + CTA BLOCK (Starts at y ≈ 395px–405px) */}
        <div className="absolute left-[758px] top-[395px] w-[740px] max-w-[760px] text-left z-20">
          
          {/* Main Heading - Large 3-line wrap matching Target */}
          <h1 className="font-serif text-[58px] xl:text-[62px] leading-[1.14] font-light text-[#2b2b2b] tracking-[-0.01em] mb-7 max-w-[740px]">
            Rebuild your foundation on<br />
            solid ground and finally begin to<br />
            <span className="text-[#86b3b3] font-serif italic font-normal inline-block">thrive</span>.
          </h1>
          
          {/* Supporting text - Wide uppercase line */}
          <p className="font-sans text-[12.5px] xl:text-[13px] leading-[1.7] tracking-[0.06em] text-[#555] font-normal uppercase mb-9 max-w-[720px]">
            SPECIALIZED THERAPY FOR ADULTS, COUPLES, TEENS, AND CHILDREN TO REFLECT, HEAL, AND GROW.
          </p>
          
          {/* Underlined CTA text */}
          <div>
            <Link
              href="https://www.conejovalleycounseling.com/contact"
              className="inline-block text-[11px] xl:text-[12px] font-sans font-medium tracking-[0.14em] uppercase text-[#2b2b2b] border-b-[1.5px] border-[#2b2b2b] pb-0.5 hover:text-[#86b3b3] hover:border-[#86b3b3] transition-colors"
            >
              BOOK AN APPOINTMENT
            </Link>
          </div>
        </div>

        {/* 4. SECONDARY RIGHT IMAGE (Showing ocean shoreline/waves) */}
        <div className="absolute right-0 top-[380px] w-[180px] xl:w-[220px] h-[415px] z-10 overflow-hidden">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/3643a7ac-ff62-4927-b96e-9e65ecff0521/Jennifer+A+-+Images+%2867%29.jpg"
            alt="Ocean waves and shoreline serenity"
            fill
            priority
            sizes="220px"
            className="object-cover object-[87%_56%]"
          />
        </div>

      </div>

      {/* ========================================================================= */}
      {/* MOBILE / TABLET ADAPTIVE LAYOUT (< lg: 1024px)                           */}
      {/* ========================================================================= */}
      <div className="lg:hidden flex flex-col px-6 sm:px-10">
        <p className="text-[11px] sm:text-[12px] font-sans font-medium tracking-[0.18em] uppercase text-[#666] mb-4">
          ONLINE &amp; IN-PERSON COUNSELING IN NEWBURY PARK &amp; ACROSS CA
        </p>
        
        <h1 className="font-serif text-[38px] sm:text-[46px] leading-[1.1] font-light text-[#2b2b2b] tracking-[-0.01em] mb-6">
          Rebuild your foundation on solid ground and finally begin to{" "}
          <span className="text-[#86b3b3] font-serif italic font-normal">thrive</span>.
        </h1>
        
        <div className="relative w-full aspect-[4/5] sm:aspect-[1/1] mb-6 overflow-hidden">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/80513bd1-30ee-4a2d-aaf6-782d9be095ce/Jennifer+A+-+Images+%2866%29.jpg"
            alt="Family therapy session in a warm, welcoming counseling setting"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <p className="font-sans text-[12.5px] leading-[1.7] tracking-[0.06em] text-[#555] font-normal uppercase mb-6">
          SPECIALIZED THERAPY FOR ADULTS, COUPLES, TEENS, AND CHILDREN TO REFLECT, HEAL, AND GROW.
        </p>
        
        <div>
          <Link
            href="https://www.conejovalleycounseling.com/contact"
            className="inline-block text-[12px] font-sans font-medium tracking-[0.14em] uppercase text-[#2b2b2b] border-b-[1.5px] border-[#2b2b2b] pb-0.5 hover:text-[#86b3b3] hover:border-[#86b3b3] transition-colors"
          >
            BOOK AN APPOINTMENT
          </Link>
        </div>
      </div>

    </section>
  );
}
