
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const useAmenities = () => {
  return useQuery({
    queryKey: ['amenities'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('amenities')
        .select('*');
      
      if (error) throw error;
      return data.map(a => a.name);
    }
  });
};
