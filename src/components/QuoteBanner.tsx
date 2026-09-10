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

      {/* Quote Content Container */}
      <div className="relative z-10 w-full max-w-[850px] lg:max-w-[900px] xl:max-w-[950px] text-left ml-0 md:ml-[25%] lg:ml-[28%] xl:ml-[30%]">
        <h2 className="font-serif text-[30px] sm:text-[34px] md:text-[38px] lg:text-[42px] xl:text-[46px] leading-[1.3] text-[#f7f7f7]">
          You deserve a place where your story is heard, valued, and understood.{" "}
          <em className="italic font-normal">
            Nothing will be too heavy for us to carry together.
          </em>
        </h2>
      </div>
    </section>
  );
}
