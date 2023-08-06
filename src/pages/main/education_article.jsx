import React from 'react';
import FoldableTree from '@/components/foldable_tree';
import './styles.css';

const UNIVERSITY_DATA = [
  {
    label: '디지털미지어학과',
    open: true,
    children: [{ label: '제1전공 : 공학사' }],
  },
  {
    label: '정보보호학과',
    open: true,
    children: [{ label: '제2전공 : 공학사' }],
  },
  {
    label: '소프트웨어융합학과',
    open: true,
    children: [{ label: '부전공' }],
  },
];

const EducationArticle = () => {
  return (
    <article id="main-section-education" className="section-wrapper">
      <header>
        <h1>
          <a data-icon="📃" href="#main-section-education">
            학력 및 이력
          </a>
        </h1>
        <h4>IT 전공 주니어 개발자입니다.</h4>
      </header>
      <section id="univercity-article">
        <div>
          <h3>서울여자대학교</h3>
          <h5>2017.03 - 2021.02</h5>
          {UNIVERSITY_DATA.map((root) => (
            <FoldableTree key={root.key} node={root} />
          ))}
        </div>
      </section>
      <section>
        <h3>자격증</h3>
        <ul>
          <li>정보처리기사</li>
        </ul>
      </section>
    </article>
  );
};

export default EducationArticle;
