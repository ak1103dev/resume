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
              <div>
                <i key={i} className={`fa fa-${interest.icon} fa-4x`} />
                <p>{interest.name}</p>
              </div>
            )
          }
        </div>
        <style jsx>{`
          .interests {
            padding: 10px 20px; }
            .interests .interestList {
              display: flex;
              justify-content: space-around; }
              .interests .interestList > div {
                text-align: center; }
                .interests .interestList > div > i {
                  color: #0de599; }
        `}</style>
      </div>
    );
  }
}
