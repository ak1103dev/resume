import React, { Component } from 'react';

export default class References extends Component {
  render() {
    const { info } = this.props;
    return (
      <div className="references">
        <h1 className="title">References</h1>
        <div>
          {
            info.map((ref, i) =>
              <div key={i}>
                <p>{ref.name}, {ref.company}</p>
                <p>Email: {ref.email}</p>
              </div>
            )
          }
        </div>
        <style jsx>{`
          .references {
            padding: 10px 20px; }
        `}</style>
      </div>
    );
  }
}
