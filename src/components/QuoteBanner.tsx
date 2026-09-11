import React from "react";
import Image from "next/image";

export default function QuoteBanner() {
  return (
    <section className="relative w-full py-28 md:py-36 lg:py-40 overflow-hidden">
      
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
        <div className="absolute inset-0 bg-[#323232]/80" />
      </div>

      {/* Quote Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 text-left">
        <h2 className="font-['beaufort-pro',serif] text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-[1.3] text-[#f7f6f2] font-normal tracking-[-0.01em] max-w-[1100px]">
          You deserve a place where your story is<br className="hidden lg:block" />
          heard, valued, and understood. <em className="italic font-normal">Nothing will be<br className="hidden lg:block" />
          too heavy for us to carry together.</em>
        </h2>
      </div>

    </section>
  );
}
