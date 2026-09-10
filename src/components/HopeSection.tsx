import React from "react";
import Image from "next/image";

export default function HopeSection() {
  return (
    <section className="w-full bg-[#f7f6f2] overflow-hidden" style={{ minHeight: "850px" }}>

      {/* ======================================================= */}
      {/* DESKTOP LAYOUT (>= lg / 1024px)                        */}
      {/* Two-zone: left content + right large image              */}
      {/* Target at 1920px: content left≈165px, image x≈1230px   */}
      {/* ======================================================= */}
      <div className="hidden lg:flex items-stretch w-full" style={{ minHeight: "850px" }}>

        {/* LEFT CONTENT ZONE */}
        <div
          className="flex flex-col justify-center"
          style={{
            paddingLeft: "9vw",
            paddingRight: "4vw",
            paddingTop: "100px",
            paddingBottom: "100px",
            flex: "1 1 0%",
            minWidth: 0,
          }}
        >
          {/* HEADING — 2-line, large serif */}
          <h2
            className="font-serif font-light text-[#2b2b2b] tracking-[-0.01em] leading-[1.25] mb-14"
            style={{
              fontSize: "clamp(42px, 3.3vw, 56px)",
              maxWidth: "800px",
            }}
          >
            You&apos;re holding onto hope that life can be
            better than it is right now.
          </h2>

          {/* TWO TEXT COLUMNS BELOW HEADING */}
          <div
            className="grid gap-x-16 gap-y-8"
            style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))", maxWidth: "900px" }}
          >
            {/* COLUMN 1 */}
            <div>
              <p
                className="font-sans font-medium uppercase tracking-[0.15em] text-[#2b2b2b] leading-[1.7] mb-6"
                style={{ fontSize: "11.5px" }}
              >
                AT CONEJO VALLEY FAMILY COUNSELING WE WANT TO MAKE THAT HOPE A REALITY.
              </p>
              <p
                className="font-sans font-light text-[#555] leading-[1.8]"
                style={{ fontSize: "15.5px" }}
              >
                Whether you&apos;re an adult seeking personal growth, looking to work through
                your trauma, a couple working on your relationship, or a parent looking for
                support for your child, we provide a compassionate and safe space to help you
                navigate all of life&apos;s ups and downs.
              </p>
            </div>

            {/* COLUMN 2 */}
            <div>
              <p
                className="font-sans font-light text-[#555] leading-[1.8]"
                style={{ fontSize: "15.5px" }}
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

        {/* RIGHT IMAGE ZONE */}
        {/* Target: width≈545px, height≈640px, ending around x≈1775px at 1920px vp */}
        <div
          className="relative flex-shrink-0"
          style={{
            width: "clamp(420px, 28.5vw, 545px)",
            marginRight: "7.5vw",
            alignSelf: "center",
            height: "640px",
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

      {/* ======================================================= */}
      {/* MOBILE / TABLET LAYOUT (< lg / 1024px)                 */}
      {/* Stack: heading -> col1 -> col2 -> image                 */}
      {/* ======================================================= */}
      <div className="lg:hidden flex flex-col px-6 sm:px-10 py-16 gap-8">

        {/* Heading */}
        <h2 className="font-serif font-light text-[#2b2b2b] tracking-[-0.01em] leading-[1.25] text-[36px] sm:text-[44px]">
          You&apos;re holding onto hope that life can be better than it is right now.
        </h2>

        {/* Column 1 */}
        <div>
          <p
            className="font-sans font-medium uppercase tracking-[0.15em] text-[#2b2b2b] leading-[1.7] mb-4"
            style={{ fontSize: "11.5px" }}
          >
            AT CONEJO VALLEY FAMILY COUNSELING WE WANT TO MAKE THAT HOPE A REALITY.
          </p>
          <p className="font-sans font-light text-[#555] leading-[1.8] text-[15px]">
            Whether you&apos;re an adult seeking personal growth, looking to work through your
            trauma, a couple working on your relationship, or a parent looking for support for
            your child, we provide a compassionate and safe space to help you navigate all of
            life&apos;s ups and downs.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <p className="font-sans font-light text-[#555] leading-[1.8] text-[15px]">
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
