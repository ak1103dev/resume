import React, { Component } from 'react';

class Star extends Component {
  render() {
    const { num } = this.props;
    return (
      <div className="star">
        {
          [0, 0, 0, 0, 0].map((star, i) =>
            i < num ? <i className="fa fa-star fa-lg" /> : <i className="fa fa-star-o fa-lg" />
          )
        }
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
      </div>
    );
  }
}
