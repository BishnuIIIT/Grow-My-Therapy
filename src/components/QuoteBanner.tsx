import React from "react";
import Image from "next/image";

export default function QuoteBanner() {
  return (
    <section className="relative w-full min-h-[380px] sm:min-h-[440px] md:min-h-[480px] flex items-center justify-center overflow-hidden bg-[#242728]">
      {/* Background Image with botanical artwork */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/27b4f80c-ca73-4d1f-824e-ec29a2211142/Jennifer+A+-+Images+%282%29.png"
          alt="Botanical background accent"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-[#1f2324]/60 mix-blend-multiply" />
      </div>

      {/* Quote Content */}
      <div className="relative z-10 max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-14 py-20 md:py-24 text-center">
        <h2 className="font-serif text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] leading-[1.3] text-[#f7f6f2] font-normal tracking-wide">
          You deserve a place where your story is heard, valued, and understood.{" "}
          <span className="italic block sm:inline mt-2 sm:mt-0">
            Nothing will be too heavy for us to carry together.
          </span>
        </h2>
      </div>
    </section>
  );
}
