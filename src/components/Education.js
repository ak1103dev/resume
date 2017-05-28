import React, { Component } from 'react';

export default class Education extends Component {
  render() {
    const { info } = this.props;
    return (
      <div className="education">
        <h1 className="title">Education</h1>
        {
          info.map((education, index) =>
            <div key={index}>
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
        <style jsx>{`
          .education {
            padding: 10px 20px; }
            .education .eduHeader > h2 {
              display: inline-block;
              width: calc(100% - 150px); }
            .education .eduHeader > p {
              display: inline-block;
              vertical-align: top;
              width: 150px;
              text-align: right;
              padding-top: 5px;
              color: #7A7A7A; }
            .education .eduAddress {
              margin: 0; }
        `}</style>
      </div>
    );
  }
}
