import React, { Component, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Component import
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import CarList from "./components/CarList/CarList";
import Contact from "./components/Contact/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";

const App = () => {
  // dark mode start
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  // dark mode end

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Navbar theme={theme} setTheme={setTheme} />
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cars" element={<CarList/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
      </BrowserRouter>
  );
};

export default App;
