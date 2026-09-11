import React from "react";
import { siteConfig } from "@/data/homepageData";
import Link from "next/link";

export default function ModalitiesGrid() {
  return (
    <section id="contact" className="w-full bg-main-bg pt-20 sm:pt-28 pb-20 sm:pb-32 overflow-hidden border-t border-border">
      <div className="w-full max-w-[1440px] xl:max-w-[1540px] mx-auto px-6 sm:px-10 lg:px-16 text-center">
        
        {/* Label */}
        <p className="font-sans text-[13px] sm:text-[14px] font-medium tracking-[0.2em] uppercase text-muted-text mb-6">
          THE DETAILS
        </p>

        {/* Heading */}
        <h2 className="font-serif text-[42px] sm:text-[50px] lg:text-[56px] leading-[1.15] font-light text-primary-text tracking-[-0.01em] mb-12 lg:mb-16">
          Connect
        </h2>

        {/* Info Grid */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 md:gap-24 lg:gap-32">
          
          {/* Location */}
          <div className="flex flex-col items-center">
            <h4 className="font-sans text-[14px] font-medium uppercase tracking-[0.16em] text-primary-text mb-4">
              Location
            </h4>
            <p className="font-body text-[16px] lg:text-[17px] leading-[1.7] text-muted-text font-light text-center">
              {siteConfig.address.street}<br />
              {siteConfig.address.cityStateZip}
            </p>
          </div>

          {/* Practice Format */}
          <div className="flex flex-col items-center max-w-[320px]">
            <h4 className="font-sans text-[14px] font-medium uppercase tracking-[0.16em] text-primary-text mb-4">
              Practice Format
            </h4>
            <p className="font-body text-[16px] lg:text-[17px] leading-[1.7] text-muted-text font-light text-center">
              {siteConfig.practiceFormat}
            </p>
          </div>

        </div>

        {/* Contact CTA */}
        <div className="mt-16">
          <Link
            href={`mailto:hello@example.com`}
            className="inline-block font-body text-[13px] lg:text-[13.5px] font-normal tracking-[0.14em] uppercase text-primary-text border-b border-primary-text pb-0.5 hover:text-primary hover:border-primary transition-colors"
          >
            EMAIL DR. REYNOLDS
          </Link>
        </div>

      </div>
    </section>
  );
}
