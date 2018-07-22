import React, { Component } from 'react';
import {
  BasicInfo, Profile, Skills,
  Experience, Education, Interests,
  // References,
} from './components';
import data from './data.json';
import 'font-awesome/css/font-awesome.css';

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
        <style>{`
          @media(min-width: 768px) {
            .app {
              padding: 20px 5px;
              background-color: #333;
              color: #F1F1F1;
              margin: 0 150px;
            }
            .app .left {
              display: inline-block;
              width: calc(38% - 3px);
              border-right: 3px solid gray;
            }
            .app .right {
              display: inline-block;
              width: 62%;
              vertical-align: top;
            }
          }
          @media(max-width: 767px) {
            .app {
              padding: 20px 5px;
              background-color: #333;
              color: #F1F1F1;
              margin: 0;
            }
          }
          .title {
            padding-bottom: 10px;
            border-bottom: 3px solid #0de599;
          }
          h1 {
            font-size: 24px;
          }
          h2 {
            font-size: 18px;
            font-weight: normal;
          }
          p {
            font-size: 14px;
          }
        `}</style>
      </div>
    );
  }
}

export default App;
