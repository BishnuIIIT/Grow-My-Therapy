import React from "react";
import Image from "next/image";

export default function QuoteBanner() {
  return (
    <section className="relative w-full min-h-[75vh] md:min-h-[85vh] flex flex-col justify-end overflow-hidden">
      
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
        {/* Exact reference overlay: black at 45% opacity */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Quote Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 pb-20 sm:pb-24 lg:pb-28">
        <div className="w-full max-w-[850px] lg:max-w-[900px] xl:max-w-[940px] text-left ml-0 lg:ml-[2%] xl:ml-[4%]">
          <h2 className="font-serif text-[28px] sm:text-[34px] md:text-[38px] lg:text-[42px] xl:text-[45px] leading-[1.32] text-[#f7f6f2] font-normal tracking-normal">
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
