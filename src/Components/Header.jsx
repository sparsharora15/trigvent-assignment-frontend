import React from "react";

const Header = () => {
  return (
    <div className="bg-slate-600">
      <div className="w-full flex items-center py-5 px-2">
        <i className="fa-solid fa-bars text-2xl mr-2 cursor-pointer" style={{color: "#ffffff"}}></i>
        <h2 className="text-white flex items-center text-2xl">
          Welcome on our page
        </h2>
      </div>
    </div>
  );
};

export default Header;
