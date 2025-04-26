
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-pg-purple-dark text-xl font-bold">Spot-On</span>
              <span className="text-pg-purple text-xl font-medium ml-1">Lodgings</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <Link to="/" className="text-gray-700 hover:text-pg-purple px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/listings" className="text-gray-700 hover:text-pg-purple px-3 py-2 rounded-md text-sm font-medium">
              Listings
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-pg-purple px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
            <Link to="/admin/login">
              <Button variant="outline" className="ml-3 text-pg-purple border-pg-purple hover:bg-pg-purple hover:text-white">
                Admin Login
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-pg-purple focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-pg-purple hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/listings" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-pg-purple hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Listings
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-pg-purple hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/admin/login" 
              className="block px-3 py-2 rounded-md text-base font-medium text-pg-purple hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Admin Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
