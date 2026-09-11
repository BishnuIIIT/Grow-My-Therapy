import React from "react";
import Image from "next/image";

export default function HopeSection() {
  return (
    <section className="w-full bg-[#f9f8f6] overflow-hidden">
      
      {/* ============================================================ */}
      {/* DESKTOP LAYOUT (>= 1024px)                                   */}
      {/* ============================================================ */}
      <div 
        className="hidden lg:flex w-full items-center justify-between"
        style={{ 
          paddingLeft: "clamp(35px, 4.5vw, 85px)", 
          paddingRight: "0px",
          paddingTop: "90px",
          paddingBottom: "90px",
          gap: "clamp(40px, 4vw, 75px)"
        }}
      >
        {/* LEFT CONTENT (Shifted to left, 1.5x text scale) */}
        <div className="flex flex-col flex-1 max-w-[980px] xl:max-w-[1150px] z-10">
          
          <h2 
            className="font-serif text-[#2b2b2b] font-light tracking-[-0.01em] mb-[50px] xl:mb-[70px]"
            style={{
              fontSize: "clamp(46px, 3.4vw, 62px)",
              lineHeight: "1.18",
              maxWidth: "1050px"
            }}
          >
            <span className="whitespace-nowrap">You’re holding onto hope that life can be</span><br />
            <span className="whitespace-nowrap">better than it is right now.</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] xl:gap-[65px] max-w-[1050px]">
            {/* Column 1 */}
            <div className="flex flex-col">
              <p 
                className="font-sans font-medium uppercase text-[#2b2b2b] mb-[18px]"
                style={{ fontSize: "13px", letterSpacing: "0.15em", lineHeight: "1.6" }}
              >
                At Conejo Valley Family Counseling We Want To<br className="hidden sm:inline"/> Make That Hope A Reality.
              </p>
              <p 
                className="font-light text-[#555]" 
                style={{ 
                  fontSize: "17.5px", 
                  lineHeight: "1.75",
                  fontFamily: "var(--font-mulish), system-ui, sans-serif" 
                }}
              >
                Whether you’re an adult seeking personal growth, looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life’s ups and downs.
              </p>
            </div>
            
            {/* Column 2 */}
            <div className="flex flex-col">
              <p 
                className="font-light text-[#555]" 
                style={{ 
                  fontSize: "17.5px", 
                  lineHeight: "1.75",
                  fontFamily: "var(--font-mulish), system-ui, sans-serif" 
                }}
              >
                First and foremost, we believe what you’re going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles. As we tap into the power of connection and understanding, you can find your footing again and take a transformative path forward.
              </p>
            </div>
          </div>
          
        </div>

        {/* RIGHT IMAGE (1.4x scale, touching right edge) */}
        <div className="relative flex-shrink-0 w-[38vw] max-w-[760px] min-w-[500px] h-[780px] xl:h-[860px]">
          <Image 
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7a40691c-70a5-4307-b9ae-974592087a8f/Jennifer+A+-+Images+%283%29.jpg"
            alt="Sandy beach with gentle ocean waves"
            fill
            sizes="(max-width: 1440px) 40vw, 760px"
            priority
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* ============================================================ */}
      {/* MOBILE / TABLET LAYOUT (< 1024px)                            */}
      {/* ============================================================ */}
      <div className="lg:hidden flex flex-col px-6 sm:px-10 py-16 gap-10">
        
        <h2 className="font-serif text-[#2b2b2b] tracking-normal font-light text-[36px] sm:text-[44px] leading-[1.2]">
          You’re holding onto hope that life can be better than it is right now.
        </h2>

        <div className="flex flex-col gap-8">
          <div>
            <p className="font-sans font-medium uppercase text-[#2b2b2b] mb-4 text-[12px] tracking-[0.15em] leading-[1.6]">
              At Conejo Valley Family Counseling We Want To Make That Hope A Reality.
            </p>
            <p className="font-body text-[16px] sm:text-[17px] leading-[1.7] text-[#555] font-light mb-6">
              Whether you&apos;re an adult seeking personal growth, looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life&apos;s ups and downs.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col">
            <p className="font-body text-[16px] sm:text-[17px] leading-[1.7] text-[#555] font-light mb-6">
              First and foremost, we believe what you&apos;re going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles. As we tap into the power of connection and understanding, you can find your footing again and take a transformative path forward.
            </p>
          </div>
        </div>

        <div className="relative w-full h-[360px] sm:h-[480px] overflow-hidden mt-4">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7a40691c-70a5-4307-b9ae-974592087a8f/Jennifer+A+-+Images+%283%29.jpg"
            alt="Sandy beach with gentle ocean waves"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

      </div>

    </section>
  );
}
