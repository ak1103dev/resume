import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class Interests extends Component {
  render() {
    const { info, t } = this.props;
    return (
      <div className="interests">
        <h1 className="title">{t('interests.title')}</h1>
        <div className="interestList">
          {
            info.map((interest, index) => {
              // Map icons to proper Font Awesome 6 classes
              const iconMap = {
                'book': 'fa-solid fa-book',
                'film': 'fa-solid fa-film',
                'headphones': 'fa-solid fa-headphones',
                'pencil': 'fa-solid fa-pencil',
                'bitcoin': 'fa-brands fa-bitcoin'
              };
              const iconClass = iconMap[interest.icon] || `fa-solid fa-${interest.icon}`;

              return (
                <div className="icons" key={index}>
                  <i className={`${iconClass} fa-4x icon`} />
                  <p>{t(`interests.items.${interest.name}`)}</p>
                </div>
              );
            })
          }
        </div>
        <style>{`
          .interests {
            padding: 10px 20px;
          }
          .interests .interestList {
            display: flex;
            justify-content: space-around;
          }
          .interests .icons {
            text-align: center;
          }
          .interests .icon {
            color: #0de599;
          }
        `}</style>
      </div>
    );
  }
}

export default withTranslation()(Interests);
