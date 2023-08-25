import React from 'react';
import { useTranslation } from 'react-i18next';
import './styles.css';

const IntroArticle = () => {
  const { t } = useTranslation();
  return (
    <article id="main-section-intro" className="section-wrapper">
      <header>
        <h1>
          <a data-icon="📃" href="#main-section-intro">
            {t('section_title_introduction')}
          </a>
        </h1>
      </header>
    </article>
  );
};

export default IntroArticle;
