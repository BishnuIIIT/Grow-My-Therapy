import React from "react";
import Image from "next/image";

export default function QuoteBanner() {
  return (
    <section className="relative w-full min-h-[550px] md:min-h-[640px] lg:min-h-[720px] overflow-hidden">
      
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

      {/* Quote Content Container - Deterministic desktop position matching Screenshot 1 */}
      <div className="absolute z-10 left-[6%] right-[6%] md:right-auto md:left-[9%] top-1/2 md:top-[430px] -translate-y-1/2 md:translate-y-0 w-auto md:w-[56%] max-w-[1200px] text-left">
        <h2 className="font-serif text-[28px] sm:text-[34px] md:text-[40px] lg:text-[46px] leading-[1.3] text-[#f7f6f2] font-normal tracking-normal">
          You deserve a place where your story is heard, valued,
          <br className="hidden md:inline" />{" "}
          and understood.{" "}
          <em className="italic font-normal">
            Nothing will be too heavy for us to
            <br className="hidden md:inline" />{" "}
            carry together.
          </em>
        </h2>
      </div>

    </section>
  );
}
