
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { PGListing } from "@/types/pg";

// Helper function to transform Supabase response to match our PGListing interface
const mapPGListingFromSupabase = (listing: any): PGListing => {
  return {
    id: listing.id,
    name: listing.name,
    location: listing.location,
    area: listing.area,
    city: listing.city,
    rent: listing.rent,
    type: listing.type,
    roomType: listing.room_type,
    amenities: listing.amenities,
    images: listing.images,
    description: listing.description,
    contactName: listing.contact_name,
    contactPhone: listing.contact_phone,
    contactEmail: listing.contact_email,
    featured: listing.featured || false,
    rating: listing.rating,
    reviewCount: listing.review_count
  };
};

export const usePGListings = () => {
  return useQuery({
    queryKey: ['pg-listings'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('pg_listings')
        .select('*');
      
      if (error) throw error;
      return data.map(mapPGListingFromSupabase);
    }
  });
};

export const useFeaturedListings = () => {
  return useQuery({
    queryKey: ['featured-listings'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('pg_listings')
        .select('*')
        .eq('featured', true);
      
      if (error) throw error;
      return data.map(mapPGListingFromSupabase);
    }
  });
};

export const usePGListing = (id: string) => {
  return useQuery({
    queryKey: ['pg-listing', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('pg_listings')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) throw error;
      return mapPGListingFromSupabase(data);
    },
    enabled: !!id
  });
};
