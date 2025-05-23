import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-indigo-600">PriceSync</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#" 
              className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a 
              href="#" 
              className="text-indigo-600 border-b-2 border-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Pricing
            </a>
            <a 
              href="#" 
              className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Features
            </a>
            <a 
              href="#" 
              className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </a>
          </nav>
          <div className="flex items-center">
            <button className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;