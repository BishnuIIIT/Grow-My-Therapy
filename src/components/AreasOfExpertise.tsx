import React from "react";
import Link from "next/link";
import { expertiseColumns } from "@/data/homepageData";

export default function AreasOfExpertise() {
  return (
    <section className="w-full bg-white" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <div 
        className="w-full max-w-[1680px] mx-auto"
        style={{
          paddingLeft: "clamp(35px, 4.5vw, 90px)",
          paddingRight: "clamp(35px, 4.5vw, 90px)"
        }}
      >
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-14 xl:gap-20">
          
          {/* Left Column: Heading on a single horizontal line, shifted towards left */}
          <div className="flex-shrink-0 flex flex-col justify-start pt-1">
            <h3 className="font-serif text-[30px] sm:text-[36px] lg:text-[40px] xl:text-[44px] leading-[1.2] text-[#2b2b2b] font-light whitespace-nowrap">
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
                  className="border-b border-[#e8e8e8] py-[18px] lg:py-[22px]"
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="font-sans text-[11px] sm:text-[11.5px] lg:text-[12px] uppercase tracking-[0.16em] font-medium text-[#555] hover:text-[#86b3b3] transition-colors inline-block"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <span className="font-sans text-[11px] sm:text-[11.5px] lg:text-[12px] uppercase tracking-[0.16em] font-medium text-[#555]">
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
                  className="border-b border-[#e8e8e8] py-[18px] lg:py-[22px]"
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="font-sans text-[11px] sm:text-[11.5px] lg:text-[12px] uppercase tracking-[0.16em] font-medium text-[#555] hover:text-[#86b3b3] transition-colors inline-block"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <span className="font-sans text-[11px] sm:text-[11.5px] lg:text-[12px] uppercase tracking-[0.16em] font-medium text-[#555]">
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
