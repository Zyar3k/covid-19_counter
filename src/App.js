import React, { Component } from 'react';
import Cards from './components/Cards/Cards';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Chart from './components/Chart/Chart';
import { fetchData } from './api';
import './app.scss';
import Img from './images/image.png';

class App extends Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
    console.log(fetchedData);
  };

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    console.log(fetchedData);
    console.log(country);

    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className='appContainer'>
        {/* <img src={Img} alt='img' /> */}
        <div className='titleSection'>Statystyki dotyczące Covid-19</div>
        <span className='cardsSection'>
          <Cards data={data} />
        </span>
        <span className='countrySection'>
          <CountryPicker handleCountryChange={this.handleCountryChange} />
        </span>
        <span className='chartSection'>
          <Chart data={data} country={country} />
        </span>

        
        
      </div>
    );
  };
};


export default App;
