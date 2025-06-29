
import React from 'react';
import shiplogisticsLogo from '../assets/images/shiplogistics.jpg'; 
import road from '../assets/images/road.jpg';
import ship from '../assets/images/ship.jpg';
import flight from '../assets/images/flight.jpg';
import Homechart from '../components/charts/Homechart'
import { faBell } from '@fortawesome/free-solid-svg-icons/faBell';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
 

  return (
    <>
      <div className="w-full relative overflow-hidden">
      <img
        src={shiplogisticsLogo}
        alt="Ship Logistics"
        className="w-full h-[35vw] max-h-[400px] min-h-[180px] object-cover block"
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/20">
        <span className="text-white text1 px-4 md:px-8 py-2 md:py-4 font-semibold text-[clamp(1.1rem,4vw,2.5rem)] tracking-wide rounded">
        Welcome to OVERSEAS LOGISTICS Dashboard
        </span>
      </div>
      </div>

      <h1
      className="
        mt-8 mb-6 px-4 text1 md:px-0 text-2xl md:text-3xl font-bold 
        text-gray-800 dark:text-gray-100 
        text-center leading-snug
        transition-colors duration-300
      "
      style={{
        lineHeight: 1.3,
        letterSpacing: '0.01em',
      }}
      >
      Multiple Modes. One Commitment to Speed.<br />
      <span className="block text1 mt-2 text-base md:text-lg font-normal text-gray-600 dark:text-gray-300">
        Whether you need reliable ground transport, efficient sea freight, or rapid air delivery, our logistics network has you covered. Choose the shipping method that best suits your timeline and budget
      </span>
      </h1>

      <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center items-stretch px-2 md:px-8 py-4 ">
      {/* Road */}
      <div className="mx-auto flex flex-col sm:flex-row max-w-sm items-center gap-4 rounded-xl bg-white p-4 sm:p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <img
        className="w-full sm:w-48 md:w-60 rounded-3xl"
        src={road}
        alt="road logistics"
        />
        <div className="text-center sm:text-left">
        <div className="text-xl font-medium text-black dark:text-white">Road Transport</div>
        <p className="text-gray-500 text1 dark:text-gray-400">
          Flexible and cost-effective for regional deliveries.
        </p>
        </div>
      </div>

      {/* Ship */}
      <div className="mx-auto text1 flex flex-col sm:flex-row-reverse max-w-sm items-center gap-4 rounded-xl bg-white p-4 sm:p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <img
        className="w-full sm:w-48 md:w-60 rounded-3xl"
        src={ship}
        alt="ship logo"
        />
        <div className="text-center sm:text-left">
        <div className="text-xl font-medium text-black dark:text-white">Sea Freight</div>
        <p className="text-gray-500 dark:text-gray-400">
          Ideal for high-volume shipments worldwide.
        </p>
        </div>
      </div>

      {/* Flight */}
      <div className="mx-auto text1 flex flex-col sm:flex-row max-w-sm items-center gap-4 rounded-xl bg-white p-4 sm:p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <img
        className="w-full sm:w-48 md:w-60 rounded-3xl"
        src={flight}
        alt="flight"
        />
        <div className="text-center sm:text-left">
        <div className="text-xl font-medium text-black dark:text-white">Air Cargo</div>
        <p className="text-gray-500 dark:text-gray-400">
          Fastest delivery for urgent orders.
        </p>
        </div>
      </div>
      </div>

      <div className='flex text1 flex-col md:flex-row flex-wrap gap-4 justify-center items-stretch px-2 md:px-8 py-4'>
      {/* responsive card */}
      <div className="flex-1 min-w-[220px] max-w-xs mx-auto bg-gradient-to-br from-indigo-500 via-blue-400 to-blue-300 rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center transition-transform hover:scale-105 hover:shadow-2xl">
        <div className="flex items-center justify-center mb-3">
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg">
          <FontAwesomeIcon icon={faBell} className="text-indigo-500 text-2xl" />
        </span>
        </div>
        <h2 className="text-lg font-semibold text-white mb-1 tracking-wide">On-Time Rate</h2>
        <p className="text-3xl font-bold text-white mb-2">98%</p>
        <span className="text-sm text-blue-100">Delivered</span>
      </div>

      xl
      <div className="flex-1 min-w-[220px] max-w-xs mx-auto bg-gradient-to-br from-indigo-500 via-blue-400 to-blue-300 rounded-2xl  p-6 flex flex-col items-center justify-center transition-transform hover:scale-105 hover:shadow-2xl">
        <div className="flex items-center justify-center mb-3">
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg">
          <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-2xl" />
        </span>
        </div>
        <h2 className="text-lg font-semibold text-white mb-1 tracking-wide">Avg. Rating </h2>
        <p className="text-3xl font-bold text-white mb-2">4.3/5</p>
        
      </div>
      </div>

      <div className="px-4 py-6 ">
      <Homechart />
      </div>
    </>
  );
};

export default Home;
