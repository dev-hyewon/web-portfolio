import React from 'react';
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
  return (
    <article id="main-section-skill" className="section-wrapper">
      <header>
        <h1>
          <a data-icon="📂" href="#main-section-skill">
            스킬스택
          </a>
        </h1>
        <h4>웹을 구성하고 유지 보수할 수 있습니다.</h4>
      </header>
      <div>
        <dl>
          {techList.map((section, i) => (
            <section key={`skill_section${i}`}>
              <dt>{section.title}</dt>
              {section.items.map((item, j) => (
                <dd key={`skill_section${i}_item${j}`}>{item}</dd>
              ))}
            </section>
          ))}
        </dl>
      </div>
    </article>
  );
};

export default SkillStackArticle;
