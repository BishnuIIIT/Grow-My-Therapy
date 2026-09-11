import React from "react";
import Image from "next/image";

export default function HopeSection() {
  return (
    <section id="about" className="w-full bg-main-bg overflow-hidden">
      
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
        {/* LEFT CONTENT */}
        <div className="flex flex-col flex-1 max-w-[980px] xl:max-w-[1150px] z-10">
          
          <h2 
            className="font-serif text-primary-text font-light tracking-[-0.01em] mb-[50px] xl:mb-[70px]"
            style={{
              fontSize: "clamp(42px, 3.4vw, 56px)",
              lineHeight: "1.2",
              maxWidth: "1050px"
            }}
          >
            A grounded approach to healing and resilience.
          </h2>
          
          <div className="flex flex-col max-w-[800px]">
            <p 
              className="font-light text-muted-text" 
              style={{ 
                fontSize: "18px", 
                lineHeight: "1.8",
                fontFamily: "var(--font-inter), system-ui, sans-serif" 
              }}
            >
              I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. By integrating evidence-based methods with body-oriented techniques, we work together to help you understand both the emotional and physiological sides of what you are experiencing.
            </p>
          </div>
          
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex-shrink-0 w-[38vw] max-w-[760px] min-w-[500px] h-[780px] xl:h-[860px]">
          <Image 
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80"
            alt="A comfortable modern chair sitting in a quiet, sunlit room."
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
      <div className="lg:hidden flex flex-col px-6 sm:px-10 py-16 gap-8">
        
        <h2 className="font-serif text-primary-text tracking-normal font-light text-[36px] sm:text-[42px] leading-[1.25]">
          A grounded approach to healing and resilience.
        </h2>

        <div className="flex flex-col">
          <p className="font-body text-[17px] sm:text-[18px] leading-[1.75] text-muted-text font-light mb-6">
            I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. By integrating evidence-based methods with body-oriented techniques, we work together to help you understand both the emotional and physiological sides of what you are experiencing.
          </p>
        </div>

        <div className="relative w-full aspect-square overflow-hidden mt-2">
          <Image
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80"
            alt="A comfortable modern chair sitting in a quiet, sunlit room."
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

      </div>

    </section>
  );
}
