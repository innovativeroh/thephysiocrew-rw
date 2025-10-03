import Image from 'next/image';
import type { FC } from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import Logo from '../../../public/logo.png';

const footerNav = [
  { name: 'Locations', href: '/#' },
  { name: 'About Us', href: '/#' },
  { name: 'Our Services', href: '/#' },
  { name: 'News & Research', href: '/#' },
  { name: 'Contact Us', href: '/#' },
];

const Footer: FC = () => {
  return (
    <footer className="bg-gray-50 text-gray-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <Image src={Logo} alt="Logo" width={160} height={50} className="h-20 w-auto" />
          </div>
          <nav className="flex flex-wrap justify-center space-x-6">
            {footerNav.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base alan-medium hover:text-gray-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm alan-regular">
            <p>© {new Date().getFullYear()} The Physio Crew</p>
            <p>Registered address, or clinics addresses etc.</p>
          </div>

          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-gray-900">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-900">
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
