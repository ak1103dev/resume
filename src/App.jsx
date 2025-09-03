import React, { Component } from 'react';
import {
  BasicInfo, Profile, Skills,
  Experience, Education, Interests,
  // References,
} from './components';
import data from './data';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.css'

class App extends Component {
  render() {
    const {
      basicInfo, profile, technicalSkills,
      languageSkills,
      experiences, educations, interests,
      // references,
    } = data;
    return (
      <div className="app">
        <div className="left">
          <BasicInfo info={basicInfo} />
          <Profile info={profile} />
          <Skills info={{ technicalSkills, languageSkills }} />
        </div>
        <div className="right">
          <Experience info={experiences} />
          <Education info={educations} />
          <Interests info={interests} />
          {/* <References info={references} /> */}
        </div>
      </div>
    );
  }
}

export default App;
