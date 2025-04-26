
import React, { useState, useEffect } from 'react';
import { pgListings } from '../data/pgListings';
import { PGListing, FilterOptions } from '../types/pg';
import PGCard from '../components/PGCard';
import FilterSidebar from '../components/FilterSidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';

const Listings = () => {
  const [listings, setListings] = useState<PGListing[]>([]);
  const [filteredListings, setFilteredListings] = useState<PGListing[]>([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    location: '',
    minRent: 0,
    maxRent: 20000,
    type: [],
    roomType: [],
    amenities: [],
  });

  useEffect(() => {
    setListings(pgListings);
    setFilteredListings(pgListings);
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      const filtered = listings.filter((pg) => {
        // Location filter
        if (filters.location && pg.location !== filters.location) {
          return false;
        }
        
        // Rent range filter
        if (pg.rent < filters.minRent || pg.rent > filters.maxRent) {
          return false;
        }
        
        // PG type filter
        if (filters.type.length > 0 && !filters.type.includes(pg.type)) {
          return false;
        }
        
        // Room type filter
        if (filters.roomType.length > 0 && !filters.roomType.includes(pg.roomType)) {
          return false;
        }
        
        // Amenities filter
        if (filters.amenities.length > 0) {
          const hasAllAmenities = filters.amenities.every((amenity) => 
            pg.amenities.includes(amenity)
          );
          if (!hasAllAmenities) {
            return false;
          }
        }
        
        return true;
      });
      
      setFilteredListings(filtered);
      setVisibleCount(6); // Reset visible count when filters change
    };
    
    applyFilters();
  }, [filters, listings]);

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  // Apply overlay to body when sidebar is open on mobile
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isSidebarOpen]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-gray-900">Find Your Perfect PG</h1>
            <p className="mt-2 text-lg text-gray-600">
              Browse through our available PG accommodations
            </p>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row">
            {/* Mobile overlay */}
            {isSidebarOpen && (
              <div 
                className="fixed inset-0 bg-black/50 z-20 md:hidden"
                onClick={toggleSidebar}
              ></div>
            )}
            
            {/* Sidebar */}
            <FilterSidebar 
              filters={filters} 
              onFilterChange={handleFilterChange} 
              isOpen={isSidebarOpen}
              onToggle={toggleSidebar}
            />
            
            {/* Listings */}
            <div className="flex-grow md:ml-8">
              {/* Results info */}
              <div className="mb-6">
                <p className="text-gray-600">
                  {filteredListings.length} PG{filteredListings.length !== 1 ? 's' : ''} found
                </p>
              </div>
              
              {/* Grid of PG cards */}
              {filteredListings.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredListings.slice(0, visibleCount).map((pg) => (
                      <div key={pg.id} className="h-full">
                        <PGCard pg={pg} />
                      </div>
                    ))}
                  </div>
                  
                  {/* Load more button */}
                  {visibleCount < filteredListings.length && (
                    <div className="mt-8 text-center">
                      <Button 
                        variant="outline" 
                        onClick={handleLoadMore}
                        className="border-pg-purple text-pg-purple hover:bg-pg-purple hover:text-white"
                      >
                        Load More
                      </Button>
                    </div>
                  )}
                </>
              ) : (
                <div className="py-16 text-center">
                  <p className="text-xl text-gray-600">No PGs match your filters.</p>
                  <p className="mt-2 text-gray-500">
                    Try adjusting your filter criteria to see more results.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Listings;
