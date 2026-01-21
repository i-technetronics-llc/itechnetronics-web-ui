import React from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, href }) => (
  <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
    <div className="mb-6">{icon}</div>
    <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed text-sm mb-8 flex-grow">{description}</p>
    <Link href={href} className="text-blue-800 font-semibold hover:text-blue-900 transition-colors text-left">
      Learn more
    </Link>
  </div>
);

const DataServicesIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="12" width="16" height="24" rx="2" stroke="#001f7a" strokeWidth="2" fill="none" />
    <rect x="28" y="12" width="16" height="24" rx="2" stroke="#001f7a" strokeWidth="2" fill="none" />
    <line x1="12" y1="18" x2="20" y2="18" stroke="#001f7a" strokeWidth="2" />
    <line x1="12" y1="24" x2="20" y2="24" stroke="#001f7a" strokeWidth="2" />
    <line x1="32" y1="18" x2="40" y2="18" stroke="#001f7a" strokeWidth="2" />
    <path d="M 6 40 L 46 40" stroke="#001f7a" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const AIServicesIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="24" r="16" stroke="#001f7a" strokeWidth="2" fill="none" />
    <path d="M 20 18 Q 22 22 26 22" stroke="#001f7a" strokeWidth="2" fill="none" />
    <path d="M 34 22 Q 38 22 40 18" stroke="#001f7a" strokeWidth="2" fill="none" />
    <path d="M 20 28 Q 24 26 30 28 Q 36 30 40 28" stroke="#001f7a" strokeWidth="2" fill="none" />
    <circle cx="23" cy="20" r="2" fill="#001f7a" />
    <circle cx="37" cy="20" r="2" fill="#001f7a" />
  </svg>
);

const InfrastructureIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="20" r="14" stroke="#001f7a" strokeWidth="2" fill="none" />
    <path d="M 30 28 L 30 35 M 26 32 L 30 35 L 34 32" stroke="#001f7a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 30 35 L 30 40" stroke="#001f7a" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ApplicationsIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="12" width="40" height="28" rx="2" stroke="#001f7a" strokeWidth="2" fill="none" />
    <line x1="10" y1="18" x2="50" y2="18" stroke="#001f7a" strokeWidth="2" />
    <path d="M 18 28 L 22 32 L 18 36" stroke="#001f7a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <line x1="26" y1="36" x2="34" y2="36" stroke="#001f7a" strokeWidth="2" strokeLinecap="round" />
    <rect x="20" y="44" width="20" height="3" rx="1" fill="#001f7a" />
  </svg>
);

const PlatformsIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="12" width="10" height="10" stroke="#001f7a" strokeWidth="2" fill="none" />
    <rect x="32" y="12" width="10" height="10" stroke="#001f7a" strokeWidth="2" fill="none" />
    <rect x="18" y="26" width="10" height="10" stroke="#001f7a" strokeWidth="2" fill="none" />
    <rect x="32" y="26" width="10" height="10" stroke="#001f7a" strokeWidth="2" fill="none" />
    <line x1="23" y1="22" x2="23" y2="26" stroke="#001f7a" strokeWidth="2" />
    <line x1="37" y1="22" x2="37" y2="26" stroke="#001f7a" strokeWidth="2" />
    <line x1="28" y1="17" x2="32" y2="17" stroke="#001f7a" strokeWidth="2" />
    <line x1="28" y1="31" x2="32" y2="31" stroke="#001f7a" strokeWidth="2" />
  </svg>
);

const ConsultingIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="16" r="4" stroke="#001f7a" strokeWidth="2" fill="none" />
    <circle cx="30" cy="16" r="4" stroke="#001f7a" strokeWidth="2" fill="none" />
    <circle cx="40" cy="16" r="4" stroke="#001f7a" strokeWidth="2" fill="none" />
    <path d="M 16 20 L 16 26 L 12 30 L 12 36" stroke="#001f7a" strokeWidth="2" strokeLinecap="round" />
    <path d="M 24 20 L 24 26 L 20 30 L 20 36" stroke="#001f7a" strokeWidth="2" strokeLinecap="round" />
    <path d="M 30 20 L 30 30 L 30 36" stroke="#001f7a" strokeWidth="2" strokeLinecap="round" />
    <path d="M 36 20 L 36 26 L 40 30 L 40 36" stroke="#001f7a" strokeWidth="2" strokeLinecap="round" />
    <path d="M 44 20 L 44 26 L 48 30 L 48 36" stroke="#001f7a" strokeWidth="2" strokeLinecap="round" />
    <rect x="10" y="30" width="40" height="8" rx="1" stroke="#001f7a" strokeWidth="2" fill="none" />
  </svg>
);

const OurServicesSection: React.FC = () => {
  const services = [
    {
      icon: <DataServicesIcon />,
      title: 'ERP/CRM',
      description: 'We offer enterprise resources planning and customer relationship management.',
      href: '/services/erp-crm',
    },
    {
      icon: <AIServicesIcon />,
      title: 'Network Service',
      description: 'Wide Area Network - VSAT, Microwave Radio, FiberP Optics & VPN Audiovisual (Video collaboration solutions,  Network monitoring solutions, SD-WAN',
      href: '/services/network-services',
    },
    {
      icon: <InfrastructureIcon />,
      title: 'Cyber Security Service',
      description: 'Cyber security, IT infrastructure Audit, Penetration Testing, Bug Hunting, Data Centre Solution, Network information security.',
      href: '/services/cyber-security',
    },
    {
      icon: <ApplicationsIcon />,
      title: 'Business Intelligence Solutions',
      description: 'Cloud BI Solution, Data Visualization, Advanced Analytics,  ETL Services, AI Integration.',
      href: '/services/business-intelligence',
    },
    {
      icon: <PlatformsIcon />,
      title: 'Engineering Service & Designs',
      description: 'Software Design & Development, Mobile Application Design & Development, UI/UX Web Application Development, Web Service/API Development',
      href: '/services/engineering-design',
    },
     {
      icon: <ConsultingIcon />,
      title: 'Surveillance & Monitoring Services',
      description: 'Video Surveillance System, Access Control Systems, Intrusion Detection Systems, Alarm Systems, Maintenance and Support',
      href: '#',
    },
   
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#EAF2FE] to-[#FFF2EB] py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-gray-900 mb-12">Our Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={service.href}
            />
          ))}
        </div>
      </div>

   
    </section>
  );
};

export default OurServicesSection;