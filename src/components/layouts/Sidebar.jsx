import React, { useState } from "react";
import {
  faHouseUser,
  faCalendarCheck,
  faRectangleList,
  faTableList,
  faBars,
  faEllipsis,
  faLineChart,
  faBarChart,
  faPieChart
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  const navLinkClass = ({ isActive }) => {
    return `flex items-center flex-shrink-0 cursor-pointer rounded-lg px-2 py-4  m-1.5 text transition-colors duration-200
      ${
        isActive
          ? "bg-blue-300 text-gray-900 font-semibold text-center"
          : "text-gray-700 hover:bg-indigo-600 hover:text-gray-900"
      }`;
  };

  return (
    <div>
      <aside
        className={`fixed left-0 z-40 transition-all duration-300 dark:bg-gray-800 bg-white shadow-lg`}
        style={{
                    top: "4rem",
          height: "calc(100vh - 4rem)",
          width: isCollapsed ? "4rem" : "15rem",
        }}
      >
        <button
          onClick={toggleSidebar}
          className="
            flex items-center justify-center
            h-12 w-12 mt-4 mb-6 mx-auto p-5
            rounded-lg
            text-gray-200
            hover:bg-indigo-400
            hover:text-white
            focus:outline-none
            focus:ring-2
            focus:ring-indigo-500
            transition
          "
          aria-label="Toggle sidebar"
        >
          <FontAwesomeIcon icon={faBars} className="text-2xl text-gray-700 dark:text-white" />
        </button>

        <nav className="flex-1 overflow-y-auto px-2 pt-2">
          <NavLink to="/" className={navLinkClass}>
            <FontAwesomeIcon icon={faHouseUser} className="min-w-[1.5rem] dark:text-white" />
            {!isCollapsed && <span className="ml-3 dark:text-white">Home</span>}
          </NavLink>

          {!isCollapsed && (
            <h2 className="mt-6 mb-2 px-3 text-xs font-semibold text-gray-400 dark:text-white  uppercase tracking-wide select-none">
              APPS
            </h2>
          )}

          <NavLink to="/calendar" className={navLinkClass}>
            <FontAwesomeIcon icon={faCalendarCheck} className="min-w-[1.5rem] dark:text-white" />
            {!isCollapsed && <span className="ml-3 dark:text-white">Calendar</span>}
          </NavLink>

          <NavLink to="/kanban" className={navLinkClass}>
            <FontAwesomeIcon icon={faRectangleList} className="min-w-[1.5rem] dark:text-white" />
            {!isCollapsed && <span className="ml-3 dark:text-white">Kanban</span>}
          </NavLink>

          <NavLink to="/tables" className={navLinkClass}>
            <FontAwesomeIcon icon={faTableList} className="min-w-[1.5rem] dark:text-white" />
            {!isCollapsed && <span className="ml-3 dark:text-white">Tables</span>}
          </NavLink>

          {!isCollapsed && (
            <h2 className="mt-6 mb-2 px-3 text-xs dark:text-white font-semibold text-gray-500 uppercase tracking-wide select-none ">
              CHARTS
            </h2>
          )}

          <NavLink to="/piecharts" className={navLinkClass}>
            <FontAwesomeIcon icon={faPieChart} className="min-w-[1.5rem] dark:text-white" />
            {!isCollapsed && <span className="dark:text-white ml-3">PieCharts</span>}
          </NavLink>

          <NavLink to="/lineCharts" className={navLinkClass}>
            <FontAwesomeIcon icon={faLineChart} className=" dark:text-white min-w-[1.5rem]" />
            {!isCollapsed && <span className="ml-3 dark:text-white">LineCharts</span>}
          </NavLink>

          <NavLink to="/barCharts" className={navLinkClass}>
            <FontAwesomeIcon icon={faBarChart} className=" dark:text-white min-w-[1.5rem]" />
            {!isCollapsed && <span className=" dark:text-white ml-3">BarCharts</span>}
          </NavLink>

          <NavLink to="/scatterCharts" className={navLinkClass}>
            <FontAwesomeIcon icon={faEllipsis} className=" dark:text-white min-w-[1.5rem]" />
            {!isCollapsed && <span className="ml-3 dark:text-white">ScatterCharts</span>}
          </NavLink>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
