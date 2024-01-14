import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-white py-8 bg-gray-900">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">GreenScapes</h1>
        </div>

        <div className="flex space-x-4">
          <a href="www.Google.com" className="hover:text-gray-400">instagram</a>
          <a href="www.Google.com" className="hover:text-gray-400">Youtube</a>
          <a href="www.Google.com" className="hover:text-gray-400">LinkedIn</a>
          <a href="www.Google.com" className="hover:text-gray-400">Gmail</a>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm">© {new Date().getFullYear()} GreenScapes. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
