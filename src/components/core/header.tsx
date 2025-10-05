"use client";

import {
  ArrowRight,
  Facebook,
  Instagram,
  Phone,
  MapPin,
  Menu,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // shadcn/ui import

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex fixed z-[50] w-full bg-[#fffcf8]">
      <header className="container m-auto items-center py-3 px-4 sm:px-6 lg:px-14 rounded-full flex flex-wrap justify-between w-full">
        {/* Left Side - Logo + Nav */}
        <div className="flex items-center gap-4 lg:gap-16 flex-1">
          <div className="flex-shrink-0">
            <Link href={"/"}>
              <Image
                src="/logo.png"
                alt="logo"
                width={250}
                height={250}
                className="w-auto h-16"
              />
            </Link>
          </div>

          <nav className="hidden md:flex gap-6 items-center flex-1 justify-center lg:justify-start">
            <Link
              href="/"
              className="mont-semibold text-blue-950 text-sm md:text-base hover:underline"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="mont-regular text-sm md:text-base hover:underline"
            >
              About Us
            </Link>
            <Link
              href="/blogs"
              className="mont-regular text-sm md:text-base hover:underline"
            >
              News & Research
            </Link>
            <Link
              href="/contact-us"
              className="mont-regular text-sm md:text-base hover:underline"
            >
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Right Side - Socials + Location + Book Now + Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-5 flex-shrink-0">
          {/* Social Media Icons - Hidden on very small screens */}
          <div className="hidden sm:flex gap-2 sm:gap-3 items-center">
            <Link href="https://facebook.com" target="_blank">
              <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-blue-900 hover:scale-110 transition" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-blue-900 hover:scale-110 transition" />
            </Link>
            <a href="tel:+911234567890">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-900 hover:scale-110 transition" />
            </a>
          </div>

          {/* CTA Button */}
          <Link
            href="/"
            className="mont-semibold text-xs sm:text-sm items-center bg-blue-950 py-3 flex gap-2 px-5 sm:px-6 text-white rounded-full hover:bg-blue-900 transition whitespace-nowrap"
          >
            Book Now <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </Link>

          {/* Location Dropdown (shadcn) - Hidden on mobile */}
          <div className="hidden sm:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition text-blue-950 mont-regular text-sm">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-blue-900" />
                  <span className="hidden sm:inline">Location</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-32 rounded-lg shadow-lg"
              >
                <DropdownMenuItem className="cursor-pointer text-sm">
                  🇮🇳 India
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer text-sm">
                  🇺🇸 USA
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={toggleMobileMenu} className="md:hidden p-1">
            <Menu className="w-6 h-6 text-blue-950" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#fffcf8] shadow-xl border-t border-gray-200 flex flex-col items-stretch gap-0 py-4 px-4">
            <div className="flex justify-between items-center pb-4 border-b border-gray-200">
              <h3 className="mont-semibold text-blue-950 text-lg">Menu</h3>
              <button onClick={toggleMobileMenu} className="p-1">
                <svg
                  className="w-6 h-6 text-blue-950"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-4 items-center pt-4">
              <Link
                href="/"
                className="mont-semibold text-blue-950 text-base hover:underline w-full text-center py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className="mont-regular text-base hover:underline w-full text-center py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/blogs"
                className="mont-regular text-base hover:underline w-full text-center py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                News & Research
              </Link>
              <Link
                href="/contact-us"
                className="mont-regular text-base hover:underline w-full text-center py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
