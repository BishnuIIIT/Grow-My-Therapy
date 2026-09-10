import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HowWeWork() {
  return (
    <section className="w-full bg-[#ded6cc] py-20 md:py-28 lg:py-36 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">
          
          {/* LEFT CONTENT AREA */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col pt-4 lg:pt-10">
            
            {/* Top Label */}
            <div className="mb-10 md:mb-12">
              <p className="font-['gravesend-sans',sans-serif] text-[12px] sm:text-[13px] font-[500] tracking-[0.18em] uppercase text-[#2b2b2b]">
                HOW WE WORK
              </p>
            </div>

            {/* Main Heading */}
            <div className="mb-12 md:mb-16">
              <h2 className="font-['beaufort-pro',serif] text-[40px] sm:text-[50px] md:text-[58px] lg:text-[64px] leading-[1.1] font-light text-[#2b2b2b] tracking-[-0.01em]">
                We&apos;re here to make a difference.
              </h2>
            </div>

            {/* Two Text Columns (Inside Left Area) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-14 md:mb-20">
              
              {/* Left Text Column */}
              <div className="flex flex-col space-y-8">
                <p className="font-['gravesend-sans',sans-serif] text-[12px] sm:text-[13px] md:text-[14px] font-[500] uppercase tracking-[0.15em] text-[#2b2b2b] leading-[1.6]">
                  THE CLIENTS WE WORK WITH ARE BALANCING SO MANY THINGS AT ONCE. IT&apos;S OFTEN HARD FOR THEM TO PUT THEMSELVES FIRST.
                </p>
                <p className="font-['gravesend-sans',sans-serif] text-[15.5px] sm:text-[16.5px] leading-[1.8] text-[#2b2b2b] font-[300]">
                  Here, your needs are always top priority. Our team takes the time to deeply listen to our clients in order to truly understand their story and their struggles. We recognize that no two people are the same and that personalized therapy means an intentional, tailored approach. (You won&apos;t find anything &ldquo;one-size-fits-all&rdquo; here.) If you&apos;re ready to do the work, we&apos;re ready to help.
                </p>
              </div>

              {/* Right Text Column */}
              <div className="flex flex-col pt-0 md:pt-1">
                <p className="font-['gravesend-sans',sans-serif] text-[15.5px] sm:text-[16.5px] leading-[1.8] text-[#2b2b2b] font-[300]">
                  Sometimes we may gently challenge you to look at things differently and other times we may explore your emotions, all while encouraging you to practice what you&apos;ve learned in your daily life. We take what we do seriously because we know how important it is for you to heal from what&apos;s hurting you, discover a fulfilling life, and build meaningful relationships. Our goal is to walk alongside you in this journey, offering support and guidance as you uncover your strengths and embrace what the future can hold for you.
                </p>
              </div>
              
            </div>

            {/* Bottom Label / CTA */}
            <div>
              <Link
                href="https://www.conejovalleycounseling.com/therapists-newbury-park"
                className="inline-block font-['gravesend-sans',sans-serif] text-[12px] sm:text-[13px] font-[500] tracking-[0.15em] uppercase text-[#2b2b2b] border-b-[1.5px] border-[#2b2b2b] pb-0.5 hover:text-[#86b3b3] hover:border-[#86b3b3] transition-colors"
              >
                LEARN MORE ABOUT US
              </Link>
            </div>
            
          </div>

          {/* RIGHT CONTENT AREA (Tall Vertical Image) */}
          <div className="lg:col-span-5 xl:col-span-5">
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[2/3] overflow-hidden">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/389808ad-7273-4e03-a32b-c172aa735f12/Jennifer+A+-+Images+%286%29.jpg"
                alt="A woman and a child in white dresses dancing on a sandy beach with tall grasses and a distant building in the background during sunset"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
