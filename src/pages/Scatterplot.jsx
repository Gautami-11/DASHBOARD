import React from 'react'
import data from "../data/train_data.json";
import  { useEffect, useState } from "react";
import DiscountScatter from '../components/charts/DiscountScatter';
import PriorScatter from '../components/charts/PriorScatter';

const Scatterplot = () => {
     const [chartData, setChartData] = useState([]);
      useEffect(() => {
    setChartData(data.slice(0, 100));
  }, []);


  return (
    <div className='p-6 grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-6 '>
         <DiscountScatter data={chartData} />
         <PriorScatter data={chartData}/>
    </div>
  )
}

export default Scatterplot
