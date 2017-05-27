import React, { Component } from 'react';

class Star extends Component {
  render() {
    const { num } = this.props;
    return (
      <div className="star">
        {
          [0, 0, 0, 0, 0].map((star, i) =>
            i < num ? <i className="fa fa-star fa-lg" key={i} /> : <i className="fa fa-star-o fa-lg" key={i} />
          )
        }
        <style jsx>{`
          .star {
            color: #0de599; }
        `}</style>
      </div>
    );
  }
}

export default class Skills extends Component {
  render() {
    const { info } = this.props;
    return (
      <div className="skills">
        <h1 className="title">Technical Skills</h1>
        {
          info.map((skill, i) =>
            <div key={i} className="rowSkill">
              <p>{skill.lang}</p>
              <Star num={skill.level} />
            </div>
          )
        }
        <style jsx>{`
          .skills {
            padding: 10px 20px; }
            .skills .rowSkill > p {
              display: inline-block;
              width: 150px; }
            .skills .rowSkill > div {
              display: inline-block; }
        `}</style>
      </div>
    );
  }
}
