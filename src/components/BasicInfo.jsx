import React, { Component } from "react";
import { withTranslation } from 'react-i18next';
import image from "../image/profile.jpeg";

class BasicInfo extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="basicInfo">
        <img className="profileImage" src={image} alt="apichan" />
        <h1>{t('basicInfo.name')}</h1>
        <h2>{t('basicInfo.bio')}</h2>
        <div className="contact">
          <div className="rowInfo">
            <p className="p label">Email</p>
            <p className="p">{t('basicInfo.email')}</p>
          </div>
          <div className="rowInfo">
            <p className="p label">Address</p>
            <p className="p">{t('basicInfo.address')}</p>
          </div>
        </div>
        <div className="socialIcons">
          {this.props.info.socials.map((social, i) => {
            // Map old FA4 icons to new FA6 brand icons
            const iconMap = {
              github: "fa-brands fa-github",
              medium: "fa-brands fa-medium",
              "facebook-square": "fa-brands fa-facebook",
              twitter: "fa-brands fa-twitter",
            };
            const iconClass =
              iconMap[social.icon] || `fa-solid fa-${social.icon}`;

            return (
              <a href={social.url} target="_blank" rel="noreferrer" key={i}>
                <i className={`${iconClass} fa-4x socialIcon`} />
              </a>
            );
          })}
        </div>
        <style>{`
          .basicInfo {
            padding: 10px 20px;
          }

          .basicInfo .profileImage {
            width: 300px;
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

export default withTranslation()(BasicInfo);
