import React from "react";
import Image from "next/image";
import Link from "next/link";
import { whoWeHelpCards } from "@/data/homepageData";

export default function WhoWeHelp() {
  return (
    <section className="relative w-full bg-[#f7f6f2] pt-16 pb-20 md:pt-20 md:pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Heading - Left Aligned */}
        <div className="mb-10 lg:mb-12 w-full text-left">
          <h2 className="text-[38px] sm:text-[44px] md:text-[50px] lg:text-[46px] xl:text-[52px] leading-[1.2] font-light text-[#2b2b2b] tracking-[-0.01em] font-['beaufort-pro',serif]">
            Who we <span className="text-[#86b3b3] font-['beaufort-pro',serif] font-bold italic">help</span>
          </h2>
        </div>

        {/* 3 Columns Grid - Open Editorial Design (No Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 xl:gap-16">
          {whoWeHelpCards.map((card) => (
            <div key={card.id} className="flex flex-col group">
              
              {/* Image Container - Taller vertical aspect, no rounding, no shadow */}
              <div className="relative w-full aspect-[3/4] lg:aspect-[4/5] overflow-hidden mb-5 lg:mb-6">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 450px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Text Content - No background, text sits on section bg */}
              <div className="flex flex-col text-left">
                <h3 className="mb-3">
                  <Link
                    href={card.link}
                    className="font-['beaufort-pro',serif] text-[26px] sm:text-[28px] lg:text-[32px] font-normal text-[#2b2b2b] hover:text-[#86b3b3] transition-colors"
                  >
                    {card.title}
                  </Link>
                </h3>
                <p className="font-['gravesend-sans',sans-serif] text-[15.5px] sm:text-[16.5px] leading-[1.8] text-[#555] font-[300]">
                  {card.description}
                </p>
              </div>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
