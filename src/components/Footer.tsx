import React from "react";
import Link from "next/link";
import { siteConfig, navigationItems } from "@/data/homepageData";

export default function Footer() {
  return (
    <footer className="w-full bg-main-bg pt-16 sm:pt-20 lg:pt-24 xl:pt-28 pb-0">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20 pb-14 sm:pb-18 lg:pb-22 xl:pb-26">
        {/* Main Footer Flex Container */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-10 xl:gap-14">
          
          {/* Column 1: Brand & Introduction */}
          <div className="w-full lg:max-w-[500px] xl:max-w-[580px] flex-shrink-0 space-y-6 lg:-ml-2 xl:-ml-4">
            <Link href="/" className="inline-block group px-2">
              <span className="font-serif text-[24px] sm:text-[28px] lg:text-[32px] text-primary-text font-normal tracking-[-0.01em] group-hover:text-primary transition-colors">
                {siteConfig.name}
              </span>
            </Link>
            <p className="font-body text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] leading-[1.75] text-muted-text font-light max-w-[540px]">
              {siteConfig.practiceFormat}
            </p>
          </div>

          {/* Right Columns Container */}
          <div className="w-full lg:flex-1 flex justify-start lg:justify-end">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-9 lg:gap-10 xl:gap-14 w-full max-w-[600px]">
              
              {/* Column 2: Navigate */}
              <div className="flex flex-col">
                <h4 className="font-sans text-[12px] sm:text-[12.5px] lg:text-[13.5px] font-medium tracking-[0.18em] uppercase text-primary-text mb-5 sm:mb-6">
                  NAVIGATE
                </h4>
                <ul className="space-y-2.5 sm:space-y-3 font-body text-[15px] sm:text-[16px] lg:text-[16.5px] font-light text-muted-text leading-normal">
                  {navigationItems.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.href}
                        className="hover:text-primary transition-colors"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Contact */}
              <div className="flex flex-col">
                <h4 className="font-sans text-[12px] sm:text-[12.5px] lg:text-[13.5px] font-medium tracking-[0.18em] uppercase text-primary-text mb-5 sm:mb-6">
                  CONTACT
                </h4>
                <div className="font-body text-[15px] sm:text-[16px] lg:text-[16.5px] text-muted-text font-light">
                  <div className="space-y-1 leading-[1.6]">
                    <p>{siteConfig.address.street}</p>
                    <p>{siteConfig.address.cityStateZip}</p>
                  </div>
                  <div className="pt-5 sm:pt-6 space-y-1.5 leading-[1.6]">
                    <p>
                      <a
                        href="mailto:hello@example.com"
                        className="hover:text-primary transition-colors break-all sm:break-normal"
                      >
                        hello@example.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal & Attribution Bar */}
      <div className="w-full bg-primary">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 xl:px-24 py-4 flex flex-col md:flex-row items-center justify-center font-body text-[11.5px] font-light text-white">
          <div className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 tracking-wide text-center">
            <span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
