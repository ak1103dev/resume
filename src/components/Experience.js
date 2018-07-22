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
                <h2 className="exTitle">{experience.position}, {experience.company}</h2>
                <p className="exTime">{experience.start} - {experience.stop}</p>
              </div>
              <ul>
                {
                  experience.highlights.map((item, i) =>
                    <li className="exListItem" key={i}>{item}</li>
                  )
                }
              </ul>
            </div>
          )
        }
        <style>{`
          .experience {
            padding: 10px 20px;
          }
          .experience .exHeader {
            width: 100%;
          }
          .experience .exHeader .exTitle {
            display: inline-block;
            width: calc(100% - 150px);
          }
          .experience .exHeader .exTime {
            display: inline-block;
            width: 150px;
            text-align: right;
            color: #7A7A7A;
            vertical-align: top;
            padding-top: 5px;
          }
          .experience .exListItem {
            margin-bottom: 10px;
          }
        `}</style>
      </div>
    );
  }
}
