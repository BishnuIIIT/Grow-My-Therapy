import React from "react";
import Image from "next/image";

export default function HopeSection() {
  return (
    <section className="w-full bg-[#f7f6f2] overflow-hidden" style={{ minHeight: "900px" }}>

      {/* ============================================================ */}
      {/* DESKTOP LAYOUT (>= lg / 1024px)                             */}
      {/* Target at 1920px:                                            */}
      {/*   content left ≈ 165px                                       */}
      {/*   heading top ≈ 300px                                        */}
      {/*   image x ≈ 1230–1775px, height ≈ 685px, top ≈ 140px        */}
      {/* ============================================================ */}
      <div className="hidden lg:flex w-full relative" style={{ minHeight: "900px" }}>

        {/* LEFT CONTENT ZONE — positioned from top, not centered */}
        <div
          style={{
            paddingLeft: "9vw",
            paddingRight: "3vw",
            paddingTop: "220px",
            paddingBottom: "80px",
            flex: "1 1 0%",
            minWidth: 0,
          }}
        >
          {/* HEADING — large serif, 2-line wrap, starts at y≈300px */}
          {/* paddingTop 160px on parent + ~140px of heading position = heading at ~300px */}
          <h2
            className="font-serif font-light text-[#2b2b2b] tracking-[-0.01em] leading-[1.22]"
            style={{
              fontSize: "clamp(44px, 2.7vw, 52px)",
              maxWidth: "800px",
              marginBottom: "56px",
            }}
          >
            You&apos;re holding onto hope that life can be
            better than it is right now.
          </h2>

          {/* TWO TEXT COLUMNS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
              gap: "0 56px",
              maxWidth: "920px",
            }}
          >
            {/* COLUMN 1 */}
            <div>
              {/* Small uppercase intro heading — uses gravesend-sans (font-sans) intentionally */}
              <p
                className="font-sans font-medium uppercase tracking-[0.15em] text-[#2b2b2b] leading-[1.7]"
                style={{ fontSize: "11px", marginBottom: "20px" }}
              >
                AT CONEJO VALLEY FAMILY COUNSELING WE WANT TO MAKE THAT HOPE A REALITY.
              </p>
              {/* Body paragraph — uses Mulish (body default), NOT gravesend-sans */}
              <p
                className="font-light text-[#555] leading-[1.75]"
                style={{
                  fontSize: "15.5px",
                  fontFamily: "var(--font-mulish), system-ui, -apple-system, sans-serif",
                }}
              >
                Whether you&apos;re an adult seeking personal growth, looking to work through
                your trauma, a couple working on your relationship, or a parent looking for
                support for your child, we provide a compassionate and safe space to help you
                navigate all of life&apos;s ups and downs.
              </p>
            </div>

            {/* COLUMN 2 */}
            <div>
              {/* Body paragraph — uses Mulish (body default), NOT gravesend-sans */}
              <p
                className="font-light text-[#555] leading-[1.75]"
                style={{
                  fontSize: "15.5px",
                  fontFamily: "var(--font-mulish), system-ui, -apple-system, sans-serif",
                }}
              >
                First and foremost, we believe what you&apos;re going through is real, valid,
                and worthy of support. Our team offers clients in the Newbury Park area and
                across CA an environment to discover a new life and a deeper sense of self in
                the midst of their struggles. As we tap into the power of connection and
                understanding, you can find your footing again and take a transformative path
                forward.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE — aligned to top with margin, NOT vertically centered */}
        {/* Target: top≈140px, width≈545px, height≈685px, right≈1775px */}
        <div
          className="relative flex-shrink-0"
          style={{
            width: "clamp(420px, 28.5vw, 545px)",
            marginRight: "7.5vw",
            marginTop: "140px",
            height: "685px",
          }}
        >
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7a40691c-70a5-4307-b9ae-974592087a8f/Jennifer+A+-+Images+%283%29.jpg"
            alt="Sandy beach with gentle ocean waves"
            fill
            sizes="(max-width: 1280px) 420px, 545px"
            className="object-cover object-center"
          />
        </div>

      </div>

      {/* ============================================================ */}
      {/* MOBILE / TABLET LAYOUT (< lg / 1024px)                      */}
      {/* Stack: heading -> col1 -> col2 -> image                      */}
      {/* ============================================================ */}
      <div className="lg:hidden flex flex-col px-6 sm:px-10 py-16 gap-8">

        {/* Heading */}
        <h2 className="font-serif font-light text-[#2b2b2b] tracking-[-0.01em] leading-[1.25] text-[36px] sm:text-[44px]">
          You&apos;re holding onto hope that life can be better than it is right now.
        </h2>

        {/* Column 1 */}
        <div>
          <p
            className="font-sans font-medium uppercase tracking-[0.15em] text-[#2b2b2b] leading-[1.7] mb-4"
            style={{ fontSize: "11px" }}
          >
            AT CONEJO VALLEY FAMILY COUNSELING WE WANT TO MAKE THAT HOPE A REALITY.
          </p>
          <p
            className="font-light text-[#555] leading-[1.75] text-[15px]"
            style={{ fontFamily: "var(--font-mulish), system-ui, -apple-system, sans-serif" }}
          >
            Whether you&apos;re an adult seeking personal growth, looking to work through your
            trauma, a couple working on your relationship, or a parent looking for support for
            your child, we provide a compassionate and safe space to help you navigate all of
            life&apos;s ups and downs.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <p
            className="font-light text-[#555] leading-[1.75] text-[15px]"
            style={{ fontFamily: "var(--font-mulish), system-ui, -apple-system, sans-serif" }}
          >
            First and foremost, we believe what you&apos;re going through is real, valid, and
            worthy of support. Our team offers clients in the Newbury Park area and across CA
            an environment to discover a new life and a deeper sense of self in the midst of
            their struggles. As we tap into the power of connection and understanding, you can
            find your footing again and take a transformative path forward.
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full h-[320px] sm:h-[420px] overflow-hidden">
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

