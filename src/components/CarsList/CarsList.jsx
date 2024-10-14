import React from "react";
import whiteCar from "../../assets/white-car.png";
import car2 from "../../assets/car5.png";
import car3 from "../../assets/car2.png";
import car1 from "../../assets/car1.png";
import bannercar from "../../assets/banner-car.png";
import ferrari from "../../assets/ferrari.png";

const carList = [
  {
    name: "SAFARAI-A4",
    price: 850,
    image: whiteCar,
    aosDelay: "0",
  },
  {
    name: "KIA UX",
    price: 1400,
    image: car2,
    aosDelay: "150",
  },
  {
    name: "BMW UX",
    price: 1000,
    image: car3,
    aosDelay: "350",
  },
  {
    name: "BBT",
    price: 1000,
    image: car1,
    aosDelay: "500",
  },
  {
    name: "BENTELY-E1",
    price: 2000,
    image: bannercar,
    aosDelay: "600",
  },
  {
    name: "FERRAI-A8",
    price: 1250,
    image: ferrari,
    aosDelay: "750",
  },
];

const CarsList = () => {
  return (
    <div className="pb-24">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Our Fleet
        </h1>
        <p data-aos="fade-up" aos-delay="200" className="text-sm pb-10">
        Discover our range of cars available for rent. Whether you need a compact car for city driving or a luxury vehicle for special occasions, we have the right choice for you.
        </p>
        {/* Car listing */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
              >
                <div className="w-full h-[120px]">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-primary font-semibold">{data.name}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p>₹{data.price}/Hour</p>
                    <a href="#">Details</a>
                  </div>
                </div>
                <p className="text-xl font-semibold absolute top-0 left-3">
                  12Km
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* End of car listing */}
        <div className="grid place-items-center mt-8">
          <button data-aos="fade-up" className="button-outline">
            Coming Soon
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarsList;
