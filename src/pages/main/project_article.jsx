import React from 'react';
import { useTranslation } from 'react-i18next';
import './styles.css';

const ProjectArticle = () => {
  const { t } = useTranslation();
  return (
    <article id="main-section-project" className="section-wrapper">
      <header>
        <h1>
          <a data-icon="📂" href="#main-section-project">
            {t('section_title_work')}
          </a>
        </h1>
        <h4>{t('section_detail_work')}</h4>
      </header>
    </article>
  );
};

export default ProjectArticle;
