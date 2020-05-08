import React, { Component } from 'react';
import Cards from './components/Cards/Cards';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Chart from './components/Chart/Chart';
import { fetchData } from './api';
import './app.scss';

class App extends Component {
  state = {
    data: {},
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
    console.log(fetchedData);
  };

  render() {
    const { data } = this.state;

    return (
      <div className='app'>
        <div className='appContainer'>
          <Cards data={data} />
          <CountryPicker />
          <Chart data={data} />
        </div>
      </div>
    );
  };
};


export default App;
