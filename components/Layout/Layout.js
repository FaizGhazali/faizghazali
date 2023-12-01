import React from "react";
import "../../styles/global.css";
import Header from "./Header";
import Footer from "./Footer";

const MyLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900  ">
      <Header/>
      <main className='flex-1'>{children}</main>
      <Footer className="py-4"/>
    </div>
  );
};

export default MyLayout;
