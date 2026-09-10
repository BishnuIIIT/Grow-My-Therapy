import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#f7f6f2] overflow-hidden flex flex-col md:block">
      {/* Desktop Background Images Layer */}
      <div className="hidden md:block absolute inset-0 w-full h-full pointer-events-none">
        {/* Left main image: touches left edge, spans vertical rectangle */}
        <div className="absolute left-0 top-[5%] bottom-[5%] w-[38%] lg:w-[36%] z-10">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/80513bd1-30ee-4a2d-aaf6-782d9be095ce/Jennifer+A+-+Images+%2866%29.jpg"
            alt="Family therapy session in a warm, welcoming counseling setting"
            fill
            priority
            sizes="40vw"
            className="object-cover object-center"
          />
        </div>

        {/* Right sliver image: touches right edge, partial sliver */}
        <div className="absolute right-0 top-[35%] bottom-[15%] w-[8%] lg:w-[6%] z-10">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/3643a7ac-ff62-4927-b96e-9e65ecff0521/Jennifer+A+-+Images+%2867%29.jpg"
            alt="Child and teen therapy support"
            fill
            priority
            sizes="10vw"
            className="object-cover object-left"
          />
        </div>
      </div>

      {/* Text Content Layer */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 min-h-[60vh] md:min-h-[85vh] flex items-center pt-16 pb-12 md:py-24">
        {/* Content constrained to right side on desktop */}
        <div className="w-full md:w-[55%] lg:w-[50%] md:ml-[42%] lg:ml-[45%] flex flex-col justify-center bg-[#f7f6f2] md:bg-transparent">
          
          <p className="text-[11px] sm:text-[12px] md:text-[13px] font-sans font-semibold tracking-[0.2em] uppercase text-[#666] mb-4 md:mb-6">
            ONLINE & IN-PERSON COUNSELING IN NEWBURY PARK & ACROSS CA
          </p>
          
          <h1 className="font-serif text-[42px] sm:text-[50px] md:text-[56px] lg:text-[68px] xl:text-[76px] leading-[1.05] font-light text-[#2b2b2b] tracking-[-0.01em] mb-6 lg:mb-8 max-w-xl lg:max-w-2xl">
            Rebuild your foundation on solid ground and finally begin to{" "}
            <span className="text-[#86b3b3] font-serif font-bold italic inline-block transform translate-y-1">thrive</span>.
          </h1>
          
          <p className="font-sans text-[16px] sm:text-[17px] md:text-[18px] leading-[1.6] text-[#555] font-light mb-10 max-w-lg">
            Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.
          </p>
          
          <div>
            <Link
              href="https://www.conejovalleycounseling.com/contact"
              className="inline-block text-[12px] sm:text-[13px] font-sans font-medium tracking-[0.1em] uppercase text-[#2b2b2b] border-b-[1.5px] border-[#2b2b2b] pb-0.5 hover:text-[#86b3b3] hover:border-[#86b3b3] transition-colors"
            >
              BOOK AN APPOINTMENT
            </Link>
          </div>

        </div>
      </div>

      {/* Mobile Image Layer (Stacks below text) */}
      <div className="md:hidden w-full h-[50vh] relative">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/80513bd1-30ee-4a2d-aaf6-782d9be095ce/Jennifer+A+-+Images+%2866%29.jpg"
          alt="Family therapy session in a warm, welcoming counseling setting"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}
