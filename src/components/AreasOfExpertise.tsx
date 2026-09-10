import React from "react";
import Image from "next/image";
import { expertiseTopics } from "@/data/homepageData";

export default function AreasOfExpertise() {
  return (
    <section className="w-full bg-white py-16 md:py-24 border-b border-[#ece9e3] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {/* Decorative Original Botanical Image */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 opacity-75">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/27b4f80c-ca73-4d1f-824e-ec29a2211142/Jennifer+A+-+Images+%282%29.png"
              alt="Decorative leaf accent"
              fill
              className="object-contain"
            />
          </div>

          {/* Original 12 Expertise Topics */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-3xl">
            {expertiseTopics.map((topic, idx) => {
              const isLast = idx === expertiseTopics.length - 1;
              return (
                <span
                  key={topic}
                  className={`px-5 py-2.5 rounded-full text-[15px] sm:text-[16px] font-serif transition-all duration-200 border ${
                    isLast
                      ? "bg-[#ded6cc]/50 border-[#ded6cc] text-[#2b2b2b] italic font-semibold"
                      : "bg-[#f7f6f2] border-[#e8e5df] text-[#444] hover:border-[#86b3b3] hover:text-[#2b2b2b]"
                  }`}
                >
                  {topic}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
