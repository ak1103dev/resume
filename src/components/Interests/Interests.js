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
              <i key={i} className={`fa fa-${interest.icon} fa-5x`} />
            )
          }
        </div>
      </div>
    );
  }
}
