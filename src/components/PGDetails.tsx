
import React, { useState } from 'react';
import { PGListing } from '../types/pg';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Star } from 'lucide-react';

interface PGDetailsProps {
  pg: PGListing;
}

const PGDetails: React.FC<PGDetailsProps> = ({ pg }) => {
  const [mainImage, setMainImage] = useState(pg.images[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Gallery Section */}
      <div className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <div className="rounded-lg overflow-hidden h-64 md:h-96 bg-gray-200">
              <img 
                src={mainImage} 
                alt={pg.name} 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
            {pg.images.map((image, index) => (
              <div 
                key={index} 
                className={`rounded-lg overflow-hidden cursor-pointer h-32 ${
                  mainImage === image ? 'ring-2 ring-pg-purple' : ''
                }`}
                onClick={() => setMainImage(image)}
              >
                <img 
                  src={image} 
                  alt={`${pg.name} ${index + 1}`} 
                  className="w-full h-full object-cover" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* PG Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {/* Header */}
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{pg.name}</h1>
                <div className="flex items-center mt-1">
                  <MapPin size={16} className="text-gray-500 mr-1" />
                  <p className="text-gray-500">{pg.location}, {pg.city}</p>
                </div>
              </div>
              <div className="mt-2 sm:mt-0">
                <Badge className={`${
                  pg.type === 'Boys' ? 'bg-blue-500' : 
                  pg.type === 'Girls' ? 'bg-pink-500' : 
                  'bg-green-500'
                } text-white`}>
                  {pg.type}
                </Badge>
                {pg.rating && (
                  <div className="flex items-center mt-2">
                    <Star size={16} className="text-yellow-500 mr-1" />
                    <span className="font-semibold">{pg.rating}</span>
                    <span className="text-gray-500 text-sm ml-1">({pg.reviewCount} reviews)</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Description */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Description</h2>
            <p className="text-gray-700 leading-relaxed">{pg.description}</p>
          </div>
          
          {/* Amenities */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Amenities</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {pg.amenities.map((amenity, index) => (
                <div 
                  key={index}
                  className="flex items-center p-2 border rounded-md bg-pg-neutral-100"
                >
                  <span className="text-gray-800">{amenity}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Location Map */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Location</h2>
            <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                title="PG Location Map"
                width="100%"
                height="100%"
                frameBorder="0"
                src={`https://maps.google.com/maps?q=${pg.location},${pg.city}&z=15&output=embed`}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        
        {/* Contact & Pricing Card */}
        <div className="md:col-span-1">
          <div className="sticky top-20 bg-white rounded-lg shadow-md p-5 border">
            <div className="mb-4 pb-4 border-b">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold">₹{pg.rent.toLocaleString()}</h3>
                <span className="text-gray-500">per month</span>
              </div>
              <p className="text-gray-600">{pg.roomType} Room</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Contact Owner</h3>
              <div className="space-y-3">
                <p className="font-medium">{pg.contactName}</p>
                <div className="flex items-center">
                  <Phone size={16} className="text-gray-500 mr-2" />
                  <p className="text-gray-700">{pg.contactPhone}</p>
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="text-gray-500 mr-2" />
                  <p className="text-gray-700">{pg.contactEmail}</p>
                </div>
              </div>
            </div>
            
            <Button className="w-full bg-pg-purple hover:bg-pg-purple-dark">
              Request Callback
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PGDetails;
