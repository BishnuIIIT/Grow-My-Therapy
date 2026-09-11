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
        <div className="flex flex-col lg:flex-row w-full items-end justify-between">
          
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

          {/* RIGHT: Heading aligned to the bottom horizontal line of the image */}
          <div 
            className="w-full flex-1 px-6 sm:px-10 lg:px-0 pt-10 sm:pt-14 lg:pt-0 flex flex-col justify-end lg:self-end pb-4 lg:pb-6 xl:pb-10 min-w-0"
            style={{ paddingLeft: "clamp(45px, 5.5vw, 120px)", paddingRight: "clamp(24px, 3vw, 60px)" }}
          >
            <div className="max-w-[700px] w-full">
              <h2 className="font-serif text-[42px] sm:text-[48px] lg:text-[54px] xl:text-[58px] leading-[1.15] font-light text-[#2b2b2b] tracking-[-0.01em] mb-[45px] xl:mb-[55px]">
                <span className="whitespace-normal">Honoring where you’ve been{" "}
                  <span className="font-['PrintedMoments'] text-[#86b3b3] text-[1.15em] font-normal not-italic px-1">
                    &amp;
                  </span>
                </span>
                <br className="hidden lg:inline" />
                <span className="whitespace-normal">helping shape where you’re</span>
                <br className="hidden sm:inline lg:hidden" />
                headed.
              </h2>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION B: Specialties 3-Column Editorial Grid (Pure white background with generous whitespace) */}
      <section className="w-full bg-white pt-10 sm:pt-16 md:pt-24 pb-28 sm:pb-36 md:pb-44 lg:pb-56">
        <div 
          className="w-full max-w-[1720px] mx-auto"
          style={{
            paddingLeft: "clamp(20px, 3.2vw, 60px)",
            paddingRight: "clamp(30px, 4.5vw, 90px)"
          }}
        >
          
          <div className="grid grid-cols-1 md:grid-cols-[1.15fr_1fr_1fr] lg:grid-cols-[1.2fr_1fr_1fr] gap-8 lg:gap-12 xl:gap-16 items-start">
            
            {/* COLUMN 1: Subheading (Moved a little left, locked to single line) */}
            <div className="flex flex-col pt-1 lg:-ml-2 xl:-ml-6">
              <h3 className="font-serif text-[32px] sm:text-[38px] lg:text-[42px] xl:text-[46px] leading-[1.2] font-light text-[#2b2b2b] tracking-[-0.01em]">
                Our{" "}
                <span className="font-['PrintedMoments'] text-[#86b3b3] text-[1.25em] font-normal not-italic inline-block mx-1 leading-none">
                  specialties
                </span>{" "}
                include…
              </h3>
            </div>

            {/* COLUMN 2: Trauma & Dissociation */}
            <div className="flex flex-col space-y-20 sm:space-y-24 lg:space-y-28 xl:space-y-32">
              
              {/* Item 1: Trauma */}
              <div className="flex flex-col items-start group">
                <h4 className="font-serif text-[28px] sm:text-[30px] lg:text-[34px] font-light text-[#2b2b2b] mb-4 leading-[1.2]">
                  {modalitiesData[0].title}
                </h4>
                <p className="font-body text-[15px] sm:text-[15.5px] lg:text-[16px] leading-[1.75] text-[#555] font-light mb-6">
                  {modalitiesData[0].description}
                </p>
                <Link
                  href={specialtyLinks[modalitiesData[0].id] || "#"}
                  className="inline-block font-body text-[12px] sm:text-[12.5px] font-normal tracking-[0.14em] uppercase text-[#2b2b2b] border-b border-[#2b2b2b] pb-0.5 hover:text-[#86b3b3] hover:border-[#86b3b3] transition-colors"
                >
                  LEARN MORE
                </Link>
              </div>

              {/* Item 2: Dissociation */}
              <div className="flex flex-col items-start group">
                <h4 className="font-serif text-[28px] sm:text-[30px] lg:text-[34px] font-light text-[#2b2b2b] mb-4 leading-[1.2]">
                  {modalitiesData[1].title}
                </h4>
                <p className="font-body text-[15px] sm:text-[15.5px] lg:text-[16px] leading-[1.75] text-[#555] font-light mb-6">
                  {modalitiesData[1].description}
                </p>
                <Link
                  href={specialtyLinks[modalitiesData[1].id] || "#"}
                  className="inline-block font-body text-[12px] sm:text-[12.5px] font-normal tracking-[0.14em] uppercase text-[#2b2b2b] border-b border-[#2b2b2b] pb-0.5 hover:text-[#86b3b3] hover:border-[#86b3b3] transition-colors"
                >
                  LEARN MORE
                </Link>
              </div>

            </div>

            {/* COLUMN 3: EMDR & Special Needs Parenting */}
            <div className="flex flex-col space-y-20 sm:space-y-24 lg:space-y-28 xl:space-y-32">
              
              {/* Item 3: EMDR */}
              <div className="flex flex-col items-start group">
                <h4 className="font-serif text-[28px] sm:text-[30px] lg:text-[34px] font-light text-[#2b2b2b] mb-4 leading-[1.2]">
                  {modalitiesData[2].title}
                </h4>
                <p className="font-body text-[15px] sm:text-[15.5px] lg:text-[16px] leading-[1.75] text-[#555] font-light mb-6">
                  {modalitiesData[2].description}
                </p>
                <Link
                  href={specialtyLinks[modalitiesData[2].id] || "#"}
                  className="inline-block font-body text-[12px] sm:text-[12.5px] font-normal tracking-[0.14em] uppercase text-[#2b2b2b] border-b border-[#2b2b2b] pb-0.5 hover:text-[#86b3b3] hover:border-[#86b3b3] transition-colors"
                >
                  LEARN MORE
                </Link>
              </div>

              {/* Item 4: Special Needs Parenting */}
              <div className="flex flex-col items-start group">
                <h4 className="font-serif text-[28px] sm:text-[30px] lg:text-[34px] font-light text-[#2b2b2b] mb-4 leading-[1.2]">
                  {modalitiesData[3].title}
                </h4>
                <p className="font-body text-[15px] sm:text-[15.5px] lg:text-[16px] leading-[1.75] text-[#555] font-light mb-6">
                  {modalitiesData[3].description}
                </p>
                <Link
                  href={specialtyLinks[modalitiesData[3].id] || "#"}
                  className="inline-block font-body text-[12px] sm:text-[12.5px] font-normal tracking-[0.14em] uppercase text-[#2b2b2b] border-b border-[#2b2b2b] pb-0.5 hover:text-[#86b3b3] hover:border-[#86b3b3] transition-colors"
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
