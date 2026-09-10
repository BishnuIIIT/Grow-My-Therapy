import React from "react";
import Image from "next/image";

export default function QuoteBanner() {
  return (
    <section className="relative w-full min-h-[520px] md:min-h-[580px] lg:min-h-[640px] xl:min-h-[700px] flex flex-col justify-center overflow-hidden">
      
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

      {/* Quote Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24 flex flex-col justify-center">
        <div className="w-full max-w-[740px] lg:max-w-[780px] text-left ml-0 md:ml-[4%] lg:ml-[6%] xl:ml-[8%]">
          <h2 className="font-serif text-[28px] sm:text-[34px] md:text-[38px] lg:text-[42px] xl:text-[44px] leading-[1.3] text-[#f7f6f2] font-normal tracking-normal">
            You deserve a place where your story is heard,<br className="hidden md:inline" />{" "}
            valued, and understood.{" "}
            <em className="italic font-normal">
              Nothing will be too heavy<br className="hidden md:inline" />{" "}
              for us to carry together.
            </em>
          </h2>
        </div>
      </div>
    </section>
  );
}
