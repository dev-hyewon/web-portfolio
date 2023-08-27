import React from 'react';
import { useTranslation } from 'react-i18next';
import FoldableTree from '@/components/foldable_tree';
import './styles.css';

const EducationArticle = () => {
  const { t } = useTranslation();

  const UNIVERSITY_DATA = [
    {
      label: t('major1_name'),
      open: true,
      children: [{ label: t('major1_detail') }],
    },
    {
      label: t('major2_name'),
      open: true,
      children: [{ label: t('major2_detail') }],
    },
    {
      label: t('minor_name'),
      open: true,
      children: [{ label: t('minor_detail') }],
    },
  ];

  return (
    <article id="main-section-education" className="section-wrapper">
      <header>
        <h1>
          <a data-icon="📃" href="#main-section-education">
            {t('section_title_education')}
          </a>
        </h1>
        <h4>{t('section_detail_education')}</h4>
      </header>
      <div>
        <article id="univercity-article">
          <h3>{t('education')}</h3>
          <div>
            <h4>{t('university_name')}</h4>
            <h5>2017.03 - 2021.02</h5>
            {UNIVERSITY_DATA.map((root) => (
              <FoldableTree key={root.label} node={root} />
            ))}
          </div>
        </article>
        <article>
          <h3>{t('certificate')}</h3>
          <ul>
            <li>{t('information_processing_certification')}</li>
          </ul>
        </article>
      </div>
    </article>
  );
};

export default EducationArticle;
