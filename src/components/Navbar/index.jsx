import React from 'react';
import Logo from '../../assets/logo-ferari.png';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-4 px-8 flex justify-between items-center z-50">
      {/* Logo Section */}
      <div className="flex items-center">
        <a href="#home">
          <img src={Logo} alt="Logo" className="h-12 w-10" />
        </a>
      </div>

      {/* Navigation Links with Button-like Hover Effect */}
      <div className="hidden md:flex space-x-4">
        <a
          href="#tata-tertib"
          className="text-gray-800 px-3 py-2 rounded-md hover:bg-[#EE1D23] hover:text-white transition-colors duration-300"
        >
          Tata Tertib
        </a>
        <a
          href="#ad-art"
          className="text-gray-800 px-3 py-2 rounded-md hover:bg-[#EE1D23] hover:text-white transition-colors duration-300"
        >
          AD / ART
        </a>
        <a
          href="#gallery"
          className="text-gray-800 px-3 py-2 rounded-md hover:bg-[#EE1D23] hover:text-white transition-colors duration-300"
        >
          Gallery
        </a>
        <a
          href="#kontak"
          className="text-gray-800 px-3 py-2 rounded-md hover:bg-[#EE1D23] hover:text-white transition-colors duration-300"
        >
          Kontak
        </a>
      </div>

      {/* Button Section */}
      <div>
        <a href="https://forms.gle/ZqPAhfz3RMafnsCM8" target="#blank">
          <button
            style={{ backgroundColor: '#EE1D23' }}
            className="text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity duration-300"
          >
            Daftar
          </button>
        </a>
      </div>
    </nav>
  );
}
