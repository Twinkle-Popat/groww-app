import Head from 'next/head'
import Script from 'next/script'
import React, { useEffect,useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Line } from 'react-chartjs-2';
import{
  Chart as Chartjs,
  
  CategoryScale,
  LinearScale,
  PointElement,

  LineElement,
  Title,
  ToolTip,
  Legend
} from 'chart.js';

Chartjs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)


const Linechart = (params) => {

  const max = params.yearly ? Math.max(...params.data1) : (params.data2 ? Math.max(...params.data2) : 0);
const min = params.yearly ? Math.min(...params.data1) : (params.data2 ? Math.min(...params.data2) : 0);




    const grossProfitData = {
        labels: params.yearly?(['2023-06', '2023-03', '2022-12', '2022-09','2022-06','2022-03','2021-12', '2021-09', '2021-06', '2021-03','2020-12','2020-09','2020-06', '2020-03', '2019-12', '2019-09','2019-06','2019-03','2018-12', '2018-09']):(['2022','2021','2020','2019','2018']),
        datasets: [
          {
            label: 'Gross Profit in millions',
            data: params.yearly?params.data1:params.data2,
            fill: false,
            backgroundColor: '#B87333',
            borderColor: '#B87333',
          },
        ],  
      }    
    
      const options = {
        plugins:{
          legend:true
        },
        scales: {
          y: {
            max: max,
            min: min
          }
        }
      }
  return (
    <Line data={grossProfitData} options={options} />
  )
}

export default Linechart