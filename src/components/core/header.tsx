"use client";

import { ArrowRight, Facebook, Instagram, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu"; // shadcn/ui import

const Header = () => {
  return (
    <div className="flex fixed z-[1] w-full bg-[#fffcf8] shadow-xl">
      <header className="container m-auto items-center p-3 px-14 rounded-full flex flex-wrap justify-between">
        {/* Left Side - Logo + Nav */}
        <div className="flex flex-wrap gap-16">
          <div>
            <Image
              src="/logo.png"
              alt="logo"
              width={200}
              height={200}
              className="w-[60]"
            />
          </div>

          <nav className="gap-6 flex items-center">
            <Link href="/" className="mont-semibold text-blue-950 text-md">
              Home
            </Link>
            <Link href="/" className="mont-regular">
              About Us
            </Link>
            <Link href="/" className="mont-regular">
              News & Research
            </Link>
            <Link href="/" className="mont-regular">
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Right Side - Socials + Location + Book Now */}
        <div className="flex items-center gap-5">
          {/* Social Media Icons */}
          <div className="flex gap-3 items-center">
            <Link href="https://facebook.com" target="_blank">
              <Facebook className="w-5 h-5 text-blue-900 hover:scale-110 transition" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <Instagram className="w-5 h-5 text-blue-900 hover:scale-110 transition" />
            </Link>
            <a href="tel:+911234567890">
              <Phone className="w-5 h-5 text-blue-900 hover:scale-110 transition" />
            </a>
          </div>

          {/* Location Dropdown (shadcn) */}

          {/* CTA Button */}
          <Link
            href="/"
            className="mont-semibold text-sm items-center bg-blue-950 py-2 flex ml-4 flex-wrap gap-2 px-6 text-white rounded-full hover:bg-blue-900 transition"
          >
            Book Now <ArrowRight />
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition text-blue-950 mont-regular">
                <MapPin className="w-4 h-4 text-blue-900" />
                <span>Location</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-32 rounded-lg shadow-lg"
            >
              <DropdownMenuItem className="cursor-pointer">
                🇮🇳 India
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                🇺🇸 USA
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </div>
  );
};

export default Header;
