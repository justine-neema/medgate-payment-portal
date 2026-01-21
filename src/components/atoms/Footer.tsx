import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-12 md:pt-16 lg:pt-20 mt-12 md:mt-16 lg:mt-20 w-full bg-medgate-main-grey">
      <div className="flex flex-col lg:flex-row mb-6 gap-8 lg:gap-0 items-start">
        <div className="w-full lg:w-[30%]">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              className="w-28 md:w-35 lg:w-50 brightness-0 invert"
              alt="Medgate Logo"
            />
          </div>
          <div className="mt-6 md:mt-8">
            <h4 className="text-white font-satoshi font-black text-base md:text-[18px]">
              Your trusted gateway to Healthcare in Rwanda
            </h4>
            <p className="text-xs sm:text-sm font-medium text-medgate-grey-text">Kigali/Rwanda</p>
          </div>

          <div className="mt-8 md:mt-12 lg:mt-20 flex flex-col space-y-2">
            <p className="text-xs sm:text-sm font-medium text-medgate-grey-text">
              Monday - Friday <span className="text-white">8:30 AM - 6:00 PM</span>
            </p>
            <p className="text-xs sm:text-sm font-medium text-medgate-grey-text">
              Saturday <span className="text-white">9:00 AM - 1:00 PM</span>
            </p>
            <p className="text-xs sm:text-sm font-medium text-medgate-grey-text">
              Sunday <span className="text-white">Closed</span>
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[70%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          <div>
            <h4 className="text-white font-satoshi font-black text-base md:text-[18px]">
              Navigation
            </h4>
            <div className="flex flex-col mt-2 space-y-3 md:space-y-4">
              <Link href={'/privacy-policy'}>
                <p className="text-xs sm:text-sm font-medium text-medgate-grey-text">Home</p>
              </Link>
              <Link href={'/privacy-policy'}>
                <p className="text-xs sm:text-sm font-medium text-medgate-grey-text">Testmonials</p>
              </Link>
              <Link href={'/privacy-policy'}>
                <p className="text-xs sm:text-sm font-medium text-medgate-grey-text">
                  How it works
                </p>
              </Link>
              <Link href={'/privacy-policy'}>
                <p className="text-xs sm:text-sm font-medium text-medgate-grey-text">Benefits</p>
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-white font-satoshi font-black text-base md:text-[18px]">
              For Patients
            </h4>
            <div className="flex flex-col mt-2 space-y-3 md:space-y-4">
              <Link href={'/privacy-policy'}>
                <p className="text-xs sm:text-sm font-medium text-medgate-grey-text">
                  Browse Hospitals
                </p>
              </Link>
              <Link href={'/privacy-policy'}>
                <p className="text-xs sm:text-sm font-medium text-medgate-grey-text">Get started</p>
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-white font-satoshi font-black text-base md:text-[18px]">
              Social Media
            </h4>
            <div className="flex flex-col mt-2 space-y-3 md:space-y-4">
              <Link href={'/privacy-policy'}>
                <p className="text-xs sm:text-sm font-medium text-medgate-grey-text">X/Twitter</p>
              </Link>
              <Link href={'/privacy-policy'}>
                <p className="text-xs sm:text-sm font-medium text-medgate-grey-text">Linkedin</p>
              </Link>
              <Link href={'/privacy-policy'}>
                <p className="text-xs sm:text-sm font-medium text-medgate-grey-text">Facebook</p>
              </Link>
              <Link href={'/privacy-policy'}>
                <p className="text-xs sm:text-sm font-medium text-medgate-grey-text">Medium</p>
              </Link>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-white font-satoshi font-black text-base md:text-[18px]">
              Contact us
            </h4>
            <div className="flex flex-col mt-2 space-y-3 md:space-y-4">
              <Link href={'/privacy-policy'}>
                <p className="text-xs sm:text-sm font-medium text-medgate-grey-text">
                  +250 798205731
                </p>
              </Link>
              <Link href={'/privacy-policy'}>
                <p className="text-xs sm:text-sm font-medium text-medgate-grey-text">
                  support@medgate.com
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[60px] md:h-[80px] py-4 flex flex-col md:flex-row items-center justify-between gap-4 border-t-[1px] border-solid border-[#FFFFFF]/[20%]">
        <div>
          <p className="text-xs sm:text-sm font-medium text-center md:text-left text-medgate-grey-text">
            &copy; {new Date().getFullYear()} Medgate. All rights reserved.
          </p>
        </div>
        <div className="flex flex-row items-center space-x-4 md:space-x-8">
          <Link href={'/privacy-policy'}>
            <p className="text-xs sm:text-sm font-medium text-center text-medgate-grey-text">
              Privacy policy
            </p>
          </Link>
          <Link href={'/terms'}>
            <p className="text-xs sm:text-sm font-medium text-center text-medgate-grey-text">
              Terms
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
