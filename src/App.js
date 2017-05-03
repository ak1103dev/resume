import React, { Component } from 'react';
import {
  BasicInfo, Profile, Skills,
  Experience, Education, Interests, References,
} from './components';
import data from './data.json';
import 'font-awesome/css/font-awesome.css';
import './App.css';

class App extends Component {
  render() {
    const {
      basicInfo, profile, technicalSkills,
      experiences, educations,
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
          <Education info={educations} />
          <Interests />
          <References />
        </div>
      </div>
    );
  }
}

export default App;
