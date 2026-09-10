import React from "react";
import Image from "next/image";

export default function HopeSection() {
  return (
    <section className="w-full bg-white py-20 md:py-28 lg:py-32">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Top Centered Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.2] font-normal text-[#2b2b2b] mb-6">
            You’re holding onto hope that life can be better than it is right now.
          </h2>
          <p className="font-sans text-[17px] sm:text-[19px] leading-[1.6] text-[#444] font-medium italic">
            At Conejo Valley Family Counseling we want to make that hope a reality.
          </p>
        </div>

        {/* Content Grid: Left Text Column, Middle/Right Image & Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-5 space-y-6">
            <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#555] font-light">
              Whether you&apos;re an adult seeking personal growth, looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life&apos;s ups and downs.
            </p>
            <div className="w-16 h-[1px] bg-[#ded6cc] my-8" />
            <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#555] font-light">
              First and foremost, we believe what you&apos;re going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles.
            </p>
            <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#555] font-light">
              As we tap into the power of connection and understanding, you can find your footing again and take a transformative path forward.
            </p>
          </div>

          {/* Right Column Image */}
          <div className="lg:col-span-7">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm bg-[#f7f6f2] group">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7a40691c-70a5-4307-b9ae-974592087a8f/Jennifer+A+-+Images+%283%29.jpg"
                alt="Sandy beach with gentle ocean waves and a cloudy sky representing calm and healing"
                fill
                sizes="(max-width: 1024px) 100vw, 750px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
