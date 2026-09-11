import React from "react";
import Image from "next/image";
import Link from "next/link";
import { whoWeHelpCards } from "@/data/homepageData";

export default function WhoWeHelp() {
  return (
    <section id="services" className="relative w-full bg-main-bg pt-14 pb-20 md:pt-18 md:pb-24 lg:pt-24 lg:pb-28 overflow-hidden">
      <div className="max-w-[1440px] xl:max-w-[1540px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Heading */}
        <div className="mb-8 lg:mb-12 w-full text-left">
          <h2 className="text-[38px] sm:text-[46px] lg:text-[54px] leading-[1.15] font-light text-primary-text tracking-[-0.01em] font-serif">
            Professional Therapy Services
          </h2>
        </div>

        {/* 3 Columns Grid - Portrait (4:5) Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 xl:gap-14">
          {whoWeHelpCards.map((card) => (
            <div key={card.id} className="flex flex-col group">
              
              {/* Image Container - 3:2 Landscape */}
              <div className="relative w-full aspect-[3/2] overflow-hidden mb-5 lg:mb-6 bg-[#EFECE8]">
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
                  <span className="font-serif text-[24px] sm:text-[26px] lg:text-[28px] font-normal text-primary-text leading-[1.25]">
                    {card.title}
                  </span>
                </h3>
                <p className="font-body text-[14px] lg:text-[14.5px] leading-[1.65] text-muted-text font-light mb-4">
                  {card.description}
                </p>
                <div>
                  <Link
                    href={card.link}
                    className="inline-block text-[12px] lg:text-[12.5px] font-body font-normal tracking-[0.14em] uppercase text-primary-text border-b border-primary-text pb-0.5 hover:text-primary hover:border-primary transition-colors"
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
