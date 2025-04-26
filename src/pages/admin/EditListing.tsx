
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminMobileNav from '../../components/admin/AdminMobileNav';
import AdminPGForm from '../../components/admin/AdminPGForm';
import { pgListings } from '../../data/pgListings';
import { PGListing } from '../../types/pg';

const EditListing = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [pgData, setPgData] = useState<PGListing | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    // In a real app, would check for auth token
    const isLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    if (!isLoggedIn) {
      navigate('/admin/login');
      return;
    }
    
    const pg = pgListings.find(pg => pg.id === id);
    
    if (pg) {
      setPgData(pg);
    } else {
      setNotFound(true);
    }
  }, [id, navigate]);

  const handleSubmit = (data: any) => {
    // In a real app, would call API to update listing
    console.log('Updated Listing Data:', { id, ...data });
    navigate('/admin/dashboard');
  };

  if (notFound) {
    return (
      <div className="min-h-screen bg-pg-neutral-100 flex flex-col">
        <AdminMobileNav />
        
        <div className="flex-1 flex">
          <AdminSidebar />
          
          <main className="flex-1 p-6">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-lg shadow p-8 text-center">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">PG Listing Not Found</h2>
                <p className="text-gray-600 mb-6">
                  The PG listing you're trying to edit doesn't exist or has been removed.
                </p>
                <button
                  onClick={() => navigate('/admin/dashboard')}
                  className="bg-pg-purple text-white px-4 py-2 rounded hover:bg-pg-purple-dark"
                >
                  Return to Dashboard
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pg-neutral-100 flex flex-col">
      <AdminMobileNav />
      
      <div className="flex-1 flex">
        <AdminSidebar />
        
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            <header className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900">Edit PG Listing</h1>
              <p className="mt-1 text-gray-600">
                Update the details for {pgData?.name || 'this PG accommodation'}
              </p>
            </header>
            
            <div className="bg-white rounded-lg shadow p-6">
              {pgData ? (
                <AdminPGForm 
                  initialData={pgData} 
                  onSubmit={handleSubmit} 
                  isEdit={true} 
                />
              ) : (
                <div className="text-center p-8">
                  <div className="animate-pulse">
                    <div className="h-6 bg-gray-200 rounded w-1/4 mx-auto mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-6"></div>
                    <div className="space-y-4">
                      <div className="h-4 bg-gray-200 rounded"></div>
                      <div className="h-4 bg-gray-200 rounded"></div>
                      <div className="h-4 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EditListing;
