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
    <section className="w-full bg-[#f7f6f2] py-20 md:py-28 lg:py-32">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Top Image */}
        <div className="relative w-full aspect-[3/2] md:aspect-[16/9] mb-12 md:mb-16 overflow-hidden rounded-2xl md:rounded-3xl shadow-sm">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/6f1501bf-74a5-4c57-a957-8ce4c5876848/Jennifer+A+-+Images+%285%29.jpg"
            alt="Family of four standing on a beach, holding hands, facing the ocean at sunset"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Section Headings */}
        <div className="max-w-4xl mb-12 md:mb-16">
          <h2 className="font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.2] font-normal text-[#2b2b2b] mb-4">
            Honoring where you&apos;ve been{" "}
            <span className="text-[#86b3b3] font-bold italic">&amp;</span>{" "}
            helping shape where you&apos;re headed.
          </h2>
          <h3 className="font-serif text-[22px] sm:text-[26px] text-[#2b2b2b] font-normal">
            Our <span className="text-[#86b3b3] font-bold italic">specialties</span> include…
          </h3>
        </div>

        {/* Specialty Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {modalitiesData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-[#e8e5df] shadow-sm flex flex-col justify-between hover:border-[#86b3b3] transition-colors duration-200"
            >
              <div>
                <h4 className="font-serif text-[24px] sm:text-[26px] font-normal text-[#2b2b2b] mb-3">
                  {item.title}
                </h4>
                <p className="font-sans text-[15px] leading-[1.7] text-[#555] font-light mb-6">
                  {item.description}
                </p>
              </div>
              <div className="pt-4 border-t border-[#f2efe9]">
                <Link
                  href={specialtyLinks[item.id] || "#"}
                  className="inline-flex items-center justify-center px-5 py-2.5 text-[12px] font-sans font-normal tracking-[0.12em] uppercase text-white bg-[#2b2b2b] hover:bg-[#444] rounded-[6px] transition-all duration-200"
                >
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
