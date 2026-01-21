import Footer from '@/components/atoms/Footer';
import Navbar from '@/components/atoms/Navbar';
import HeroSection from '@/components/molecules/Hero';
import FAQSection from '@/components/organisms/FAQSection';
import TestimonialsSection from '@/components/organisms/TestmonialsSection';
import { Button } from '@/components/ui/button';
import React from 'react';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />

      <div className="w-full pt-[136px] pr-8 pl-8 lg:pr-20 lg:pl-20">
        <p className="text-medgate-orange text-center font-satoshi font-semibold text-sm uppercase tracking-wider">
          why choose medgate
        </p>
        <h1 className="text-3xl sm:text-4xl font-satoshi md:text-5xl text-center font-black text-black mb-6 leading-tight transition-opacity duration-700">
          How it works
        </h1>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-5 lg:gap-10 sm:grid-cols-2 md:grid-cols-3">
            <div className="bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-[28px] border-solid border-[#D0D5DC] border-[1px] rounded-[12px]">
              <div className="w-[60px] p-[12px] h-[60px] rounded-full flex flex-row items-center justify-center bg-medgate-light-orange/[15%]">
                <p className="font-satoshi font-black text-medgate-orange text-[30px]">1</p>
              </div>
              <div className="mt-8">
                <h4 className="text-black font-satoshi font-black text-[20px]">
                  Tell us your needs
                </h4>
                <p className="font-satoshi text-sm font-medium leading-tight mt-5 text-medgate-grey-text">
                  Tell us about your medical condition
                  <br /> so we can understand your needs.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-[28px] border-solid border-[#D0D5DC] border-[1px] rounded-[12px]">
              <div className="w-[60px] p-[12px] h-[60px] rounded-full flex flex-row items-center justify-center bg-medgate-light-orange/[15%]">
                <p className="font-satoshi font-black text-medgate-orange text-[30px]">2</p>
              </div>
              <div className="mt-8">
                <h4 className="text-black font-satoshi font-black text-[20px]">
                  Get Personalized Matches
                </h4>
                <p className="font-satoshi text-sm font-medium leading-tight mt-5 text-medgate-grey-text">
                  We find the right hospitals and specialists
                  <br /> that best match your medical needs.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-[28px] border-solid border-[#D0D5DC] border-[1px] rounded-[12px]">
              <div className="w-[60px] p-[12px] h-[60px] rounded-full flex flex-row items-center justify-center bg-medgate-light-orange/[15%]">
                <p className="font-satoshi font-black text-medgate-orange text-[30px]">3</p>
              </div>
              <div className="mt-8">
                <h4 className="text-black font-satoshi font-black text-[20px]">
                  Book Everything in One Place
                </h4>
                <p className="font-satoshi text-sm font-medium leading-tight mt-5 text-medgate-grey-text">
                  Easily arrange your hospital care, accommodation,
                  <br /> and transport all in one place.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:gap-10 sm:grid-cols-2 md:grid-cols-3 mt-5 lg:mt-10">
            <div></div>
            <div className="bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-[28px] border-solid border-[#D0D5DC] border-[1px] rounded-[12px]">
              <div className="w-[60px] p-[12px] h-[60px] rounded-full flex flex-row items-center justify-center bg-medgate-light-orange/[15%]">
                <p className="font-satoshi font-black text-medgate-orange text-[30px]">4</p>
              </div>
              <div className="mt-8">
                <h4 className="text-black font-satoshi font-black text-[20px]">
                  Focus on Your Health
                </h4>
                <p className="font-satoshi text-sm font-medium leading-tight mt-5 text-medgate-grey-text">
                  Concentrate on your recovery while
                  <br /> we take care of all the logistics for you.
                </p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>

      <div className="w-full pt-[136px] pr-8 pl-8 lg:pr-20 lg:pl-20">
        <p className="text-medgate-orange text-center font-satoshi font-semibold text-sm uppercase tracking-wider">
          partner hospitals
        </p>
        <h1 className="text-3xl sm:text-4xl font-satoshi md:text-5xl text-center font-black text-black mb-6 leading-tight transition-opacity duration-700">
          Featured Hospitals
        </h1>

        <div className="h-[300px] w-full flex justify-center items-center">
          <div className="w-full flex flex-col items-center space-y-5 pl-4 pr-4 pt-8 pb-8 rounded-lg text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-8 sm:size-10 lg:size-20 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
              />
            </svg>
            <p className="text-sm font-medium text-app-gray-1/70">No featured hospitals</p>
          </div>
        </div>
      </div>

      <div className="w-full pt-[136px] pr-8 pl-8 lg:pr-20 lg:pl-20">
        <h1 className="text-3xl sm:text-4xl font-satoshi md:text-5xl text-center font-black text-black leading-tight transition-opacity duration-700">
          Join 30+ Patients Who
          <br /> Trust MedGate
        </h1>
        <p className="font-satoshi text-md font-medium text-center mt-2 leading-tight text-medgate-grey-text">
          Don&apos;t just take our work for it. Hear from patient whose story implies
        </p>
        <TestimonialsSection />
      </div>

      <div className="w-full mt-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black py-16 sm:py-24">
        <div className="w-full sm:w-11/12 md:w-10/12 mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '100+', label: 'Patients Helped' },
              { number: '50', label: 'Countries served' },
              { number: '4+', label: 'Partner Hospitals' },
              { number: '100', label: 'Average satisfaction rating' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-4xl sm:text-5xl md:text-6xl font-black text-medgate-orange mb-2">
                  {stat.number}
                </p>
                <p className="text-sm sm:text-base font-medium text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FAQSection />

      <div className="w-full sm:w-11/12 mt-[136px] md:w-10/12 mx-auto px-4">
        <div className="w-full border-[#D0D5DC] border-solid border-[1px] rounded-[20px] p-6 md:p-10">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full">
            <div className="w-full lg:w-[40%]">
              <div className="bg-[#EDE8F9]/[70%] rounded-[20px] p-6 md:p-8 h-full flex flex-col justify-between">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black mb-8 md:mb-12">
                  Verified
                  <br />
                  Hospitals
                </h2>

                <div className="flex justify-center mb-8 md:mb-12">
                  <img
                    src="/images/illustration1.png"
                    alt="Two medical professionals"
                    className="w-48 h-48 md:w-56 md:h-56 object-contain"
                  />
                </div>
                <p className="font-satoshi leading-relaxed text-sm font-medium mt-5 text-medgate-grey-text">
                  All partner hospitals are carefully screened to ensure quality, safety, and
                  reliability. You can trust that you're receiving care from approved medical
                  providers.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-[60%] flex flex-col gap-6 lg:gap-8">
              <div className="w-full flex-1">
                <div className="bg-[#D9D9D9]/[20%] relative rounded-[20px] p-6 md:p-8 h-full flex flex-col justify-between min-h-[280px]">
                  <h3 className="text-xl md:text-2xl font-black text-black mb-4">
                    Transparent
                    <br />
                    Pricing
                  </h3>
                  <div className="flex absolute top-6 md:top-10 right-6 md:right-10 justify-center items-end mt-auto">
                    <img
                      src="/images/illustration2.png"
                      alt="Travel support"
                      className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
                    />
                  </div>
                  <p className="font-satoshi leading-relaxed text-sm font-medium mt-5 text-medgate-grey-text max-w-[70%]">
                    Know your treatment and travel costs upfront with no hidden fees. This helps you
                    plan confidently and avoid surprises.
                  </p>
                </div>
              </div>

              <div className="w-full flex flex-col sm:flex-row gap-6 lg:gap-8 flex-1">
                <div className="w-full sm:w-[50%]">
                  <div className="bg-[#FFE8DC] rounded-[20px] p-6 md:p-8 h-full flex flex-col justify-between min-h-[280px]">
                    <h3 className="text-xl md:text-2xl font-black text-black mb-4">
                      Complete
                      <br />
                      Travel Support
                    </h3>
                    <div className="flex justify-center items-end mt-auto">
                      <img
                        src="/images/illustration3.png"
                        alt="Travel support"
                        className="w-24 h-24 md:w-28 md:h-28 object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full sm:w-[50%]">
                  <div className="bg-[#FFF9E6] rounded-[20px] p-6 md:p-8 h-full flex flex-col justify-between min-h-[280px]">
                    <h3 className="text-xl md:text-2xl font-black text-black mb-4">
                      24/7
                      <br />
                      Support
                    </h3>
                    <div className="flex justify-center items-center mt-auto">
                      <img
                        src="/images/illustration4.png"
                        alt="24/7 Support"
                        className="w-24 h-24 md:w-28 md:h-28 object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full pt-[136px] pr-8 pl-8 lg:pr-20 lg:pl-20">
        <h1 className="text-[40px] font-satoshi  text-center font-black text-black leading-tight transition-opacity duration-700">
          Ready to Start Your Medical
          <br /> Journey?
        </h1>
        <p className="font-satoshi text-md font-medium text-center mt-2 leading-tight text-medgate-grey-text">
          Get personalized hospital recommendations
          <br /> within 24 hours
        </p>

        <div className="mt-8 cursor-pointer w-full flex justify-center">
          <Button className="bg-[#757575] hover:bg-[#757575]/30 text-white font-semibold text-base pr-[30px] pl-[30px] pt-[25px] pb-[25px] rounded-full transition-all duration-300 border border-white/30 min-w-[160px]">
            Request Assistance
          </Button>
        </div>

        <div className="mt-2">
          <p className="font-satoshi text-sm font-medium leading-tight text-center mt-5 text-medgate-grey-text">
            Note: No payment required to get started
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
