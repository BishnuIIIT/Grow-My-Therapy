"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { navigationItems, siteConfig } from "@/data/homepageData";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({});
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileSubmenu = (title: string) => {
    setMobileExpanded((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 bg-[#f7f6f2] ${
        isScrolled ? "shadow-sm border-b border-[#e8e5df]" : "border-b border-transparent"
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-3 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex items-center justify-between h-[88px] lg:h-[105px]">
          {/* Logo (Shifted further left, size reduced by 20%) */}
          <Link href="/" className="flex items-center flex-shrink-0 group -ml-3 sm:-ml-5 lg:-ml-8 xl:-ml-10">
            <div className="relative w-[225px] sm:w-[275px] md:w-[325px] h-[66px] sm:h-[78px] lg:h-[90px]">
              <Image
                src={siteConfig.logoUrl}
                alt={siteConfig.name}
                fill
                priority
                sizes="(max-width: 640px) 225px, (max-width: 1024px) 275px, 325px"
                className="object-contain object-left transition-opacity group-hover:opacity-90"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-11" aria-label="Main Navigation">
            {navigationItems.map((item) => {
              const hasDropdown = item.dropdown && item.dropdown.length > 0;
              return (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => hasDropdown && setActiveDropdown(item.title)}
                  onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center text-[12.5px] xl:text-[13.5px] font-normal tracking-[0.16em] xl:tracking-[0.18em] uppercase text-[#4a4a4a] hover:text-[#86b3b3] transition-colors py-2"
                  >
                    <span>{item.title}</span>
                  </Link>

                  {/* Dropdown Menu */}
                  {hasDropdown && (
                    <div
                      className={`absolute top-full left-0 min-w-[240px] bg-white border border-[#e8e5df] shadow-lg rounded-sm py-2 z-50 transition-all duration-200 ${
                        activeDropdown === item.title
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-1"
                      }`}
                    >
                      {item.dropdown!.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="block px-4 py-2 text-[13px] text-[#333] hover:bg-[#f7f6f2] hover:text-[#86b3b3] transition-colors"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Header CTA Button - Smooth elongated oval, subtle 1px border, light tracked uppercase text */}
            <div className="pl-4 xl:pl-6">
              <Link
                href="https://www.conejovalleycounseling.com/contact"
                className="inline-flex items-center justify-center px-8 py-2.5 text-[12px] xl:text-[13px] font-normal tracking-[0.18em] uppercase text-[#4a4a4a] border border-[#2b2b2b]/50 rounded-full hover:border-[#86b3b3] hover:text-[#86b3b3] hover:bg-transparent transition-all duration-200"
                style={{ height: "44px", minWidth: "135px" }}
              >
                CONTACT
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 text-[#2b2b2b] hover:text-[#86b3b3] transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 top-[80px] bg-white z-40 lg:hidden overflow-y-auto transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="px-6 py-6 pb-20 space-y-4">
          {navigationItems.map((item) => {
            const hasDropdown = item.dropdown && item.dropdown.length > 0;
            const isExpanded = mobileExpanded[item.title];

            return (
              <div key={item.title} className="border-b border-[#f0eee9] pb-3">
                {hasDropdown ? (
                  <div>
                    <button
                      onClick={() => toggleMobileSubmenu(item.title)}
                      className="w-full flex items-center justify-between text-left text-[17px] font-serif text-[#2b2b2b] py-1"
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#888] transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isExpanded && (
                      <div className="mt-2 ml-3 pl-3 border-l border-[#ded6cc] space-y-2 py-1">
                        {item.dropdown!.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-[14px] text-[#555] hover:text-[#86b3b3] py-1"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-[17px] font-serif text-[#2b2b2b] hover:text-[#86b3b3] py-1"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            );
          })}

          {/* Mobile Drawer CTA */}
          <div className="pt-6">
            <Link
              href="https://www.conejovalleycounseling.com/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-3 px-6 bg-[#f7f6f2] text-[#2b2b2b] border border-[#2b2b2b] text-[13px] font-medium tracking-wider uppercase rounded-full hover:bg-black/5 transition-colors"
            >
              Contact
            </Link>
            <div className="mt-6 text-center text-[13px] text-[#777] space-y-1">
              <p>925 Broadbeck Dr, Newbury Park, CA</p>
              <p className="font-medium text-[#2b2b2b]">{siteConfig.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
