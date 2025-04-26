
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const usePGListings = () => {
  return useQuery({
    queryKey: ['pg-listings'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('pg_listings')
        .select('*');
      
      if (error) throw error;
      return data;
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
      return data;
    }
  });
};
