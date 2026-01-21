'use client';

import { HospitalFilters } from '@/types/hospitals';

interface FilterSidebarProps {
  filters: HospitalFilters;
  onFilterChange: (filters: HospitalFilters) => void;
}

const SPECIALTIES = [
  'Cardiology',
  'Oncology',
  'Orthopedics',
  'Eye Care',
  'Dental',
  'Maternity',
  'Pediatrics',
  'General Surgery',
];

const LOCATIONS = [
  'Kigali',
  'Northern Province',
  'Southern Province',
  'Eastern Province',
  'Western Province',
];

const BUDGET_RANGES = [
  { label: 'Under $1,000', value: '0-1000' },
  { label: '$1,000 - $3,000', value: '1000-3000' },
  { label: '$3,000 - $5,000', value: '3000-5000' },
  { label: '$5,000+', value: '5000+' },
];

const LANGUAGES = ['English', 'French', 'Swahili', 'Kinyarwanda'] as const;

const RATINGS = [
  { label: '4+ stars', value: 4 },
  { label: '3+ stars', value: 3 },
  { label: 'Any rating', value: 0 },
];

export default function FilterSidebar({ filters, onFilterChange }: FilterSidebarProps) {
  const handleCheckboxChange = (
    category: 'specialties' | 'location' | 'languages',
    value: string
  ) => {
    const currentValues = filters[category] as string[];
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value];
    
    onFilterChange({ ...filters, [category]: newValues });
  };

  return (
    <aside className="w-80 bg-white p-6 rounded-lg shadow-sm border border-gray-200 h-fit sticky top-4">
      <h2 className="text-xl font-semibold mb-6 text-gray-900">Filters</h2>

      {/* Search Box */}
      <div className="mb-6">
        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
          Search
        </label>
        <input
          id="search"
          type="text"
          placeholder="Hospital name or keyword"
          value={filters.search}
          onChange={(e) => onFilterChange({ ...filters, search: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
        />
      </div>

      {/* Specialties */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Specialty</h3>
        <div
          className="space-y-2 max-h-48 overflow-y-auto pr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-md"
          tabIndex={0}
          aria-label="Specialty filter list, scroll to view more options"
        >
          {SPECIALTIES.map((specialty) => (
            <label key={specialty} className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded">
              <input
                type="checkbox"
                checked={filters.specialties.includes(specialty)}
                onChange={() => handleCheckboxChange('specialties', specialty)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
              />
              <span className="ml-2 text-sm text-gray-700">{specialty}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Location */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Location</h3>
        <div className="space-y-2">
          {LOCATIONS.map((location) => (
            <label key={location} className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded">
              <input
                type="checkbox"
                checked={filters.location.includes(location)}
                onChange={() => handleCheckboxChange('location', location)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
              />
              <span className="ml-2 text-sm text-gray-700">{location}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Budget Range */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Budget Range</h3>
        <div className="space-y-2">
          {BUDGET_RANGES.map((range) => (
            <label key={range.value} className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded">
              <input
                type="radio"
                name="budget"
                checked={filters.budgetRange === range.value}
                onChange={() => onFilterChange({ ...filters, budgetRange: range.value })}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 cursor-pointer"
              />
              <span className="ml-2 text-sm text-gray-700">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Languages</h3>
        <div className="space-y-2">
          {LANGUAGES.map((language) => (
            <label key={language} className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded">
              <input
                type="checkbox"
                checked={filters.languages.includes(language)}
                onChange={() => handleCheckboxChange('languages', language)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
              />
              <span className="ml-2 text-sm text-gray-700">{language}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Minimum Rating */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Minimum Rating</h3>
        <div className="space-y-2">
          {RATINGS.map((rating) => (
            <label key={rating.value} className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded">
              <input
                type="radio"
                name="rating"
                checked={filters.minRating === rating.value}
                onChange={() => onFilterChange({ ...filters, minRating: rating.value })}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 cursor-pointer"
              />
              <span className="ml-2 text-sm text-gray-700">{rating.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      <button
        onClick={() =>
          onFilterChange({
            search: '',
            specialties: [],
            location: [],
            budgetRange: '',
            languages: [],
            minRating: 0,
          })
        }
        className="w-full py-2 text-sm text-blue-600 hover:text-blue-700 font-medium hover:bg-blue-50 rounded transition"
      >
        Clear All Filters
      </button>
    </aside>
  );
}