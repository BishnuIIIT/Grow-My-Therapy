import React from "react";
import Image from "next/image";

export default function QuoteBanner() {
  return (
    <section className="relative w-full bg-[#323232] py-28 md:py-36 lg:py-40">
      
      {/* Quote Content Container */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 text-left">
        <h2 className="font-['beaufort-pro',serif] text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-[1.3] text-[#f7f6f2] font-normal tracking-[-0.01em] max-w-[1100px]">
          You deserve a place where your story is<br className="hidden lg:block" />
          heard, valued, and understood. <em className="italic font-normal">Nothing will be<br className="hidden lg:block" />
          too heavy for us to carry together.</em>
        </h2>
      </div>

    </section>
  );
}
