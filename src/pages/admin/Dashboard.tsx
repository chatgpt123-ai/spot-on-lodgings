
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminMobileNav from '../../components/admin/AdminMobileNav';
import AdminPGTable from '../../components/admin/AdminPGTable';
import { pgListings } from '../../data/pgListings';
import { PGListing } from '../../types/pg';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const Dashboard = () => {
  const navigate = useNavigate();
  const [listings, setListings] = useState<PGListing[]>([]);

  useEffect(() => {
    // In a real app, would check for auth token
    const isLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    if (!isLoggedIn) {
      navigate('/admin/login');
      return;
    }
    
    setListings(pgListings);
  }, [navigate]);

  const handleDeleteListing = (id: string) => {
    // In a real app, would call API to delete
    setListings((prevListings) => prevListings.filter(listing => listing.id !== id));
    toast.success('PG listing deleted successfully');
  };

  return (
    <div className="min-h-screen bg-pg-neutral-100 flex flex-col">
      <AdminMobileNav />
      
      <div className="flex-1 flex">
        <AdminSidebar />
        
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            <header className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="mt-1 text-gray-600">
                  Manage your PG accommodation listings
                </p>
              </div>
              
              <Link to="/admin/add-listing" className="mt-4 sm:mt-0">
                <Button className="bg-pg-purple hover:bg-pg-purple-dark">
                  <Plus size={18} className="mr-2" />
                  Add New Listing
                </Button>
              </Link>
            </header>
            
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-6 border-b">
                <h2 className="text-lg font-medium">PG Listings</h2>
                <p className="text-gray-500 text-sm">
                  {listings.length} listings found
                </p>
              </div>
              
              <AdminPGTable 
                listings={listings} 
                onDeleteListing={handleDeleteListing} 
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
