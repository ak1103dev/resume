import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class Profile extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="profile">
        <h1 className="title">{t('profile.title')}</h1>
        {
          t('profile.description', { returnObjects: true }).map((line, index) => <p key={index}>{line}</p>)
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

export default withTranslation()(Profile);
