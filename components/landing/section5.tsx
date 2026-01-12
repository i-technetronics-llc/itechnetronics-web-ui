import React from 'react';
import Image from 'next/image';


interface IndustryBadgeProps {
  image: string;
  label: string;
}

const IndustryBadge: React.FC<IndustryBadgeProps> = ({ image, label }) => (
  <div className="inline-flex items-center gap-3 bg-gray-50 hover:bg-gray-100 transition-colors rounded-full pl-2 pr-6 py-2 shadow-sm">
    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
      <Image
        width={100}
        height={100}
        src={image} 
        alt={label} 
        className="w-full h-full object-cover"
      />
    </div>
    <span className="text-lg font-semibold text-gray-900 whitespace-nowrap">
      {label}
    </span>
  </div>
);

const IndustriesSection: React.FC = () => {
  const industries = [
    {
      image: '/assets/p3.jpg',
      label: 'OEM Application',
    },
    {
      image: '/assets/p1.jpg',
      label: 'DevOps Services',
    },
    {
      image: '/assets/p4.jpg',
      label: 'Database Solutions',
    },
    {
      image: '/assets/p2.jpg',
      label: 'IT Staffing and Recruitment',
    },
    {
      image: '/assets/p3.jpg',
      label: 'Social Media Marketing Strategy',
    },
    {
      image: '/assets/p4.jpg',
      label: 'Technical Support & Management Service',
    },
  ];

  return (
    <section className="w-full bg-white py-20 relative">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-100 text-gray-600 text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded mb-6">
            Industries We Service
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight max-w-3xl mx-auto">
            Solving IT challenges across diverse industries
          </h2>
        </div>

        {/* Industry Badges Grid */}
        <div className="flex flex-wrap justify-center gap-4 items-center">
          {industries.map((industry, index) => (
            <IndustryBadge
              key={index}
              image={industry.image}
              label={industry.label}
            />
          ))}
        </div>
      </div>

    
    </section>
  );
};

export default IndustriesSection;