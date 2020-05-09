import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import './Chart.scss';


const Chart = ({ data: { confirmed, deaths, recovered }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI();
  }, []);

  const lineChart = (
    dailyData.length
    ? (
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
    ) : null
  );

  const barChart = (
    confirmed
    ? (
      <Bar
      data={{
        labels: ['Zakażeni', 'Wyleczeni', 'Zgony' ],
        datasets: [{
          label: 'Ludzie',
          backgroundColor: [
            'rgba(0, 0, 255, 0.5)',
            'rgba(0, 255, 0, 0.5)',
            'rgba(255, 0, 0, 0.5)',
          ],
          data: [confirmed.value, recovered.value, deaths.value]
        }]
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Obecny stan w państwie ${country}`}
      }}
      />
    ) : null
  )

  return (
    <div className='containerChart'>
      {country ? barChart : lineChart}
    </div>
  );
};

export default Chart;