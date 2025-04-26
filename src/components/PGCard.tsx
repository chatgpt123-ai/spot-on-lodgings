
import React from 'react';
import { Link } from 'react-router-dom';
import { PGListing } from '../types/pg';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin } from 'lucide-react';

interface PGCardProps {
  pg: PGListing;
}

const PGCard: React.FC<PGCardProps> = ({ pg }) => {
  return (
    <Link to={`/listings/${pg.id}`}>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={pg.images[0]} 
            alt={pg.name} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
          />
          {pg.featured && (
            <Badge className="absolute top-2 left-2 bg-pg-purple text-white">
              Featured
            </Badge>
          )}
          <Badge className={`absolute top-2 right-2 ${
            pg.type === 'Boys' ? 'bg-blue-500' : 
            pg.type === 'Girls' ? 'bg-pink-500' : 
            'bg-green-500'
          } text-white`}>
            {pg.type}
          </Badge>
        </div>
        
        <CardContent className="p-4 flex-grow flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{pg.name}</h3>
            {pg.rating && (
              <div className="flex items-center bg-yellow-100 px-2 py-0.5 rounded-full">
                <span className="text-yellow-600 text-xs font-medium">{pg.rating} ★</span>
              </div>
            )}
          </div>
          
          <div className="flex items-center text-gray-500 mb-3">
            <MapPin size={16} className="mr-1 flex-shrink-0" />
            <p className="text-sm line-clamp-1">{pg.location}, {pg.city}</p>
          </div>
          
          <div className="flex flex-wrap gap-1 mt-1 mb-3">
            {pg.amenities.slice(0, 3).map((amenity, index) => (
              <Badge key={index} variant="outline" className="text-xs bg-pg-neutral-100">
                {amenity}
              </Badge>
            ))}
            {pg.amenities.length > 3 && (
              <Badge variant="outline" className="text-xs bg-pg-neutral-100">
                +{pg.amenities.length - 3} more
              </Badge>
            )}
          </div>
          
          <div className="mt-auto pt-3 border-t border-gray-100 flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">{pg.roomType} Room</p>
            </div>
            <div>
              <p className="text-pg-purple-dark font-bold">₹{pg.rent.toLocaleString()}</p>
              <p className="text-xs text-gray-500">per month</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PGCard;
