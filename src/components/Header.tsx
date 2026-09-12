"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig, navigationItems } from "@/data/homepageData";
import { Menu, X, ChevronDown } from "lucide-react";

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
      className={`sticky top-0 z-50 w-full transition-all duration-300 bg-main-bg ${
        isScrolled ? "shadow-sm border-b border-border" : "border-b border-transparent"
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-3 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex items-center justify-between h-[88px] lg:h-[105px]">
          {/* Logo (Text for Dr. Maya Reynolds) */}
          <Link href="/" className="flex items-center flex-shrink-0 group -ml-3 sm:-ml-5 lg:-ml-8 xl:-ml-10 px-4">
            <span className="font-serif text-[20px] sm:text-[24px] lg:text-[28px] text-primary-text font-normal tracking-[-0.01em] group-hover:text-primary transition-colors">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-11" aria-label="Main Navigation">
            {navigationItems.map((item) => {
              const hasDropdown = (item as any).dropdown && (item as any).dropdown.length > 0;
              return (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => hasDropdown && setActiveDropdown(item.title)}
                  onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center text-[12.5px] xl:text-[13.5px] font-normal tracking-[0.16em] xl:tracking-[0.18em] uppercase text-primary-text hover:text-primary transition-colors py-2"
                  >
                    <span>{item.title}</span>
                  </Link>
                </div>
              );
            })}

            {/* Header CTA Button */}
            <div className="pl-4 xl:pl-6">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center font-body text-[11px] xl:text-[12px] font-normal tracking-[0.12em] uppercase text-primary-text border border-primary-text hover:border-primary hover:text-primary hover:bg-transparent transition-all duration-200 w-[190px] xl:w-[200px] h-[46px] xl:h-[48px]"
                style={{ borderRadius: "100%" }}
              >
                BOOK CONSULTATION
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 text-primary-text hover:text-primary transition-colors focus:outline-none"
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
        className={`fixed inset-0 top-[80px] bg-main-bg z-40 lg:hidden overflow-y-auto transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="px-6 py-6 pb-20 space-y-4">
          {navigationItems.map((item) => {
            return (
              <div key={item.title} className="border-b border-border pb-3">
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-[17px] font-serif text-primary-text hover:text-primary py-1"
                >
                  {item.title}
                </Link>
              </div>
            );
          })}

          {/* Mobile Drawer CTA */}
          <div className="pt-6">
            <div className="flex justify-center">
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center font-body font-normal tracking-[0.12em] uppercase text-primary-text border border-primary-text hover:bg-black/5 transition-colors text-[11.5px] sm:text-[12px] w-[200px] sm:w-[210px] h-[48px] sm:h-[50px]"
                style={{ borderRadius: "100%" }}
              >
                BOOK CONSULTATION
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
