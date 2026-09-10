import React from "react";
import Image from "next/image";
import Link from "next/link";
import { modalitiesData } from "@/data/homepageData";
import { ArrowUpRight } from "lucide-react";

export default function ModalitiesGrid() {
  const modalityLinks: Record<string, string> = {
    trauma: "https://www.conejovalleycounseling.com/trauma-counseling-newbury-park",
    dissociation: "https://www.conejovalleycounseling.com/dissociative-identity-disorder-therapist-newbury-park",
    emdr: "https://www.conejovalleycounseling.com/emdr-therapy-newbury-park",
    "special-needs": "https://www.conejovalleycounseling.com/counseling-special-needs-parents-newbury-park",
  };

  return (
    <section className="w-full bg-[#f7f6f2] py-20 md:py-28 lg:py-32 border-t border-b border-[#ece9e3]">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Featured Family Sunset Image & Introduction */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative w-full aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm bg-[#e8e5df] group">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/6f1501bf-74a5-4c57-a957-8ce4c5876848/Jennifer+A+-+Images+%285%29.jpg"
                alt="Family of four standing on a beach, holding hands, facing the ocean at sunset"
                fill
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="pt-4">
              <p className="font-serif text-[24px] sm:text-[28px] text-[#2b2b2b] italic leading-snug">
                Every healing journey is unique. We meet you where you are with specialized therapeutic modalities.
              </p>
            </div>
          </div>

          {/* Right Column: 4 Key Modalities */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {modalitiesData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-[#e8e5df] shadow-sm flex flex-col justify-between hover:border-[#86b3b3] transition-colors duration-200 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-serif text-[24px] sm:text-[26px] font-normal text-[#2b2b2b]">
                      {item.title}
                    </h3>
                    <Link
                      href={modalityLinks[item.id] || "#"}
                      aria-label={`Learn more about ${item.title}`}
                      className="p-1 text-[#888] group-hover:text-[#86b3b3] transition-colors"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <p className="font-sans text-[15px] leading-[1.7] text-[#555] font-light">
                    {item.description}
                  </p>
                </div>
                <div className="pt-5 mt-4 border-t border-[#f2efe9]">
                  <Link
                    href={modalityLinks[item.id] || "#"}
                    className="text-[12px] font-medium tracking-wider uppercase text-[#777] group-hover:text-[#2b2b2b] transition-colors"
                  >
                    Learn More &rarr;
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
