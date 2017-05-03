import React, { Component } from 'react';
import { BasicInfo, Profile, Skills } from './components';
import data from './data.json';
import './App.css';

class App extends Component {
  render() {
    const { basicInfo, profile, technicalSkills } = data;
    return (
      <div className="app">
        <div className="left">
          <BasicInfo info={basicInfo} />
          <Profile info={profile} />
          <Skills info={technicalSkills} />
        </div>
        <div className="right">
          xxx
        </div>
      </div>
    );
  }
}

export default App;
