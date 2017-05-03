import React, { Component } from 'react';
import {
  BasicInfo, Profile, Skills,
  Experience, Education, Interests, References,
} from './components';
import data from './data.json';
import './App.css';

class App extends Component {
  render() {
    const {
      basicInfo, profile, technicalSkills,
      experiences,
    } = data;
    return (
      <div className="app">
        <div className="left">
          <BasicInfo info={basicInfo} />
          <Profile info={profile} />
          <Skills info={technicalSkills} />
        </div>
        <div className="right">
          <Experience info={experiences} />
          <Education />
          <Interests />
          <References />
        </div>
      </div>
    );
  }
}

export default App;
