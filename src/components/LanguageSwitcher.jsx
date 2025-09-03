import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button
        className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
      >
        {t('languages.en')}
      </button>
      <button
        className={`lang-btn ${i18n.language === 'th' ? 'active' : ''}`}
        onClick={() => changeLanguage('th')}
      >
        {t('languages.th')}
      </button>
    </div>
  );
};

export default LanguageSwitcher;