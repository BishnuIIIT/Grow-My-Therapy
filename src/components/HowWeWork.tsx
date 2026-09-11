import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HowWeWork() {
  return (
    <section className="relative w-full bg-[#ded6cc] overflow-hidden">
      
      {/* ============================================================ */}
      {/* DESKTOP LAYOUT (>= 1024px)                                   */}
      {/* ============================================================ */}
      <div 
        className="hidden lg:flex w-full items-center justify-between relative min-h-[720px] xl:min-h-[780px]"
        style={{
          paddingLeft: "clamp(35px, 4.5vw, 90px)",
          paddingTop: "75px",
          paddingBottom: "75px"
        }}
      >
        {/* Left Content Area */}
        <div className="flex flex-col flex-1 max-w-[850px] xl:max-w-[960px] z-10 pr-10 xl:pr-14">
          
          {/* Label */}
          <p className="font-sans text-[11px] xl:text-[12px] font-medium tracking-[0.18em] uppercase text-[#2b2b2b] mb-6 xl:mb-8">
            HOW WE WORK
          </p>

          {/* Heading - Single Line */}
          <h2 className="font-serif text-[38px] lg:text-[44px] xl:text-[50px] leading-[1.15] font-light text-[#2b2b2b] tracking-[-0.01em] mb-10 xl:mb-12 whitespace-nowrap">
            We&apos;re here to make a difference.
          </h2>

          {/* 2-Column Body Paragraphs */}
          <div className="grid grid-cols-2 gap-8 xl:gap-12">
            
            {/* Column 1: Uppercase Intro + Body 1 */}
            <div className="flex flex-col">
              <p className="font-sans text-[11px] xl:text-[11.5px] font-medium uppercase tracking-[0.14em] text-[#2b2b2b] leading-[1.65] mb-5">
                THE CLIENTS WE WORK WITH ARE BALANCING SO MANY THINGS AT ONCE, IT&apos;S OFTEN HARD FOR THEM TO PUT THEMSELVES FIRST.
              </p>
              <p className="font-body text-[13.5px] xl:text-[14.5px] leading-[1.7] text-[#555] font-light">
                Here, your needs are always top priority. Our team takes the time to deeply listen to our clients in order to truly understand their story and their struggles. We recognize that no two people are the same and that personalized therapy means an intentional, tailored approach. (You won&apos;t find anything &ldquo;one-size-fits-all&rdquo; here.) If you&apos;re ready to do the work, we&apos;re ready to help.
              </p>
            </div>

            {/* Column 2: Body 2 */}
            <div className="flex flex-col">
              <p className="font-body text-[13.5px] xl:text-[14.5px] leading-[1.7] text-[#555] font-light">
                Sometimes we may gently challenge you to look at things differently and other times we may explore your emotions, all while encouraging you to practice what you&apos;ve learned in your daily life. We take what we do seriously because we know how important it is for you to heal from what&apos;s hurting you, discover a fulfilling life, and build meaningful relationships. Our goal is to walk alongside you in this journey, offering support and guidance as you uncover your strengths and embrace what the future can hold for you.
              </p>
            </div>

          </div>

          {/* Learn More Link (Below Column 1) */}
          <div className="mt-10 xl:mt-12">
            <Link
              href="https://www.conejovalleycounseling.com/therapists-newbury-park"
              className="inline-block font-sans text-[11px] font-medium tracking-[0.16em] uppercase text-[#2b2b2b] border-b-[1.5px] border-[#2b2b2b] pb-0.5 hover:text-[#86b3b3] hover:border-[#86b3b3] transition-colors"
            >
              LEARN MORE ABOUT US
            </Link>
          </div>

        </div>

        {/* Right Image - Flush to Top, Bottom, and Right Edge */}
        <div className="absolute right-0 top-0 bottom-0 w-[35vw] max-w-[620px] min-w-[400px] h-full">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/389808ad-7273-4e03-a32b-c172aa735f12/Jennifer+A+-+Images+%286%29.jpg"
            alt="A woman and a child in white dresses dancing on a sandy beach"
            fill
            priority
            sizes="35vw"
            className="object-cover object-center"
          />
        </div>

      </div>

      {/* ============================================================ */}
      {/* MOBILE / TABLET LAYOUT (< 1024px)                            */}
      {/* ============================================================ */}
      <div className="lg:hidden flex flex-col px-6 sm:px-10 py-16 gap-8">
        <p className="font-sans text-[12px] font-medium tracking-[0.18em] uppercase text-[#2b2b2b]">
          HOW WE WORK
        </p>

        <h2 className="font-serif text-[36px] sm:text-[44px] leading-[1.2] font-light text-[#2b2b2b] tracking-[-0.01em]">
          We&apos;re here to make a difference.
        </h2>

        <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden my-4">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/389808ad-7273-4e03-a32b-c172aa735f12/Jennifer+A+-+Images+%286%29.jpg"
            alt="A woman and a child in white dresses dancing on a sandy beach"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="flex flex-col gap-6">
          <p className="font-sans text-[12px] font-medium uppercase tracking-[0.14em] text-[#2b2b2b] leading-[1.6]">
            THE CLIENTS WE WORK WITH ARE BALANCING SO MANY THINGS AT ONCE, IT&apos;S OFTEN HARD FOR THEM TO PUT THEMSELVES FIRST.
          </p>
          <p className="font-body text-[15px] leading-[1.7] text-[#555] font-light">
            Here, your needs are always top priority. Our team takes the time to deeply listen to our clients in order to truly understand their story and their struggles. We recognize that no two people are the same and that personalized therapy means an intentional, tailored approach. (You won&apos;t find anything &ldquo;one-size-fits-all&rdquo; here.) If you&apos;re ready to do the work, we&apos;re ready to help.
          </p>
          <p className="font-body text-[15px] leading-[1.7] text-[#555] font-light">
            Sometimes we may gently challenge you to look at things differently and other times we may explore your emotions, all while encouraging you to practice what you&apos;ve learned in your daily life. We take what we do seriously because we know how important it is for you to heal from what&apos;s hurting you, discover a fulfilling life, and build meaningful relationships. Our goal is to walk alongside you in this journey, offering support and guidance as you uncover your strengths and embrace what the future can hold for you.
          </p>
        </div>

        <div className="mt-4">
          <Link
            href="https://www.conejovalleycounseling.com/therapists-newbury-park"
            className="inline-block font-sans text-[12px] font-medium tracking-[0.16em] uppercase text-[#2b2b2b] border-b-[1.5px] border-[#2b2b2b] pb-0.5 hover:text-[#86b3b3] hover:border-[#86b3b3] transition-colors"
          >
            LEARN MORE ABOUT US
          </Link>
        </div>
      </div>

    </section>
  );
}
