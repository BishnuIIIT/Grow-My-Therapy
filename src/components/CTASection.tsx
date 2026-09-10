import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full bg-[#f7f6f2] py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full items-center justify-between">
        
        {/* LEFT IMAGE (Bleeding off left edge) */}
        <div className="hidden lg:block w-[18%] xl:w-[15%] h-[400px] xl:h-[500px] relative flex-shrink-0">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/1b9495e0-ce39-4826-9df9-e24de99da82f/Jennifer+A+-+Images+%2812%29.jpg"
            alt="A person picking up seashells on a sandy beach"
            fill
            sizes="(max-width: 1024px) 0vw, 20vw"
            className="object-cover object-right"
          />
        </div>

        {/* CENTER-LEFT CONTENT */}
        <div className="w-full lg:w-[45%] xl:w-[45%] flex flex-col items-start text-left px-6 sm:px-12 lg:px-10 xl:px-16 z-10 py-10 lg:py-0">
          
          {/* Label */}
          <p className="font-['gravesend-sans',sans-serif] text-[11px] sm:text-[12px] font-[500] tracking-[0.18em] uppercase text-[#777] mb-8">
            SCHEDULE AN APPOINTMENT
          </p>

          {/* Main Heading */}
          <h2 className="font-['beaufort-pro',serif] text-[36px] sm:text-[44px] md:text-[48px] lg:text-[42px] xl:text-[48px] leading-[1.2] font-light text-[#2b2b2b] tracking-[-0.01em] mb-8">
            Find a therapist who is the right<br className="hidden sm:block" /> fit for <span className="font-['beaufort-pro',serif] text-[#86b3b3] font-bold italic">you</span>.
          </h2>

          {/* Body Copy */}
          <div className="flex flex-col space-y-6 mb-10 max-w-[560px]">
            <p className="font-['gravesend-sans',sans-serif] text-[14.5px] sm:text-[15.5px] leading-[1.8] text-[#555] font-[300]">
              Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we&apos;re here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.
            </p>
            <p className="font-['gravesend-sans',sans-serif] text-[14.5px] sm:text-[15.5px] leading-[1.8] text-[#555] font-[300]">
              Click the button below to schedule an appointment.
            </p>
          </div>

          {/* Pill Button */}
          <Link
            href="https://www.conejovalleycounseling.com/contact"
            className="inline-block px-9 py-3.5 font-['gravesend-sans',sans-serif] text-[11px] sm:text-[12px] font-[500] tracking-[0.15em] uppercase text-[#777] border-[1px] border-[#999] rounded-full hover:bg-[#2b2b2b] hover:text-white hover:border-[#2b2b2b] transition-colors duration-300"
          >
            BOOK NOW
          </Link>
        </div>

        {/* RIGHT IMAGE (Bleeding off right edge) */}
        <div className="w-full lg:w-[35%] xl:w-[35%] h-[500px] lg:h-[600px] xl:h-[700px] relative flex-shrink-0 mt-12 lg:mt-0">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7557312a-044d-4489-a9d1-6f43ee9888b1/Jennifer+A+-+Images+%2811%29.jpg"
            alt="A person in a striped dress pointing at shells on the sandy beach with a child"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-left"
          />
        </div>

      </div>
    </section>
  );
}
