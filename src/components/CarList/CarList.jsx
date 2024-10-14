import React from "react";
import whiteCar from "../../assets/white-car.png";
import car2 from "../../assets/car5.png";
import car3 from "../../assets/car2.png";
import car1 from "../../assets/car1.png";
import bannercar from "../../assets/banner-car.png";
import ferrari from "../../assets/ferrari.png";
import Footer from "../Footer/Footer";

const carList = [
  {
    name: "SAFARAI-A4",
    price: 1000,
    image: whiteCar,
    aosDelay: "0",
  },
  {
    name: "KIA UX",
    price: 1400,
    image: car2,
    aosDelay: "100",
  },
  {
    name: "BMW UX",
    price: 1800,
    image: car3,
    aosDelay: "150",
  },
  {
    name: "BBT",
    price: 2200,
    image: car1,
    aosDelay: "200",
  },
  {
    name: "BENTELY-E1",
    price: 3000,
    image: bannercar,
    aosDelay: "250",
  },
  {
    name: "FERRAI-A8",
    price: 4000,
    image: ferrari,
    aosDelay: "350",
  },
];

const CarList = () => {
  return (
    <div className="pb-24 bg-gray-100 dark:bg-dark duration-300">
      <div className="container py-14">
        {/* Our Fleet Section */}
        <div className="text-center mb-12">
          <h1 data-aos="fade-up" className="text-4xl font-bold font-serif mb-4">
            Our Fleet
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Discover our range of cars available for rent. Whether you need a compact car for city driving or a luxury vehicle for special occasions, we have the right choice for you.
          </p>
        </div>

        {/* Car Listing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {carList.map((car, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={car.aosDelay}
              className="relative group rounded-xl shadow-lg overflow-hidden bg-white dark:bg-gray-800 p-6 transition hover:shadow-2xl duration-300 border border-gray-200 dark:border-gray-700"
            >
              {/* Car Image */}
              <div className="flex justify-center mb-6">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-[120px] object-contain transition duration-700 transform group-hover:scale-110"
                />
              </div>

              {/* Car Details */}
              <div className="space-y-3 text-center">
                <h1 className="text-xl font-bold text-primary dark:text-primary-light">
                  {car.name}
                </h1>
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-300">
                  ₹{car.price}/Hour
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Fuel Efficiency: 12Km/L
                </p>
              </div>

              {/* Rent Now Button */}
              <div className="mt-6 flex justify-center">
                <a
                  href="#"
                  className="px-4 py-2 rounded-full text-white bg-primary dark:bg-primary-light hover:bg-primary-dark transition duration-200"
                >
                  Rent Now
                </a>
              </div>

              {/* Distance Label */}
              <span className="absolute top-4 left-4 bg-primary-dark text-white px-2 py-1 text-xs rounded">
                New Arrival
              </span>
            </div>
          ))}
        </div>

        {/* Coming Soon Button */}
        <div className="mt-16 flex justify-center">
          <button
            data-aos="fade-up"
            className="button-outline hover:bg-primary dark:hover:bg-primary-dark text-primary dark:text-primary-dark"
          >
            More Cars Coming Soon
          </button>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container py-16 text-center">
        <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">
          Why Choose Us
        </h2>
        <p data-aos="fade-up" data-aos-delay="300" className="text-gray-700 dark:text-gray-300">
          Our car rental service offers a diverse fleet, competitive pricing, and a seamless rental experience to make your journeys safe and enjoyable.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div data-aos="fade-up" data-aos-delay="400" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Affordable Rates</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              We provide the best prices for a variety of cars to suit your budget.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="500" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Quality Vehicles</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Our vehicles are well-maintained, ensuring a safe and comfortable ride.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="600" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">24/7 Support</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              We offer round-the-clock customer support for any assistance you may need.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default CarList;
