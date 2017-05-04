import React, { Component } from 'react';

export default class BasicInfo extends Component {
  render() {
    const { info } = this.props;
    return (
      <div className="basicInfo">
        <img className="profileImage" src={info.image} alt="apichan" />
        <h1>{info.name}</h1>
        <h2>{info.bio}</h2>
        <div className="contact">
          <div className="rowInfo">
            <p>Email</p>
            <p>{info.email}</p>
          </div>
          <div className="rowInfo">
            <p>Address</p>
            <p>{info.address}</p>
          </div>
        </div>
        <div className="socialIcons">
          {
            info.socials.map((social, i) =>
              <a href={social.url} target="_blank" key={i}>
                <i className={`fa fa-${social.icon} fa-4x`} />
              </a>
            )
          }
        </div>
      </div>
    );
  }
}
