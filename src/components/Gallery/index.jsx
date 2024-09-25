import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Sample images
import Logo from '../../assets/logo-ferari.png';
import Coming from '../../assets/coming-soon.png';

// Custom arrow components
const NextArrow = ({ onClick }) => {
  return (
    <button
      className="absolute top-1/2 right-4 transform -translate-y-1/2 border-2 border-gray-800 text-gray-800 rounded-full w-9 h-9 flex items-center justify-center z-10 bg-transparent hover:bg-gray-800 hover:text-white transition-all duration-300"
      onClick={onClick}
      aria-label="Next Slide"
    >
      <span className="text-lg ml-[0.25rem]">&#9654;</span>{' '}
      {/* Styled Unicode arrow */}
    </button>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <button
      className="absolute top-1/2 transform -translate-y-1/2 border-2 border-gray-800 text-gray-800 rounded-full w-9 h-9 flex items-center justify-center z-10 bg-transparent hover:bg-gray-800 hover:text-white transition-all duration-300"
      onClick={onClick}
      aria-label="Previous Slide"
    >
      <span className="text-lg mr-[0.25rem]">&#9664;</span>
      {/* Styled Unicode arrow */}
    </button>
  );
};

export default function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section
      id="gallery"
      className="min-h-screen md:mx-8 flex flex-col justify-center bg-white pt-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
        <Slider {...settings} className="mt-4">
          <div className="flex justify-center">
            <div className="h-1/2 flex justify-center items-center">
              <img
                src={Logo}
                alt="Gallery 1"
                className="object-contain rounded-lg border-4 border-gray-300"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="h-1/2 flex justify-center items-center">
              <img
                src={Coming}
                alt="Gallery 2"
                className="object-contain rounded-lg border-4 border-gray-300"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="h-1/2 flex justify-center items-center">
              <img
                src={Logo}
                alt="Gallery 3"
                className="object-contain rounded-lg border-4 border-gray-300"
              />
            </div>
          </div>
          {/* Add more images as needed */}
        </Slider>
      </div>
    </section>
  );
}
