import React from "react";
import Image from "next/image";

export default function QuoteBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-[#1f2324]">
      {/* Inject Typekit font stylesheet */}
      <link rel="stylesheet" href="https://use.typekit.net/fsc1wsd.css" />

      {/* Full-width Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/27b4f80c-ca73-4d1f-824e-ec29a2211142/Jennifer+A+-+Images+%282%29.png"
          alt="Beach landscape with tranquil waters"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Exact reference overlay: black at 54% opacity (Squarespace imageOverlayOpacity: 0.54) */}
        <div className="absolute inset-0 bg-black/[0.54]" />
      </div>

      {/* Quote Content Container: Left-aligned and positioned in the lower-middle half */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-24 lg:pt-48 lg:pb-28">
        <div className="max-w-[940px] text-left lg:pl-4 xl:pl-6">
          <h2 className="font-['beaufort-pro',serif] text-[26px] sm:text-[32px] md:text-[38px] lg:text-[43px] xl:text-[46px] leading-[1.28] text-[#f7f6f2] font-light tracking-[-0.01em]">
            You deserve a place where your story is heard, valued,<br className="hidden md:inline" />{" "}
            and understood.{" "}
            <em className="italic font-normal">
              Nothing will be too heavy for us to<br className="hidden md:inline" />{" "}
              carry together.
            </em>
          </h2>
        </div>
      </div>
    </section>
  );
}
