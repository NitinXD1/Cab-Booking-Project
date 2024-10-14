import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "Best Price Guarantee",
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "We offer the most competitive prices in the market, ensuring you get the best deals for your car rental needs without any hidden charges.",
    aosDelay: "0",
  },
  {
    name: "Fast and Safe Rentals",
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "Our quick and secure booking process ensures that you get the car you need when you need it, with top safety measures guaranteed.",
    aosDelay: "500",
  },
  {
    name: "Experienced Drivers Available",
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description:
      "Need a driver? Our team of experienced, professional drivers is available to provide a smooth and stress-free ride for you.",
    aosDelay: "1000",
  },
];

const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              Why Choose Us
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark hover:bg-primary duration-300 text-white hover:text-black rounded-lg"
              >
                <div className="grid place-items-center">{skill.icon}</div>
                <h1 className="text-2xl font-bold">{skill.name}</h1>
                <p>{skill.description}</p>
                <a
                  href={skill.link}
                  className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300"
                >
                  Learn more
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
