import React from "react";
import Image from "next/image";
import Link from "next/link";
import { modalitiesData } from "@/data/homepageData";
import { ArrowRight } from "lucide-react";

export default function ModalitiesGrid() {
  const specialtyLinks: Record<string, string> = {
    trauma: "https://www.conejovalleycounseling.com/trauma-counseling-newbury-park",
    dissociation: "https://www.conejovalleycounseling.com/dissociative-identity-disorder-therapist-newbury-park",
    emdr: "https://www.conejovalleycounseling.com/emdr-therapy-newbury-park",
    "special-needs": "https://www.conejovalleycounseling.com/counseling-special-needs-parents-newbury-park",
  };

  return (
    <section className="w-full bg-[#f7f6f2] py-20 md:py-28 lg:py-32 border-t border-b border-[#ece9e3]">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Top Headings */}
        <div className="max-w-3xl mb-14 md:mb-18">
          <h2 className="font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.2] font-normal text-[#2b2b2b] mb-4">
            Honoring where you&apos;ve been &amp; helping shape where you&apos;re headed.
          </h2>
          <p className="font-sans text-[17px] sm:text-[19px] text-[#666] font-normal italic">
            Our specialties include…
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Original Featured Sunset Beach Image */}
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm bg-[#e8e5df] group sticky top-28">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/6f1501bf-74a5-4c57-a957-8ce4c5876848/Jennifer+A+-+Images+%285%29.jpg"
                alt="Family of four standing on a beach, holding hands, facing the ocean at sunset"
                fill
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: 4 Specialty Cards with Learn more */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {modalitiesData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-[#e8e5df] shadow-sm flex flex-col justify-between hover:border-[#86b3b3] transition-colors duration-200 group"
              >
                <div>
                  <h3 className="font-serif text-[24px] sm:text-[26px] font-normal text-[#2b2b2b] mb-3">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[15px] leading-[1.7] text-[#555] font-light mb-6">
                    {item.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#f2efe9]">
                  <Link
                    href={specialtyLinks[item.id] || "#"}
                    className="inline-flex items-center text-[13px] font-medium tracking-wider text-[#2b2b2b] group-hover:text-[#86b3b3] transition-colors"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
