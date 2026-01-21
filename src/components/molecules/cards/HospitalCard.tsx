import { Button } from '@/components/ui/button';
import Link from 'next/link';

const getDefaultAvatarInitials = (name: string) => {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

interface HospitalCardProps {
  hospitalId: string;
  hospitalName: string;
  rating: number;
  location: string;
  featured?: boolean;
  price: number;
  services: string[];
  hospitalLogo?: string | null;
}

const HospitalCard = ({
  hospitalId,
  hospitalName,
  rating,
  location,
  featured = false,
  price,
  services,
  hospitalLogo,
}: HospitalCardProps) => {
  return (
    <div className="w-full border-solid border-gray-300 border-[1px] rounded-lg p-3 sm:p-4  hover:border-[#F85814]/50 transition-all duration-300 bg-white">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-row space-x-3 sm:space-x-4 items-start">
          {!hospitalLogo ? (
            <div className="w-16 h-16 rounded-full bg-[#F85814]/10 flex items-center justify-center flex-shrink-0">
              <span className="font-black text-lg sm:text-xl text-[#F85814]">
                {getDefaultAvatarInitials(hospitalName)}
              </span>
            </div>
          ) : (
            <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-gray-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={`${hospitalName} Logo`}
                className="w-full h-full rounded-full object-cover"
                src={hospitalLogo}
              />
            </div>
          )}

          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-black text-black line-clamp-2">{hospitalName}</h2>
            <div className="flex items-center mt-1 space-x-1">
              <span className="text-lg font-black text-gray-700">{rating}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-row items-center space-x-2">
            <svg
              className="w-5 h-5 flex-shrink-0"
              fill="#6B7280"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995L16.9497 15.9497ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z" />
            </svg>
            <p className="text-xs sm:text-sm font-medium leading-relaxed text-gray-500 line-clamp-1">
              {location}
            </p>
          </div>

          <div className="flex flex-row items-center space-x-2">
            <svg
              className="w-5 h-5 flex-shrink-0"
              fill="#F59E0B"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" />
            </svg>
            <p className="text-xs sm:text-sm font-medium leading-relaxed text-gray-500 line-clamp-1">
              {rating}
            </p>
          </div>

          <div className="flex flex-row items-center space-x-2">
            <svg
              className="w-5 h-5 flex-shrink-0"
              fill="#6B7280"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.6144 17.7956C10.277 18.5682 9.20776 18.5682 8.8704 17.7956L7.99275 15.7854C7.21171 13.9966 5.80589 12.5726 4.0523 11.7942L1.63658 10.7219C.868536 10.381.868537 9.26368 1.63658 8.92276L3.97685 7.88394C5.77553 7.08552 7.20657 5.60881 7.97427 3.75892L8.8633 1.61673C9.19319.828535 10.2916.828534 10.6215 1.61673L11.5105 3.75894C12.2782 5.60881 13.7092 7.08552 15.5079 7.88394L17.8482 8.92276C18.6162 9.26368 18.6162 10.381 17.8482 10.7219L15.4325 11.7942C13.6789 12.5726 12.2731 13.9966 11.492 15.7854L10.6144 17.7956ZM4.53956 9.82234C6.8254 10.837 8.68402 12.5048 9.74238 14.7996 10.8008 12.5048 12.6594 10.837 14.9452 9.82234 12.6321 8.79557 10.7676 7.04647 9.74239 4.71088 8.71719 7.04648 6.85267 8.79557 4.53956 9.82234ZM19.4014 22.6899 19.6482 22.1242C20.0882 21.1156 20.8807 20.3125 21.8695 19.8732L22.6299 19.5353C23.0412 19.3526 23.0412 18.7549 22.6299 18.5722L21.9121 18.2532C20.8978 17.8026 20.0911 16.9698 19.6586 15.9269L19.4052 15.3156C19.2285 14.8896 18.6395 14.8896 18.4628 15.3156L18.2094 15.9269C17.777 16.9698 16.9703 17.8026 15.956 18.2532L15.2381 18.5722C14.8269 18.7549 14.8269 19.3526 15.2381 19.5353L15.9985 19.8732C16.9874 20.3125 17.7798 21.1156 18.2198 22.1242L18.4667 22.6899C18.6473 23.104 19.2207 23.104 19.4014 22.6899Z" />
            </svg>
            <p className="text-xs sm:text-sm font-medium leading-relaxed text-gray-500 line-clamp-1">
              {featured ? 'Featured' : 'Standard'}
            </p>
          </div>

          <div className="flex flex-row items-center space-x-2">
            <svg
              className="w-5 h-5 flex-shrink-0"
              fill="#6B7280"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.00488 3.00275H21.0049C21.5572 3.00275 22.0049 3.45046 22.0049 4.00275V20.0027C22.0049 20.555 21.5572 21.0027 21.0049 21.0027H3.00488C2.4526 21.0027 2.00488 20.555 2.00488 20.0027V4.00275C2.00488 3.45046 2.4526 3.00275 3.00488 3.00275ZM4.00488 5.00275V19.0027H20.0049V5.00275H4.00488ZM8.50488 14.0027H14.0049C14.281 14.0027 14.5049 13.7789 14.5049 13.5027C14.5049 13.2266 14.281 13.0027 14.0049 13.0027H10.0049C8.62417 13.0027 7.50488 11.8835 7.50488 10.5027C7.50488 9.12203 8.62417 8.00275 10.0049 8.00275H11.0049V6.00275H13.0049V8.00275H15.5049V10.0027H10.0049C9.72874 10.0027 9.50488 10.2266 9.50488 10.5027C9.50488 10.7789 9.72874 11.0027 10.0049 11.0027H14.0049C15.3856 11.0027 16.5049 12.122 16.5049 13.5027C16.5049 14.8835 15.3856 16.0027 14.0049 16.0027H13.0049V18.0027H11.0049V16.0027H8.50488V14.0027Z" />
            </svg>
            <p className="text-xs sm:text-sm font-medium leading-relaxed text-gray-500 line-clamp-1">
              {price.toLocaleString()} Rwf
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {services.slice(0, 4).map((service, index) => (
            <div
              key={index}
              className="bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium"
            >
              {service}
            </div>
          ))}
        </div>

        <Link href={`/hospital/${hospitalId}`}>
          <Button className="bg-[#F85814] cursor-pointer flex flex-row items-center hover:bg-[#F85814]/90 text-white font-semibold text-base pr-[10px] pl-[30px] pt-[25px] pb-[25px] rounded-full transition-all duration-300 hover:scale-105 min-w-[160px]">
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
  );
};

export default HospitalCard;
