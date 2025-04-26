
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminMobileNav from '../../components/admin/AdminMobileNav';
import AdminPGForm from '../../components/admin/AdminPGForm';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

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

  const handleSubmit = async (data: any) => {
    try {
      // Prepare the data for Supabase (convert camelCase to snake_case)
      const listing = {
        name: data.name,
        location: data.location,
        area: data.area,
        city: data.city,
        rent: data.rent,
        type: data.type,
        room_type: data.roomType,
        amenities: data.amenities,
        images: data.images,
        description: data.description,
        contact_name: data.contactName,
        contact_phone: data.contactPhone,
        contact_email: data.contactEmail,
        featured: data.featured,
      };

      const { error } = await supabase
        .from('pg_listings')
        .insert([listing]);

      if (error) throw error;

      toast.success('PG listing added successfully');
      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Error adding listing:', error);
      toast.error('Failed to add PG listing');
    }
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
