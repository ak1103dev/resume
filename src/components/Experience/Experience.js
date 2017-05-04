import React, { Component } from 'react';

export default class Experince extends Component {
  render() {
    const { info } = this.props;
    return (
      <div className="experience">
        <h1 className="title">Experience</h1>
        {
          info.map((experience, index) =>
            <div key={index}>
              <div className="exHeader">
                <h2>{experience.position}, {experience.company}</h2>
                <p>{experience.start} - {experience.stop}</p>
              </div>
              <ul>
                {
                  experience.highlights.map((item, i) =>
                    <li key={i}>{item}</li>
                  )
                }
              </ul>
            </div>
          )
        }
      </div>
    );
  }
}
