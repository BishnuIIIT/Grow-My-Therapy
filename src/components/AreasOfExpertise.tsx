import React from "react";
import Link from "next/link";
import { expertiseColumns } from "@/data/homepageData";

export default function AreasOfExpertise() {
  return (
    <section className="w-full bg-white pt-32 sm:pt-36 lg:pt-40 pb-32 sm:pb-36 lg:pb-40">
      <div 
        className="w-full max-w-[1680px] mx-auto"
        style={{
          paddingLeft: "clamp(35px, 4.5vw, 90px)",
          paddingRight: "clamp(35px, 4.5vw, 90px)"
        }}
      >
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 xl:gap-20">
          
          {/* Left Column: Heading on a single horizontal line, shifted towards left */}
          <div className="flex-shrink-0 flex flex-col justify-start pt-1">
            <h3 className="font-serif text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] leading-[1.2] text-[#2b2b2b] font-light whitespace-normal sm:whitespace-nowrap">
              Our areas of{" "}
              <span className="font-['PrintedMoments'] text-[#86b3b3] text-[1.25em] font-normal not-italic inline-block ml-1 leading-none">
                expertise
              </span>
            </h3>
          </div>

          {/* Right Column: 2-Column List with Top and Bottom Divider Lines */}
          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-x-10 lg:gap-x-14 xl:gap-x-20">
            
            {/* Sub-column 1 */}
            <div className="flex flex-col border-t border-[#e8e8e8]">
              {expertiseColumns.col1.map((item) => (
                <div
                  key={item.name}
                  className="border-b border-[#e8e8e8] py-[22px] lg:py-[26px]"
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="font-sans text-[13px] sm:text-[13.5px] lg:text-[14.5px] uppercase tracking-[0.16em] font-medium text-[#555] hover:text-[#86b3b3] transition-colors inline-block"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <span className="font-sans text-[13px] sm:text-[13.5px] lg:text-[14.5px] uppercase tracking-[0.16em] font-medium text-[#555]">
                      {item.name}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Sub-column 2 */}
            <div className="flex flex-col border-t border-[#e8e8e8]">
              {expertiseColumns.col2.map((item) => (
                <div
                  key={item.name}
                  className="border-b border-[#e8e8e8] py-[22px] lg:py-[26px]"
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="font-sans text-[13px] sm:text-[13.5px] lg:text-[14.5px] uppercase tracking-[0.16em] font-medium text-[#555] hover:text-[#86b3b3] transition-colors inline-block"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <span className="font-sans text-[13px] sm:text-[13.5px] lg:text-[14.5px] uppercase tracking-[0.16em] font-medium text-[#555]">
                      {item.name}
                    </span>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
