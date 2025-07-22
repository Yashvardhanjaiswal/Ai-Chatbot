import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary-500">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. 
            It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200"
          >
            <Home className="h-5 w-5 mr-2" />
            Go Home
          </Link>
          
          <div className="flex justify-center space-x-4">
            <Link
              to="/about"
              className="text-primary-600 hover:text-primary-500 text-sm"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-primary-600 hover:text-primary-500 text-sm"
            >
              Contact
            </Link>
            <Link
              to="/chat"
              className="text-primary-600 hover:text-primary-500 text-sm"
            >
              Try Chat
            </Link>
          </div>
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-sm">
          <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Looking for something specific?
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Try our AI chatbot - it might be able to help you find what you're looking for!
          </p>
          <Link
            to="/chat"
            className="inline-flex items-center px-4 py-2 border border-primary-600 text-sm font-medium rounded-md text-primary-600 hover:bg-primary-50 transition-colors duration-200"
          >
            Ask AI Assistant
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;