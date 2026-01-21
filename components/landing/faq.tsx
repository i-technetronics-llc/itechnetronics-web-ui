'use client';

import { useState } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

interface FAQ {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div className="group">
      <button
        onClick={onToggle}
        className="w-full bg-white cursor-pointer hover:bg-gray-50 rounded-2xl p-6 transition-all duration-300 shadow-sm hover:shadow-md border border-gray-100 hover:border-primary/20"
      >
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-left font-semibold text-lg text-gray-900 group-hover:text-primary transition-colors">
            {question}
          </h3>
          <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen ? 'bg-primary text-white rotate-180' : 'bg-gray-100 text-gray-600 group-hover:bg-primary/10 group-hover:text-primary'
          }`}>
            {isOpen ? (
              <MinusIcon className="w-5 h-5" />
            ) : (
              <PlusIcon className="w-5 h-5" />
            )}
          </div>
        </div>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-gradient-to-br from-primary/5 to-blue-50 rounded-2xl p-6 ml-1 border-l-4 border-primary">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQ[] = [
    {
      question: "What makes your software/app development company unique?",
      answer: "At Itechnetronics, we take pride in our innovative approach to development. We use reusable modules/components, which enables us to build applications more efficiently and cost-effectively. Our strategic product roadmaps and go-to-market strategies ensure that your app development aligns with your business goals, making us specialists in building and promoting apps."
    },
    {
      question: "What kind of support do you offer during the development process?",
      answer: "We provide end-to-end support throughout the development process. From the initial planning and design stages to deployment and beyond, our dedicated team of experts will be available to address any questions or concerns you may have."
    },
    {
      question: "How do you ensure the security of our app and its data?",
      answer: "Security is our top priority. We implement industry-best practices to safeguard your app and data. Our development team follows strict security guidelines, conducts regular security audits, and uses encryption protocols to protect sensitive information."
    },
    {
      question: "Can you build custom applications tailored to our specific needs?",
      answer: "Absolutely! We excel in creating custom applications to suit your unique requirements. Our team will work closely with you to understand your business needs and deliver a tailor-made solution that fits your goals."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index: number) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}