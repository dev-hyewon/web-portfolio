import React from 'react';
import gerrit_png from '@/assets/image/Gerrit_icon.svg.png';

const initialProps = {
  width: '48',
  height: '48',
};

export const TechImg = (name) => {
  let props = initialProps;
  switch (name) {
    case 'JAVA':
      props = {
        src: 'https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png',
        alt: 'java-coffee-cup-logo--v1',
      };
      break;
    case 'Javascript':
      props = {
        src: 'https://img.icons8.com/color/48/javascript--v1.png',
        alt: 'javascript--v1',
      };
      break;
    case 'Python':
      props = {
        src: 'https://img.icons8.com/color/48/python--v1.png',
        alt: 'python--v1',
      };
      break;
    case 'C++':
      props = {
        src: 'https://img.icons8.com/color/48/c-plus-plus-logo.png',
        alt: 'c-plus-plus-logo',
      };
      break;
    case 'C':
      props = {
        src: 'https://img.icons8.com/fluency/48/c-programming.png',
        alt: 'c-programming',
      };
      break;
    case 'C#':
      props = {
        src: 'https://img.icons8.com/color/48/c-sharp-logo-2.png',
        alt: 'c-sharp-logo-2',
      };
      break;
    case 'Nodejs':
      props = {
        src: 'https://img.icons8.com/fluency/48/node-js.png',
        alt: 'Nodejs',
      };
      break;
    case 'Spring':
      props = {
        src: 'https://img.icons8.com/color/48/spring-logo.png',
        alt: 'spring-logo',
      };
      break;
    case 'Firebase':
      props = {
        src: 'https://img.icons8.com/color/48/firebase.png',
        alt: 'firebase',
      };
      break;
    case 'MariaDB':
      props = {
        src: 'https://img.icons8.com/fluency/48/maria-db.png',
        alt: 'maria-db',
      };
      break;
    case 'MySQL':
      props = {
        src: 'https://img.icons8.com/color/48/mysql-logo.png',
        alt: 'mysql-logo',
      };
      break;
    case 'NginX':
      props = {
        src: 'https://img.icons8.com/color/48/nginx.png',
        alt: 'nginx',
      };
      break;
    case 'Tomcat':
      props = {
        src: 'https://img.icons8.com/color/48/tomcat.png',
        alt: 'tomcat',
      };
      break;
    case 'GCP':
      props = {
        src: 'https://img.icons8.com/color/48/google-cloud-platform.png',
        alt: 'google-cloud-platform',
      };
      break;
    case 'Kubernetes':
      props = {
        src: 'https://img.icons8.com/color/48/kubernetes.png',
        alt: 'kubernetes',
      };
      break;
    case 'Docker':
      props = {
        src: 'https://img.icons8.com/color/48/docker.png',
        alt: 'docker',
      };
      break;
    case 'VMWare':
      props = {
        src: 'https://img.icons8.com/color/48/old-vmware-logo.png',
        alt: 'old-vmware-logo',
      };
      break;
    case 'jenkins':
      props = {
        src: 'https://img.icons8.com/color/48/jenkins.png',
        alt: 'jenkins',
      };
      break;
    case 'React':
      props = {
        src: 'https://img.icons8.com/color/48/react-native.png',
        alt: 'react-native',
      };
      break;
    case 'HTML':
      props = {
        src: 'https://img.icons8.com/fluency/48/html-5.png',
        alt: 'html-5',
      };
      break;
    case 'CSS':
      props = {
        src: 'https://img.icons8.com/color/48/css3.png',
        alt: 'css3',
      };
      break;
    case 'Git':
      props = {
        src: 'https://img.icons8.com/color/48/git.png',
        alt: 'git',
      };
      break;
    case 'Gerrit':
      props = { src: gerrit_png, alt: 'gerrit' };
      break;
    case 'Bitbucket':
      props = {
        src: 'https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-bitbucket-is-a-web-based-version-control-repository-hosting-service-logo-shadow-tal-revivo.png',
        alt: 'external-bitbucket-is-a-web-based-version-control-repository-hosting-service-logo-shadow-tal-revivo',
      };
      break;
    case 'Jira':
      props = {
        src: 'https://img.icons8.com/color/48/jira.png',
        alt: 'jira',
      };
      break;
    case 'Confluence':
      props = {
        src: 'https://img.icons8.com/fluency/48/confluence.png',
        alt: 'confluence',
      };
      break;
    case 'ESLint':
      props = {
        src: 'https://img.icons8.com/color/48/eslint.png',
        alt: 'eslint',
      };
      break;
    case 'Prettier':
    default:
  }
  return <img {...props} />;
};
