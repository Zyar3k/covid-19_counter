import React, { Component } from 'react';
import Cards from './components/Cards/Cards';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Chart from './components/Chart/Chart';
import { fetchData } from './api';
import './app.scss';

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

    this.setState({ data: fetchedData });
  };

  render() {
    const { data } = this.state;

    return (
      <div className='appContainer'>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} />
      </div>
    );
  };
};


export default App;
