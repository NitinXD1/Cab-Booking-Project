import React from "react";
import CarPng from "../../assets/car1.png";
import Footer from "../Footer/Footer";
import { FaCar, FaDollarSign, FaShieldAlt, FaMapMarkedAlt } from "react-icons/fa"; // Icons for features
import { MdOutlineEmojiPeople, MdThumbUp, MdSupportAgent } from "react-icons/md"; // Additional icons for new sections

const About = () => {
  return (
    <div className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
      <div className="container py-14">
        {/* About Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={CarPng}
              alt="Car"
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                About Us
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                We specialize in providing the best car rental services to make your travel experience comfortable and hassle-free. With a wide variety of vehicles and flexible rental plans, we ensure you get exactly what you need for your trip.
              </p>
              <p data-aos="fade-up">
                Whether it's a business trip, a weekend getaway, or a family vacation, we have a solution tailored for you.
              </p>
              <button data-aos="fade-up" className="button-outline">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 sm:mt-24">
          <h2 data-aos="fade-up" className="text-4xl font-bold text-center mb-10">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div
              data-aos="fade-up"
              className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg text-white text-center"
            >
              <FaCar className="text-5xl mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Wide Range of Cars</h3>
              <p>
                Choose from a variety of car models, from luxury sedans to family-friendly SUVs, all maintained in top condition.
              </p>
            </div>

            {/* Feature 2 */}
            <div
              data-aos="fade-up"
              className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg text-white text-center"
            >
              <FaDollarSign className="text-5xl mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
              <p>
                Competitive pricing with no hidden fees. Enjoy transparency and value for every dollar you spend.
              </p>
            </div>

            {/* Feature 3 */}
            <div
              data-aos="fade-up"
              className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg text-white text-center"
            >
              <FaShieldAlt className="text-5xl mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Safety First</h3>
              <p>
                Our cars are regularly inspected to ensure your safety and comfort on the road.
              </p>
            </div>

            {/* Feature 4 */}
            <div
              data-aos="fade-up"
              className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg text-white text-center"
            >
              <FaMapMarkedAlt className="text-5xl mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p>
                Our support team is available round the clock to assist you with any inquiries or concerns.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16 sm:mt-24">
          <h2 data-aos="fade-up" className="text-4xl font-bold text-center mb-10">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Choose Us Feature 1 */}
            <div data-aos="fade-up" className="text-center p-8 bg-gray-800 rounded-lg shadow-lg text-white">
              <MdOutlineEmojiPeople className="text-6xl text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Customer-Centric Approach</h3>
              <p>
                We prioritize customer satisfaction above everything else and work tirelessly to provide the best experience.
              </p>
            </div>

            {/* Choose Us Feature 2 */}
            <div data-aos="fade-up" className="text-center p-8 bg-gray-800 rounded-lg shadow-lg text-white">
              <MdThumbUp className="text-6xl text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Top-Notch Quality</h3>
              <p>
                Every car in our fleet is meticulously maintained to ensure a high-quality driving experience.
              </p>
            </div>

            {/* Choose Us Feature 3 */}
            <div data-aos="fade-up" className="text-center p-8 bg-gray-800 rounded-lg shadow-lg text-white">
              <MdSupportAgent className="text-6xl text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Dedicated Support</h3>
              <p>
                Our team is always available to resolve any issues or queries you may have during your rental period.
              </p>
            </div>
          </div>
        </div>

        {/* Customer Testimonials Section */}
        <div className="mt-16 sm:mt-24">
          <h2 data-aos="fade-up" className="text-4xl font-bold text-center mb-10">
            Customer Testimonials
          </h2>
          <div className="space-y-8">
            {/* Testimonial 1 */}
            <div
              data-aos="fade-up"
              className="p-8 bg-gray-800 rounded-lg shadow-lg text-white"
            >
              <p className="italic">
                "I had a fantastic experience with this car rental service! The vehicle was in perfect condition, and the process was seamless. I would highly recommend it to anyone in need of reliable transportation."
              </p>
              <h3 className="mt-4 font-semibold">— John Doe</h3>
            </div>

            {/* Testimonial 2 */}
            <div
              data-aos="fade-up"
              className="p-8 bg-gray-800 rounded-lg shadow-lg text-white"
            >
              <p className="italic">
                "Great customer service and competitive pricing! The car was clean and well-maintained. I will definitely be using this service again."
              </p>
              <h3 className="mt-4 font-semibold">— Jane Smith</h3>
            </div>
          </div>
        </div>

        {/* Our Mission & Vision Section */}
        <div className="mt-16 sm:mt-24">
          <h2 data-aos="fade-up" className="text-4xl font-bold text-center mb-10">
            Our Mission & Vision
          </h2>
          <div data-aos="fade-up" className="p-8 bg-gray-800 rounded-lg shadow-lg text-white text-center">
            <p className="leading-8 tracking-wide">
              Our mission is to provide the best car rental service that exceeds customer expectations. We strive to deliver value, safety, and comfort with each vehicle we offer. Our vision is to become the leading car rental provider, recognized for our quality service and customer dedication.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default About;
