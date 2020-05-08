import React from 'react'
import './Cards.scss';

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
          <div>{confirmed.value}</div>
          <div>Stan na:</div>
          <div>{lastUpdate}</div>
          <div>Liczba aktywnych przypadków z Covid-19</div>
        </div>
        <div className='card'>
          <div>Wyzdrowiało</div>
          <div>{recovered.value}</div>
          <div>Stan na:</div>
          <div>{lastUpdate}</div>
          <div>Liczba aktywnych przypadków z Covid-19</div>
        </div>
        <div className='card'>
          <div>Zgony</div>
          <div>{deaths.value}</div>
          <div>Stan na:</div>
          <div>{lastUpdate}</div>
          <div>Liczba aktywnych przypadków z Covid-19</div>
        </div>


      </div>
    </div>
  );
};

export default Cards;