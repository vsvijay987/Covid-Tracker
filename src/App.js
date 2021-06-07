import React, { Component } from "react";
import styles from "./App.module.css";

import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import {fetchData} from './api';

class App extends Component {

  async componentDidMount(){
    const data = await fetchData();
    console.log(data);
  }

  render() {
    return (
      <div className={styles.container}>
        <Chart />
        <Cards />
        <CountryPicker />
      </div>
    );
  }
}

export default App;
