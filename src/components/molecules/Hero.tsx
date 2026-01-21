'use client';
import { groupUsers, heroSlides } from '@/lib/data';
import { AvatarGroup } from '../atoms/AvatarGroup';
import { Avatar } from '../atoms/Avatar';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.bgImage}
            alt="Hospital background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1
            className="text-4xl sm:text-5xl font-satoshi md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight transition-opacity duration-700"
            key={`title-${currentSlide}`}
          >
            {heroSlides[currentSlide].title}
          </h1>

          <p
            className="text-[20px] font-satoshi text-white mb-10 max-w-4xl mx-auto leading-tight md:leading-relaxed font-medium animate-fadeIn"
            key={`subtitle-${currentSlide}`}
          >
            {heroSlides[currentSlide].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button className="bg-[#F85814] hover:bg-[#F85814]/90 text-white font-semibold text-base pr-[30px] pl-[30px] pt-[25px] pb-[25px] rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 min-w-[160px]">
              {heroSlides[currentSlide].cta}
            </Button>
            <Button className="bg-[#757575] hover:bg-[#757575]/30 text-white font-semibold text-base pr-[30px] pl-[30px] pt-[25px] pb-[25px] rounded-full transition-all duration-300 border border-white/30 min-w-[160px]">
              {heroSlides[currentSlide].secondaryCta}
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <AvatarGroup isBordered max={4} total={500} size="md">
              {groupUsers.map((user, index) => (
                <Avatar key={index} src={user.avatar} />
              ))}
            </AvatarGroup>
            <p
              className="
                text-sm sm:text-base 
                text-white font-medium 
                text-wrap           
                text-center sm:text-left
                max-w-xs sm:max-w-sm   
              "
            >
              {heroSlides[currentSlide].stats}
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 cursor-pointer left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-[#F85814] w-8'
                  : 'bg-white hover:bg-white/75 w-5 h-5 rounded-full'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
