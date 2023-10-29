import React from 'react'
import {
  Chart as Chartjs,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarController,
  Tooltip,
  Legend
} from 'chart.js';

import {Bar} from 'react-chartjs-2';

Chartjs.register(
  BarElement,
  BarController,
  CategoryScale,
  LinearScale,
  PointElement
)


const Barchart = (params) => {
const options = {
  
}
  const data = {
    labels: ['2022','2021','2020','2019','2018'],
    datasets: [
      {
        label:'Total Revenue',
        data: params.totalRevenue,
        backgroundColor: '#B87333',
        borderColor: '#B87333',
        borderWidth: 1,
      },
      {
        label:'Net Income',
        data: params.netIncome,
        backgroundColor: 'white',
        borderColor: '#B87333',
        borderWidth: 1,
      }
    ],
  };
  return (
    <Bar data = {data}
    options = {options}/>
      
  
  )
}

export default Barchart