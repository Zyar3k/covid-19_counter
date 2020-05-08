import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line } from 'react-chartjs-2';


const Chart = ({ data: { confirmed, deaths, recovered }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI();
  });

  const lineChart = (
    dailyData.length
    ?
    (
      <Line
      data= {{
        labels: dailyData.map(({ date }) => date),
        datasets: [{
          data: dailyData.map(({ confirmed }) => confirmed),
          label: 'Zakażeni',
          borderColor: '#3333ff',
          fill: true,
        }, {
          data: dailyData.map(({ deaths }) => deaths),
          label: 'Zgony',
          borderColor: 'red',
          backgroundColor: 'rgb(255, 0, 0, 0.5)',
          fill: true,
        }],
      }}
      />
    )
    :
    null
  );

  return (
    <div className='chartContainer'>
      {lineChart}
    </div>
  );
};

export default Chart;
