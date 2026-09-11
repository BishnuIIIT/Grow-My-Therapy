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
      {/* SECTION A: Specialties Introduction with 200px top whitespace */}
      <section 
        className="w-full bg-white overflow-hidden pb-16 sm:pb-24 md:pb-32 lg:pb-44"
        style={{ paddingTop: '200px' }}
      >
        <div className="flex flex-col lg:flex-row w-full items-center justify-between">
          
          {/* LEFT: Large Horizontal Image Bleeding to Far Left Edge (1.5x width, 1.2x height) */}
          <div className="w-full lg:w-[58vw] xl:w-[62vw] max-w-[1080px] min-w-[550px] h-[520px] sm:h-[560px] lg:h-[580px] xl:h-[640px] relative flex-shrink-0">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/6f1501bf-74a5-4c57-a957-8ce4c5876848/Jennifer+A+-+Images+%285%29.jpg"
              alt="Family of four standing on a beach, holding hands, facing the ocean at sunset"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 62vw"
              className="object-cover object-center"
            />
          </div>

          {/* RIGHT: Heading moved a little to the right, size increased 1.5x */}
          <div 
            className="w-full flex-1 px-6 sm:px-10 lg:px-0 pt-10 sm:pt-14 lg:pt-0 flex flex-col justify-center"
            style={{ paddingLeft: "clamp(45px, 5.5vw, 120px)", paddingRight: "clamp(24px, 3vw, 60px)" }}
          >
            <div className="max-w-[700px] w-full">
              <h2 className="font-serif text-[42px] sm:text-[50px] lg:text-[58px] xl:text-[66px] leading-[1.14] font-light text-[#2b2b2b] tracking-[-0.01em]">
                <span className="whitespace-nowrap">Honoring where you’ve been{" "}
                  <span 
                    className="text-[#86b3b3] font-['PrintedMoments'] text-[1.25em] font-normal not-italic inline-block align-baseline ml-1"
                  >&amp;</span>
                </span>
                <br className="hidden lg:block" />
                <span className="whitespace-nowrap">helping shape where you’re</span>
                <br className="hidden lg:block" />
                <span>headed.</span>
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
              <h3 className="font-serif text-[28px] sm:text-[32px] md:text-[34px] lg:text-[38px] leading-[1.2] font-normal text-[#2b2b2b]">
                Our <span className="font-serif text-[#86b3b3] font-bold italic">specialties</span> include...
              </h3>
            </div>

            {/* COLUMN 2: Trauma & Dissociation */}
            <div className="flex flex-col space-y-16 sm:space-y-20 lg:space-y-24">
              
              {/* Item 1: Trauma */}
              <div className="flex flex-col items-start group">
                <h4 className="font-serif text-[24px] sm:text-[26px] lg:text-[28px] font-normal text-[#2b2b2b] mb-4">
                  {modalitiesData[0].title}
                </h4>
                <p className="font-body text-[14.5px] sm:text-[15px] leading-[1.8] text-[#555] font-[300] mb-6">
                  {modalitiesData[0].description}
                </p>
                <Link
                  href={specialtyLinks[modalitiesData[0].id] || "#"}
                  className="inline-block font-sans text-[11px] sm:text-[12px] font-[500] tracking-[0.16em] uppercase text-[#2b2b2b] border-b border-[#2b2b2b] pb-0.5 hover:text-[#86b3b3] hover:border-[#86b3b3] transition-colors"
                >
                  LEARN MORE
                </Link>
              </div>

              {/* Item 2: Dissociation */}
              <div className="flex flex-col items-start group">
                <h4 className="font-serif text-[24px] sm:text-[26px] lg:text-[28px] font-normal text-[#2b2b2b] mb-4">
                  {modalitiesData[1].title}
                </h4>
                <p className="font-body text-[14.5px] sm:text-[15px] leading-[1.8] text-[#555] font-[300] mb-6">
                  {modalitiesData[1].description}
                </p>
                <Link
                  href={specialtyLinks[modalitiesData[1].id] || "#"}
                  className="inline-block font-sans text-[11px] sm:text-[12px] font-[500] tracking-[0.16em] uppercase text-[#2b2b2b] border-b border-[#2b2b2b] pb-0.5 hover:text-[#86b3b3] hover:border-[#86b3b3] transition-colors"
                >
                  LEARN MORE
                </Link>
              </div>

            </div>

            {/* COLUMN 3: EMDR & Special Needs Parenting */}
            <div className="flex flex-col space-y-16 sm:space-y-20 lg:space-y-24">
              
              {/* Item 3: EMDR */}
              <div className="flex flex-col items-start group">
                <h4 className="font-serif text-[24px] sm:text-[26px] lg:text-[28px] font-normal text-[#2b2b2b] mb-4">
                  {modalitiesData[2].title}
                </h4>
                <p className="font-body text-[14.5px] sm:text-[15px] leading-[1.8] text-[#555] font-[300] mb-6">
                  {modalitiesData[2].description}
                </p>
                <Link
                  href={specialtyLinks[modalitiesData[2].id] || "#"}
                  className="inline-block font-sans text-[11px] sm:text-[12px] font-[500] tracking-[0.16em] uppercase text-[#2b2b2b] border-b border-[#2b2b2b] pb-0.5 hover:text-[#86b3b3] hover:border-[#86b3b3] transition-colors"
                >
                  LEARN MORE
                </Link>
              </div>

              {/* Item 4: Special Needs Parenting */}
              <div className="flex flex-col items-start group">
                <h4 className="font-serif text-[24px] sm:text-[26px] lg:text-[28px] font-normal text-[#2b2b2b] mb-4">
                  {modalitiesData[3].title}
                </h4>
                <p className="font-body text-[14.5px] sm:text-[15px] leading-[1.8] text-[#555] font-[300] mb-6">
                  {modalitiesData[3].description}
                </p>
                <Link
                  href={specialtyLinks[modalitiesData[3].id] || "#"}
                  className="inline-block font-sans text-[11px] sm:text-[12px] font-[500] tracking-[0.16em] uppercase text-[#2b2b2b] border-b border-[#2b2b2b] pb-0.5 hover:text-[#86b3b3] hover:border-[#86b3b3] transition-colors"
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
