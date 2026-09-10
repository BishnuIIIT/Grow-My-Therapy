import React from "react";
import Image from "next/image";

export default function HopeSection() {
  return (
    <section className="w-full bg-[#f7f6f2] py-20 lg:py-36 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* CSS Grid to map DOM order to Visual Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-14">
          
          {/* 1. Heading */}
          <div className="lg:col-span-8 lg:row-start-1">
            <h2 className="text-[38px] sm:text-[44px] md:text-[50px] lg:text-[46px] xl:text-[52px] leading-[1.2] font-light text-[#2b2b2b] tracking-[-0.01em] font-serif mb-6 lg:mb-10">
              You&apos;re holding onto hope that life can be better than it is right now.
            </h2>
          </div>

          {/* 2. First Paragraph */}
          <div className="lg:col-span-4 lg:col-start-1 lg:row-start-2">
            <p className="text-[12px] sm:text-[13px] md:text-[14px] font-[500] uppercase tracking-[0.18em] text-[#2b2b2b] leading-[1.6] font-sans mb-8 lg:mb-0">
              AT CONEJO VALLEY FAMILY COUNSELING WE WANT TO MAKE THAT HOPE A REALITY.
              <br /><br />
              <span className="text-[15.5px] sm:text-[16.5px] leading-[1.8] text-[#555] font-[300] normal-case tracking-normal">
                Whether you&apos;re an adult seeking personal growth, looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life&apos;s ups and downs.
              </span>
            </p>
          </div>

          {/* 3. Beach Image */}
          <div className="lg:col-span-4 lg:col-start-9 lg:row-start-1 lg:row-span-2 relative w-full h-[350px] lg:h-full min-h-[400px]">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7a40691c-70a5-4307-b9ae-974592087a8f/Jennifer+A+-+Images+%283%29.jpg"
              alt="Sandy beach with gentle ocean waves"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover object-center"
            />
          </div>

          {/* 4. Second Paragraph */}
          <div className="lg:col-span-4 lg:col-start-5 lg:row-start-2 pt-0 lg:pt-0">
            <p className="text-[15.5px] sm:text-[16.5px] leading-[1.8] text-[#555] font-[300] font-sans">
              First and foremost, we believe what you&apos;re going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles. As we tap into the power of connection and understanding, you can find your footing again and take a transformative path forward.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
