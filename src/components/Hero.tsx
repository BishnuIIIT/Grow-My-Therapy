import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#f7f6f2] pt-12 md:pt-16 lg:pt-20 pb-16 md:pb-24 overflow-hidden border-b border-[#ece9e3]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Eyebrow / Tagline */}
        <div className="text-center max-w-4xl mx-auto mb-4 md:mb-6">
          <p className="text-[11px] sm:text-[12px] md:text-[13px] font-sans font-semibold tracking-[0.2em] uppercase text-[#666] italic">
            ONLINE & IN-PERSON COUNSELING IN NEWBURY PARK & ACROSS CA
          </p>
        </div>

        {/* H1 Main Heading */}
        <div className="text-center max-w-4xl mx-auto mb-6 md:mb-8">
          <h1 className="font-serif text-[38px] sm:text-[50px] md:text-[62px] lg:text-[72px] leading-[1.1] font-normal text-[#2b2b2b] tracking-[-0.01em]">
            Rebuild your foundation on solid ground and finally begin to{" "}
            <span className="italic font-normal">thrive</span>.
          </h1>
        </div>

        {/* Subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
          <p className="font-sans text-[16px] sm:text-[18px] md:text-[19px] leading-[1.6] text-[#555] font-light">
            Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-14 md:mb-20">
          <Link
            href="https://www.conejovalleycounseling.com/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-[13px] sm:text-[14px] font-sans font-medium tracking-[0.1em] uppercase text-white bg-[#2b2b2b] hover:bg-[#444] rounded-full transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
          >
            Schedule a Consultation
          </Link>
        </div>

        {/* Hero Imagery Showcase (Dual Photos) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto items-center">
          {/* Photo 1: Family Therapy */}
          <div className="relative group overflow-hidden rounded-2xl md:rounded-3xl shadow-sm aspect-[4/5] sm:aspect-[3/4] bg-[#e8e5df]">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/80513bd1-30ee-4a2d-aaf6-782d9be095ce/Jennifer+A+-+Images+%2866%29.jpg"
              alt="Family therapy session in a warm, welcoming counseling setting"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
          </div>

          {/* Photo 2: Child Therapy (staggered slightly down on desktop) */}
          <div className="relative group overflow-hidden rounded-2xl md:rounded-3xl shadow-sm aspect-[4/5] sm:aspect-[3/4] bg-[#e8e5df] sm:translate-y-6 md:translate-y-10">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/3643a7ac-ff62-4927-b96e-9e65ecff0521/Jennifer+A+-+Images+%2867%29.jpg"
              alt="Child and teen therapy support"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
