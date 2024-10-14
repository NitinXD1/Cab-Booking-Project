import React, { useState } from "react";
import Footer from "../Footer/Footer";

const Contact = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!"); // Placeholder alert
  };

  return (
    <>
      <span id="contact"></span>
      <div className="dark:bg-black dark:text-white py-14">
        <div className="container">
          {/* Contact Section Header */}
          <div className="bg-gray-800 py-8 px-6 rounded-lg text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Let's Collaborate
            </h1>
            <p className="text-gray-400 mt-3">
              We'd love to hear from you! Fill out the form, and we'll be in touch soon.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 mt-8 p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name Input */}
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-3 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-primary"
                />

                {/* Email Input */}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full p-3 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Subject Input */}
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full p-3 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-primary"
              />

              {/* Message Input */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-primary"
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full sm:w-auto bg-primary text-white font-semibold py-2 px-6 rounded-lg hover:bg-primary/80 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
