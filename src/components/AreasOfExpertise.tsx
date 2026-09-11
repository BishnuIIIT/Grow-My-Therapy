import React from "react";
import { faqData } from "@/data/homepageData";

export default function AreasOfExpertise() {
  return (
    <section id="faq" className="w-full bg-main-bg pt-20 sm:pt-28 lg:pt-36 pb-20 sm:pb-28 lg:pb-36 border-t border-border">
      <div 
        className="w-full max-w-[1440px] xl:max-w-[1540px] mx-auto px-6 sm:px-10 lg:px-16"
      >
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 xl:gap-24">
          
          {/* Left Column: Heading */}
          <div className="flex-shrink-0 flex flex-col justify-start pt-1 lg:w-[35%]">
            <h3 className="font-serif text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] leading-[1.2] text-primary-text font-light tracking-[-0.01em]">
              Frequently Asked Questions
            </h3>
          </div>

          {/* Right Column: FAQ List */}
          <div className="flex-1 w-full lg:w-[65%] flex flex-col border-t border-border">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="border-b border-border py-6 lg:py-8"
              >
                <h4 className="font-serif text-[20px] sm:text-[22px] lg:text-[24px] font-normal text-primary-text mb-4 leading-[1.3]">
                  {item.question}
                </h4>
                <p className="font-body text-[15px] sm:text-[16px] lg:text-[16.5px] leading-[1.7] text-muted-text font-light">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
