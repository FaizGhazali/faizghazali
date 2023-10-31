import React from "react";
import MyLayout from "../components/Layout/HomeLayout";

export default function HomePage() {
  return (
    <div class="flex">
      <div className="bg-purple-800 w-3/5 h-screen p-4 flex flex-col">
        <div className="text-white text-xl font-bold">Portfolio Web App</div>
        <div className="absolute  top-1/2 text-white text-sm">
          All-in-one project to keep track
        </div>
      </div>

      <div class="bg-blue-500 w-2/5 h-screen ">
        <div className="flex flex-col  items-center justify-center h-screen   text-white text-sm  ">
          <div className="flex flex-col  items-center justify-center h-screen ">
            <h1 className="">Get Started</h1>
            <div className=" flex gap-5  ">
              <div className="">Login</div>
              <div className="">Sign Up</div>
            </div>
          </div>

          <div className="mt-auto">
            {/* Use "mt-auto" to push content to the bottom */}
            <div className="flex flex-col items-center">
              <h1>Faiz Ghazali</h1>
              <div className="flex gap-1">
                <h3>TOC</h3>
                <h1>|</h1>
                <h3>Privacy Policy</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
