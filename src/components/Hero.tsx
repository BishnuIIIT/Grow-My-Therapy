import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#f7f6f2] overflow-hidden min-h-[auto] lg:min-h-[850px] xl:min-h-[880px] pt-16 pb-16 lg:pt-0 lg:pb-0">
      
      {/* ========================================================================= */}
      {/* DESKTOP HERO COMPOSITION (>= lg: 1024px)                                  */}
      {/* Matches exact reference geometry at 2048px:                               */}
      {/* - Left Image: left ≈ 0, top ≈ 148px, width ≈ 617px, height ≈ 645px        */}
      {/* - Text Block: left ≈ 758px, top ≈ 148px - 180px, width ≈ 520px - 560px    */}
      {/* - Secondary Image: Far right edge, partially visible                      */}
      {/* ========================================================================= */}
      <div className="hidden lg:block w-full h-[850px] xl:h-[880px] relative">
        
        {/* 1. MAIN LEFT IMAGE */}
        <div className="absolute left-0 top-[120px] xl:top-[148px] w-[540px] xl:w-[617px] h-[580px] xl:h-[645px] z-10">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/80513bd1-30ee-4a2d-aaf6-782d9be095ce/Jennifer+A+-+Images+%2866%29.jpg"
            alt="Family therapy session in a warm, welcoming counseling setting"
            fill
            priority
            sizes="(max-width: 1280px) 540px, 617px"
            className="object-cover object-center"
          />
        </div>

        {/* 2. HERO TEXT CONTENT */}
        <div className="absolute left-[580px] xl:left-[758px] top-[110px] xl:top-[140px] w-[500px] xl:w-[560px] text-left z-20">
          <p className="text-[11px] xl:text-[12px] font-sans font-medium tracking-[0.18em] uppercase text-[#666] mb-5 xl:mb-7">
            ONLINE & IN-PERSON COUNSELING IN NEWBURY PARK & ACROSS CA
          </p>
          
          <h1 className="font-serif text-[48px] xl:text-[62px] leading-[1.08] font-light text-[#2b2b2b] tracking-[-0.01em] mb-6 xl:mb-8">
            Rebuild your<br />
            foundation on solid<br />
            ground and finally<br />
            begin to{" "}
            <span className="text-[#86b3b3] font-serif italic font-normal">thrive</span>.
          </h1>
          
          <p className="font-sans text-[12.5px] xl:text-[13.5px] leading-[1.7] tracking-[0.06em] text-[#555] font-normal uppercase mb-8 xl:mb-10 max-w-[490px]">
            SPECIALIZED THERAPY FOR ADULTS, COUPLES, TEENS, AND CHILDREN TO REFLECT, HEAL, AND GROW.
          </p>
          
          <div>
            <Link
              href="https://www.conejovalleycounseling.com/contact"
              className="inline-block text-[12px] xl:text-[13px] font-sans font-medium tracking-[0.14em] uppercase text-[#2b2b2b] border-b-[1.5px] border-[#2b2b2b] pb-0.5 hover:text-[#86b3b3] hover:border-[#86b3b3] transition-colors"
            >
              BOOK AN APPOINTMENT
            </Link>
          </div>
        </div>

        {/* 3. SECONDARY RIGHT IMAGE (Far right edge) */}
        <div className="absolute right-0 top-[200px] xl:top-[240px] w-[140px] xl:w-[200px] h-[360px] xl:h-[430px] z-10 overflow-hidden">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/3643a7ac-ff62-4927-b96e-9e65ecff0521/Jennifer+A+-+Images+%2867%29.jpg"
            alt="Child and teen therapy support"
            fill
            priority
            sizes="200px"
            className="object-cover object-left"
          />
        </div>

      </div>

      {/* ========================================================================= */}
      {/* MOBILE / TABLET ADAPTIVE LAYOUT (< lg: 1024px)                           */}
      {/* Clean vertical flow preventing overflow and preserving visual hierarchy   */}
      {/* ========================================================================= */}
      <div className="lg:hidden flex flex-col px-6 sm:px-10">
        
        {/* Label */}
        <p className="text-[11px] sm:text-[12px] font-sans font-medium tracking-[0.18em] uppercase text-[#666] mb-4">
          ONLINE & IN-PERSON COUNSELING IN NEWBURY PARK & ACROSS CA
        </p>
        
        {/* Heading */}
        <h1 className="font-serif text-[38px] sm:text-[46px] leading-[1.1] font-light text-[#2b2b2b] tracking-[-0.01em] mb-6">
          Rebuild your foundation on solid ground and finally begin to{" "}
          <span className="text-[#86b3b3] font-serif italic font-normal">thrive</span>.
        </h1>
        
        {/* Main Image */}
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

        {/* Supporting text */}
        <p className="font-sans text-[12.5px] sm:text-[13.5px] leading-[1.7] tracking-[0.06em] text-[#555] font-normal uppercase mb-6">
          SPECIALIZED THERAPY FOR ADULTS, COUPLES, TEENS, AND CHILDREN TO REFLECT, HEAL, AND GROW.
        </p>
        
        {/* CTA */}
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
