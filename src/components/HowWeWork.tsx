import React from "react";
import Image from "next/image";

export default function HowWeWork() {
  return (
    <section className="w-full bg-white py-20 md:py-28 lg:py-32">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Eyebrow */}
        <div className="text-center mb-6 md:mb-8">
          <p className="text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.2em] uppercase text-[#777]">
            HOW WE WORK
          </p>
        </div>

        {/* Featured Original Beach Sunset Image */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] max-h-[540px] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm bg-[#f7f6f2] mb-14 md:mb-20 group">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/389808ad-7273-4e03-a32b-c172aa735f12/Jennifer+A+-+Images+%286%29.jpg"
            alt="A woman and a child in white dresses dancing on a sandy beach with tall grasses and a distant building in the background during sunset"
            fill
            sizes="100vw"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-102"
          />
        </div>

        {/* Original Main Heading: We're here to make a difference. */}
        <div className="max-w-4xl mx-auto text-center mb-8 md:mb-10">
          <h2 className="font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.2] font-normal text-[#2b2b2b]">
            We&apos;re here to make a difference.
          </h2>
        </div>

        {/* Lead Quote from reference */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <p className="font-serif text-[20px] sm:text-[24px] md:text-[26px] leading-[1.4] text-[#444] italic font-normal">
            The clients we work with are balancing so many things at once, it’s often hard for them to put themselves first.
          </p>
        </div>

        {/* Two-Column Supporting Body Copy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 max-w-4xl mx-auto">
          <div>
            <p className="font-sans text-[16px] leading-[1.8] text-[#555] font-light">
              Here, your needs are always top priority. Our team takes the time to deeply listen to our clients in order to truly understand their story and their struggles. We recognize that no two people are the same and that personalized therapy means an intentional, tailored approach. (You won’t find anything “one-size-fits-all” here.) If you’re ready to do the work, we’re ready to help.
            </p>
          </div>
          <div>
            <p className="font-sans text-[16px] leading-[1.8] text-[#555] font-light">
              Sometimes we may gently challenge you to look at things differently and other times we may explore your emotions, all while encouraging you to practice what you’ve learned in your daily life. We take what we do seriously because we know how important it is for you to heal from what’s hurting you, discover a fulfilling life, and build meaningful relationships. Our goal is to walk alongside you in this journey, offering support and guidance as you uncover your strengths and embrace what the future can hold for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
