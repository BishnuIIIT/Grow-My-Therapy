import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#f7f6f2] overflow-hidden min-h-[auto] lg:min-h-[850px] xl:min-h-[920px] pt-14 pb-16 lg:pt-0 lg:pb-0">
      
      {/* ========================================================================= */}
      {/* DESKTOP HERO COMPOSITION (>= lg: 1024px)                                  */}
      {/* ========================================================================= */}
      <div className="hidden lg:flex w-full h-[800px] xl:h-[900px] relative items-center justify-between">
        
        {/* 1. MAIN LEFT IMAGE (Width increased 1.4x) */}
        <div className="relative w-[44vw] max-w-[760px] min-w-[480px] h-[82%] xl:h-[88%] z-10 flex-shrink-0">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/80513bd1-30ee-4a2d-aaf6-782d9be095ce/Jennifer+A+-+Images+%2866%29.jpg"
            alt="Family therapy session in a warm, welcoming counseling setting"
            fill
            priority
            sizes="(max-width: 1440px) 45vw, 760px"
            className="object-cover object-[center_35%]"
          />
        </div>

        {/* 2. HERO HEADING + SUPPORTING TEXT + CTA BLOCK (Exact target styling) */}
        <div className="flex flex-col w-full max-w-[620px] xl:max-w-[660px] text-left z-20 px-8 xl:px-12 mt-0 lg:mt-[10px] xl:mt-[25px] flex-shrink-0">
          
          {/* Eyebrow with target 2-line break: ONLINE & IN-PERSON COUNSELING IN NEWBURY PARK & / ACROSS CA */}
          <p className="text-[11px] xl:text-[12px] font-sans font-medium tracking-[0.16em] uppercase text-[#555] mb-[22px] max-w-[540px] leading-[1.6]">
            <span className="whitespace-nowrap">ONLINE &amp; IN-PERSON COUNSELING IN NEWBURY PARK &amp;</span>
            <br className="hidden sm:inline" />
            <span className="whitespace-nowrap">ACROSS CA</span>
          </p>

          {/* Main Heading with PrintedMoments cursive thrive. */}
          <h1 className="font-serif text-[42px] lg:text-[46px] xl:text-[54px] leading-[1.12] font-light text-[#2b2b2b] tracking-[-0.01em] mb-[25px]">
            <span className="whitespace-nowrap">Rebuild your foundation on</span><br />
            <span className="whitespace-nowrap">solid ground and finally begin to</span><br />
            <span className="font-['PrintedMoments'] text-[#86b3b3] text-[1.25em] font-normal not-italic inline-block mr-1 leading-none">thrive</span>.
          </h1>
          
          {/* Supporting text in sentence case */}
          <p className="font-body text-[13.5px] xl:text-[15px] leading-[1.65] text-[#555] font-light mb-[32px] max-w-[560px]">
            Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.
          </p>
          
          {/* CTA Link */}
          <div>
            <Link
              href="/contact"
              className="inline-block text-[11px] font-sans font-medium tracking-[0.16em] uppercase text-[#2b2b2b] border-b-[1.5px] border-[#2b2b2b] pb-0.5 hover:text-[#86b3b3] hover:border-[#86b3b3] transition-colors"
            >
              BOOK AN APPOINTMENT
            </Link>
          </div>
        </div>

        {/* 3. SECONDARY RIGHT IMAGE */}
        <div className="relative w-[11vw] max-w-[190px] min-w-[120px] h-[65%] xl:h-[72%] z-10 overflow-hidden mt-[80px] xl:mt-[110px] flex-shrink-0">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/3643a7ac-ff62-4927-b96e-9e65ecff0521/Jennifer+A+-+Images+%2867%29.jpg"
            alt="Ocean waves and shoreline serenity"
            fill
            priority
            sizes="190px"
            className="object-cover object-[87%_56%]"
          />
        </div>

      </div>

      {/* ========================================================================= */}
      {/* MOBILE / TABLET ADAPTIVE LAYOUT (< lg: 1024px)                           */}
      {/* ========================================================================= */}
      <div className="lg:hidden flex flex-col px-6 sm:px-10">
        <p className="text-[11px] sm:text-[12px] font-sans font-medium tracking-[0.16em] uppercase text-[#555] mb-4">
          <span className="whitespace-nowrap">ONLINE &amp; IN-PERSON COUNSELING IN NEWBURY PARK &amp;</span><br className="hidden sm:inline" />{" "}
          <span className="whitespace-nowrap">ACROSS CA</span>
        </p>
        
        <h1 className="font-serif text-[38px] sm:text-[46px] leading-[1.1] font-light text-[#2b2b2b] tracking-[-0.01em] mb-6">
          Rebuild your foundation on solid ground and finally begin to{" "}
          <span className="font-['PrintedMoments'] text-[#86b3b3] text-[1.2em] font-normal not-italic inline-block">thrive</span>.
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

        <p className="font-body text-[14px] leading-[1.7] text-[#555] font-light mb-6">
          Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.
        </p>
        
        <div>
          <Link
            href="/contact"
            className="inline-block text-[12px] font-sans font-medium tracking-[0.16em] uppercase text-[#2b2b2b] border-b-[1.5px] border-[#2b2b2b] pb-0.5 hover:text-[#86b3b3] hover:border-[#86b3b3] transition-colors"
          >
            BOOK AN APPOINTMENT
          </Link>
        </div>
      </div>

    </section>
  );
}
