import React, { Component } from 'react';

export default class BasicInfo extends Component {
  render() {
    const { info } = this.props;
    return (
      <div>
        <div>{info.image}</div>
        <h1>{info.name}</h1>
        <h2>{info.bio}</h2>
        <div>
          <div>
            <p>Telephone</p>
            <p>{info.tel}</p>
          </div>
          <div>
            <p>Email</p>
            <p>{info.email}</p>
          </div>
          <div>
            <p>Address</p>
            <p>{info.address}</p>
          </div>
        </div>
      </div>
    );
  }
}
