import React from 'react';

interface StatProps {
  number: string;
  label: string;
}

const StatCard: React.FC<StatProps> = ({ number, label }) => (
  <div className="flex items-start gap-3">
    <div className="w-1 h-16 bg-gray-300 rounded-full" />
    <div>
      <div className="text-4xl font-bold text-gray-900 mb-1">{number}</div>
      <div className="text-gray-700 text-sm">{label}</div>
    </div>
  </div>
);

// Generate diamond positions outside component (pure)
const generateDiamonds = () => {
  return [...Array(40)].map((_, i) => {
    const row = Math.floor(i / 8);
    const col = i % 8;
    const size = Math.random() * 20 + 10;
    const opacity = Math.random() * 0.6 + 0.4;
    
    return {
      size,
      opacity,
      left: col * 60 + (row % 2) * 30,
      top: row * 60,
    };
  });
};

const DIAMONDS = generateDiamonds();

const BusinessStatsHero: React.FC = () => {
  const stats = [
    { number: '17', label: 'Years\nProven Track Record' },
    { number: '9', label: 'Operating Countries' },
    { number: '50+', label: 'Corporate Customers' },
    { number: '400+', label: 'Professionals' },
  ];

  return (
    <div className="w- bg-white">
      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard 
              key={index} 
              number={stat.number} 
              label={stat.label.replace('\n', ' ')} 
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary via-[#0047b8] to-[#FFD9C4] overflow-hidden">
        {/* Decorative Diamond Pattern */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full opacity-20">
          <div className="relative w-full h-full">
            {DIAMONDS.map((diamond, i) => (
              <div
                key={i}
                className="absolute bg-white transform rotate-45"
                style={{
                  width: `${diamond.size}px`,
                  height: `${diamond.size}px`,
                  left: `${diamond.left}px`,
                  top: `${diamond.top}px`,
                  opacity: diamond.opacity,
                }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <div className="text-white text-xs font-semibold tracking-wider mb-6 uppercase">
              What We Do
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold text-[rgb(222, 224, 255)] leading-tight">
              Delivering Solutions that Create Business Advantage for a Range of Industries
            </h1>
          </div>
        </div>

   
      </div>
    </div>
  );
};

export default BusinessStatsHero;