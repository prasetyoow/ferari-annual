import React from 'react';
import Coming from '../../assets/coming-soon.png';

export default function TataTertib() {
  return (
    <section
      id="tata-tertib"
      className="min-h-screen md:mx-8 flex flex-col justify-center bg-white pt-16"
    >
      <h2 className="text-3xl font-bold text-center mb-8">Tata Tertib</h2>
      <div className="container mx-auto px-4">
        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Larger Images */}
          <div className="col-span-2 grid grid-cols-2 gap-4">
            <div className="flex justify-center items-center w-full h-full">
              <div className="w-full h-64 flex justify-center items-center">
                <img
                  src={Coming}
                  alt="Large 1"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="flex justify-center items-center w-full h-full">
              <div className="w-full h-64 flex justify-center items-center">
                <img
                  src={Coming}
                  alt="Large 2"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Smaller Images */}
          <div className="flex justify-center items-center w-full h-full">
            <div className="w-full h-64 flex justify-center items-center">
              <img
                src={Coming}
                alt="Small 1"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="flex justify-center items-center w-full h-full">
            <div className="w-full h-64 flex justify-center items-center">
              <img
                src={Coming}
                alt="Small 2"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-8 flex justify-center">
          <button
            style={{ backgroundColor: '#EE1D23' }}
            className="text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity duration-300 w-1/2"
          >
            Daftar
          </button>
        </div>
      </div>
    </section>
  );
}
