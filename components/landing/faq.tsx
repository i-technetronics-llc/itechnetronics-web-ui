'use client';

import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  onHover: () => void;
}

interface FAQ {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer, isOpen, onToggle, onHover }: FAQItemProps) => {
  return (
    <div className="mb-4" onMouseEnter={onHover}>
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-4 bg-primary hover:bg-primary text-white rounded-3xl p-6 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        <div className="flex-shrink-0 w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </div>
        <span className="flex-1 text-left font-medium text-lg">{question}</span>
        <div className="flex-shrink-0 w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center">
          <svg 
            className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-blue-500 text-white rounded-3xl p-6 ml-14 mr-14 shadow-lg">
          <p className="leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">
           We have compiled a list of commonly asked questions and answers for you.
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index: number) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
              onHover={() => setOpenIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}