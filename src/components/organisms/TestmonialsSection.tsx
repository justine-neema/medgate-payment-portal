'use client';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      id: 1,
      image: '/images/caleb.png',
      quote:
        'MedGate handled everything seamlessly, allowing me to focus fully on my health and recovery.',
      name: 'Kwizera Caleb',
      rating: '4.8 Rating',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      quote:
        'The team at MedGate provided exceptional care and support throughout my entire treatment journey.',
      name: 'Sarah Johnson',
      rating: '5.0 Rating',
    },
    {
      id: 3,
      image: '/images/caleb2.png',
      quote:
        'Professional, caring, and efficient. MedGate exceeded all my expectations for medical care.',
      name: 'Michael Chen',
      rating: '4.9 Rating',
    },
  ];

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 mt-8 md:mt-10">
      <style>{`
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="w-full">
        <div className="flex w-full flex-col lg:flex-row gap-4 md:gap-6 items-start lg:items-center">
          <div className="w-full lg:w-[30%] flex justify-center lg:justify-start">
            <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[348px] aspect-square rounded-2xl overflow-hidden transition-all duration-500">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={`img-${currentIndex}`}
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-full h-full object-cover animate-[fadeInScale_0.5s_ease-out]"
              />
            </div>
          </div>

          <div className="w-full lg:w-[70%]">
            <div className="bg-white rounded-2xl border-solid border-[#D0D5DC] border-[1px] p-6 sm:p-8 md:p-10 lg:p-12 min-h-[280px] sm:min-h-[320px] md:min-h-[348px] flex flex-col justify-center transition-all duration-500">
              <div key={`quote-${currentIndex}`} className="animate-[fadeInUp_0.5s_ease-out]">
                <div className="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-[50px] md:h-[50px]"
                    fill="#F85814"
                  >
                    <path d="M4.58341 17.3211C3.55316 16.2274 3 15 3 13.0103C3 9.51086 5.45651 6.37366 9.03059 4.82318L9.92328 6.20079C6.58804 8.00539 5.93618 10.346 5.67564 11.822C6.21263 11.5443 6.91558 11.4466 7.60471 11.5105C9.40908 11.6778 10.8312 13.159 10.8312 15C10.8312 16.933 9.26416 18.5 7.33116 18.5C6.2581 18.5 5.23196 18.0095 4.58341 17.3211ZM14.5834 17.3211C13.5532 16.2274 13 15 13 13.0103C13 9.51086 15.4565 6.37366 19.0306 4.82318L19.9233 6.20079C16.588 8.00539 15.9362 10.346 15.6756 11.822C16.2126 11.5443 16.9156 11.4466 17.6047 11.5105C19.4091 11.6778 20.8312 13.159 20.8312 15C20.8312 16.933 19.2642 18.5 17.3312 18.5C16.2581 18.5 15.232 18.0095 14.5834 17.3211Z"></path>
                  </svg>
                </div>
                <h4 className="text-black font-satoshi font-black text-lg sm:text-xl md:text-2xl lg:text-[28px] xl:text-[30px] leading-tight mb-4">
                  {testimonials[currentIndex].quote}
                </h4>
                <div className="text-gray-600">
                  <p className="font-satoshi text-sm sm:text-base md:text-md font-medium leading-tight text-medgate-grey-text">
                    {testimonials[currentIndex].name} • {testimonials[currentIndex].rating}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 mt-6 md:mt-8">
          <Button className="w-full sm:w-auto bg-[#757575] cursor-pointer font-satoshi hover:bg-[#757575]/90 text-white font-semibold text-sm sm:text-base px-6 sm:px-8 md:px-[30px] py-4 sm:py-5 md:py-[25px] rounded-full transition-all duration-300 hover:scale-105 min-w-[160px]">
            Leave your review
          </Button>

          <div className="flex gap-3 sm:gap-4">
            <button
              onClick={prevTestimonial}
              disabled={isAnimating}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#D9D9D9] hover:bg-[#D9D9D9]/[80%] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 sm:w-6 sm:h-6"
              >
                <path d="M22.0003 13.0001L22.0004 11.0002L5.82845 11.0002L9.77817 7.05044L8.36396 5.63623L2 12.0002L8.36396 18.3642L9.77817 16.9499L5.8284 13.0002L22.0003 13.0001Z"></path>
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              disabled={isAnimating}
              className="w-12 h-12 sm:w-14 sm:h-14 cursor-pointer rounded-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="#fff"
              >
                <path d="M1.99974 13.0001L1.9996 11.0002L18.1715 11.0002L14.2218 7.05044L15.636 5.63623L22 12.0002L15.636 18.3642L14.2218 16.9499L18.1716 13.0002L1.99974 13.0001Z"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6 lg:hidden">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-orange-500 w-8' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
