import React from 'react';
import MyLayout from '../components/Layout/HomeLayout';

export default function HomePage() {
  return (
    <div class="flex">
      <div className="bg-purple-800 w-3/5 h-screen p-4 flex flex-col">
        <div className="text-white text-xl font-bold">Portfolio Web App</div>
        <div className="absolute left-0 top-1/2 text-white text-sm">All-in-one project to keep track</div>

      </div>



      <div class="bg-blue-500 w-2/5 h-16"></div>
    </div>
  );
};


