
export interface PGListing {
  id: string;
  name: string;
  location: string;
  area: string;
  city: string;
  rent: number;
  type: 'Boys' | 'Girls' | 'Co-ed';
  roomType: 'Single' | 'Double' | 'Triple' | 'Multiple';
  amenities: string[];
  images: string[];
  description: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  featured: boolean;
  rating?: number;
  reviewCount?: number;
}

export interface FilterOptions {
  location: string;
  minRent: number;
  maxRent: number;
  type: string[];
  roomType: string[];
  amenities: string[];
}

export interface Admin {
  username: string;
  password: string;
}
