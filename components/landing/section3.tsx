import React from 'react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-start">
    <div className="mb-6">{icon}</div>
    <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const CostEffectivenessIcon = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Lightbulb outline */}
    <ellipse cx="40" cy="28" rx="18" ry="22" stroke="#000" strokeWidth="2" fill="none" />
    {/* Dollar sign */}
    <text x="40" y="35" fontSize="20" fontWeight="bold" textAnchor="middle" fill="#000">$</text>
    {/* Base */}
    <path d="M 30 50 L 50 50" stroke="#000" strokeWidth="2" fill="none" />
    <path d="M 32 54 L 48 54" stroke="#000" strokeWidth="2" fill="none" />
    {/* Arrow pointing down-right */}
    <path d="M 35 62 L 45 72 L 55 62" fill="#001f7a" stroke="#001f7a" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

const InnovativeTechIcon = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Head outline */}
    <path d="M 25 60 L 25 35 Q 25 20 40 20 Q 55 20 55 35 L 55 60" stroke="#000" strokeWidth="2" fill="none" />
    {/* Blue square (brain/chip) */}
    <rect x="35" y="32" width="16" height="16" fill="#001f7a" stroke="#001f7a" strokeWidth="2" />
    {/* Light bulb rays */}
    <line x1="51" y1="28" x2="56" y2="23" stroke="#000" strokeWidth="2" />
    <line x1="54" y1="35" x2="60" y2="35" stroke="#000" strokeWidth="2" />
    <line x1="51" y1="42" x2="56" y2="47" stroke="#000" strokeWidth="2" />
  </svg>
);

const IndustryExpertiseIcon = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Head outline */}
    <path d="M 25 60 L 25 35 Q 25 20 40 20 Q 55 20 55 35 L 55 60" stroke="#000" strokeWidth="2" fill="none" />
    {/* Book pages */}
    <rect x="32" y="30" width="16" height="20" fill="none" stroke="#000" strokeWidth="2" rx="1" />
    <line x1="40" y1="30" x2="40" y2="50" stroke="#000" strokeWidth="2" />
    <line x1="32" y1="35" x2="48" y2="35" stroke="#000" strokeWidth="1" />
    <line x1="32" y1="40" x2="48" y2="40" stroke="#000" strokeWidth="1" />
    <line x1="32" y1="45" x2="48" y2="45" stroke="#000" strokeWidth="1" />
  </svg>
);

const ScalabilityIcon = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* 3D Cube outline */}
    <path d="M 30 35 L 40 28 L 50 35 L 50 50 L 40 57 L 30 50 Z" stroke="#000" strokeWidth="2" fill="none" />
    <line x1="40" y1="28" x2="40" y2="43" stroke="#000" strokeWidth="2" />
    <line x1="30" y1="35" x2="40" y2="43" stroke="#000" strokeWidth="2" />
    <line x1="50" y1="35" x2="40" y2="43" stroke="#000" strokeWidth="2" />
    {/* Blue filled section */}
    <path d="M 40 43 L 50 35 L 50 50 L 40 57 Z" fill="#001f7a" stroke="#000" strokeWidth="2" />
  </svg>
);

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <CostEffectivenessIcon />,
      title: 'Cost-effectiveness',
      description: 'We offer affordable IT solutions that help you reduce costs and improve your bottom line.',
    },
    {
      icon: <InnovativeTechIcon />,
      title: 'Innovative Technology',
      description: 'We stay up-to-date with the latest technology trends and offer innovative solutions that help you stay ahead of the competition.',
    },
    {
      icon: <IndustryExpertiseIcon />,
      title: 'Industry Expertise',
      description: 'We specialize in serving specific industries, such as banking, oil and gas, telecommunications, healthcare, FMCGs, and the public sector, offering tailored solutions that meet your unique needs.',
    },
    {
      icon: <ScalabilityIcon />,
      title: 'Scalability',
      description: 'Our solutions are scalable and can grow with your business, ensuring that you get the most value out of your investment.',
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
      
      {/* Bottom border */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="border-t border-gray-200" />
      </div>
    </section>
  );
};

export default FeaturesSection;