export interface Hospital {
  id: string;
  name: string;
  logo: string;
  location: {
    city: string;
    province: 'Kigali' | 'Northern Province' | 'Southern Province' | 'Eastern Province' | 'Western Province';
  };
  specialties: string[];
  rating: number;
  reviewCount: number;
  priceRange: {
    min: number;
    max: number;
    currency: string;
  };
  facilities: string[];
  badges: ('Verified' | 'Featured')[];
  languages: ('English' | 'French' | 'Swahili' | 'Kinyarwanda')[];
}

export type Language = 'English' | 'French' | 'Swahili' | 'Kinyarwanda';

export interface HospitalFilters {
  search: string;
  specialties: string[];
  location: string[];
  budgetRange: string;
  languages: Language[];
  minRating: number;
}

export type SortOption = 'relevant' | 'rating' | 'reviews' | 'alphabetical';
export type ViewMode = 'grid' | 'list';