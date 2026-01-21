import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/atoms/Navbar';
import Footer from '@/components/atoms/Footer';

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen bg-light-bg dark:bg-dark-bg flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-lg">
          {/* <div className="w-full flex justify-center mb-6">
            <img src="/images/404.png" alt="Not found" />
          </div> */}
          <h1 className="text-[4rem] sm:text-[6rem] md:text-[8rem] leading-none font-black tracking-tight text-app-primary/20">
            404
          </h1>
          <h2 className="mt-4 text-[1.8em] sm:text-[2.2em] font-black tracking-tight">
            Page Not Found
          </h2>
          <p className="mt-4 text-sm sm:text-md font-medium leading-relaxed text-gray-500">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved
            or doesn&apos;t exist.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="bg-[#F85814] hover:bg-[#F85814]/90 text-white font-semibold text-base pr-[30px] pl-[30px] pt-[25px] pb-[25px] rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 min-w-[160px]">
                Back to Home
              </Button>
            </Link>
            <Link href="/hospitals">
              <Button className="bg-[#757575] hover:bg-[#757575]/30 text-white font-semibold text-base pr-[30px] pl-[30px] pt-[25px] pb-[25px] rounded-full transition-all duration-300 border border-white/30 min-w-[160px]">
                Browse Jobs
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
