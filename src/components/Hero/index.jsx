import React from 'react';
import Logo from '../../assets/logo-ferari.png';

export default function Hero() {
  return (
    <div
      id="home"
      className="flex items-center justify-center h-screen bg-gray-100"
    >
      <div className="text-center">
        {/* Logo Section */}
        <img src={Logo} alt="Logo" className="mx-auto mb-4 h-28 w-24" />
        <h1 className="text-4xl font-bold text-[#EE1D23] tracking-widest">
          RAPAT LIMA TAHUNAN
        </h1>
        <h2 className="text-2xl font-semibold text-gray-600 mt-4 tracking-widest">
          FEDERASI ADVOKAT REPUBLIK INDONESIA
        </h2>
        <h2 className="text-2xl font-bold mt-4 tracking-widest">FERARI</h2>
      </div>
    </div>
  );
}
