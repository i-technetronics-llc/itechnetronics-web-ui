// components/Navbar.tsx
"use client"; 

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// Custom Chevron Down SVG Icon
const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Our Services",
      dropdown: [
        { name: "Consulting", href: "/services/consulting" },
        { name: "AI Solutions", href: "/services/ai-solutions" },
        { name: "Cloud Services", href: "/services/cloud" },
      ],
    },
    {
      name: "Our Products",
      dropdown: [
        { name: "RotaWise", href: "/products/rotawise" },
        { name: "Antfi", href: "/products/antfi" },
        { name: "AntBuilder", href: "/products/antbuilder" },
        { name: "AntConfig", href: "/products/antconfig" },
      ],
    },
    {
      name: "Contact Us",
      dropdown: [
        { name: "Support", href: "/contact/support" },
        { name: "Sales", href: "/contact/sales" },
      ],
    },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                className="h-14 w-auto"
                src="/assets/logo.png"
                alt="Itechnetronics Technologies"
                width={100}
                height={100}
              />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex md:items-center space-x-4">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="relative group">
                  <button className="flex items-center gap-1 text-gray-800 font-medium hover:text-primary transition-colors">
                    {link.name} 
                    <ChevronDownIcon className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 first:rounded-t-md last:rounded-b-md transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-800 font-medium hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              )
            )}

            {/* Client Support Button */}
            <Link
              href="/support"
              className="ml-4 px-3 py-2 bg-gray-100 text-gray-800 rounded hover:bg-gray-200 transition-colors"
            >
              Client Support →
            </Link>

            {/* Contact Us Button */}
            <Link
              href="/contact"
              className="ml-2 px-4 py-2 bg-primary text-white rounded hover:bg-blue-900 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 hover:text-primary focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 ">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name} className="border-b border-gray-100">
                <details className="group">
                  <summary className="px-4 py-3 cursor-pointer text-gray-800 font-medium flex justify-between items-center hover:bg-gray-50 transition-colors">
                    {link.name}
                    <ChevronDownIcon className="w-4 h-4 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="pl-6 pb-2 bg-gray-50">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block py-2 text-gray-700 hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </details>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-gray-800 font-medium border-b border-gray-100 hover:bg-gray-50 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            )
          )}

          {/* Mobile Buttons */}
          <div className="px-4 py-3 flex flex-col space-y-2 bg-gray-50">
            <Link
              href="/support"
              className="px-3 py-2 bg-gray-100 text-gray-800 rounded hover:bg-gray-200 text-center transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Client Support →
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 bg-primary text-white rounded hover:bg-blue-900 text-center transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;