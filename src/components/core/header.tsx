"use client";

import {
  ArrowRight,
  Facebook,
  Instagram,
  Menu,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client";

// Shadcn/ui Imports
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"; // New imports
import { cn } from "@/lib/utils"; // Import cn utility

// Keep the Service interface definition
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

  const servicesQuery = groq`*[_type == "service"]{
        _id,
        title,
        "slug": slug.current,
        description,
        "imageUrl": image.asset->url, 
        "alt": image.alt,             
        color
      }`;

  useEffect(() => {
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
  }, [servicesQuery]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const hiddenPaths = [/^\/Studio(\/.*)?$/];
  if (hiddenPaths.some((pattern) => pattern.test(pathname))) {
    return null;
  }

  return (
    <div className="flex fixed z-[50] w-full bg-[#fffcf8] border-b border-gray-200/80">
      <header className="container m-auto items-center py-2 px-4 sm:px-6 lg:px-14 flex justify-between w-full">
        {/* Left Side - Logo */}
        <div className="flex-shrink-0">
          <Link href={"/"}>
            <Image
              src="/logo.png"
              alt="logo"
              width={220}
              height={220}
              className="w-auto h-14"
            />
          </Link>
        </div>

        {/* Center - Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
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
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/blogs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    News & Research
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact-us" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Side - Socials, CTA, Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
          <div className="hidden sm:flex gap-2 sm:gap-3 items-center">
            {/* Social links... */}
          </div>

          <Link
            href="https://the-physio-crew-tullamarine-pty-ltd.au3.cliniko.com/bookings"
            target="_blank"
            className="mont-semibold text-xs sm:text-sm items-center bg-blue-950 py-3 flex gap-2 px-5 sm:px-6 text-white rounded-full hover:bg-blue-900 transition whitespace-nowrap"
          >
            Book Now <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button onClick={toggleMobileMenu} className="md:hidden p-1">
            <Menu className="w-6 h-6 text-blue-950" />
          </button>
        </div>

        {/* --- MOBILE MENU (Unchanged) --- */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#fffcf8] shadow-xl border-t border-gray-200 flex flex-col items-stretch gap-0 py-4 px-4">
            {/* Mobile menu content... same as before */}
          </div>
        )}
      </header>
    </div>
  );
};

// Custom ListItem component for the NavigationMenu
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
          <div className="text-sm font-medium leading-none text-blue-950">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;
