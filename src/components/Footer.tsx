import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, therapistsList } from "@/data/homepageData";

export default function Footer() {
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "https://www.conejovalleycounseling.com/therapists-newbury-park" },
    { title: "FAQs", href: "https://www.conejovalleycounseling.com/faqs" },
    { title: "Contact", href: "https://www.conejovalleycounseling.com/contact" },
  ];

  return (
    <footer className="w-full bg-[#f7f6f2] pt-20 md:pt-28 pb-0">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 xl:px-24">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 pb-20">
          
          {/* Column 1: Brand & Introduction */}
          <div className="lg:col-span-4 xl:col-span-5 space-y-8 pr-0 lg:pr-8">
            <Link href="/" className="inline-block group">
              <div className="relative w-[280px] sm:w-[320px] md:w-[340px] h-[80px] sm:h-[95px]">
                <Image
                  src={siteConfig.logoUrl}
                  alt={siteConfig.name}
                  fill
                  sizes="350px"
                  className="object-contain object-left transition-opacity group-hover:opacity-90"
                />
              </div>
            </Link>
            <p className="font-['gravesend-sans',sans-serif] text-[14.5px] sm:text-[15px] leading-[1.8] text-[#555] font-[300] max-w-[380px]">
              We want to make getting started simple. You&apos;re welcome to come into our office in Newbury Park or schedule virtual appointments from anywhere in CA—whatever works best for you.
            </p>
          </div>

          {/* Column 2: Navigate */}
          <div className="lg:col-span-2">
            <h4 className="font-['gravesend-sans',sans-serif] text-[11px] sm:text-[12px] font-[500] tracking-[0.18em] uppercase text-[#2b2b2b] mb-6">
              NAVIGATE
            </h4>
            <ul className="space-y-2.5 font-['gravesend-sans',sans-serif] text-[14px] sm:text-[14.5px] font-[300] text-[#555] leading-snug">
              {navLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="hover:text-[#86b3b3] transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Team */}
          <div className="lg:col-span-3">
            <h4 className="font-['gravesend-sans',sans-serif] text-[11px] sm:text-[12px] font-[500] tracking-[0.18em] uppercase text-[#2b2b2b] mb-6">
              OUR TEAM
            </h4>
            <ul className="space-y-2.5 font-['gravesend-sans',sans-serif] text-[14px] sm:text-[14.5px] font-[300] text-[#555] leading-snug">
              {therapistsList.map((t) => (
                <li key={t.name}>
                  <Link
                    href={t.href}
                    className="hover:text-[#86b3b3] transition-colors"
                  >
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="lg:col-span-3 xl:col-span-2">
            <h4 className="font-['gravesend-sans',sans-serif] text-[11px] sm:text-[12px] font-[500] tracking-[0.18em] uppercase text-[#2b2b2b] mb-6">
              CONTACT
            </h4>
            <div className="space-y-1 font-['gravesend-sans',sans-serif] text-[14px] sm:text-[14.5px] leading-[1.6] text-[#555] font-[300]">
              <p>925 Broadbeck Dr</p>
              <p>Suites 200 and 225</p>
              <p>Newbury Park, CA 91320</p>
              <div className="pt-4 space-y-1">
                <p>
                  <a
                    href={`mailto:info@conejovalleycounseling.com`}
                    className="hover:text-[#86b3b3] transition-colors"
                  >
                    info@conejovalleycounseling.com
                  </a>
                </p>
                <p>
                  <a
                    href="tel:8052423120"
                    className="hover:text-[#86b3b3] transition-colors"
                  >
                    805.242.3120
                  </a>
                </p>
              </div>
              <p className="pt-4 text-[13.5px] text-[#555] italic leading-[1.6]">
                Serving Thousand Oaks, Westlake Village,<br />Camarillo, Moorpark, &amp; Simi Valley
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal & Attribution Bar */}
      <div className="w-full bg-[#86b3b3]">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 xl:px-24 py-2.5 flex flex-col md:flex-row items-center justify-center font-['gravesend-sans',sans-serif] text-[11px] font-[300] text-white">
          <div className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 tracking-wide text-center">
            <Link
              href="https://www.conejovalleycounseling.com/terms"
              className="hover:text-white/80 transition-colors"
            >
              Terms
            </Link>
            <span>|</span>
            <Link
              href="https://www.conejovalleycounseling.com/privacy-policy"
              className="hover:text-white/80 transition-colors"
            >
              Privacy Policy
            </Link>
            <span>|</span>
            <Link
              href="https://www.conejovalleycounseling.com/disclaimer"
              className="hover:text-white/80 transition-colors"
            >
              Disclaimer
            </Link>
            <span>|</span>
            <span>
              Website by{" "}
              <Link
                href="https://walkerstrategyco.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
              >
                Walker Strategy Co.
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
