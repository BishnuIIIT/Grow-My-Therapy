import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-main-bg overflow-hidden min-h-[auto] lg:min-h-[850px] xl:min-h-[920px] pt-14 pb-16 lg:pt-0 lg:pb-0">
      
      {/* ========================================================================= */}
      {/* DESKTOP HERO COMPOSITION (>= lg: 1024px)                                  */}
      {/* ========================================================================= */}
      <div className="hidden lg:flex w-full h-[860px] xl:h-[950px] relative items-center justify-between">
        
        {/* 1. MAIN LEFT IMAGE */}
        <div className="relative w-[48vw] max-w-[840px] min-w-[400px] h-[82%] xl:h-[88%] z-10 flex-shrink-0">
          <Image
            src="/images/hero.jpg"
            alt="A bright, professional therapy clinic waiting area with glass walls and warm natural light."
            fill
            priority
            sizes="(max-width: 1440px) 50vw, 840px"
            className="object-cover object-center"
          />
        </div>

        {/* 2. HERO HEADING + SUPPORTING TEXT + CTA BLOCK */}
        <div className="flex flex-col w-full max-w-[680px] xl:max-w-[780px] text-left z-20 px-4 xl:px-8 self-center min-w-0">
          
          <div className="flex flex-col mt-10 lg:mt-16 xl:mt-20">
            {/* Main Heading */}
            <h1 className="font-serif text-[48px] lg:text-[54px] xl:text-[62px] leading-[1.15] font-light text-primary-text tracking-[-0.01em] mb-[28px] xl:mb-[34px]">
              Santa Monica Clinical Psychologist Specializing in Anxiety & Trauma
            </h1>
            
            {/* Supporting text */}
            <p className="font-body text-[15.5px] lg:text-[16.5px] xl:text-[18px] leading-[1.65] text-muted-text font-light mb-[36px] xl:mb-[44px]">
              I provide a warm, collaborative space for high-achieving adults who feel &quot;functional&quot; on the outside, but are quietly struggling with anxiety, stress, or the lingering effects of past experiences. Offering in-person sessions in Santa Monica and secure telehealth across California.
            </p>
            
            {/* CTA Link */}
            <div>
              <Link
                href="/#contact"
                className="inline-block text-[13px] xl:text-[13.5px] font-body font-normal tracking-[0.14em] uppercase text-primary-text border-b border-primary-text pb-0.5 hover:text-primary hover:border-primary transition-colors"
              >
                SCHEDULE AN APPOINTMENT
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* MOBILE / TABLET ADAPTIVE LAYOUT (< lg: 1024px)                           */}
      {/* ========================================================================= */}
      <div className="lg:hidden flex flex-col px-6 sm:px-10 overflow-hidden">
        
        {/* Main Heading */}
        <h1 className="font-serif text-[42px] sm:text-[50px] leading-[1.15] font-light text-primary-text tracking-[-0.01em] mb-7">
          Santa Monica Clinical Psychologist Specializing in Anxiety & Trauma
        </h1>
        
        {/* Supporting text */}
        <p className="font-body text-[17px] sm:text-[18px] leading-[1.7] text-muted-text font-light mb-7">
          I provide a warm, collaborative space for high-achieving adults who feel &quot;functional&quot; on the outside, but are quietly struggling with anxiety, stress, or the lingering effects of past experiences. Offering in-person sessions in Santa Monica and secure telehealth across California.
        </p>
        
        {/* CTA Link */}
        <div className="mb-10">
          <Link
            href="/#contact"
            className="inline-block text-[12.5px] sm:text-[13px] font-body font-normal tracking-[0.14em] uppercase text-primary-text border-b border-primary-text pb-0.5 hover:text-primary hover:border-primary transition-colors"
          >
            SCHEDULE AN APPOINTMENT
          </Link>
        </div>

        {/* Images Container */}
        <div className="relative w-full h-[500px] sm:h-[600px] flex">
          {/* Main Left Image */}
          <div className="relative w-full h-full z-10 flex-shrink-0">
            <Image
              src="/images/hero.jpg"
              alt="A bright, professional therapy clinic waiting area with glass walls and warm natural light."
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>

    </section>
  );
}
