'use client';

import { Hospital } from '@/types/hospitals';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface HospitalCardProps {
  hospital: Hospital;
  viewMode: 'grid' | 'list';
  onCompareToggle: (hospitalId: string) => void;
  isSelected: boolean;
}

export default function HospitalCard({
  hospital,
  viewMode,
  onCompareToggle,
  isSelected,
}: HospitalCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const cardClass = viewMode === 'grid'
    ? 'flex flex-col'
    : 'flex flex-row items-start';

  return (
    <div className={`${cardClass} bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 relative`}>
      {/* Compare Checkbox */}
      <div className="absolute top-4 left-4 z-10">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onCompareToggle(hospital.id)}
          className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
          aria-label={`Compare ${hospital.name}`}
        />
      </div>

      {/* Favorite Button */}
      <button
        onClick={() => setIsFavorite(!isFavorite)}
        className="absolute top-4 right-4 text-2xl z-10 hover:scale-110 transition-transform"
        aria-label={`${isFavorite ? 'Remove from' : 'Add to'} favorites`}
      >
        {isFavorite ? '❤️' : '🤍'}
      </button>

      <div className={viewMode === 'grid' ? 'w-full' : 'flex gap-6 w-full'}>
        {/* Logo */}
        <div className={`${viewMode === 'grid' ? 'mb-4 flex justify-center' : 'shrink-0'} mt-8`}>
          <div className="relative w-24 h-24 bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
            <Image
              src={hospital.logo}
              alt={`${hospital.name} logo`}
              fill
              className="object-contain p-2"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/placeholder-hospital.png';
              }}
            />
          </div>
        </div>

        <div className="flex-1">
          {/* Badges */}
          <div className="flex gap-2 mb-3">
            {hospital.badges.map((badge) => (
              <span
                key={badge}
                className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  badge === 'Verified'
                    ? 'bg-green-100 text-green-700 border border-green-300'
                    : 'bg-blue-100 text-blue-700 border border-blue-300'
                }`}
              >
                ✓ {badge}
              </span>
            ))}
          </div>

          {/* Hospital Name */}
          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
            {hospital.name}
          </h3>

          {/* Location */}
          <p className="text-sm text-gray-600 mb-3 flex items-center gap-1">
            <span className="text-base">📍</span> {hospital.location.city}, {hospital.location.province}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-yellow-400 text-lg">
              {[...Array(5)].map((_, i) => (
                <span key={i}>{i < Math.floor(hospital.rating) ? '★' : '☆'}</span>
              ))}
            </div>
            <span className="text-sm text-gray-600 font-medium">
              {hospital.rating.toFixed(1)}
            </span>
            <span className="text-sm text-gray-500">
              ({hospital.reviewCount} reviews)
            </span>
          </div>

          {/* Specialties */}
          <div className="flex flex-wrap gap-2 mb-4">
            {hospital.specialties.slice(0, 4).map((specialty) => (
              <span
                key={specialty}
                className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full font-medium border border-blue-200"
              >
                {specialty}
              </span>
            ))}
            {hospital.specialties.length > 4 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full font-medium">
                +{hospital.specialties.length - 4} more
              </span>
            )}
          </div>

          {/* Price Range */}
          <div className="mb-4">
            <p className="text-lg font-bold text-gray-900">
              {hospital.priceRange.currency}{hospital.priceRange.min.toLocaleString()} - {hospital.priceRange.currency}{hospital.priceRange.max.toLocaleString()}
            </p>
            <p className="text-xs text-gray-500">Estimated price range</p>
          </div>

          {/* Key Facilities */}
          <div className="flex flex-wrap gap-3 mb-5">
            {hospital.facilities.slice(0, 3).map((facility) => (
              <span
                key={facility}
                className="flex items-center gap-1 text-sm text-gray-700 bg-gray-50 px-3 py-1 rounded-full"
              >
                <span className="text-green-600 font-bold">✓</span> {facility}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className={`flex gap-3 ${viewMode === 'list' ? 'flex-row' : 'flex-col sm:flex-row'}`}>
            <Link
              href={`/hospitals/${hospital.id}`}
              className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center font-semibold shadow-sm hover:shadow-md"
            >
              View Details & Get Quote
            </Link>
            <button
              onClick={() => onCompareToggle(hospital.id)}
              className={`px-6 py-3 border-2 rounded-lg font-semibold transition-all ${
                isSelected
                  ? 'border-blue-600 bg-blue-50 text-blue-700'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {isSelected ? 'Selected' : 'Compare'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}