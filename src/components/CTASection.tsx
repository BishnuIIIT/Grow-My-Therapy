import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full bg-[#faf9f6] py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-16 items-center">
          
          {/* LEFT IMAGE */}
          <div className="w-full lg:col-span-3 flex justify-center lg:justify-end order-1 lg:order-none">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-none aspect-[3/4] lg:aspect-[4/5] xl:aspect-[3/4] rounded-[16px] lg:rounded-[24px] overflow-hidden shadow-sm">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/1b9495e0-ce39-4826-9df9-e24de99da82f/Jennifer+A+-+Images+%2812%29.jpg"
                alt="A person picking up seashells on a sandy beach"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* CENTER CONTENT */}
          <div className="w-full lg:col-span-6 flex flex-col items-center text-center px-2 sm:px-6 order-2 lg:order-none z-10">
            
            {/* Center Label */}
            <p className="font-['gravesend-sans',sans-serif] text-[12px] sm:text-[13px] font-[500] tracking-[0.18em] uppercase text-[#2b2b2b] mb-6">
              SCHEDULE AN APPOINTMENT
            </p>

            {/* Main Heading */}
            <div className="max-w-[540px] w-full mb-8 lg:mb-10">
              <h2 className="font-['beaufort-pro',serif] text-[36px] sm:text-[44px] md:text-[50px] leading-[1.15] font-light text-[#2b2b2b] tracking-[-0.01em]">
                Find a therapist who is the right fit for <span className="font-['beaufort-pro',serif] text-[#86b3b3] font-bold italic">you.</span>
              </h2>
            </div>

            {/* Body Copy */}
            <p className="font-['gravesend-sans',sans-serif] text-[15.5px] sm:text-[16.5px] leading-[1.8] text-[#555] font-[300] mb-6 max-w-[640px]">
              Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we&apos;re here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.
            </p>

            {/* Secondary Text */}
            <p className="font-['gravesend-sans',sans-serif] text-[15.5px] sm:text-[16.5px] leading-[1.8] text-[#555] font-[300] mb-10 max-w-[640px]">
              Click the button below to schedule an appointment.
            </p>

            {/* Book Now Button */}
            <Link
              href="https://www.conejovalleycounseling.com/contact"
              className="inline-block px-9 py-3.5 font-['gravesend-sans',sans-serif] text-[12px] sm:text-[13px] font-[500] tracking-[0.15em] uppercase text-[#2b2b2b] border-[1.5px] border-[#2b2b2b] hover:bg-[#2b2b2b] hover:text-white transition-colors duration-300"
            >
              BOOK NOW
            </Link>

          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:col-span-3 flex justify-center lg:justify-start order-3 lg:order-none">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-none aspect-[3/4] lg:aspect-[4/5] xl:aspect-[3/4] rounded-[16px] lg:rounded-[24px] overflow-hidden shadow-sm">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7557312a-044d-4489-a9d1-6f43ee9888b1/Jennifer+A+-+Images+%2811%29.jpg"
                alt="A person in a striped dress pointing at shells on the sandy beach with a child"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover object-center"
              />
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
}
