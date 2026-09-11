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
    <footer className="w-full bg-white pt-28 sm:pt-36 lg:pt-44 xl:pt-52 pb-0">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20 pb-24 sm:pb-32 lg:pb-40 xl:pb-44">
        {/* Main Footer Flex Container (Left block moved left, Right block moved right) */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-14 lg:gap-12 xl:gap-16">
          
          {/* Column 1: Brand & Introduction (Moved a little left, font size increased 1.5x) */}
          <div className="w-full lg:max-w-[540px] xl:max-w-[620px] flex-shrink-0 space-y-8 lg:-ml-2 xl:-ml-4">
            <Link href="/" className="inline-block group">
              <div className="relative w-[300px] sm:w-[350px] md:w-[390px] h-[85px] sm:h-[100px] md:h-[110px]">
                <Image
                  src={siteConfig.logoUrl}
                  alt={siteConfig.name}
                  fill
                  sizes="400px"
                  className="object-contain object-left transition-opacity group-hover:opacity-90"
                />
              </div>
            </Link>
            <p className="font-body text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.75] text-[#555] font-light max-w-[580px]">
              We want to make getting started simple. You&apos;re welcome to come into our office in Newbury Park or schedule virtual appointments from anywhere in CA — whatever works best for you.
            </p>
          </div>

          {/* Right Columns Container (Moved a little right, text size increased 1.4x) */}
          <div className="w-full lg:flex-1 flex justify-start lg:justify-end">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-10 lg:gap-12 xl:gap-16 w-full max-w-[960px]">
              
              {/* Column 2: Navigate */}
              <div className="flex flex-col">
                <h4 className="font-sans text-[14px] sm:text-[15px] lg:text-[16.5px] font-medium tracking-[0.2em] uppercase text-[#2b2b2b] mb-6 sm:mb-7">
                  NAVIGATE
                </h4>
                <ul className="space-y-3.5 sm:space-y-4 font-body text-[18px] sm:text-[19.5px] lg:text-[21px] font-light text-[#555] leading-normal">
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
                <h4 className="font-sans text-[14px] sm:text-[15px] lg:text-[16.5px] font-medium tracking-[0.2em] uppercase text-[#2b2b2b] mb-6 sm:mb-7">
                  OUR TEAM
                </h4>
                <ul className="space-y-3.5 sm:space-y-4 font-body text-[18px] sm:text-[19.5px] lg:text-[21px] font-light text-[#555] leading-normal">
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
                <h4 className="font-sans text-[14px] sm:text-[15px] lg:text-[16.5px] font-medium tracking-[0.2em] uppercase text-[#2b2b2b] mb-6 sm:mb-7">
                  CONTACT
                </h4>
                <div className="font-body text-[18px] sm:text-[19.5px] lg:text-[21px] text-[#555] font-light">
                  <div className="space-y-1.5 leading-[1.6]">
                    <p>925 Broadbeck Dr</p>
                    <p>Suites 200 and 225</p>
                    <p>Newbury Park, CA 91320</p>
                  </div>
                  <div className="pt-6 sm:pt-7 space-y-2 leading-[1.6]">
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
                  <p className="pt-6 sm:pt-7 text-[16px] sm:text-[17.5px] lg:text-[19px] text-[#555] italic leading-[1.6]">
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
