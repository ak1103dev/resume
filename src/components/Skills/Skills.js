import React, { Component } from 'react';

class Star extends Component {
  render() {
    const { num } = this.props;
    return (
      <div>{num}</div>
    );
  }
}

export default class Skills extends Component {
  render() {
    const { info } = this.props;
    return (
      <div className="skills">
        <h1>Technical Skills</h1>
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
