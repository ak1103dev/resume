import React, { Component } from 'react';

export default class Interests extends Component {
  render() {
    const { info } = this.props;
    return (
      <div className="interests">
        <h1 className="title">Interests</h1>
        <div className="interestList">
          {
            info.map((interest, i) =>
              <div className="icons">
                <i key={i} className={`fa fa-${interest.icon} fa-4x icon`} />
                <p>{interest.name}</p>
              </div>
            )
          }
        </div>
        <style jsx>{`
          .interests {
            padding: 10px 20px;
          }
          .interests .interestList {
            display: flex;
            justify-content: space-around;
          }
          .interests .icons {
            text-align: center;
          }
          .interests .icon {
            color: #0de599;
          }
        `}</style>
      </div>
    );
  }
}
