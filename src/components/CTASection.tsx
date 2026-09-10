import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full bg-[#f7f6f2] py-20 lg:py-32 xl:py-44 overflow-hidden relative flex items-center min-h-[750px]">
      
      {/* DESKTOP LEFT IMAGE - Flush to the left edge, approx 370x548px */}
      <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[370px] h-[548px] z-0">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7557312a-044d-4489-a9d1-6f43ee9888b1/Jennifer+A+-+Images+%2811%29.jpg"
          alt="A person in a striped dress on the beach"
          fill
          sizes="370px"
          className="object-cover object-center"
        />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-0 relative z-10 flex flex-col lg:block">
        
        {/* MOBILE IMAGE */}
        <div className="lg:hidden w-full h-[450px] relative mb-12">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7557312a-044d-4489-a9d1-6f43ee9888b1/Jennifer+A+-+Images+%2811%29.jpg"
            alt="A person in a striped dress on the beach"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* CONTENT - Starts at approx x=500px on desktop */}
        <div className="w-full lg:w-[500px] xl:w-[560px] lg:ml-[450px] xl:ml-[500px] flex flex-col items-start text-left">
          
          {/* Eyebrow */}
          <p className="font-sans text-[11px] sm:text-[12px] font-semibold tracking-[0.2em] uppercase text-[#739294] mb-5">
            SCHEDULE AN APPOINTMENT
          </p>

          {/* Main Heading */}
          {/* Do NOT let it wrap unpredictably; force the break as requested */}
          <h2 className="font-serif text-[38px] sm:text-[44px] md:text-[46px] leading-[1.1] font-light text-[#2b2b2b] tracking-normal mb-8">
            Find a therapist who is the right<br className="hidden md:block" />{" "}
            fit for <span className="font-serif text-[#739294] italic font-bold">you</span>.
          </h2>

          {/* Body Copy (UPPERCASE) */}
          <div className="flex flex-col space-y-6 mb-10 text-[#6a757e]">
            <p className="font-sans text-[11px] sm:text-[11.5px] leading-[1.9] tracking-[0.06em] uppercase font-medium">
              COMING TO THERAPY IS A COURAGEOUS DECISION, AND CONNECTING
              WITH THE RIGHT KIND OF THERAPIST MAKES ALL THE DIFFERENCE. WE
              UNDERSTAND THAT YOUR JOURNEY IS PERSONAL, AND WE&apos;RE HERE TO
              SUPPORT YOU WITH CARE AND UNDERSTANDING EVERY STEP OF THE
              WAY. EACH MEMBER OF OUR TEAM BRINGS DEDICATED EXPERTISE AND
              A COMMITMENT TO SUPPORT YOU IN YOUR STRUGGLES. WE WANT YOU
              TO FEEL PRIORITIZED, UNDERSTOOD, AND EMPOWERED.
            </p>
            <p className="font-sans text-[11px] sm:text-[11.5px] leading-[1.9] tracking-[0.06em] uppercase font-medium">
              CLICK THE BUTTON BELOW TO SCHEDULE AN APPOINTMENT.
            </p>
          </div>

          {/* Pill Button */}
          <Link
            href="https://www.conejovalleycounseling.com/contact"
            className="inline-flex items-center justify-center px-8 py-[10px] font-sans text-[10.5px] font-semibold tracking-[0.18em] uppercase text-[#6a757e] border border-[#6a757e] rounded-full hover:bg-black/5 hover:text-[#2b2b2b] transition-colors duration-300"
          >
            BOOK NOW
          </Link>
          
        </div>
      </div>
    </section>
  );
}
