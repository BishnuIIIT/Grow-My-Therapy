import React from "react";
import Image from "next/image";
import Link from "next/link";
import { whoWeHelpCards } from "@/data/homepageData";
import { ArrowRight } from "lucide-react";

export default function WhoWeHelp() {
  return (
    <section className="w-full bg-[#f7f6f2] py-20 md:py-28 lg:py-32 border-t border-b border-[#ece9e3]">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <h2 className="font-serif text-[38px] sm:text-[48px] md:text-[56px] leading-[1.15] font-normal text-[#2b2b2b]">
            Who we <span className="italic">help</span>
          </h2>
          <div className="w-12 h-[2px] bg-[#86b3b3] mx-auto mt-4" />
        </div>

        {/* 3 Columns Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {whoWeHelpCards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-sm border border-[#e8e5df] transition-all duration-300 hover:shadow-md hover:-translate-y-1 group"
            >
              {/* Card Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#e8e5df]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 420px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-col flex-grow p-6 sm:p-8">
                <h3 className="font-serif text-[26px] sm:text-[28px] font-normal text-[#2b2b2b] mb-3">
                  {card.title}
                </h3>
                <p className="font-sans text-[15px] sm:text-[16px] leading-[1.7] text-[#555] font-light flex-grow mb-6">
                  {card.description}
                </p>

                <div className="pt-2 border-t border-[#f0eee9]">
                  <Link
                    href={card.link}
                    className="inline-flex items-center text-[13px] font-medium tracking-wider uppercase text-[#2b2b2b] hover:text-[#86b3b3] transition-colors group/link"
                  >
                    <span>Explore Support</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-200 group-hover/link:translate-x-1" />
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
