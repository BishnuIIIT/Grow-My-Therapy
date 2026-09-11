import React from "react";
import Image from "next/image";

export default function OfficeSection() {
  return (
    <section className="relative w-full bg-main-bg py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1440px] xl:max-w-[1540px] mx-auto px-6 sm:px-10 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Mobile Order: Text Top */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex flex-col justify-center">
            <h4 className="font-sans text-[12px] sm:text-[13px] font-medium tracking-[0.18em] uppercase text-primary-text mb-4 lg:mb-5">
              OUR OFFICE
            </h4>
            <h2 className="font-serif text-[36px] sm:text-[42px] lg:text-[48px] leading-[1.15] font-light text-primary-text tracking-[-0.01em] mb-6 lg:mb-8">
              A Grounded Space for Healing
            </h2>
            <p className="font-body text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] leading-[1.75] text-muted-text font-light mb-10">
              For clients who prefer to meet in person, Dr. Maya Reynolds offers therapy from her Santa Monica practice. The space is designed to support a warm and reflective approach to therapy, alongside the option of secure telehealth for clients throughout California.
            </p>

            {/* Mobile Only: Images (stacked naturally between copy and details) */}
            <div className="block lg:hidden w-full mb-10 space-y-6">
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-secondary-bg">
                <Image
                  src="/images/office-2.jpg"
                  alt="A bright, welcoming therapy office with exposed brick walls, a comfortable grey sofa, a white chair, and abundant natural light."
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-secondary-bg">
                <Image
                  src="/images/office-1.jpg"
                  alt="A warm, modern therapy room featuring curated bookshelves, a grey sofa, and a dark leather chair."
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col space-y-6 sm:space-y-8 border-t border-border-color pt-6 sm:pt-8">
              <div>
                <h4 className="font-sans text-[11px] sm:text-[12px] font-medium tracking-[0.15em] uppercase text-muted-text mb-2">
                  LOCATION
                </h4>
                <p className="font-body text-[15px] sm:text-[16px] text-primary-text font-normal">
                  Santa Monica, California
                </p>
              </div>
              <div>
                <h4 className="font-sans text-[11px] sm:text-[12px] font-medium tracking-[0.15em] uppercase text-muted-text mb-2">
                  PRACTICE FORMAT
                </h4>
                <p className="font-body text-[15px] sm:text-[16px] text-primary-text font-normal">
                  In-person therapy + secure telehealth throughout California
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Order: Editorial Overlapping Images Left */}
          <div className="hidden lg:block order-2 lg:order-1 lg:col-span-7 relative">
            <div className="relative w-full pt-[95%] xl:pt-[90%]">
              {/* Primary Image */}
              <div className="absolute top-0 left-0 w-[80%] aspect-[4/3] bg-secondary-bg overflow-hidden z-10">
                <Image
                  src="/images/office-2.jpg"
                  alt="A bright, welcoming therapy office with exposed brick walls, a comfortable grey sofa, a white chair, and abundant natural light."
                  fill
                  sizes="(max-width: 1440px) 50vw, 800px"
                  className="object-cover object-center"
                />
              </div>
              {/* Secondary Image - Overlapping Bottom Right */}
              <div className="absolute bottom-0 right-0 w-[50%] aspect-[4/5] bg-secondary-bg overflow-hidden z-20 border-[12px] border-main-bg">
                <Image
                  src="/images/office-1.jpg"
                  alt="A warm, modern therapy room featuring curated bookshelves, a grey sofa, and a dark leather chair."
                  fill
                  sizes="(max-width: 1440px) 30vw, 500px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
