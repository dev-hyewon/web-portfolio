import React from 'react';
import { useTranslation } from 'react-i18next';
import { TechImg } from '@/components/icons8';
import './skill_stack_article.css';
import './styles.css';

const techList = [
  {
    title: 'Language',
    items: ['JAVA', 'Javascript', 'Python', 'C++', 'C', 'C#'],
  },
  {
    title: 'Back-end',
    items: ['Nodejs', 'Spring'],
  },
  {
    title: 'Database',
    items: ['Firebase', 'MariaDB', 'MySQL'],
  },
  {
    title: 'DevOps',
    items: ['Kubernetes', 'Docker', 'jenkins', 'VMWare'],
  },
  {
    title: 'WAS',
    items: ['NginX', 'Tomcat'],
  },
  { title: 'Cloud', items: ['GCP'] },
  {
    title: 'Front-end',
    items: ['React', 'HTML', 'CSS'],
  },
  {
    title: 'Collaboration Tools',
    items: ['Jira', 'Confluence', 'Gerrit', 'Bitbucket', 'Git'],
  },
  {
    title: 'Linting Tools',
    items: ['ESLint', 'Prettier'],
  },
];

const SkillStackArticle = () => {
  const { t } = useTranslation();
  return (
    <article id="main-section-skill" className="section-wrapper">
      <header>
        <h1>
          <a data-icon="📂" href="#main-section-skill">
            {t('section_title_tech')}
          </a>
        </h1>
        <h4>{t('section_detail_tech')}</h4>
      </header>
      <div>
        <dl>
          {techList.map((section) => (
            <section key={`section_${section.title}`}>
              <dt>{section.title}</dt>
              <div>
                {section.items.map((item) => (
                  <dd key={`skill_${item}`}>
                    {TechImg(item)}
                    {item}
                  </dd>
                ))}
              </div>
            </section>
          ))}
        </dl>
      </div>
    </article>
  );
};

export default SkillStackArticle;
