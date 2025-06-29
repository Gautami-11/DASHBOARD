import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import ThemeBtn from "../ThemeBtn";
import UserCard from '../UserCard';



const Navbar = ({ onToggleSidebar }) => {
const [isOpen, setIsOpen] = useState(false);
  const userCardRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (userCardRef.current && !userCardRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className="fixed bg-white dark:bg-gray-800 top-0 left-0 right-0 z-50 flex items-center justify-between p-1 h-16 shadow-md
      sm:h-18 sm:p-2
      md:h-18 md:p-4
      "
    >
      <div className="flex items-center">
        <button
          onClick={onToggleSidebar}
          className="text-gray-700 mr-2 sm:mr-4"
        >
          <FontAwesomeIcon
            icon={faTruckFast}
            className="text-indigo-600 text-2xl sm:text-3xl md:text-4xl m-1 sm:m-2"
          />
        </button>
        <span className="text-black text1 dark:text-white text-lg sm:text-xl md:text-2xl font-semibold">
          OVERSEAS LOGISTICS
        </span>
      </div>

      <div className="flex items-center">
        <ThemeBtn />
       <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl  text-gray-700 hover:text-blue-500 dark:text-gray-300 ml-2"
        >
          <FontAwesomeIcon icon={faUser} />
        </button>
        {isOpen && <UserCard />}
      </div>
    </nav>
  );
};

export default Navbar;
