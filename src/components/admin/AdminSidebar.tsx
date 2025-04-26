
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  ListFilter, 
  LogOut, 
  Plus 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const AdminSidebar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <div className="bg-white border-r h-full px-4 py-6 w-64 hidden md:block">
      <div className="flex items-center mb-8 px-2">
        <Link to="/admin/dashboard" className="flex items-center">
          <span className="text-pg-purple-dark text-xl font-bold">Admin</span>
          <span className="text-pg-purple text-xl font-medium ml-1">Panel</span>
        </Link>
      </div>
      
      <div className="space-y-2">
        <Link to="/admin/dashboard">
          <Button 
            variant={isActive('/admin/dashboard') ? 'default' : 'ghost'} 
            className={`w-full justify-start ${
              isActive('/admin/dashboard') 
                ? 'bg-pg-purple text-white hover:bg-pg-purple-dark' 
                : 'text-gray-700 hover:text-pg-purple hover:bg-gray-100'
            }`}
          >
            <Home size={18} className="mr-2" />
            Dashboard
          </Button>
        </Link>
        
        <Link to="/admin/add-listing">
          <Button 
            variant={isActive('/admin/add-listing') ? 'default' : 'ghost'} 
            className={`w-full justify-start ${
              isActive('/admin/add-listing') 
                ? 'bg-pg-purple text-white hover:bg-pg-purple-dark' 
                : 'text-gray-700 hover:text-pg-purple hover:bg-gray-100'
            }`}
          >
            <Plus size={18} className="mr-2" />
            Add New Listing
          </Button>
        </Link>
      </div>
      
      <div className="absolute bottom-6 left-4 right-4">
        <Link to="/">
          <Button 
            variant="outline" 
            className="w-full justify-start text-gray-700 border-gray-300"
          >
            <LogOut size={18} className="mr-2" />
            Return to Site
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;
