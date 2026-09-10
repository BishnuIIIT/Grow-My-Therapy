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
    <footer className="w-full bg-[#f7f6f2] border-t border-[#e8e5df] pt-16 md:pt-24 pb-12">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-14 pb-16 border-b border-[#e8e5df]">
          {/* Brand & Introduction (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block group">
              <div className="relative w-[220px] sm:w-[250px] h-[65px]">
                <Image
                  src={siteConfig.logoUrl}
                  alt={siteConfig.name}
                  fill
                  sizes="250px"
                  className="object-contain object-left transition-opacity group-hover:opacity-90"
                />
              </div>
            </Link>
            <p className="font-sans text-[14px] sm:text-[15px] leading-[1.8] text-[#555] font-light max-w-sm">
              We want to make getting started simple. You’re welcome to come into our office in Newbury Park or schedule virtual appointments from anywhere in CA—whatever works best for you.
            </p>
          </div>

          {/* Column 1: Navigate (2 Columns) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-[18px] sm:text-[20px] font-bold text-[#2b2b2b] mb-5 italic">
              Navigate
            </h4>
            <ul className="space-y-3 font-sans text-[14px] text-[#555]">
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
            <h4 className="font-serif text-[18px] sm:text-[20px] font-bold text-[#2b2b2b] mb-5 italic">
              Contact
            </h4>
            <div className="space-y-2 font-sans text-[14px] leading-[1.6] text-[#555]">
              <p>{siteConfig.address.street}</p>
              <p>{siteConfig.address.suites}</p>
              <p>{siteConfig.address.cityStateZip}</p>
              <div className="pt-2">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="block hover:text-[#86b3b3] transition-colors"
                >
                  {siteConfig.email}
                </a>
                <a
                  href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`}
                  className="block font-medium text-[#2b2b2b] hover:text-[#86b3b3] transition-colors pt-1"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <p className="pt-3 text-[13px] text-[#777] italic">
                {siteConfig.serviceAreas}
              </p>
            </div>
          </div>

          {/* Column 3: Our Team (3 Columns) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-[18px] sm:text-[20px] font-bold text-[#2b2b2b] mb-5 italic">
              Our Team
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-y-2 font-sans text-[13px] text-[#555]">
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

        {/* Bottom Legal & Attribution Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[12px] text-[#777] space-y-4 sm:space-y-0">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1">
            <Link
              href="https://www.conejovalleycounseling.com/terms"
              className="hover:text-[#2b2b2b] transition-colors"
            >
              Terms
            </Link>
            <span>|</span>
            <Link
              href="https://www.conejovalleycounseling.com/privacy-policy"
              className="hover:text-[#2b2b2b] transition-colors"
            >
              Privacy Policy
            </Link>
            <span>|</span>
            <Link
              href="https://www.conejovalleycounseling.com/disclaimer"
              className="hover:text-[#2b2b2b] transition-colors"
            >
              Disclaimer
            </Link>
          </div>
          <div className="text-center sm:text-right">
            <span>Website by </span>
            <Link
              href="https://walkerstrategyco.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2b2b2b] underline underline-offset-2 transition-colors"
            >
              Walker Strategy Co.
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
