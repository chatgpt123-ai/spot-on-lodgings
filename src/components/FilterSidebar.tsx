
import React, { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { FilterOptions } from '../types/pg';
import { amenitiesList, locationsList, pgTypes, roomTypes } from '../data/pgListings';

interface FilterSidebarProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ filters, onFilterChange, isOpen, onToggle }) => {
  const [localFilters, setLocalFilters] = useState<FilterOptions>(filters);

  const handleLocationChange = (location: string) => {
    setLocalFilters({ ...localFilters, location });
  };

  const handleRentChange = (value: number[]) => {
    setLocalFilters({
      ...localFilters,
      minRent: value[0],
      maxRent: value[1],
    });
  };

  const handleTypeChange = (type: string, isChecked: boolean) => {
    let newTypes = [...localFilters.type];
    
    if (isChecked) {
      newTypes.push(type);
    } else {
      newTypes = newTypes.filter(t => t !== type);
    }
    
    setLocalFilters({ ...localFilters, type: newTypes });
  };

  const handleRoomTypeChange = (type: string, isChecked: boolean) => {
    let newTypes = [...localFilters.roomType];
    
    if (isChecked) {
      newTypes.push(type);
    } else {
      newTypes = newTypes.filter(t => t !== type);
    }
    
    setLocalFilters({ ...localFilters, roomType: newTypes });
  };

  const handleAmenityChange = (amenity: string, isChecked: boolean) => {
    let newAmenities = [...localFilters.amenities];
    
    if (isChecked) {
      newAmenities.push(amenity);
    } else {
      newAmenities = newAmenities.filter(a => a !== amenity);
    }
    
    setLocalFilters({ ...localFilters, amenities: newAmenities });
  };

  const applyFilters = () => {
    onFilterChange(localFilters);
  };

  const resetFilters = () => {
    const resetFilters: FilterOptions = {
      location: '',
      minRent: 0,
      maxRent: 20000,
      type: [],
      roomType: [],
      amenities: [],
    };
    setLocalFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <>
      {/* Mobile filter button */}
      <div className="md:hidden fixed bottom-4 right-4 z-20">
        <Button 
          onClick={onToggle}
          className="bg-pg-purple hover:bg-pg-purple-dark"
        >
          Filters
        </Button>
      </div>
      
      <div className={`
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} 
        fixed md:static h-screen md:h-auto z-30 transition-transform duration-300 ease-in-out
        bg-white shadow-lg md:shadow-none w-3/4 md:w-64 p-4 overflow-y-auto
      `}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Filters</h2>
          <Button variant="ghost" className="md:hidden" onClick={onToggle}>
            X
          </Button>
        </div>
        
        {/* Location Filter */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-3">Location</h3>
          <div className="space-y-2">
            <Label 
              htmlFor="location-all" 
              className="flex items-center cursor-pointer"
            >
              <Checkbox 
                id="location-all"
                checked={localFilters.location === ''}
                onCheckedChange={() => handleLocationChange('')}
                className="mr-2"
              />
              <span className="text-sm">All Locations</span>
            </Label>
            
            {locationsList.map((location) => (
              <Label 
                key={location} 
                htmlFor={`location-${location}`}
                className="flex items-center cursor-pointer"
              >
                <Checkbox 
                  id={`location-${location}`}
                  checked={localFilters.location === location}
                  onCheckedChange={(checked) => 
                    handleLocationChange(checked ? location : '')
                  }
                  className="mr-2"
                />
                <span className="text-sm">{location}</span>
              </Label>
            ))}
          </div>
        </div>
        
        {/* Rent Range Filter */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-3">Rent Range</h3>
          <div className="px-2">
            <Slider 
              defaultValue={[localFilters.minRent, localFilters.maxRent]} 
              max={20000} 
              step={500}
              onValueChange={handleRentChange}
              className="mb-2"
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>₹{localFilters.minRent}</span>
              <span>₹{localFilters.maxRent}</span>
            </div>
          </div>
        </div>
        
        {/* PG Type Filter */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-3">PG Type</h3>
          <div className="space-y-2">
            {pgTypes.map((type) => (
              <Label 
                key={type} 
                htmlFor={`type-${type}`}
                className="flex items-center cursor-pointer"
              >
                <Checkbox 
                  id={`type-${type}`}
                  checked={localFilters.type.includes(type)}
                  onCheckedChange={(checked) => 
                    handleTypeChange(type, checked as boolean)
                  }
                  className="mr-2"
                />
                <span className="text-sm">{type}</span>
              </Label>
            ))}
          </div>
        </div>
        
        {/* Room Type Filter */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-3">Room Type</h3>
          <div className="space-y-2">
            {roomTypes.map((type) => (
              <Label 
                key={type} 
                htmlFor={`room-${type}`}
                className="flex items-center cursor-pointer"
              >
                <Checkbox 
                  id={`room-${type}`}
                  checked={localFilters.roomType.includes(type)}
                  onCheckedChange={(checked) => 
                    handleRoomTypeChange(type, checked as boolean)
                  }
                  className="mr-2"
                />
                <span className="text-sm">{type}</span>
              </Label>
            ))}
          </div>
        </div>
        
        {/* Amenities Filter */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-3">Amenities</h3>
          <div className="space-y-2">
            {amenitiesList.map((amenity) => (
              <Label 
                key={amenity} 
                htmlFor={`amenity-${amenity}`}
                className="flex items-center cursor-pointer"
              >
                <Checkbox 
                  id={`amenity-${amenity}`}
                  checked={localFilters.amenities.includes(amenity)}
                  onCheckedChange={(checked) => 
                    handleAmenityChange(amenity, checked as boolean)
                  }
                  className="mr-2"
                />
                <span className="text-sm">{amenity}</span>
              </Label>
            ))}
          </div>
        </div>
        
        {/* Filter Actions */}
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={resetFilters}
          >
            Reset
          </Button>
          <Button 
            className="flex-1 bg-pg-purple hover:bg-pg-purple-dark"
            onClick={applyFilters}
          >
            Apply
          </Button>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;
