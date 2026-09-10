import React from "react";
import Image from "next/image";

export default function HopeSection() {
  return (
    <section className="w-full bg-white py-20 md:py-28 lg:py-32">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Top Centered Headline */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.2] font-normal text-[#2b2b2b]">
            You&apos;re holding onto hope that life can be better than it is right now.
          </h2>
        </div>

        {/* Desktop: 2-column text + image; Mobile: stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Lead paragraph + body text */}
          <div className="lg:col-span-5 space-y-6">
            <p className="font-serif text-[18px] sm:text-[20px] leading-[1.5] text-[#2b2b2b] font-bold italic">
              At Conejo Valley Family Counseling we want to make that hope a reality.
            </p>
            <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#555] font-light">
              Whether you&apos;re an adult seeking personal growth, looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life&apos;s ups and downs.
            </p>
          </div>

          {/* Middle Column: Secondary text */}
          <div className="lg:col-span-3 space-y-6">
            <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#555] font-light">
              First and foremost, we believe what you&apos;re going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles. As we tap into the power of connection and understanding, you can find your footing again and take a transformative path forward.
            </p>
          </div>

          {/* Right Column: Beach Image (portrait aspect) */}
          <div className="lg:col-span-4">
            <div className="relative w-full aspect-[2/3] overflow-hidden bg-[#f7f6f2]">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7a40691c-70a5-4307-b9ae-974592087a8f/Jennifer+A+-+Images+%283%29.jpg"
                alt="Sandy beach with gentle ocean waves and a cloudy sky representing calm and healing"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
