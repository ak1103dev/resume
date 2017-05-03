import React, { Component } from 'react';

export default class Education extends Component {
  render() {
    const { info } = this.props;
    return (
      <div className="education">
        <h1 className="title">Education</h1>
        {
          info.map((education) =>
            <div>
              <div className="eduHeader">
                <h2>
                  {education.studyType}'s Degree in {education.area}, {education.institution}
                </h2>
                <p>{education.start} - {education.stop}</p>
              </div>
              <p className="eduAddress">{education.address}</p>
            </div>
          )
        }
      </div>
    );
  }
}
