import React from 'react';
import '@/App.css';
import EducationArticle from '@/pages/main/education_article';
import IntroArticle from '@/pages/main/intro_article';
import ProjectArticle from '@/pages/main/project_article';
import SkillStackArticle from '@/pages/main/skill_stack_article';
import UnsuppotedBrowser from '@pages/default/unsupported_browser';
import Layout from '@pages/layout/layout';
import { checkBrowser } from '@utils/browserUtils';

function App() {
  return checkBrowser() ? (
    <Layout>
      <IntroArticle />
      <SkillStackArticle />
      <ProjectArticle />
      <EducationArticle />
    </Layout>
  ) : (
    <UnsuppotedBrowser />
  );
}

export default App;
