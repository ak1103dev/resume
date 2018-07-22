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
                <h2 className="eduTitle">
                  {education.studyType}'s Degree in {education.area}, {education.institution}
                </h2>
                <p className="eduTime">{education.start} - {education.stop}</p>
              </div>
              <p className="eduAddress">{education.address}</p>
            </div>
          )
        }
        <style>{`
          .education {
            padding: 10px 20px;
          }
          .education .eduHeader .eduTitle {
            display: inline-block;
            width: calc(100% - 150px);
          }
          .education .eduHeader .eduTime {
            display: inline-block;
            vertical-align: top;
            width: 150px;
            text-align: right;
            padding-top: 5px;
            color: #7A7A7A;
          }
          .education .eduAddress {
            margin: 0;
          }
        `}</style>
      </div>
    );
  }
}
