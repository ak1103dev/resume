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
        <style jsx>{`
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

          .basicInfo .rowInfo > p {
            display: inline-block;
            margin: 5px 0;
          }
          .basicInfo .rowInfo > p:nth-child(1) {
            width: 100px;
          }

          .basicInfo .socialIcons {
            display: flex;
            justify-content: space-around;
          }
          .basicInfo .socialIcons > a {
            color: #0de599;
          }
        `}</style>
      </div>
    );
  }
}
