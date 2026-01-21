import React from 'react';
import { 
  CodeBracketSquareIcon, 
  UserGroupIcon, 
  CloudArrowUpIcon, 
  SparklesIcon 
} from '@heroicons/react/24/outline';

interface IndustryBadgeProps {
  icon: React.ReactNode;
  label: string;
}

const IndustryBadge: React.FC<IndustryBadgeProps> = ({ icon, label }) => (
  <div className="inline-flex items-center gap-3 bg-gray-50 hover:bg-blue-50 transition-colors rounded-full pl-3 pr-6 py-2 shadow-sm border border-gray-200">
    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
      {icon}
    </div>
    <span className="text-lg font-semibold text-gray-900 whitespace-nowrap">
      {label}
    </span>
  </div>
);

const IndustriesSection: React.FC = () => {
  const industries = [
    {
      icon: <CodeBracketSquareIcon className="w-6 h-6" />,
      label: 'OEM Application',
    },
    {
      icon: <UserGroupIcon className="w-6 h-6" />,
      label: 'DevOps Services',
    },
    {
      icon: <CloudArrowUpIcon className="w-6 h-6" />,
      label: 'Database Solutions',
    },
    {
      icon: <SparklesIcon className="w-6 h-6" />,
      label: 'IT Staffing and Recruitment',
    },
    {
      icon: <CodeBracketSquareIcon className="w-6 h-6" />,
      label: 'Social Media Marketing Strategy',
    },
    {
      icon: <UserGroupIcon className="w-6 h-6" />,
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
              icon={industry.icon}
              label={industry.label}
            />
          ))}
        </div>
      </div>

    
    </section>
  );
};

export default IndustriesSection;