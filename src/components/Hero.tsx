import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#f7f6f2] overflow-hidden">
      
      {/* Desktop Grid Layout that preserves DOM order */}
      <div className="w-full max-w-[1600px] mx-auto min-h-[60vh] md:min-h-[85vh] grid grid-cols-1 lg:grid-cols-12 relative pt-20 pb-12 md:py-24">
        
        {/* 1. HERO TEXT */}
        <div className="lg:col-span-5 lg:col-start-7 lg:row-start-1 flex flex-col justify-center px-6 sm:px-10 lg:px-0 z-20">
          <p className="text-[11px] sm:text-[12px] md:text-[13px] font-sans font-semibold tracking-[0.2em] uppercase text-[#666] mb-4 md:mb-6">
            ONLINE & IN-PERSON COUNSELING IN NEWBURY PARK & ACROSS CA
          </p>
          
          <h1 className="font-serif text-[42px] sm:text-[50px] md:text-[56px] lg:text-[68px] xl:text-[76px] leading-[1.05] font-light text-[#2b2b2b] tracking-[-0.01em] mb-6 lg:mb-8">
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

        {/* 2. FAMILY THERAPY IMAGE (Main left image) */}
        <div className="lg:col-span-4 lg:col-start-1 lg:row-start-1 relative w-full h-[50vh] md:h-full mt-16 lg:mt-0 z-10">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/80513bd1-30ee-4a2d-aaf6-782d9be095ce/Jennifer+A+-+Images+%2866%29.jpg"
            alt="Family therapy session in a warm, welcoming counseling setting"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-center lg:py-[5%]"
          />
        </div>

        {/* 3. CHILD THERAPY IMAGE (Right sliver image next to the main left image) */}
        {/* We place it in col 5, which sits between the left image (cols 1-4) and the text (cols 7-11) */}
        <div className="hidden lg:block lg:col-span-1 lg:col-start-5 lg:row-start-1 relative w-full h-full z-10">
          <div className="absolute inset-y-[20%] right-0 w-full">
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

      </div>
    </section>
  );
}
