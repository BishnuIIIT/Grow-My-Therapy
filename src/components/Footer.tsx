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
    <footer className="w-full bg-white pt-16 sm:pt-20 lg:pt-24 xl:pt-28 pb-0">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20 pb-14 sm:pb-18 lg:pb-22 xl:pb-26">
        {/* Main Footer Flex Container (Left block moved left, Right block moved right) */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-10 xl:gap-14">
          
          {/* Column 1: Brand & Introduction */}
          <div className="w-full lg:max-w-[500px] xl:max-w-[580px] flex-shrink-0 space-y-6 lg:-ml-2 xl:-ml-4">
            <Link href="/" className="inline-block group">
              <div className="relative w-[280px] sm:w-[320px] md:w-[360px] h-[80px] sm:h-[90px] md:h-[100px]">
                <Image
                  src={siteConfig.logoUrl}
                  alt={siteConfig.name}
                  fill
                  sizes="380px"
                  className="object-contain object-left transition-opacity group-hover:opacity-90"
                />
              </div>
            </Link>
            <p className="font-body text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] leading-[1.75] text-[#555] font-light max-w-[540px]">
              We want to make getting started simple. You&apos;re welcome to come into our office in Newbury Park or schedule virtual appointments from anywhere in CA — whatever works best for you.
            </p>
          </div>

          {/* Right Columns Container (Navigate, Our Team, Contact) */}
          <div className="w-full lg:flex-1 flex justify-start lg:justify-end">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-9 lg:gap-10 xl:gap-14 w-full max-w-[900px]">
              
              {/* Column 2: Navigate */}
              <div className="flex flex-col">
                <h4 className="font-sans text-[12px] sm:text-[12.5px] lg:text-[13.5px] font-medium tracking-[0.18em] uppercase text-[#2b2b2b] mb-5 sm:mb-6">
                  NAVIGATE
                </h4>
                <ul className="space-y-2.5 sm:space-y-3 font-body text-[15px] sm:text-[16px] lg:text-[16.5px] font-light text-[#555] leading-normal">
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
              <div className="flex flex-col">
                <h4 className="font-sans text-[12px] sm:text-[12.5px] lg:text-[13.5px] font-medium tracking-[0.18em] uppercase text-[#2b2b2b] mb-5 sm:mb-6">
                  OUR TEAM
                </h4>
                <ul className="space-y-2.5 sm:space-y-3 font-body text-[15px] sm:text-[16px] lg:text-[16.5px] font-light text-[#555] leading-normal">
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
              <div className="flex flex-col">
                <h4 className="font-sans text-[12px] sm:text-[12.5px] lg:text-[13.5px] font-medium tracking-[0.18em] uppercase text-[#2b2b2b] mb-5 sm:mb-6">
                  CONTACT
                </h4>
                <div className="font-body text-[15px] sm:text-[16px] lg:text-[16.5px] text-[#555] font-light">
                  <div className="space-y-1 leading-[1.6]">
                    <p>925 Broadbeck Dr</p>
                    <p>Suites 200 and 225</p>
                    <p>Newbury Park, CA 91320</p>
                  </div>
                  <div className="pt-5 sm:pt-6 space-y-1.5 leading-[1.6]">
                    <p>
                      <a
                        href="mailto:info@conejovalleycounseling.com"
                        className="hover:text-[#86b3b3] transition-colors break-all sm:break-normal"
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
                  <p className="pt-5 sm:pt-6 text-[14px] sm:text-[14.5px] lg:text-[15px] text-[#555] italic leading-[1.6]">
                    Serving Thousand Oaks, Westlake Village,<br className="hidden sm:inline" />
                    Camarillo, Moorpark, &amp; Simi Valley
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal & Attribution Bar */}
      <div className="w-full bg-[#86b3b3]">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 xl:px-24 py-3 flex flex-col md:flex-row items-center justify-center font-body text-[11.5px] font-light text-white">
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
