import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-full h-[100vh] bg-amber-300 flex flex-col justify-center items-center"> 
      <h1 className="text-6xl text-white font-serif font-bold mb-4">404 Not Found</h1>     
      <p className="text-xl text-white mb-6">The page you are looking for does not exist.</p>
      <Link to="/" className="text-xl text-white border-2 border-white px-4 py-2 ">Go to Home</Link>
    </div>
  );
};

export default Error;
