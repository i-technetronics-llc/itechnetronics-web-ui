'use client';

import Image from 'next/image';
import Link from 'next/link';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-muted-bg to-background dark:from-slate-900 dark:to-slate-950 border-t border-border dark:border-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Logo & Company Info - Full Width */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/assets/logo.PNG"
              alt="Company Logo"
              width={100}
              height={50}
              className="w-[200px]"
            />
            {/* <h3 className="text-2xl font-bold text-primary">iTechnetronics</h3> */}
          </div>
          <p className="text-sm text-muted-fg dark:text-slate-400 leading-relaxed max-w-md">
            Innovative tech solutions for modern businesses. We deliver excellence in every project.
          </p>
        </div>

        {/* Main Content Grid - 5 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Products */}
          <div>
            <h4 className="text-base font-semibold text-foreground dark:text-white mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-fg dark:text-slate-400 hover:text-primary transition-colors">
                  Web Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-fg dark:text-slate-400 hover:text-primary transition-colors">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-fg dark:text-slate-400 hover:text-primary transition-colors">
                  Cloud Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-fg dark:text-slate-400 hover:text-primary transition-colors">
                  AI & Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-semibold text-foreground dark:text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-fg dark:text-slate-400 hover:text-primary transition-colors">
                  Consulting
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-fg dark:text-slate-400 hover:text-primary transition-colors">
                  Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-fg dark:text-slate-400 hover:text-primary transition-colors">
                  Support & Maintenance
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-fg dark:text-slate-400 hover:text-primary transition-colors">
                  Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-base font-semibold text-foreground dark:text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-fg dark:text-slate-400 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-fg dark:text-slate-400 hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-fg dark:text-slate-400 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-fg dark:text-slate-400 hover:text-primary transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-base font-semibold text-foreground dark:text-white mb-4 flex items-center gap-2">
              <MapPinIcon className="w-5 h-5 text-secondary flex-shrink-0" />
              Locations
            </h4>
            <div className="space-y-6">
              {/* Abuja */}
              <div>
                <p className="text-sm text-muted-fg dark:text-slate-400 leading-relaxed mb-3">
                  Td 15, Richygold Homes and Estate<br />
                  Abuja, Nigeria
                </p>
                <div className="space-y-2">
                    <a href="tel:+2348022954768" className="flex items-center gap-2 text-sm text-primary hover:text-secondary transition-colors">
                      <PhoneIcon className="w-4 h-4 flex-shrink-0" />
                      +234 802 295 4768
                    </a>
                    <a href="mailto:Info@itechneronics.com" className="flex items-center gap-2 text-sm text-primary hover:text-secondary transition-colors">
                      <EnvelopeIcon className="w-4 h-4 flex-shrink-0" />
                      Info@itechneronics.com
                    </a>
                </div>
              </div>

              {/* Lagos */}
              <div>
                <p className="text-sm text-muted-fg dark:text-slate-400 leading-relaxed mb-3">
                  No 39, Social Science Street<br />
                  Unilag Estate, Magodo, Lagos
                </p>
                <div className="space-y-2">
                  <a href="tel:+2348022954768" className="flex items-center gap-2 text-sm text-primary hover:text-secondary transition-colors">
                    <PhoneIcon className="w-4 h-4 flex-shrink-0" />
                    +234 802 295 4768
                  </a>
                  <a href="mailto:Info@itechneronics.com" className="flex items-center gap-2 text-sm text-primary hover:text-secondary transition-colors">
                    <EnvelopeIcon className="w-4 h-4 flex-shrink-0" />
                    Info@itechneronics.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-base font-semibold text-foreground dark:text-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:+2348022954768" className="flex items-center gap-2 text-sm text-primary hover:text-secondary transition-colors">
                <PhoneIcon className="w-4 h-4 flex-shrink-0" />
                +234 802 295 4768
              </a>

              <a href="mailto:Info@itechneronics.com" className="flex items-center gap-2 text-sm text-primary hover:text-secondary transition-colors">
                <EnvelopeIcon className="w-4 h-4 flex-shrink-0" />
                Info@itechneronics.com
              </a>

              <div className="pt-2">
                <p className="text-sm text-muted-fg dark:text-slate-400 mb-2">Follow us</p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <a
                    href="https://linkedin.com/company/itechnetronics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 sm:p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors group"
                  >
                    <svg className="w-5 h-5 flex-shrink-0 text-primary group-hover:text-secondary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                    </svg>
                    <span className="hidden sm:inline text-sm font-medium text-foreground dark:text-white group-hover:text-secondary transition-colors">LinkedIn</span>
                  </a>
                  <a
                    href="https://www.instagram.com/itechnetronics?igsh=OXJreWN3eTJ2M3pi&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 sm:p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors group"
                  >
                    <svg className="w-5 h-5 flex-shrink-0 text-primary group-hover:text-secondary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.337 3.608 1.312.975.975 1.25 2.242 1.312 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.337 2.633-1.312 3.608-.975.975-2.242 1.25-3.608 1.312-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.337-3.608-1.312-.975-.975-1.25-2.242-1.312-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.337-2.633 1.312-3.608C4.52 2.57 5.787 2.295 7.153 2.233 8.419 2.175 8.799 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.78.13 4.659.403 3.677 1.386 2.695 2.368 2.422 3.49 2.364 4.762.306 8.332.292 8.741.292 12s.014 3.668.072 4.948c.058 1.272.331 2.394 1.313 3.376.982.982 2.103 1.255 3.375 1.313 1.28.058 1.689.072 4.948.072s3.668-.014 4.948-.072c1.272-.058 2.394-.331 3.376-1.313.982-.982 1.255-2.103 1.313-3.375.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.058-1.272-.331-2.394-1.313-3.376C19.342.403 18.22.13 16.948.072 15.668.014 15.259 0 12 0z"/>
                      <circle cx="12" cy="12" r="3.2" />
                    </svg>
                    <span className="hidden sm:inline text-sm font-medium text-foreground dark:text-white group-hover:text-secondary transition-colors">Instagram</span>
                  </a>

                  <a
                    href="https://x.com/itechnetronics1?s=21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 sm:p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors group"
                  >
                    <svg className="w-5 h-5 flex-shrink-0 text-primary group-hover:text-secondary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 002.856-3.915 10 10 0 01-2.856.973 5 5 0 00-8.593 4.565 15.13 15.13 0 01-10.951-5.528 5 5 0 001.548 6.676 5 5 0 01-2.267-.616v.06a5 5 0 004.009 4.905 5 5 0 01-2.258.085 5 5 0 004.67 3.484 10.005 10.005 0 01-6.169 2.13c-.399 0-.779-.023-1.17-.067a14.996 14.996 0 008.134 2.38c9.76 0 15.076-8.086 15.076-15.084 0-.23-.005-.46-.015-.69a10.738 10.738 0 002.635-2.738z"/>
                    </svg>
                    <span className="hidden sm:inline text-sm font-medium text-foreground dark:text-white group-hover:text-secondary transition-colors">X</span>
                  </a>

                  <a
                    href="https://www.facebook.com/profile.php?id=61567887425047"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 sm:p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors group"
                  >
                    <svg className="w-5 h-5 flex-shrink-0 text-primary group-hover:text-secondary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="hidden sm:inline text-sm font-medium text-foreground dark:text-white group-hover:text-secondary transition-colors">Facebook</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border dark:border-slate-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-fg dark:text-slate-400 mb-4 md:mb-0">
            © 2026 iTechnetronics. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-fg dark:text-slate-400 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-fg dark:text-slate-400 hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-fg dark:text-slate-400 hover:text-primary transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}