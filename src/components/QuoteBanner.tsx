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

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-[120px] pb-[120px] sm:pt-[160px] sm:pb-[160px] lg:pt-[240px] lg:pb-[240px] flex flex-col items-start justify-center">
        
        {/* Quote Content Container */}
        <div className="w-full max-w-full lg:max-w-[850px] xl:max-w-[950px] text-left pl-0 lg:pl-[15%] xl:pl-[20%]">
          <h2 className="font-serif text-[30px] sm:text-[36px] md:text-[42px] lg:text-[46px] xl:text-[48px] leading-[1.3] text-[#f7f6f2] font-light tracking-normal">
            You deserve a place where your story is heard, valued, and understood.{" "}
            <em className="italic font-normal">
              Nothing will be too heavy for us to carry together.
            </em>
          </h2>
        </div>

      </div>
    </section>
  );
}
