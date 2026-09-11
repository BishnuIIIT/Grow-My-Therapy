import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#f7f6f2] overflow-hidden min-h-[auto] lg:min-h-[850px] xl:min-h-[880px] pt-14 pb-16 lg:pt-0 lg:pb-0">
      
      {/* ========================================================================= */}
      {/* DESKTOP HERO COMPOSITION (>= lg: 1024px)                                  */}
      {/* ========================================================================= */}
      <div className="hidden lg:flex w-full max-w-[1440px] mx-auto h-[750px] xl:h-[850px] relative items-center justify-between">
        
        {/* 1. MAIN LEFT IMAGE */}
        <div className="relative w-[34%] h-[75%] lg:h-[80%] z-10">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/80513bd1-30ee-4a2d-aaf6-782d9be095ce/Jennifer+A+-+Images+%2866%29.jpg"
            alt="Family therapy session in a warm, welcoming counseling setting"
            fill
            priority
            sizes="500px"
            className="object-cover object-center"
          />
        </div>

        {/* 3. HERO HEADING + SUPPORTING TEXT + CTA BLOCK */}
        <div className="flex flex-col w-[50%] max-w-[620px] text-left z-20 mt-[120px] xl:mt-[150px]">
          
          {/* Eyebrow */}
          <p className="text-[10px] xl:text-[11px] font-sans font-medium tracking-[0.18em] uppercase text-[#666] mb-[20px]">
            ONLINE &amp; IN-PERSON COUNSELING IN NEWBURY PARK &amp; ACROSS CA
          </p>

          {/* Main Heading */}
          <h1 className="font-serif text-[42px] xl:text-[54px] leading-[1.14] font-light text-[#2b2b2b] tracking-[-0.01em] mb-[25px]">
            Rebuild your foundation on<br />
            solid ground and finally begin to <span className="text-[#86b3b3] font-serif italic font-normal inline-block">thrive</span>.
          </h1>
          
          {/* Supporting text */}
          <p className="font-sans text-[11px] xl:text-[12.5px] leading-[1.7] tracking-[0.06em] text-[#555] font-normal uppercase mb-[35px] max-w-[550px]">
            SPECIALIZED THERAPY FOR ADULTS, COUPLES, TEENS, AND CHILDREN TO REFLECT, HEAL, AND GROW.
          </p>
          
          {/* CTA */}
          <div>
            <Link
              href="/contact"
              className="inline-block text-[11px] font-sans font-medium tracking-[0.14em] uppercase text-[#2b2b2b] border-b-[1.5px] border-[#2b2b2b] pb-0.5 hover:text-[#86b3b3] hover:border-[#86b3b3] transition-colors"
            >
              BOOK AN APPOINTMENT
            </Link>
          </div>
        </div>

        {/* 4. SECONDARY RIGHT IMAGE */}
        <div className="relative w-[9%] h-[50%] z-10 overflow-hidden mt-[100px]">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/3643a7ac-ff62-4927-b96e-9e65ecff0521/Jennifer+A+-+Images+%2867%29.jpg"
            alt="Ocean waves and shoreline serenity"
            fill
            priority
            sizes="150px"
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
