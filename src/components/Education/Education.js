import React, { Component } from 'react';

export default class Education extends Component {
  render() {
    const { info } = this.props;
    return (
      <div className="education">
        <h1>Education</h1>
        {
          info.map((education) =>
            <div>
              <p>{education.start} - {education.stop}</p>
              <h2>{education.studyType} degree in {education.area}, {education.institution}</h2>
              <p>{education.address}</p>
            </div>
          )
        }
      </div>
    );
  }
}
