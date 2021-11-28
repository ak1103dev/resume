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
        <style>{`
          .star {
            display: inline-block;
            color: #0de599;
          }
        `}</style>
      </div>
    );
  }
}

export default class Skills extends Component {
  render() {
    const { technicalSkills, languageSkills } = this.props.info;
    return (
      <div className="skills">
        <h1 className="title">Technical Skills</h1>
        {
          technicalSkills.map((skill, i) =>
            <div key={i} className="rowSkill">
              <p className="language">{skill.lang}</p>
              <Star num={skill.level} />
            </div>
          )
        }
        <h1 className="title">Language Skills</h1>
        {
          languageSkills.map((skill, i) =>
            <div key={i} className="rowSkill">
              <p className="language">{skill.lang}</p>
              <Star num={skill.level} />
            </div>
          )
        }
        <style>{`
          .skills {
            padding: 10px 20px;
          }
          .skills .language {
            display: inline-block;
            width: 150px;
          }
        `}</style>
      </div>
    );
  }
}
