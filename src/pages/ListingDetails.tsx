
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PGListing } from '../types/pg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PGDetails from '../components/PGDetails';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useQuery } from '@tanstack/react-query';

const ListingDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data: pgData, isLoading, error } = useQuery({
    queryKey: ['pg-listing', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('pg_listings')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) throw error;
      return data;
    }
  });

  if (error) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center p-8">
          <h1 className="text-3xl font-bold mb-4">PG Not Found</h1>
          <p className="text-gray-600 mb-6">The PG accommodation you're looking for doesn't exist or has been removed.</p>
          <Link to="/listings">
            <Button className="bg-pg-purple hover:bg-pg-purple-dark">
              Browse All Listings
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Back Button */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link to="/listings">
              <Button variant="ghost" className="text-gray-600 hover:text-pg-purple">
                <ArrowLeft size={18} className="mr-2" />
                Back to Listings
              </Button>
            </Link>
          </div>
        </div>
        
        {/* PG Details */}
        {isLoading ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="animate-pulse flex flex-col items-center">
                <div className="h-8 w-48 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 w-64 bg-gray-200 rounded mb-8"></div>
                <div className="h-64 w-full max-w-3xl bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        ) : pgData ? (
          <PGDetails pg={pgData} />
        ) : null}
      </main>
      
      <Footer />
    </div>
  );
};

export default ListingDetails;
