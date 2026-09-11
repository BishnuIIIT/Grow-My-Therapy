import React from "react";
import Image from "next/image";
import Link from "next/link";
import { whoWeHelpCards } from "@/data/homepageData";

export default function WhoWeHelp() {
  return (
    <section className="relative w-full bg-white pt-14 pb-20 md:pt-18 md:pb-24 lg:pt-24 lg:pb-28 overflow-hidden">
      <div className="max-w-[1440px] xl:max-w-[1540px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Heading - Left-aligned as per target */}
        <div className="mb-8 lg:mb-12 w-full text-left">
          <h2 className="text-[38px] sm:text-[46px] lg:text-[54px] leading-[1.15] font-light text-[#2b2b2b] tracking-[-0.01em] font-serif">
            Who we <span className="text-[#86b3b3] font-['PrintedMoments'] text-[1.25em] font-normal not-italic inline-block ml-1 leading-none">help</span>
          </h2>
        </div>

        {/* 3 Columns Grid - Square (1:1) Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 xl:gap-14">
          {whoWeHelpCards.map((card) => (
            <div key={card.id} className="flex flex-col group">
              
              {/* Image Container - Square (1:1) */}
              <div className="relative w-full aspect-square overflow-hidden mb-5 lg:mb-6">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 480px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col text-left">
                <h3 className="mb-3">
                  <Link
                    href={card.link}
                    className="font-serif text-[24px] sm:text-[26px] lg:text-[28px] font-normal text-[#2b2b2b] hover:text-[#86b3b3] transition-colors leading-[1.25]"
                  >
                    {card.title}
                  </Link>
                </h3>
                <p className="font-body text-[14px] lg:text-[14.5px] leading-[1.65] text-[#555] font-light">
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
