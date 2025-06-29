import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "../src/components/layouts/Sidebar";
import Navbar from "../src/components/layouts/Navbar";
import Home from "../src/pages/Home";
import Calendar from "./pages/Calendar";
import Kanban from "./pages/Kanban";
import Tables from "./pages/Tables";
import PieChart from "./pages/PieChart";
import BarCharts from "./pages/BarCharts";
import LineCharts from "./pages/LineCharts";
import Scatterplot from "./pages/Scatterplot";
import { useEffect } from "react";
import "./index.css";
import './App.css';
import { ThemeProvider } from "./components/Theme";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const sidebarWidth = isCollapsed ? "4rem" : "15rem";
  const navbarHeight = "4rem"; 

  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }


  useEffect(() => {
     document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(themeMode);
  }, [themeMode])


  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
    <BrowserRouter>
      
    
        <Navbar onToggleSidebar={toggleSidebar} />
        <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} navbarHeight={navbarHeight} />
        <div className=" min-h-screen bg-white dark:bg-gray-900 dark:text-gray-200 ">

        

  
        <main
          className="p-4"
          style={{
            marginTop: navbarHeight,
            marginLeft: sidebarWidth,
            transition: "all 0.3s ease",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/piecharts" element={<PieChart />} />
            <Route path="/lineCharts" element={<LineCharts />} />
            <Route path="/barCharts" element={<BarCharts />} />
            <Route path="/scatterCharts" element={<Scatterplot />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
