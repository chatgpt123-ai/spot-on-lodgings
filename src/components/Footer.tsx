
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <span className="text-pg-purple-dark text-xl font-bold">Spot-On</span>
              <span className="text-pg-purple text-xl font-medium ml-1">Lodgings</span>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Find your perfect PG accommodation with ease. Trusted by thousands of students and professionals.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-700 tracking-wider uppercase">Navigation</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/" className="text-base text-gray-500 hover:text-pg-purple">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/listings" className="text-base text-gray-500 hover:text-pg-purple">
                  Listings
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-base text-gray-500 hover:text-pg-purple">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-700 tracking-wider uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-4">
              <li className="text-base text-gray-500">
                <span className="block">123 Main Street</span>
                <span className="block">Bangalore, 560001</span>
              </li>
              <li className="text-base text-gray-500">
                <span className="block">info@spotonlodgings.com</span>
                <span className="block">+91 9876543210</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-base text-gray-500">
            &copy; 2025 Spot-On Lodgings. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="#" className="text-gray-500 hover:text-pg-purple">
              Terms of Service
            </Link>
            <Link to="#" className="text-gray-500 hover:text-pg-purple">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
