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
          <div className='title'>Liczba przypadków z Covid-19</div>
          <div className='subtitle'>Zakażonych</div>
          <div className='mainCount'>
            <CountUp start={0} end={confirmed.value} duration={2.5} separator=',' />
          </div>
          <div className='info'>Stan na:</div>
          <div className='date'>{new Date(lastUpdate).toDateString()}</div>
        </div>

        <div className='card recovered'>
          <div className='title'>Liczba przypadków z Covid-19</div>
          <div className='subtitle'>Wyzdrowiało</div>
          <div className='mainCount'>
            <CountUp start={0} end={recovered.value} duration={2.5} separator=',' />
          </div>
          <div className='info'>Stan na:</div>
          <div className='date'>{new Date(lastUpdate).toDateString()}</div>
        </div>
        <div className='card deaths'>
          <div className='title'>Liczba przypadków z Covid-19</div>
          <div className='subtitle'>Zgony</div>
          <div className='mainCount'>
            <CountUp start={0} end={deaths.value} duration={2.5} separator=',' />
          </div>
          <div className='info'>Stan na:</div>
          <div className='date'>{new Date(lastUpdate).toDateString()}</div>
        </div>
    </div>
  );
};

export default Cards;