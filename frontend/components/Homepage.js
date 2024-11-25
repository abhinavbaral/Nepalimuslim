import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to Our App</h1>
      <div className="space-x-4">
        <Link to="/signup" className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600">
          Sign Up
        </Link>
        <Link to="/login" className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600">
          Log In
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
