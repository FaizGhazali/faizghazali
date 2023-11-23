import React from "react";
import "../../styles/global.css";
import Header from "./Header";
import Footer from "./Footer";

const MyLayout = ({ children }) => {
  return (
    <div className="relative z-0 flex flex-col h-full w-full overflow-hidden bg-gray-900">
      <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default MyLayout;
