import React from "react";
import Image from "next/image";

export default function SpecialtiesPills() {
  const pills = [
    "Family conflict",
    "Anxiety & stress",
    "Life transitions",
    "Couples communication",
    "Trauma recovery",
    "Parenting challenges",
    "…and more.",
  ];

  return (
    <section className="w-full bg-white py-14 md:py-20 border-b border-[#ece9e3] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
          {/* Decorative Reference Graphic */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 opacity-80">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/27b4f80c-ca73-4d1f-824e-ec29a2211142/Jennifer+A+-+Images+%282%29.png"
              alt="Decorative botanical accent"
              fill
              className="object-contain"
            />
          </div>

          {/* Interactive Pills List */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-3xl">
            {pills.map((item, idx) => (
              <span
                key={idx}
                className={`px-5 py-2.5 rounded-full text-[14px] sm:text-[15px] font-serif transition-colors duration-200 border ${
                  idx === pills.length - 1
                    ? "bg-[#ded6cc]/40 border-[#ded6cc] text-[#2b2b2b] italic font-semibold"
                    : "bg-[#f7f6f2] border-[#e8e5df] text-[#444] hover:border-[#86b3b3] hover:text-[#2b2b2b]"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
