
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PGCard from '../components/PGCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapPin, Search, Home, CheckCircle } from 'lucide-react';
import { useFeaturedListings } from '@/hooks/usePGListings';

const Index = () => {
  const { data: featuredListings, isLoading } = useFeaturedListings();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1560185009-5bf9f2849488?auto=format&fit=crop&w=1800&q=80" 
              alt="Accommodations" 
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-pg-purple/20 to-pg-purple-light/10"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Find Your Perfect PG Accommodation
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover comfortable and affordable PG accommodations that feel just like home.
              </p>
              
              <div className="bg-white rounded-lg shadow-lg p-2 md:p-3 max-w-2xl mx-auto">
                <div className="flex flex-col md:flex-row gap-2">
                  <div className="flex-grow relative">
                    <MapPin size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <input
                      type="text"
                      placeholder="Search by location..."
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pg-purple focus:border-transparent"
                    />
                  </div>
                  <Link to="/listings">
                    <Button className="w-full md:w-auto bg-pg-purple hover:bg-pg-purple-dark">
                      <Search size={18} className="mr-2" />
                      Search
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gradient-to-b from-white to-pg-neutral-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
              <p className="mt-4 text-lg text-gray-600">
                We make finding your ideal PG accommodation simple and convenient
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-pg-purple/10 rounded-full flex items-center justify-center">
                  <Search size={24} className="text-pg-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Easy to Search</h3>
                <p className="text-gray-600">
                  Find the perfect PG accommodation that matches your preferences with our advanced filters.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-pg-purple/10 rounded-full flex items-center justify-center">
                  <Home size={24} className="text-pg-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality Listings</h3>
                <p className="text-gray-600">
                  All our PG listings are verified to ensure comfort, safety, and the amenities you need.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-pg-purple/10 rounded-full flex items-center justify-center">
                  <CheckCircle size={24} className="text-pg-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Transparent Pricing</h3>
                <p className="text-gray-600">
                  Clear and honest pricing with no hidden fees, so you know exactly what you're paying for.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Listings Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-baseline mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Featured PG Accommodations</h2>
              <Link to="/listings" className="text-pg-purple hover:text-pg-purple-dark font-medium">
                View All →
              </Link>
            </div>
            
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="animate-pulse">
                    <div className="bg-gray-200 h-48 rounded-t-lg"></div>
                    <div className="p-4 space-y-4">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {featuredListings?.slice(0, 4).map((pg) => (
                  <div key={pg.id} className="h-full">
                    <PGCard pg={pg} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-pg-purple">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Find Your Ideal PG Accommodation?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Browse through our listings and discover PG accommodations that match your preferences and budget.
            </p>
            <Link to="/listings">
              <Button className="bg-white text-pg-purple hover:bg-gray-100">
                Explore All Listings
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
