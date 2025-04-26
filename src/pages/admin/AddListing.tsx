
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminMobileNav from '../../components/admin/AdminMobileNav';
import AdminPGForm from '../../components/admin/AdminPGForm';
import { v4 as uuidv4 } from 'uuid';

const AddListing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // In a real app, would check for auth token
    const isLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    if (!isLoggedIn) {
      navigate('/admin/login');
      return;
    }
  }, [navigate]);

  const handleSubmit = (data: any) => {
    // In a real app, would call API to add new listing
    console.log('New Listing Data:', { id: uuidv4(), ...data });
    navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-screen bg-pg-neutral-100 flex flex-col">
      <AdminMobileNav />
      
      <div className="flex-1 flex">
        <AdminSidebar />
        
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            <header className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900">Add New PG Listing</h1>
              <p className="mt-1 text-gray-600">
                Fill in the details to create a new PG accommodation listing
              </p>
            </header>
            
            <div className="bg-white rounded-lg shadow p-6">
              <AdminPGForm onSubmit={handleSubmit} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddListing;
