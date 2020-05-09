import React from 'react';
import './Cards.scss';
import CountUp from 'react-countup';

const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate} }) => {

  if (!confirmed) {
    return 'wczytuję dane...'
  }
  return (
      <div className='cardWrapper'>
        <div className='card confirmed'>
          <h6>Liczba przypadków z Covid-19</h6>
          <h3>Zakażonych</h3>
          <h1>
            <CountUp start={0} end={confirmed.value} duration={2.5} separator=',' />
          </h1>
          <p>Stan na:</p>
          <h4>{new Date(lastUpdate).toDateString()}</h4>
        </div>
        <div className='card recovered'>
          <h6>Liczba przypadków z Covid-19</h6>
          <h3>Wyzdrowiało</h3>
          <h1>
            <CountUp start={0} end={recovered.value} duration={2.5} separator=',' />
          </h1>
          <p>Stan na:</p>
          <h4>{new Date(lastUpdate).toDateString()}</h4>
        </div>
        <div className='card deaths'>
          <h6>Liczba przypadków z Covid-19</h6>
          <h3>Zgony</h3>
          <h1>
            <CountUp start={0} end={deaths.value} duration={2.5} separator=',' />
          </h1>
          <p>Stan na:</p>
          <h4>{new Date(lastUpdate).toDateString()}</h4>
        </div>
    </div>
  );
};

export default Cards;