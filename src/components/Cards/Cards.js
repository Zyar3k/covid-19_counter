import React from 'react'
import './Cards.scss';
import CountUp from 'react-countup';

const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate} }) => {

  // console.log(props);
  if (!confirmed) {
    return 'wczytuję dane...'
  }
  return (
    <div>
      <div className='cardWrapper'>

        <div className='card'>
          <div>Zakażonych</div>
          <div>
            <CountUp start={0} end={confirmed.value} duration={2.5} separator=',' />
          </div>
          <div>Stan na:</div>
          <div>{new Date(lastUpdate).toDateString()}</div>
          <div>Liczba aktywnych przypadków z Covid-19</div>
        </div>
        <div className='card'>
          <div>Wyzdrowiało</div>
          <div>
            <CountUp start={0} end={recovered.value} duration={2.5} separator=',' />
          </div>
          <div>Stan na:</div>
          <div>{new Date(lastUpdate).toDateString()}</div>
          <div>Liczba aktywnych przypadków z Covid-19</div>
        </div>
        <div className='card'>
          <div>Zgony</div>
          <div>
            <CountUp start={0} end={deaths.value} duration={2.5} separator=',' />
          </div>
          <div>Stan na:</div>
          <div>{new Date(lastUpdate).toDateString()}</div>
          <div>Liczba aktywnych przypadków z Covid-19</div>
        </div>


      </div>
    </div>
  );
};

export default Cards;