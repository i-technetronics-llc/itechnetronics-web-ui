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
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop',
      label: 'OEM Application',
    },
    {
      image: 'https://images.unsplash.com/photo-1621570074981-cc2a58a0fc18?w=100&h=100&fit=crop',
      label: 'DevOps Services',
    },
    {
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=100&h=100&fit=crop',
      label: 'Database Solutions',
    },
    {
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=100&h=100&fit=crop',
      label: 'IT Staffing and Recruitment',
    },
    {
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop',
      label: 'Social Media Marketing Strategy',
    },
    {
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=100&h=100&fit=crop',
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