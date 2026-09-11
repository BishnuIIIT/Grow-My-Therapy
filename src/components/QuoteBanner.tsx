import React from "react";
import Image from "next/image";

export default function QuoteBanner() {
  return (
    <section className="relative w-full min-h-[580px] md:min-h-[720px] lg:min-h-[820px] xl:min-h-[880px] flex items-end pt-32 pb-20 md:pb-24 lg:pb-28 xl:pb-32 overflow-hidden">
      
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
        {/* Lighter, warmer overlay (~45% opacity) to match target */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Quote Content Container - Positioned towards bottom-left */}
      <div className="relative z-10 w-full max-w-[1540px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 text-left">
        <h2 className="font-serif text-[28px] sm:text-[36px] md:text-[42px] lg:text-[46px] xl:text-[50px] leading-[1.28] text-[#f7f6f2] font-light tracking-[-0.01em] max-w-[1250px]">
          <span className="whitespace-nowrap">You deserve a place where your story is heard, valued,</span><br className="hidden lg:inline" />{" "}
          <span className="whitespace-nowrap">and understood. <em className="italic font-normal">Nothing will be too heavy for us to</em></span><br className="hidden lg:inline" />{" "}
          <em className="italic font-normal">carry together.</em>
        </h2>
      </div>

    </section>
  );
}
