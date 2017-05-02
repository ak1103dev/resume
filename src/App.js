import React, { Component } from 'react';
import { BasicInfo } from './components';
import data from './data.json';
import './App.css';

class App extends Component {
  render() {
    const { basicInfo } = data;
    return (
      <div className="App">
        <BasicInfo info={basicInfo} />
      </div>
    );
  }
}

export default App;
