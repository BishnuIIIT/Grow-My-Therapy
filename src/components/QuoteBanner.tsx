import React from "react";
import Image from "next/image";
import Link from "next/link";
import { expertiseColumns } from "@/data/homepageData";

export default function QuoteBanner() {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col justify-start overflow-hidden">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/27b4f80c-ca73-4d1f-824e-ec29a2211142/Jennifer+A+-+Images+%282%29.png"
          alt="Two children running on a sandy beach"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Exact reference overlay: black at 50% opacity */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-[120px] pb-16 sm:pt-[160px] sm:pb-24 lg:pt-[220px] lg:pb-40 flex flex-col items-start justify-center">
        
        {/* Quote Content Container */}
        {/* Removed restrictive max-w so the explicit br tags control the exact 3-line wrap on desktop without double wrapping */}
        <div className="w-full max-w-full lg:max-w-[1200px] text-left mb-28 lg:mb-40 pl-0 lg:pl-10 xl:pl-16">
          <h2 className="font-serif text-[30px] sm:text-[36px] md:text-[42px] lg:text-[46px] xl:text-[50px] leading-[1.25] text-[#f7f6f2] font-light tracking-normal">
            You deserve a place where your story is heard,<br className="hidden md:block" />
            valued, and understood.{" "}
            <em className="italic font-normal">
              Nothing will be too heavy<br className="hidden md:block" />
              for us to carry together.
            </em>
          </h2>
        </div>

        {/* Expertise List Container */}
        <div className="w-full lg:pl-10 xl:pl-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Heading */}
            <div className="lg:col-span-4">
              <h3 className="font-serif text-[34px] sm:text-[42px] md:text-[48px] leading-[1.2] font-normal text-[#f7f6f2]">
                Our areas of{" "}
                <span className="text-[#86b3b3] font-normal italic">expertise</span>
              </h3>
            </div>

            {/* Right Column: 2-Column List with Divider Lines */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 lg:gap-x-20">
              
              {/* Sub-column 1 */}
              <div className="flex flex-col">
                {expertiseColumns.col1.map((item) => (
                  <div
                    key={item.name}
                    className="border-b border-[#f7f6f2]/30 py-4 sm:py-5 first:pt-0"
                  >
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="font-serif text-[16px] sm:text-[18px] lg:text-[19px] font-normal italic text-[#f7f6f2] hover:text-[#86b3b3] transition-colors inline-block"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span className="font-serif text-[16px] sm:text-[18px] lg:text-[19px] font-normal italic text-[#f7f6f2]">
                        {item.name}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Sub-column 2 */}
              <div className="flex flex-col mt-4 sm:mt-0">
                {expertiseColumns.col2.map((item) => (
                  <div
                    key={item.name}
                    className="border-b border-[#f7f6f2]/30 py-4 sm:py-5 first:pt-0"
                  >
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="font-serif text-[16px] sm:text-[18px] lg:text-[19px] font-normal italic text-[#f7f6f2] hover:text-[#86b3b3] transition-colors inline-block"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span className="font-serif text-[16px] sm:text-[18px] lg:text-[19px] font-normal italic text-[#f7f6f2]">
                        {item.name}
                      </span>
                    )}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
