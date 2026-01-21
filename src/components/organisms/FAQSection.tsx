'use client';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

interface FAQItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center cursor-pointer justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors px-4 rounded-lg"
      >
        <span className="font-satoshi font-semibold text-base sm:text-md text-gray-900 dark:text-white pr-4">
          {question}
        </span>
        <svg
          className={`w-6 h-6 flex-shrink-0 text-app-primary transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 mb-4' : 'max-h-0'
        }`}
      >
        <div className="px-4 pb-4">
          <p className="text-sm sm:text-md font-medium text-gray-500 dark:text-gray-400 leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const faqData = [
    {
      question: 'What is Medgate?',
      answer:
        'Medgate is a digital healthcare platform that connects patients in Rwanda with trusted hospitals, clinics, doctors, and medical services—making healthcare access easier, faster, and more reliable.',
    },
    {
      question: 'How do I request medical assistance on Medgate?',
      answer:
        'You can submit a medical request by filling out a simple form with your symptoms or healthcare needs. Medgate then connects you with appropriate healthcare providers based on your request.',
    },
    {
      question: 'How long does it take to get a response after submitting a request?',
      answer:
        'Most requests receive a response within 24 hours. Response time may vary depending on the urgency of your case and the availability of healthcare providers.',
    },
    {
      question: 'Are the healthcare providers on Medgate verified?',
      answer:
        'Yes. All hospitals, clinics, and medical professionals on Medgate go through a verification process to ensure they meet required medical and regulatory standards in Rwanda.',
    },
    {
      question: 'Is Medgate free to use?',
      answer:
        'Creating an account and submitting a healthcare request is free. Any medical services provided by healthcare facilities may be subject to their standard fees.',
    },
    {
      question: 'Can I use Medgate for emergencies?',
      answer:
        'Medgate is not an emergency service. For medical emergencies, please contact local emergency services or visit the nearest hospital immediately.',
    },
    {
      question: 'Is my medical information safe on Medgate?',
      answer:
        'Yes. Medgate takes data privacy and security seriously and ensures your personal and medical information is handled securely and confidentially.',
    },
  ];

  return (
    <div className="w-full h-full bg-light-bg dark:bg-dark-bg mt-8 sm:mt-10 flex flex-col items-center">
      <div className="w-full sm:w-11/12 md:w-10/12">
        <div className="pr-[22px] pl-[22px] sm:pr-[30px] sm:pl-[30px] md:pr-[40px] md:pl-[40px]">
          <div className="mt-12 sm:mt-16 md:mt-20 mb-12 sm:mb-16 md:mb-20">
            <div className="flex md:flex-row flex-col gap-6 md:gap-8 lg:gap-12">
              <div className="w-full md:w-[45%] lg:w-[40%]">
                <div className="rounded-3xl overflow-hidden mb-6">
                  <img
                    src="/images/faq.png"
                    alt="Professional team"
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="bg-[#3D3936] rounded-3xl p-8 text-white">
                  <h3 className="font-satoshi font-bold text-xl mb-3">Still Have Questions?</h3>
                  <p className="font-satoshi text-sm mb-6 opacity-90">
                    We&apos;re Here To Assist With Any Queries. Reach Out And Get Precise Answers
                    Directly From Our Team.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/contact">
                      <Button className="bg-[#F85814] flex flex-row items-center hover:bg-[#F85814]/90 text-white font-semibold text-base pr-[10px] pl-[30px] pt-[25px] pb-[25px] rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 min-w-[160px]">
                        Contact us
                        <div className="bg-white rounded-full h-[40px] w-[40px] flex justify-center items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000">
                            <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path>
                          </svg>
                        </div>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-[55%] lg:w-[60%]">
                <div className="mb-6">
                  <p className="text-medgate-orange font-satoshi font-semibold text-sm uppercase tracking-wider">
                    FAQ
                  </p>
                </div>
                <h2 className="font-satoshi font-black text-3xl sm:text-4xl lg:text-5xl mb-8">
                  <span className="text-orange-500">Questions</span>{' '}
                  <span className="text-gray-900 dark:text-white">You Might Have</span>
                </h2>

                <div className="space-y-4">
                  {faqData.map((faq, index) => (
                    <FAQItem
                      key={index}
                      question={faq.question}
                      answer={faq.answer}
                      defaultOpen={index === 1}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
