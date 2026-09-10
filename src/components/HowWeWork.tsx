import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HowWeWork() {
  return (
    <section className="w-full bg-white py-20 md:py-28 lg:py-36">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 flex flex-col items-center">
        
        {/* Eyebrow Label */}
        <div className="mb-10 md:mb-14">
          <p className="font-['gravesend-sans',sans-serif] text-[12px] sm:text-[13px] font-[500] tracking-[0.18em] uppercase text-[#666]">
            HOW WE WORK
          </p>
        </div>

        {/* Hero Image - Centered Horizontal Slice */}
        <div className="relative w-full lg:w-[70%] xl:w-[65%] aspect-[4/3] sm:aspect-[16/9] md:aspect-[2.2/1] rounded-[20px] md:rounded-[24px] overflow-hidden shadow-sm mb-16 md:mb-24">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/389808ad-7273-4e03-a32b-c172aa735f12/Jennifer+A+-+Images+%286%29.jpg"
            alt="A woman and a child in white dresses dancing on a sandy beach with tall grasses and a distant building in the background during sunset"
            fill
            sizes="(max-width: 1024px) 100vw, 70vw"
            className="object-cover object-center"
          />
        </div>

        {/* Main Heading */}
        <div className="text-center mb-8 md:mb-12 max-w-4xl">
          <h2 className="font-['beaufort-pro',serif] text-[38px] sm:text-[46px] md:text-[54px] lg:text-[60px] leading-[1.15] font-light text-[#2b2b2b] tracking-[-0.01em]">
            We&apos;re here to make a difference.
          </h2>
        </div>

        {/* Introductory Statement */}
        <div className="text-center mb-10 md:mb-16 max-w-[800px] lg:max-w-[900px] px-4">
          <p className="font-['beaufort-pro',serif] text-[22px] sm:text-[26px] md:text-[30px] leading-[1.4] text-[#2b2b2b] font-normal italic">
            The clients we work with are balancing so many things at once, it’s often hard for them to put themselves first.
          </p>
        </div>

        {/* Body Content - Centered Flow */}
        <div className="max-w-[700px] lg:max-w-[800px] text-center space-y-6 md:space-y-8 mb-14 md:mb-20 px-2">
          <p className="font-['gravesend-sans',sans-serif] text-[15.5px] sm:text-[16.5px] leading-[1.8] text-[#555] font-[300]">
            Here, your needs are always top priority. Our team takes the time to deeply listen to our clients in order to truly understand their story and their struggles. We recognize that no two people are the same and that personalized therapy means an intentional, tailored approach. (You won’t find anything “one-size-fits-all” here.) If you’re ready to do the work, we’re ready to help.
          </p>
          <p className="font-['gravesend-sans',sans-serif] text-[15.5px] sm:text-[16.5px] leading-[1.8] text-[#555] font-[300]">
            Sometimes we may gently challenge you to look at things differently and other times we may explore your emotions, all while encouraging you to practice what you’ve learned in your daily life. We take what we do seriously because we know how important it is for you to heal from what’s hurting you, discover a fulfilling life, and build meaningful relationships. Our goal is to walk alongside you in this journey, offering support and guidance as you uncover your strengths and embrace what the future can hold for you.
          </p>
        </div>

        {/* Understated CTA Link */}
        <div className="text-center">
          <Link
            href="https://www.conejovalleycounseling.com/therapists-newbury-park"
            className="inline-block font-['gravesend-sans',sans-serif] text-[12px] sm:text-[13px] font-[500] tracking-[0.15em] uppercase text-[#2b2b2b] border-b-[1.5px] border-[#2b2b2b] pb-0.5 hover:text-[#86b3b3] hover:border-[#86b3b3] transition-colors"
          >
            LEARN MORE ABOUT US
          </Link>
        </div>

      </div>
    </section>
  );
}
