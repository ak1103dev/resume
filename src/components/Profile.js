import React, { Component } from 'react';

export default class Profile extends Component {
  render() {
    const { info } = this.props;
    return (
      <div className="profile">
        <h1 className="title">Profile</h1>
        {
          info.map((line, index) => <p key={index}>{line}</p>)
        }
        <style>{`
          .profile {
            padding: 10px 20px;
          }
        `}</style>
      </div>
    );
  }
}
