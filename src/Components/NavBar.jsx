import React, { useState, useEffect } from "react";
import { IoSunnyOutline } from "react-icons/io5";  // Sun icon for light mode
import { IoMoonOutline } from "react-icons/io5";   // Moon icon for dark mode

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Persist dark mode across page reloads
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setDarkMode(savedMode === "true");
    }
  }, []);

  useEffect(() => {
    // If dark mode is enabled, add the 'dark' class to the body
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  return (
    <div className="flex items-center justify-between border-b px-16 py-7">
      <h1 className="text-3xl font-bold">Where in the world?</h1>
      <div className="text-xl flex items-center gap-3">
        {darkMode ? (
          // Sun icon for light mode
          <IoSunnyOutline className="cursor-pointer" onClick={toggleDarkMode} />
        ) : (
          // Moon icon for dark mode
          <IoMoonOutline className="cursor-pointer" onClick={toggleDarkMode} />
        )}
        <p>{darkMode ? "Light Mode" : "Dark Mode"}</p>
      </div>
    </div>
  );
}
