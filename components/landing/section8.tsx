'use client';

import { useEffect, useRef, useState } from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
  icon: string;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`flex-shrink-0 w-80 md:w-96 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 h-[480px] flex flex-col">
        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex-shrink-0">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl">{project.icon}</div>
          </div>
       
        </div>
        
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 text-white flex-1 flex flex-col">
          <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
          <p className="text-white/90 leading-relaxed text-sm flex-1">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function ProjectsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const projects: Project[] = [
    {
      title: "Ashton Living",
      description: "A comprehensive platform for elderly hospice care, Ashton Living is a revolutionary platform designed to simplify the process of finding suitable hospice living accommodations for the elderly. This user-friendly platform serves as a one-stop shop, allowing users to search, compare, and select the best hospice facilities based on specific needs and preferences.",
      image: "elderly-care.jpg",
      icon: "🏡"
    },
    {
      title: "EdCheck",
      description: "EdCheck is a platform that allows students to get direct and personalized feedback on their course questions and homework attempts.",
      image: "education.jpg",
      icon: "✅"
    },
    {
      title: "Hobbyist",
      description: "This app is intended for collectors who want to inventory and understand the value of their collections over time.",
      image: "hobby.jpg",
      icon: "📚"
    },
    {
      title: "EzyMedik",
      description: "The EzyMedik App provides bill payment via NHIS providers, ambulance requests, medication orders, appointment management, health information, secure health records, and hospital location services.",
      image: "medical.jpg",
      icon: "🏥"
    },
    {
      title: "World Main Market",
      description: "World Main Market brings physical markets and stores around you to your phone. Get direct access to store owners without going to the market.",
      image: "market.jpg",
      icon: "🛒"
    },
    {
      title: "Mathsmetal",
      description: "Data Migration and Application Integration Project. MathsMetal is a comprehensive data migration and application integration project that focuses on transitioning critical business data and applications from an on-premises server to a cloud-based environment. This project involves the seamless transfer of data while ensuring data integrity, security, and compliance with industry standards.",
      image: "cloud.jpg",
      icon: "☁️"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + 
        (direction === 'left' ? -scrollAmount : scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
         
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Our Projects
            </h1>
          </div>
          
        </div>

        {/* Scroll Container */}
        <div className="relative">
          {/* Left Arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-xl hover:shadow-2xl transition-all hover:scale-110 -ml-6"
              aria-label="Scroll left"
            >
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Right Arrow */}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-xl hover:shadow-2xl transition-all hover:scale-110 -mr-6"
              aria-label="Scroll right"
            >
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Projects Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {projects.map((_, index) => (
            <div
              key={index}
              className="h-2 w-2 rounded-full bg-blue-300 transition-all"
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}