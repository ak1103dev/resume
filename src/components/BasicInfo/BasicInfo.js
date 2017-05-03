import React, { Component } from 'react';

export default class BasicInfo extends Component {
  render() {
    const { info } = this.props;
    return (
      <div className="basicInfo">
        <div className="profileImage" />
        <h1>{info.name}</h1>
        <h2>{info.bio}</h2>
        <div>
          <div className="rowInfo">
            <p>Telephone</p>
            <p>{info.tel}</p>
          </div>
          <div className="rowInfo">
            <p>Email</p>
            <p>{info.email}</p>
          </div>
          <div className="rowInfo">
            <p>Address</p>
            <p>{info.address}</p>
          </div>
        </div>
      </div>
    );
  }
}
