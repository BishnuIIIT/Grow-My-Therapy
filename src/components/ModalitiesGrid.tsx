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
      {/* SECTION A: Specialties Introduction */}
      <section className="w-full bg-[#f7f6f2] overflow-hidden pt-12 md:pt-16 lg:pt-20">
        <div className="flex flex-col lg:flex-row w-full max-w-[1800px] mx-auto items-center lg:items-start">
          
          {/* LEFT: Large Horizontal Image */}
          <div className="w-full lg:w-[55%] xl:w-[50%] flex flex-col justify-start">
            <div className="relative w-full aspect-[4/3] md:aspect-[3/2] lg:aspect-[4/3] xl:aspect-[1.4/1]">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/6f1501bf-74a5-4c57-a957-8ce4c5876848/Jennifer+A+-+Images+%285%29.jpg"
                alt="Family of four standing on a beach, holding hands, facing the ocean at sunset"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* RIGHT: Large Heading */}
          <div className="w-full lg:w-[45%] xl:w-[50%] px-6 sm:px-10 lg:pl-16 xl:pl-20 lg:pr-12 xl:pr-16 pt-12 pb-16 lg:pt-32 lg:pb-32 flex flex-col">
            <div className="max-w-2xl">
              <h2 className="font-['beaufort-pro',serif] text-[36px] sm:text-[44px] md:text-[52px] lg:text-[46px] xl:text-[54px] leading-[1.15] font-light text-[#2b2b2b] tracking-[-0.01em]">
                Honoring where you&apos;ve been <span className="font-['beaufort-pro',serif] text-[#86b3b3] font-bold italic">&amp;</span> helping shape where you&apos;re headed.
              </h2>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION B: Specialties Grid */}
      <section className="w-full bg-[#f7f6f2] pb-24 md:pb-32 lg:pb-40">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-16 items-start">
            
            {/* LEFT COLUMN: Subheading */}
            <div className="lg:col-span-4 xl:col-span-4">
              <h3 className="font-['beaufort-pro',serif] text-[26px] sm:text-[30px] md:text-[34px] lg:text-[32px] xl:text-[36px] font-normal text-[#2b2b2b]">
                Our <span className="font-['beaufort-pro',serif] text-[#86b3b3] font-bold italic">specialties</span> include...
              </h3>
            </div>

            {/* MIDDLE COLUMN: Trauma & Dissociation */}
            <div className="lg:col-span-4 xl:col-span-4 flex flex-col space-y-12 sm:space-y-16">
              
              {/* Item 1 */}
              <div className="flex flex-col items-start group">
                <h4 className="font-['beaufort-pro',serif] text-[26px] sm:text-[28px] font-normal text-[#2b2b2b] mb-4">
                  {modalitiesData[0].title}
                </h4>
                <p className="font-['gravesend-sans',sans-serif] text-[15.5px] leading-[1.8] text-[#555] font-[300] mb-6">
                  {modalitiesData[0].description}
                </p>
                <Link
                  href={specialtyLinks[modalitiesData[0].id] || "#"}
                  className="inline-block font-['gravesend-sans',sans-serif] text-[12px] sm:text-[13px] font-[500] tracking-[0.15em] uppercase text-[#2b2b2b] border-b-[1.5px] border-[#2b2b2b] pb-0.5 hover:text-[#86b3b3] hover:border-[#86b3b3] transition-colors"
                >
                  LEARN MORE
                </Link>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col items-start group">
                <h4 className="font-['beaufort-pro',serif] text-[26px] sm:text-[28px] font-normal text-[#2b2b2b] mb-4">
                  {modalitiesData[1].title}
                </h4>
                <p className="font-['gravesend-sans',sans-serif] text-[15.5px] leading-[1.8] text-[#555] font-[300] mb-6">
                  {modalitiesData[1].description}
                </p>
                <Link
                  href={specialtyLinks[modalitiesData[1].id] || "#"}
                  className="inline-block font-['gravesend-sans',sans-serif] text-[12px] sm:text-[13px] font-[500] tracking-[0.15em] uppercase text-[#2b2b2b] border-b-[1.5px] border-[#2b2b2b] pb-0.5 hover:text-[#86b3b3] hover:border-[#86b3b3] transition-colors"
                >
                  LEARN MORE
                </Link>
              </div>

            </div>

            {/* RIGHT COLUMN: EMDR & Special Needs Parenting */}
            <div className="lg:col-span-4 xl:col-span-4 flex flex-col space-y-12 sm:space-y-16">
              
              {/* Item 3 */}
              <div className="flex flex-col items-start group">
                <h4 className="font-['beaufort-pro',serif] text-[26px] sm:text-[28px] font-normal text-[#2b2b2b] mb-4">
                  {modalitiesData[2].title}
                </h4>
                <p className="font-['gravesend-sans',sans-serif] text-[15.5px] leading-[1.8] text-[#555] font-[300] mb-6">
                  {modalitiesData[2].description}
                </p>
                <Link
                  href={specialtyLinks[modalitiesData[2].id] || "#"}
                  className="inline-block font-['gravesend-sans',sans-serif] text-[12px] sm:text-[13px] font-[500] tracking-[0.15em] uppercase text-[#2b2b2b] border-b-[1.5px] border-[#2b2b2b] pb-0.5 hover:text-[#86b3b3] hover:border-[#86b3b3] transition-colors"
                >
                  LEARN MORE
                </Link>
              </div>

              {/* Item 4 */}
              <div className="flex flex-col items-start group">
                <h4 className="font-['beaufort-pro',serif] text-[26px] sm:text-[28px] font-normal text-[#2b2b2b] mb-4">
                  {modalitiesData[3].title}
                </h4>
                <p className="font-['gravesend-sans',sans-serif] text-[15.5px] leading-[1.8] text-[#555] font-[300] mb-6">
                  {modalitiesData[3].description}
                </p>
                <Link
                  href={specialtyLinks[modalitiesData[3].id] || "#"}
                  className="inline-block font-['gravesend-sans',sans-serif] text-[12px] sm:text-[13px] font-[500] tracking-[0.15em] uppercase text-[#2b2b2b] border-b-[1.5px] border-[#2b2b2b] pb-0.5 hover:text-[#86b3b3] hover:border-[#86b3b3] transition-colors"
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
