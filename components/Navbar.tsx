import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-indigo-600">
                TaskManager
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link href="/profile" className="text-gray-700 hover:text-indigo-600">
              Profile
            </Link>
            <button className="ml-4 text-gray-700 hover:text-indigo-600">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;