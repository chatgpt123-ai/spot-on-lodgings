
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  ListFilter, 
  LogOut, 
  Menu, 
  Plus, 
  X 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const AdminMobileNav = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="md:hidden bg-white border-b py-3 px-4 flex justify-between items-center">
      <Link to="/admin/dashboard" className="flex items-center">
        <span className="text-pg-purple-dark text-lg font-bold">Admin</span>
        <span className="text-pg-purple text-lg font-medium ml-1">Panel</span>
      </Link>
      
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu size={24} />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-8">
              <span className="text-pg-purple-dark text-xl font-bold">Admin</span>
              <span className="text-pg-purple text-xl font-medium">Panel</span>
            </div>
            
            <div className="space-y-2">
              <Link to="/admin/dashboard" onClick={() => setOpen(false)}>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-gray-700 hover:text-pg-purple hover:bg-gray-100"
                >
                  <Home size={18} className="mr-2" />
                  Dashboard
                </Button>
              </Link>
              
              <Link to="/admin/add-listing" onClick={() => setOpen(false)}>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-gray-700 hover:text-pg-purple hover:bg-gray-100"
                >
                  <Plus size={18} className="mr-2" />
                  Add New Listing
                </Button>
              </Link>
            </div>
            
            <div className="mt-auto">
              <Link to="/" onClick={() => setOpen(false)}>
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
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AdminMobileNav;
