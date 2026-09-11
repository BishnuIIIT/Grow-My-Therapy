import React from "react";
import Image from "next/image";

export default function HopeSection() {
  return (
    <section className="w-full bg-[#f9f8f6] overflow-hidden">
      
      {/* ============================================================ */}
      {/* DESKTOP LAYOUT (>= 1024px)                                   */}
      {/* ============================================================ */}
      <div 
        className="hidden lg:grid w-full items-start mx-auto"
        style={{ 
          maxWidth: "1800px",
          gridTemplateColumns: "minmax(0, 1fr) minmax(480px, 545px)", 
          gap: "clamp(40px, 5vw, 85px)", 
          paddingLeft: "clamp(60px, 9vw, 165px)", 
          paddingRight: "clamp(20px, 4vw, 75px)",
          paddingTop: "125px",
          paddingBottom: "125px"
        }}
      >
        {/* LEFT CONTENT */}
        <div className="flex flex-col w-full" style={{ paddingTop: "180px" }}>
          
          <h2 
            className="font-['beaufort-pro',serif] text-[#2b2b2b] tracking-normal font-normal"
            style={{
              fontSize: "clamp(38px, 2.7vw, 46px)",
              lineHeight: "1.25",
              maxWidth: "850px",
              marginBottom: "80px"
            }}
          >
            You’re holding onto hope that life can be<br className="hidden xl:block"/> better than it is right now.
          </h2>
          
          <div 
            style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
              gap: "65px", 
              maxWidth: "925px" 
            }}
          >
            {/* Column 1 */}
            <div className="flex flex-col">
              <p 
                className="font-sans font-medium uppercase text-[#2b2b2b] mb-[18px]"
                style={{ fontSize: "11px", letterSpacing: "0.15em", lineHeight: "1.7" }}
              >
                At Conejo Valley Family Counseling We Want To<br className="hidden md:block"/> Make That Hope A Reality.
              </p>
              <p 
                className="font-light text-[#555]" 
                style={{ 
                  fontSize: "15.5px", 
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
                  fontSize: "15.5px", 
                  lineHeight: "1.75",
                  fontFamily: "var(--font-mulish), system-ui, sans-serif" 
                }}
              >
                First and foremost, we believe what you’re going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles. As we tap into the power of connection and understanding, you can find your footing again and take a transformative path forward.
              </p>
            </div>
          </div>
          
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full" style={{ height: "688px" }}>
          <Image 
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7a40691c-70a5-4307-b9ae-974592087a8f/Jennifer+A+-+Images+%283%29.jpg"
            alt="Sandy beach with gentle ocean waves"
            fill
            sizes="(max-width: 1280px) 480px, 545px"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* ============================================================ */}
      {/* MOBILE / TABLET LAYOUT (< 1024px)                            */}
      {/* ============================================================ */}
      <div className="lg:hidden flex flex-col px-6 sm:px-10 py-16 gap-10">
        
        <h2 className="font-['beaufort-pro',serif] text-[#2b2b2b] tracking-normal font-normal text-[36px] sm:text-[42px] leading-[1.25]">
          You’re holding onto hope that life can be better than it is right now.
        </h2>

        <div className="flex flex-col gap-8">
          <div>
            <p className="font-sans font-medium uppercase text-[#2b2b2b] mb-4" style={{ fontSize: "11px", letterSpacing: "0.15em", lineHeight: "1.7" }}>
              At Conejo Valley Family Counseling We Want To Make That Hope A Reality.
            </p>
            <p className="font-body text-[16px] xl:text-[17px] leading-[1.7] text-[#555] font-[300] mb-8">
              Whether you&apos;re an adult seeking personal growth, looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life&apos;s ups and downs.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col">
            <p className="font-body text-[16px] xl:text-[17px] leading-[1.7] text-[#555] font-[300] mb-8">
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

