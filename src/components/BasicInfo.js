import React, { Component } from 'react';
import image from '../image/Apichan.jpg'

export default class BasicInfo extends Component {
  render() {
    const { info } = this.props;
    return (
      <div className="basicInfo">
        <img className="profileImage" src={image} alt="apichan" />
        <h1>{info.name}</h1>
        <h2>{info.bio}</h2>
        <div className="contact">
          <div className="rowInfo">
            <p className="p label">Email</p>
            <p className="p">{info.email}</p>
          </div>
          <div className="rowInfo">
            <p className="p label">Address</p>
            <p className="p">{info.address}</p>
          </div>
        </div>
        <div className="socialIcons">
          {
            info.socials.map((social, i) =>
              <a href={social.url} target="_blank" key={i}>
                <i className={`fa fa-${social.icon} fa-4x socialIcon`} />
              </a>
            )
          }
        </div>
        <style>{`
          .basicInfo {
            padding: 10px 20px;
          }

          .basicInfo .profileImage {
            width: 200px;
            height: 300px;
            border-radius: 10px;
          }

          .basicInfo .contact {
            margin-bottom: 10px;
          }

          .basicInfo .p {
            display: inline-block;
            margin: 5px 0;
          }
          .basicInfo .label {
            width: 100px;
          }

          .basicInfo .socialIcons {
            display: flex;
            justify-content: space-around;
          }
          .basicInfo .socialIcon {
            color: #0de599;
          }
        `}</style>
      </div>
    );
  }
}
