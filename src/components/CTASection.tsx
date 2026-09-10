import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full bg-[#f7f6f2] py-20 lg:py-32 xl:py-40 overflow-hidden flex items-center justify-center">
      <div className="w-full max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-12 flex flex-col lg:flex-row items-center justify-start lg:gap-16 xl:gap-24">
        
        {/* LEFT IMAGE */}
        <div className="w-full lg:w-[380px] xl:w-[420px] h-[500px] xl:h-[580px] relative flex-shrink-0 mb-12 lg:mb-0">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/1b9495e0-ce39-4826-9df9-e24de99da82f/Jennifer+A+-+Images+%2812%29.jpg"
            alt="Sandy beach with seashells"
            fill
            sizes="(max-width: 1024px) 100vw, 420px"
            className="object-cover object-bottom"
          />
        </div>

        {/* CONTENT */}
        <div className="w-full lg:w-[540px] xl:w-[600px] flex flex-col items-start text-left">
          
          {/* Eyebrow */}
          <p className="font-sans text-[11px] sm:text-[11.5px] font-semibold tracking-[0.18em] uppercase text-[#739294] mb-6">
            SCHEDULE AN APPOINTMENT
          </p>

          {/* Main Heading */}
          <h2 className="font-serif text-[38px] sm:text-[42px] md:text-[44px] xl:text-[46px] leading-[1.1] font-light text-[#2b2b2b] tracking-normal mb-8">
            Find a therapist who is the right<br className="hidden md:block" />{" "}
            fit for <span className="font-serif text-[#739294] italic font-bold text-[44px] sm:text-[48px] md:text-[52px] xl:text-[56px] tracking-tight">you</span>.
          </h2>

          {/* Body Copy (UPPERCASE with hard breaks to match reference exactly) */}
          <div className="flex flex-col space-y-6 mb-10 text-[#6a757e]">
            <p className="font-sans text-[10px] sm:text-[10.5px] leading-[2.1] tracking-[0.08em] uppercase font-medium">
              COMING TO THERAPY IS A COURAGEOUS DECISION, AND CONNECTING<br className="hidden lg:block" />
              WITH THE RIGHT KIND OF THERAPIST MAKES ALL THE DIFFERENCE. WE<br className="hidden lg:block" />
              UNDERSTAND THAT YOUR JOURNEY IS PERSONAL, AND WE&apos;RE HERE TO<br className="hidden lg:block" />
              SUPPORT YOU WITH CARE AND UNDERSTANDING EVERY STEP OF THE<br className="hidden lg:block" />
              WAY. EACH MEMBER OF OUR TEAM BRINGS DEDICATED EXPERTISE AND<br className="hidden lg:block" />
              A COMMITMENT TO SUPPORT YOU IN YOUR STRUGGLES. WE WANT YOU<br className="hidden lg:block" />
              TO FEEL PRIORITIZED, UNDERSTOOD, AND EMPOWERED.
            </p>
            <p className="font-sans text-[10px] sm:text-[10.5px] leading-[2.1] tracking-[0.08em] uppercase font-medium">
              CLICK THE BUTTON BELOW TO SCHEDULE AN APPOINTMENT.
            </p>
          </div>

          {/* Pill Button */}
          <Link
            href="https://www.conejovalleycounseling.com/contact"
            className="inline-flex items-center justify-center px-8 py-[11px] font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-[#6a757e] border border-[#d5d5d5] rounded-full hover:bg-black/5 hover:text-[#2b2b2b] transition-colors duration-300"
          >
            BOOK NOW
          </Link>
          
        </div>
      </div>
    </section>
  );
}
