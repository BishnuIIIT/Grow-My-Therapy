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
    <footer className="w-full bg-[#f7f6f2] pt-16 md:pt-20 pb-0">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-10 border-b border-[#dfdbd1]">
          {/* Brand & Introduction (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block group">
              <div className="relative w-[210px] sm:w-[230px] h-[60px]">
                <Image
                  src={siteConfig.logoUrl}
                  alt={siteConfig.name}
                  fill
                  sizes="250px"
                  className="object-contain object-left transition-opacity group-hover:opacity-90"
                />
              </div>
            </Link>
            <p className="font-['gravesend-sans',sans-serif] text-[13.5px] leading-[1.8] text-[#555] font-[300] max-w-sm">
              We want to make getting started simple. You’re welcome to come into our office in Newbury Park or schedule virtual appointments from anywhere in CA—whatever works best for you.
            </p>
          </div>

          {/* Column 1: Navigate (2 Columns) */}
          <div className="lg:col-span-2">
            <h4 className="font-['beaufort-pro',serif] text-[20px] font-normal text-[#2b2b2b] mb-4 italic">
              Navigate
            </h4>
            <ul className="space-y-2 font-['gravesend-sans',sans-serif] text-[13.5px] font-[300] text-[#555]">
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

          {/* Column 2: Contact (3 Columns) */}
          <div className="lg:col-span-3">
            <h4 className="font-['beaufort-pro',serif] text-[20px] font-normal text-[#2b2b2b] mb-4 italic">
              Contact
            </h4>
            <div className="space-y-1 font-['gravesend-sans',sans-serif] text-[13.5px] leading-[1.6] text-[#555] font-[300]">
              <p>{siteConfig.address.street}</p>
              <p>{siteConfig.address.suites}</p>
              <p>{siteConfig.address.cityStateZip}</p>
              <div className="pt-3 space-y-1">
                <p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-[#86b3b3] transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </p>
                <p>
                  <a
                    href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`}
                    className="font-[500] text-[#2b2b2b] hover:text-[#86b3b3] transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </p>
              </div>
              <p className="pt-3 text-[13px] text-[#777] italic">
                {siteConfig.serviceAreas}
              </p>
            </div>
          </div>

          {/* Column 3: Our Team (3 Columns) */}
          <div className="lg:col-span-3">
            <h4 className="font-['beaufort-pro',serif] text-[20px] font-normal text-[#2b2b2b] mb-4 italic">
              Our Team
            </h4>
            <ul className="grid grid-cols-1 gap-y-2 font-['gravesend-sans',sans-serif] text-[13.5px] font-[300] text-[#555]">
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
        </div>
      </div>

      <div className="h-10 w-full bg-[#f7f6f2]"></div>

      {/* Bottom Legal & Attribution Bar */}
      <div className="w-full bg-[#86b3b3]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 py-3 flex flex-col sm:flex-row items-center justify-center font-['gravesend-sans',sans-serif] text-[11px] font-[300] text-white">
          <div className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 tracking-wide">
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
