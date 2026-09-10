import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full bg-white py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Flanking Image */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="relative w-full aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm bg-[#f7f6f2] group">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/1b9495e0-ce39-4826-9df9-e24de99da82f/Jennifer+A+-+Images+%2812%29.jpg"
                alt="A person picking up seashells on a sandy beach"
                fill
                sizes="(max-width: 1024px) 0vw, 320px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Center Column: Eyebrow, Main Message, Supporting Copy, Prompt, and Book now button */}
          <div className="lg:col-span-6 text-center px-4 sm:px-8">
            <p className="text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.2em] uppercase text-[#777] mb-5">
              SCHEDULE AN APPOINTMENT
            </p>
            <h2 className="font-serif text-[34px] sm:text-[42px] md:text-[48px] leading-[1.2] font-normal text-[#2b2b2b] mb-6">
              Find a therapist who is the right fit for you.
            </h2>
            <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#555] font-light mb-6">
              Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we&apos;re here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.
            </p>
            <p className="font-sans text-[15px] sm:text-[16px] text-[#777] italic mb-8">
              Click the button below to schedule an appointment.
            </p>
            <Link
              href="https://www.conejovalleycounseling.com/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-[13px] sm:text-[14px] font-sans font-medium tracking-[0.1em] uppercase text-white bg-[#2b2b2b] hover:bg-[#444] rounded-full transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            >
              Book now
            </Link>
          </div>

          {/* Right Flanking Image */}
          <div className="lg:col-span-3">
            <div className="relative w-full aspect-[4/3] sm:aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm bg-[#f7f6f2] group">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7557312a-044d-4489-a9d1-6f43ee9888b1/Jennifer+A+-+Images+%2811%29.jpg"
                alt="A person in a striped dress pointing at shells on the sandy beach with a child"
                fill
                sizes="(max-width: 1024px) 100vw, 320px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
