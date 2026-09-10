import React from "react";
import Link from "next/link";
import { expertiseColumns } from "@/data/homepageData";

export default function AreasOfExpertise() {
  return (
    <section className="w-full bg-white py-20 md:py-28 lg:py-32 border-b border-[#ece9e3]">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-4">
            <h3 className="font-serif text-[34px] sm:text-[42px] md:text-[48px] leading-[1.2] font-normal text-[#2b2b2b]">
              Our areas of{" "}
              <span className="text-[#86b3b3] font-bold italic">expertise</span>
            </h3>
          </div>

          {/* Right Column: 2-Column List with Divider Lines */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 lg:gap-x-16">
            {/* Sub-column 1 */}
            <div className="flex flex-col">
              {expertiseColumns.col1.map((item) => (
                <div
                  key={item.name}
                  className="border-b border-[#ded6cc]/60 py-3.5 first:pt-0"
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="font-serif text-[20px] sm:text-[22px] font-bold italic text-[#2b2b2b] hover:text-[#86b3b3] transition-colors inline-block"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <span className="font-serif text-[20px] sm:text-[22px] font-bold italic text-[#2b2b2b]">
                      {item.name}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Sub-column 2 */}
            <div className="flex flex-col mt-3.5 sm:mt-0">
              {expertiseColumns.col2.map((item) => (
                <div
                  key={item.name}
                  className="border-b border-[#ded6cc]/60 py-3.5 first:pt-0"
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="font-serif text-[20px] sm:text-[22px] font-bold italic text-[#2b2b2b] hover:text-[#86b3b3] transition-colors inline-block"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <span className="font-serif text-[20px] sm:text-[22px] font-bold italic text-[#2b2b2b]">
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

