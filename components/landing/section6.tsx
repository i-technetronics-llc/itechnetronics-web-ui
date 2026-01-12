"use client"
import React from 'react';
import Image from 'next/image';

const WhyBluechipSection: React.FC = () => {
  // Logo data - replace with your actual logo URLs
  const logos = [
    { name: 'Orange', url: '/assets/c1.png' },
    { name: 'TMB', url: '/assets/c2.png' },
    { name: 'National Bank', url: '/assets/c3.png' },
    { name: 'Safaricom', url: '/assets/c4.png' },
    { name: 'Stanbic IBTC', url: '/assets/c5.png' },
    { name: 'Dangote', url: '/assets/c1.png' },
    { name: 'Equity', url: '/assets/c3.png' },
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="bg-white">
    <section className="w-full bg-gradient-to-br from-[#00127a] via-[#0047b8] to-[#00a3e0] py-20">
      <div className="max-w-7xl  mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="text-white text-xs font-semibold tracking-wider uppercase mb-6">
            Why Itechnetronics
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-8 max-w-4xl">
            Trusted by global enterprises for 4 years
          </h2>
          <p className="text-white text-lg leading-relaxed max-w-5xl opacity-95">
            We provide innovative solutions that boost efficiency and drive growth for organizations across diverse industries, from banking and telecommunications to the public sector. By leveraging data and AI, we help businesses navigate complex challenges, unlock new opportunities, and gain a competitive edge through tailored solutions designed to meet their specific needs.
          </p>
        </div>
      </div>
      </section>

      {/* Scrolling Logos */}
      <div className="relative overflow-hidden bg-white py-12 mt-8">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        
        {/* Scrolling container */}
        <div className="flex animate-scroll">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 px-8 flex items-center justify-center"
            >
              <Image
                src={logo.url}
                alt={logo.name}
                width={100}
                height={100}
                className="max-w-full h-20 object-contain  hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default WhyBluechipSection;