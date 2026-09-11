import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HowWeWork() {
  return (
    <section className="relative w-full bg-secondary-bg overflow-hidden">
      
      {/* ============================================================ */}
      {/* DESKTOP LAYOUT (>= 1024px)                                   */}
      {/* ============================================================ */}
      <div 
        className="hidden lg:flex w-full items-center justify-between relative min-h-[970px] xl:min-h-[1040px]"
        style={{
          paddingLeft: "clamp(60px, 8vw, 170px)",
          paddingTop: "170px",
          paddingBottom: "170px"
        }}
      >
        {/* Left Content Area */}
        <div className="flex flex-col flex-1 max-w-[980px] xl:max-w-[1120px] z-10 pr-10 xl:pr-14">
          
          {/* Label */}
          <p className="-mt-10 lg:-mt-14 xl:-mt-18 font-sans text-[13px] xl:text-[14px] font-medium tracking-[0.2em] uppercase text-primary-text mb-14 xl:mb-20">
            CLINICAL PSYCHOLOGIST (PsyD)
          </p>

          {/* Heading */}
          <h2 className="font-serif text-[46px] lg:text-[54px] xl:text-[62px] leading-[1.15] font-light text-primary-text tracking-[-0.01em] mb-10 xl:mb-12">
            Meet Dr. Maya Reynolds.
          </h2>

          {/* 2-Column Body Paragraphs */}
          <div className="grid grid-cols-2 gap-10 xl:gap-14">
            
            {/* Column 1 */}
            <div className="flex flex-col">
              <p className="font-sans text-[14.5px] xl:text-[16px] font-medium uppercase tracking-[0.14em] text-primary-text leading-[1.65] mb-5">
                I UNDERSTAND WHAT IT&apos;S LIKE TO HOLD EVERYTHING TOGETHER ON THE OUTSIDE WHILE FEELING EXHAUSTED AND OVERWHELMED ON THE INSIDE.
              </p>
              <p className="font-body text-[17.5px] xl:text-[19.5px] leading-[1.75] text-muted-text font-light">
                Many of the people I work with are successful professionals, creatives, and entrepreneurs who are used to pushing through and making things work. But over time, that constant pressure takes a toll.
              </p>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col">
              <p className="font-body text-[17.5px] xl:text-[19.5px] leading-[1.75] text-muted-text font-light">
                In my practice, I blend evidence-based psychological frameworks with a compassionate, human-to-human approach. You don&apos;t have to keep doing this alone. Together, we can create a space where you can finally put down the weight you&apos;ve been carrying, untangle the patterns that keep you stuck, and build a life that feels genuinely fulfilling.
              </p>
            </div>

          </div>

          {/* Learn More Link */}
          <div className="mt-24 xl:mt-32">
            <Link
              href="/#contact"
              className="inline-block font-body text-[13px] xl:text-[13.5px] font-normal tracking-[0.14em] uppercase text-primary-text border-b border-primary-text pb-0.5 hover:text-primary hover:border-primary transition-colors"
            >
              WORK WITH ME
            </Link>
          </div>

        </div>

        {/* Right Image */}
        <div className="absolute right-0 top-[75px] lg:top-[90px] xl:top-[100px] bottom-[75px] lg:bottom-[90px] xl:bottom-[100px] w-[27vw] lg:w-[28.5vw] xl:w-[29vw] max-w-[530px] min-w-[360px]">
          <Image
            src="/images/about.jpg"
            alt="A beautiful, real therapy room with comfortable seating and natural light."
            fill
            priority
            sizes="35vw"
            className="object-cover object-center"
          />
        </div>

      </div>

      {/* ============================================================ */}
      {/* MOBILE / TABLET LAYOUT (< 1024px)                            */}
      {/* ============================================================ */}
      <div className="lg:hidden flex flex-col px-6 sm:px-10 py-24 gap-8">
        <p className="font-sans text-[13px] sm:text-[14px] font-medium tracking-[0.18em] uppercase text-primary-text">
          CLINICAL PSYCHOLOGIST (PsyD)
        </p>

        <h2 className="font-serif text-[38px] sm:text-[46px] leading-[1.2] font-light text-primary-text tracking-[-0.01em]">
          Meet Dr. Maya Reynolds.
        </h2>

        <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden my-4">
          <Image
            src="/images/about.jpg"
            alt="A beautiful, real therapy room with comfortable seating and natural light."
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="flex flex-col gap-6">
          <p className="font-sans text-[13.5px] sm:text-[14.5px] font-medium uppercase tracking-[0.14em] text-primary-text leading-[1.6]">
            I UNDERSTAND WHAT IT&apos;S LIKE TO HOLD EVERYTHING TOGETHER ON THE OUTSIDE WHILE FEELING EXHAUSTED AND OVERWHELMED ON THE INSIDE.
          </p>
          <p className="font-body text-[16.5px] sm:text-[17.5px] leading-[1.75] text-muted-text font-light">
            Many of the people I work with are successful professionals, creatives, and entrepreneurs who are used to pushing through and making things work. But over time, that constant pressure takes a toll.
          </p>
          <p className="font-body text-[16.5px] sm:text-[17.5px] leading-[1.75] text-muted-text font-light">
            In my practice, I blend evidence-based psychological frameworks with a compassionate, human-to-human approach. You don&apos;t have to keep doing this alone. Together, we can create a space where you can finally put down the weight you&apos;ve been carrying, untangle the patterns that keep you stuck, and build a life that feels genuinely fulfilling.
          </p>
        </div>

        <div className="mt-4">
          <Link
            href="/#contact"
            className="inline-block font-body text-[12.5px] sm:text-[13px] font-normal tracking-[0.14em] uppercase text-primary-text border-b border-primary-text pb-0.5 hover:text-primary hover:border-primary transition-colors"
          >
            WORK WITH ME
          </Link>
        </div>
      </div>

    </section>
  );
}
