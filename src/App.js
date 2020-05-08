import React, { Component } from 'react';
import Cards from './components/Cards/Cards';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Chart from './components/Chart/Chart';
import { fetchData } from './api';

class App extends Component {

  async componentDidMount() {
    const data = await fetchData();

    console.log(data);
  };

  render() {
    return (
      <div>
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    );
  };
};


export default App;
