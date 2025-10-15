"use client";

import {
  ArrowRight,
  ChevronDown,
  Facebook,
  Instagram,
  Menu,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client";
import { cn } from "@/lib/utils";

// Shadcn/ui Imports for Desktop Navigation
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// Service interface definition
export interface Service {
  _id: string;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  alt: string;
  color: string;
}

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [services, setServices] = useState<Service[]>([]);
  const [error, setError] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch services from Sanity
  useEffect(() => {
    const servicesQuery = groq`*[_type == "service"]{
        _id,
        title,
        "slug": slug.current,
        description,
        "imageUrl": image.asset->url, 
        "alt": image.alt,
        color
      }`;

    const fetchServices = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await client.fetch(servicesQuery);
        setServices(data);
      } catch (err) {
        setError(err);
        console.error("Failed to fetch services:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Hide header on Sanity Studio pages
  const hiddenPaths = [/^\/Studio(\/.*)?$/];

  if (hiddenPaths.some((pattern) => pattern.test(pathname))) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 bg-white z-50 w-full transition-all duration-300">
      <header className="container mx-auto flex items-center justify-between py-2 px-4 sm:px-6 lg:px-14">
        {/* Left Side - Logo */}
        <div className="flex-shrink-0">
          <Link href={"/"}>
            <Image
              src="/logo.png"
              alt="The Physio Crew Logo"
              width={220}
              height={220}
              className="h-14 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Center - Desktop Navigation */}
        <div className="hidden flex-1 justify-center md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "font-brandon-medium"
                    )}
                  >
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-brandon-medium">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {services.map((service) => (
                      <ListItem
                        key={service._id}
                        title={service.title}
                        href={`/services/${service.slug}`}
                      >
                        {service.description.substring(0, 80)}...
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about-us" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "font-brandon-medium"
                    )}
                  >
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blogs" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "font-brandon-medium"
                    )}
                  >
                    News & Research
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact-us" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "font-brandon-medium"
                    )}
                  >
                    Contact Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Side - Socials, CTA, Mobile Toggle */}
        <div className="flex flex-shrink-0 items-center gap-2 sm:gap-4">
          <div className="hidden items-center gap-2 sm:flex sm:gap-3">
            <Link href="#" aria-label="Facebook Page">
              <Facebook className="h-5 w-5 text-blue-950 hover:text-blue-700 transition" />
            </Link>
            <Link href="#" aria-label="Instagram Page">
              <Instagram className="h-5 w-5 text-blue-950 hover:text-blue-700 transition" />
            </Link>
          </div>
          <Link
            href="https://the-physio-crew-tullamarine-pty-ltd.au3.cliniko.com/bookings"
            target="_blank"
            className="font-brandon-medium flex items-center gap-2 whitespace-nowrap rounded-full bg-blue-950 py-3 px-5 text-xs text-white transition hover:bg-blue-900 sm:px-6 sm:text-sm"
          >
            Book Now <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
          </Link>
          <button onClick={toggleMobileMenu} className="p-1 md:hidden">
            <Menu className="h-6 w-6 text-blue-950" />
          </button>
        </div>

        {/* --- FULLY IMPLEMENTED MOBILE MENU --- */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 flex w-full flex-col items-stretch gap-0 border-t border-gray-200 bg-white py-4 px-4 shadow-xl md:hidden">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="font-brandon-medium block rounded-md px-4 py-3 text-base text-gray-700 hover:bg-gray-100"
            >
              Home
            </Link>

            {/* Collapsible Services Menu */}
            <div>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="font-brandon-medium flex w-full items-center justify-between rounded-md px-4 py-3 text-base text-gray-700 hover:bg-gray-100"
              >
                Services
                <ChevronDown
                  className={cn(
                    "h-5 w-5 transition-transform",
                    isMobileServicesOpen && "rotate-180"
                  )}
                />
              </button>
              {isMobileServicesOpen && (
                <div className="flex flex-col items-stretch pl-8 pt-2 pb-1">
                  {services.map((service) => (
                    <Link
                      key={service._id}
                      href={`/services/${service.slug}`}
                      onClick={closeMobileMenu}
                      className="font-brandon block rounded-md px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about-us"
              onClick={closeMobileMenu}
              className="font-brandon-medium block rounded-md px-4 py-3 text-base text-gray-700 hover:bg-gray-100"
            >
              About Us
            </Link>
            <Link
              href="/blogs"
              onClick={closeMobileMenu}
              className="font-brandon-medium block rounded-md px-4 py-3 text-base text-gray-700 hover:bg-gray-100"
            >
              News & Research
            </Link>
            <Link
              href="/contact-us"
              onClick={closeMobileMenu}
              className="font-brandon-medium block rounded-md px-4 py-3 text-base text-gray-700 hover:bg-gray-100"
            >
              Contact Us
            </Link>

            {/* Social Links for Mobile */}
            <div className="mt-4 flex items-center justify-center gap-6 border-t pt-4">
              <Link
                href="#"
                aria-label="Facebook Page"
                onClick={closeMobileMenu}
              >
                <Facebook className="h-6 w-6 text-blue-950" />
              </Link>
              <Link
                href="#"
                aria-label="Instagram Page"
                onClick={closeMobileMenu}
              >
                <Instagram className="h-6 w-6 text-blue-950" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

// Custom ListItem component for the NavigationMenu (updated with fonts)
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="font-josefin-semibold text-sm leading-none text-blue-950">
            {title}
          </div>
          <p className="font-brandon line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;
