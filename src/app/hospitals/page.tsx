'use client';

import { useState, useMemo } from 'react';
import Navbar from '@/components/atoms/Navbar';
import Footer from '@/components/atoms/Footer';
import FilterSidebar from '@/components/hospitals/FilterSidebar';
import HospitalCard from '@/components/hospitals/HospitalCard';
import { HospitalFilters, SortOption, ViewMode } from '@/types/hospitals';
import { MOCK_HOSPITALS } from '@/data/mockHospitals';

export default function HospitalsPage() {
  const [filters, setFilters] = useState<HospitalFilters>({
    search: '',
    specialties: [],
    location: [],
    budgetRange: '',
    languages: [],
    minRating: 0,
  });
  const [sortBy, setSortBy] = useState<SortOption>('relevant');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [selectedForCompare, setSelectedForCompare] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const filteredHospitals = useMemo(() => {
    let results = [...MOCK_HOSPITALS];

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      results = results.filter(
        (h) =>
          h.name.toLowerCase().includes(searchLower) ||
          h.specialties.some((s) => s.toLowerCase().includes(searchLower))
      );
    }

    if (filters.specialties.length > 0) {
      results = results.filter((h) =>
        filters.specialties.some((s) => h.specialties.includes(s))
      );
    }

    if (filters.location.length > 0) {
      results = results.filter((h) => filters.location.includes(h.location.province));
    }

    if (filters.budgetRange) {
      const [min, max] = filters.budgetRange.split('-').map(Number);
      results = results.filter((h) => {
        if (max) {
          return h.priceRange.min >= min && h.priceRange.max <= max;
        } else {
          return h.priceRange.min >= min;
        }
      });
    }

    if (filters.languages.length > 0) {
      results = results.filter((h) =>
        filters.languages.some((l) => h.languages.includes(l))
      );
    }

    if (filters.minRating > 0) {
      results = results.filter((h) => h.rating >= filters.minRating);
    }

    switch (sortBy) {
      case 'rating':
        results.sort((a, b) => b.rating - a.rating);
        break;
      case 'reviews':
        results.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case 'alphabetical':
        results.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return results;
  }, [filters, sortBy]);

  const totalPages = Math.ceil(filteredHospitals.length / itemsPerPage);
  
  const validCurrentPage = Math.min(currentPage, Math.max(1, totalPages));
  
  const paginatedHospitals = filteredHospitals.slice(
    (validCurrentPage - 1) * itemsPerPage,
    validCurrentPage * itemsPerPage
  );

  const handleCompareToggle = (hospitalId: string) => {
    setSelectedForCompare((prev) =>
      prev.includes(hospitalId)
        ? prev.filter((id) => id !== hospitalId)
        : [...prev, hospitalId]
    );
  };

  const handleFilterChange = (newFilters: HospitalFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleSortChange = (newSort: SortOption) => {
    setSortBy(newSort);
    setCurrentPage(1);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Hospitals</h1>
            <p className="text-gray-600">Browse and compare top hospitals in Rwanda</p>
          </div>

          <div className="flex gap-8">
            {/* Filter Sidebar */}
            <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              {/* Top Controls */}
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                  <p className="text-gray-700 font-semibold text-lg">
                    {filteredHospitals.length} {filteredHospitals.length === 1 ? 'hospital' : 'hospitals'} found
                  </p>

                  <div className="flex items-center gap-4 flex-wrap">
                    {/* Sort */}
                    <div className="flex items-center gap-2">
                      <label htmlFor="sort" className="text-sm text-gray-600 font-medium">
                        Sort by:
                      </label>
                      <select
                        id="sort"
                        value={sortBy}
                        onChange={(e) => handleSortChange(e.target.value as SortOption)}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer"
                      >
                        <option value="relevant">Most Relevant</option>
                        <option value="rating">Highest Rated</option>
                        <option value="reviews">Most Reviewed</option>
                        <option value="alphabetical">A-Z</option>
                      </select>
                    </div>

                    {/* View Toggle */}
                    <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`px-4 py-2 text-sm font-medium transition-colors ${
                          viewMode === 'grid'
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-50'
                        }`}
                        aria-label="Grid view"
                      >
                        <span className="hidden sm:inline">Grid</span>
                        <span className="sm:hidden">⊞</span>
                      </button>
                      <button
                        onClick={() => setViewMode('list')}
                        className={`px-4 py-2 text-sm font-medium transition-colors ${
                          viewMode === 'list'
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-50'
                        }`}
                        aria-label="List view"
                      >
                        <span className="hidden sm:inline">List</span>
                        <span className="sm:hidden">☰</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Compare Button */}
                {selectedForCompare.length > 0 && (
                  <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-semibold shadow-sm">
                    Compare Selected ({selectedForCompare.length})
                  </button>
                )}
              </div>

              {/* Hospital Cards */}
              {filteredHospitals.length === 0 ? (
                <div className="bg-white p-16 rounded-lg shadow-sm border border-gray-200 text-center">
                  <div className="text-6xl mb-4">🏥</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No hospitals found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    No hospitals match your filters. Try adjusting your criteria.
                  </p>
                  <button
                    onClick={() =>
                      handleFilterChange({
                        search: '',
                        specialties: [],
                        location: [],
                        budgetRange: '',
                        languages: [],
                        minRating: 0,
                      })
                    }
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Clear All Filters
                  </button>
                </div>
              ) : (
                <>
                  <div
                    className={
                      viewMode === 'grid'
                        ? 'grid grid-cols-1 lg:grid-cols-2 gap-6'
                        : 'space-y-6'
                    }
                  >
                    {paginatedHospitals.map((hospital) => (
                      <HospitalCard
                        key={hospital.id}
                        hospital={hospital}
                        viewMode={viewMode}
                        onCompareToggle={handleCompareToggle}
                        isSelected={selectedForCompare.includes(hospital.id)}
                      />
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
                      <button
                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                        disabled={validCurrentPage === 1}
                        className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors font-medium"
                      >
                        ← Previous
                      </button>
                      
                      {[...Array(Math.min(5, totalPages))].map((_, i) => {
                        let pageNum;
                        if (totalPages <= 5) {
                          pageNum = i + 1;
                        } else if (validCurrentPage <= 3) {
                          pageNum = i + 1;
                        } else if (validCurrentPage >= totalPages - 2) {
                          pageNum = totalPages - 4 + i;
                        } else {
                          pageNum = validCurrentPage - 2 + i;
                        }

                        return (
                          <button
                            key={pageNum}
                            onClick={() => setCurrentPage(pageNum)}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                              validCurrentPage === pageNum
                                ? 'bg-blue-600 text-white'
                                : 'border border-gray-300 hover:bg-gray-50'
                            }`}
                          >
                            {pageNum}
                          </button>
                        );
                      })}

                      <button
                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                        disabled={validCurrentPage === totalPages}
                        className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors font-medium"
                      >
                        Next →
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}