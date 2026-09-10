import React from "react";
import Link from "next/link";
import { expertiseColumns } from "@/data/homepageData";

export default function AreasOfExpertise() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 lg:py-32">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <h3 className="font-serif text-[32px] sm:text-[40px] md:text-[46px] leading-[1.1] text-[#333333] font-normal">
              Our areas of{" "}
              <span className="block text-[#86b3b3] font-serif italic font-light text-[42px] sm:text-[50px] md:text-[56px] -mt-2">
                expertise
              </span>
            </h3>
          </div>

          {/* Right Column: 2-Column List with Divider Lines */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 lg:gap-x-16">
            
            {/* Sub-column 1 */}
            <div className="flex flex-col">
              {expertiseColumns.col1.map((item) => (
                <div
                  key={item.name}
                  className="border-b border-gray-200 py-5 first:pt-0"
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="font-sans text-[11px] sm:text-[12px] md:text-[13px] uppercase tracking-[0.15em] font-medium text-[#666666] hover:text-[#86b3b3] transition-colors inline-block"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <span className="font-sans text-[11px] sm:text-[12px] md:text-[13px] uppercase tracking-[0.15em] font-medium text-[#666666]">
                      {item.name}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Sub-column 2 */}
            <div className="flex flex-col mt-5 sm:mt-0">
              {expertiseColumns.col2.map((item) => (
                <div
                  key={item.name}
                  className="border-b border-gray-200 py-5 first:pt-0"
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="font-sans text-[11px] sm:text-[12px] md:text-[13px] uppercase tracking-[0.15em] font-medium text-[#666666] hover:text-[#86b3b3] transition-colors inline-block"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <span className="font-sans text-[11px] sm:text-[12px] md:text-[13px] uppercase tracking-[0.15em] font-medium text-[#666666]">
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
