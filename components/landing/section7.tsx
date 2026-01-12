import React from 'react';

interface ProductCardProps {
  title: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description }) => (
  <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
    <div className="p-4 flex-grow">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
    <div className="px-8 pb-8 pt-4 border-t border-gray-100">
      <button className="text-blue-800 font-semibold hover:text-blue-900 transition-colors">
        Learn more
      </button>
    </div>
  </div>
);

const OurProductsSection: React.FC = () => {
  const products = [
    {
      title: 'RotaWise',
      description: '(Adashe/Ajo/Esusu/Chama) Revolutionizing financial management with our suite of digital savings and lending solutions.',
    },
    {
      title: 'AntBuilder',
      description: 'Our flagship product designed to shape the future with innovative technology solutions by empowering businesses and individuals with user friendly, affordable and accessible software.',
    },
    {
      title: 'AntFi',
      description: 'Empowering businesses and individuals with cross border financial solutions, making financial management simpler and more efficient.',
    },
    {
      title: 'AntConfig',
      description: 'A developer-centric feature flag service with unlimited team size, awesome support, and a reasonable price tag',
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-blue-100 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-gray-900 mb-12">Our Products</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProductsSection;