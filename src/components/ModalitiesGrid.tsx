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
    <>
      {/* SECTION A: Specialties Introduction (Pure white background per reference) */}
      <section className="w-full bg-white overflow-hidden pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-24 md:pb-32 lg:pb-44">
        <div className="flex flex-col lg:flex-row w-full max-w-[1800px] mx-auto items-stretch">
          
          {/* LEFT: Large Horizontal Image Bleeding to Left Edge */}
          <div className="w-full lg:w-[52%] xl:w-[50%] flex-shrink-0">
            <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] lg:aspect-[1.5/1] xl:aspect-[1.55/1]">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/6f1501bf-74a5-4c57-a957-8ce4c5876848/Jennifer+A+-+Images+%285%29.jpg"
                alt="Family of four standing on a beach, holding hands, facing the ocean at sunset"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* RIGHT: Heading positioned toward lower-middle of image */}
          <div 
            className="w-full lg:w-[48%] xl:w-[50%] px-6 sm:px-10 lg:px-0 pt-10 sm:pt-14 lg:pt-0 flex flex-col justify-end lg:pb-4 xl:pb-6"
            style={{ paddingLeft: "clamp(32px, 5vw, 96px)", paddingRight: "3vw" }}
          >
            <div className="max-w-[900px] w-full">
              <h2 className="font-['beaufort-pro',serif] text-[34px] sm:text-[42px] lg:text-[44px] xl:text-[48px] leading-[1.2] font-normal text-[#2b2b2b] tracking-[-0.01em]">
                <span>Honoring where you’ve been</span>
                <span 
                  className="text-[#86b3b3] italic font-medium"
                  style={{ 
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: "1.35em",
                    verticalAlign: "-0.08em",
                    marginLeft: "0.2em",
                    display: "inline-block"
                  }}
                >&amp;</span>
                <br className="hidden lg:block" />
                <span> helping shape where you’re</span>
                <br className="hidden lg:block" />
                <span> headed.</span>
              </h2>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION B: Specialties 3-Column Editorial Grid (Pure white background with generous whitespace) */}
      <section className="w-full bg-white pt-8 sm:pt-14 md:pt-20 lg:pt-28 pb-28 sm:pb-36 md:pb-44 lg:pb-56">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-14 lg:gap-16 xl:gap-20 items-start">
            
            {/* COLUMN 1: Subheading */}
            <div className="flex flex-col">
              <h3 className="font-['beaufort-pro',serif] text-[28px] sm:text-[32px] md:text-[34px] lg:text-[38px] leading-[1.2] font-normal text-[#2b2b2b]">
                Our <span className="font-['beaufort-pro',serif] text-[#86b3b3] font-bold italic">specialties</span> include...
              </h3>
            </div>

            {/* COLUMN 2: Trauma & Dissociation */}
            <div className="flex flex-col space-y-16 sm:space-y-20 lg:space-y-24">
              
              {/* Item 1: Trauma */}
              <div className="flex flex-col items-start group">
                <h4 className="font-['beaufort-pro',serif] text-[24px] sm:text-[26px] lg:text-[28px] font-normal text-[#2b2b2b] mb-4">
                  {modalitiesData[0].title}
                </h4>
                <p className="font-body text-[14.5px] sm:text-[15px] leading-[1.8] text-[#555] font-[300] mb-6">
                  {modalitiesData[0].description}
                </p>
                <Link
                  href={specialtyLinks[modalitiesData[0].id] || "#"}
                  className="inline-block font-['gravesend-sans',sans-serif] text-[11px] sm:text-[12px] font-[500] tracking-[0.16em] uppercase text-[#2b2b2b] border-b border-[#2b2b2b] pb-0.5 hover:text-[#86b3b3] hover:border-[#86b3b3] transition-colors"
                >
                  LEARN MORE
                </Link>
              </div>

              {/* Item 2: Dissociation */}
              <div className="flex flex-col items-start group">
                <h4 className="font-['beaufort-pro',serif] text-[24px] sm:text-[26px] lg:text-[28px] font-normal text-[#2b2b2b] mb-4">
                  {modalitiesData[1].title}
                </h4>
                <p className="font-body text-[14.5px] sm:text-[15px] leading-[1.8] text-[#555] font-[300] mb-6">
                  {modalitiesData[1].description}
                </p>
                <Link
                  href={specialtyLinks[modalitiesData[1].id] || "#"}
                  className="inline-block font-['gravesend-sans',sans-serif] text-[11px] sm:text-[12px] font-[500] tracking-[0.16em] uppercase text-[#2b2b2b] border-b border-[#2b2b2b] pb-0.5 hover:text-[#86b3b3] hover:border-[#86b3b3] transition-colors"
                >
                  LEARN MORE
                </Link>
              </div>

            </div>

            {/* COLUMN 3: EMDR & Special Needs Parenting */}
            <div className="flex flex-col space-y-16 sm:space-y-20 lg:space-y-24">
              
              {/* Item 3: EMDR */}
              <div className="flex flex-col items-start group">
                <h4 className="font-['beaufort-pro',serif] text-[24px] sm:text-[26px] lg:text-[28px] font-normal text-[#2b2b2b] mb-4">
                  {modalitiesData[2].title}
                </h4>
                <p className="font-body text-[14.5px] sm:text-[15px] leading-[1.8] text-[#555] font-[300] mb-6">
                  {modalitiesData[2].description}
                </p>
                <Link
                  href={specialtyLinks[modalitiesData[2].id] || "#"}
                  className="inline-block font-['gravesend-sans',sans-serif] text-[11px] sm:text-[12px] font-[500] tracking-[0.16em] uppercase text-[#2b2b2b] border-b border-[#2b2b2b] pb-0.5 hover:text-[#86b3b3] hover:border-[#86b3b3] transition-colors"
                >
                  LEARN MORE
                </Link>
              </div>

              {/* Item 4: Special Needs Parenting */}
              <div className="flex flex-col items-start group">
                <h4 className="font-['beaufort-pro',serif] text-[24px] sm:text-[26px] lg:text-[28px] font-normal text-[#2b2b2b] mb-4">
                  {modalitiesData[3].title}
                </h4>
                <p className="font-body text-[14.5px] sm:text-[15px] leading-[1.8] text-[#555] font-[300] mb-6">
                  {modalitiesData[3].description}
                </p>
                <Link
                  href={specialtyLinks[modalitiesData[3].id] || "#"}
                  className="inline-block font-['gravesend-sans',sans-serif] text-[11px] sm:text-[12px] font-[500] tracking-[0.16em] uppercase text-[#2b2b2b] border-b border-[#2b2b2b] pb-0.5 hover:text-[#86b3b3] hover:border-[#86b3b3] transition-colors"
                >
                  LEARN MORE
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}
