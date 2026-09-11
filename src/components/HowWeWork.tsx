import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HowWeWork() {
  return (
    <section className="w-full bg-[#ded6cc] py-20 md:py-28 lg:py-36 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16 xl:gap-x-20">
          
          {/* 1. Label */}
          <div className="lg:col-span-7 lg:row-start-1">
            <p className="font-sans text-[12px] sm:text-[13px] font-[500] tracking-[0.18em] uppercase text-[#2b2b2b] mb-6 lg:mb-10">
              HOW WE WORK
            </p>
          </div>

          {/* 2. Main Heading */}
          <div className="lg:col-span-7 lg:row-start-2">
            <h2 className="font-serif text-[40px] sm:text-[50px] md:text-[58px] lg:text-[64px] leading-[1.1] font-light text-[#2b2b2b] tracking-[-0.01em] mb-8 lg:mb-12">
              We&apos;re here to make a difference.
            </h2>
          </div>

          {/* 3. Image */}
          <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-5 relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[2/3]">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/389808ad-7273-4e03-a32b-c172aa735f12/Jennifer+A+-+Images+%286%29.jpg"
              alt="A woman and a child in white dresses dancing on a sandy beach"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
            />
          </div>

          {/* 4. Body Paragraph 1 (Uppercase intro + regular body) */}
          <div className="lg:col-span-7 lg:row-start-3">
            <p className="font-sans text-[12px] sm:text-[13px] md:text-[14px] font-[500] uppercase tracking-[0.15em] text-[#2b2b2b] leading-[1.6] mb-8">
              THE CLIENTS WE WORK WITH ARE BALANCING SO MANY THINGS AT ONCE. IT&apos;S OFTEN HARD FOR THEM TO PUT THEMSELVES FIRST.
            </p>
            <p className="font-body text-[15.5px] sm:text-[16.5px] leading-[1.8] text-[#2b2b2b] font-[300] mb-8">
              Here, your needs are always top priority. Our team takes the time to deeply listen to our clients in order to truly understand their story and their struggles. We recognize that no two people are the same and that personalized therapy means an intentional, tailored approach. (You won&apos;t find anything &ldquo;one-size-fits-all&rdquo; here.) If you&apos;re ready to do the work, we&apos;re ready to help.
            </p>
          </div>

          {/* 5. Body Paragraph 2 */}
          <div className="lg:col-span-7 lg:row-start-4">
            <p className="font-body text-[15.5px] sm:text-[16.5px] leading-[1.8] text-[#2b2b2b] font-[300] mb-12">
              Sometimes we may gently challenge you to look at things differently and other times we may explore your emotions, all while encouraging you to practice what you&apos;ve learned in your daily life. We take what we do seriously because we know how important it is for you to heal from what&apos;s hurting you, discover a fulfilling life, and build meaningful relationships. Our goal is to walk alongside you in this journey, offering support and guidance as you uncover your strengths and embrace what the future can hold for you.
            </p>
          </div>

          {/* 6. Link */}
          <div className="lg:col-span-7 lg:row-start-5">
            <Link
              href="https://www.conejovalleycounseling.com/therapists-newbury-park"
              className="inline-block font-sans text-[12px] sm:text-[13px] font-[500] tracking-[0.15em] uppercase text-[#2b2b2b] border-b-[1.5px] border-[#2b2b2b] pb-0.5 hover:text-[#86b3b3] hover:border-[#86b3b3] transition-colors"
            >
              LEARN MORE ABOUT US
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
