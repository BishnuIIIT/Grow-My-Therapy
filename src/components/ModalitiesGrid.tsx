import React from "react";
import Image from "next/image";
import Link from "next/link";
import { modalitiesData } from "@/data/homepageData";

export default function ModalitiesGrid() {
  const specialtyLinks: Record<string, string> = {
    trauma: "https://www.conejovalleycounseling.com/trauma-counseling-newbury-park",
    dissociation: "https://www.conejovalleycounseling.com/dissociative-identity-disorder-therapist-newbury-park",
    emdr: "https://www.conejovalleycounseling.com/emdr-therapy-newbury-park",
    "special-needs": "https://www.conejovalleycounseling.com/counseling-special-needs-parents-newbury-park",
  };

  return (
    <section className="w-full bg-[#f7f6f2] overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full max-w-[1800px] mx-auto">
        
        {/* LEFT COLUMN - LARGE IMAGE BLEEDING TO LEFT EDGE */}
        <div className="w-full lg:w-[50%] flex flex-col justify-start">
          <div className="relative w-full aspect-[4/3] md:aspect-[3/2] lg:aspect-[4/3] xl:aspect-[1.35/1]">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/6f1501bf-74a5-4c57-a957-8ce4c5876848/Jennifer+A+-+Images+%285%29.jpg"
              alt="Family of four standing on a beach, holding hands, facing the ocean at sunset"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* RIGHT COLUMN - TEXT CONTENT */}
        <div className="w-full lg:w-[50%] px-6 sm:px-10 lg:pl-16 xl:pl-20 lg:pr-12 xl:pr-16 pt-16 lg:pt-32 pb-20 lg:pb-32 flex flex-col">
          
          {/* Main Heading */}
          <div className="max-w-2xl mb-6 lg:mb-8">
            <h2 className="font-['beaufort-pro',serif] text-[36px] sm:text-[44px] md:text-[52px] lg:text-[46px] xl:text-[54px] leading-[1.15] font-light text-[#2b2b2b] tracking-[-0.01em]">
              Honoring where you&apos;ve been <span className="font-['beaufort-pro',serif] text-[#86b3b3] font-bold italic">&amp;</span> helping shape where you&apos;re headed.
            </h2>
          </div>

          {/* Subheading */}
          <div className="mb-14 lg:mb-16">
            <h3 className="font-['beaufort-pro',serif] text-[24px] sm:text-[28px] md:text-[30px] lg:text-[28px] xl:text-[32px] font-normal text-[#2b2b2b]">
              Our <span className="font-['beaufort-pro',serif] text-[#86b3b3] font-bold italic">specialties</span> include...
            </h3>
          </div>

          {/* Specialties List (Editorial layout, NO cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 lg:gap-x-12 xl:gap-x-16 lg:gap-y-16">
            {modalitiesData.map((item) => (
              <div key={item.id} className="flex flex-col items-start group">
                <h4 className="font-['beaufort-pro',serif] text-[26px] sm:text-[28px] font-normal text-[#2b2b2b] mb-3">
                  {item.title}
                </h4>
                <p className="font-['gravesend-sans',sans-serif] text-[15.5px] leading-[1.8] text-[#555] font-[300] mb-5">
                  {item.description}
                </p>
                <Link
                  href={specialtyLinks[item.id] || "#"}
                  className="inline-block font-['gravesend-sans',sans-serif] text-[12px] sm:text-[13px] font-[500] tracking-[0.15em] uppercase text-[#2b2b2b] border-b-[1.5px] border-[#2b2b2b] pb-0.5 hover:text-[#86b3b3] hover:border-[#86b3b3] transition-colors mt-auto"
                >
                  LEARN MORE
                </Link>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
