import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Col, Row } from 'reactstrap';
import styled from 'styled-components';
import PageDescription from '~/components/PageDescription/PageDescription';
import PageSubtitle from '~/components/PageSubtitle/PageSubtitle';
import PageTitle from '~/components/PageTitle/PageTitle';
import PageTransition from '~/components/PageTransition/PageTransition';
import ScrollIndicator from '~/components/ScrollIndicator/ScrollIndicator';
import Skills, { Skill } from './components/Skills/Skills';

const Description = styled.p`
  color: white;
  margin: 0;
  font-size: 1.3rem;
  margin-bottom: 2rem;

  a {
    color: #ff79c6;
    text-decoration: none;
  }

  @media (min-width: 767px) {
    font-size: 1.5rem;
  }
`;

const frontEndSkills: Skill[] = [
  {
    name: 'Javascript',
    level: 5,
  },
  {
    name: 'React JS',
    level: 4,
  },
  {
    name: 'HTML',
    level: 5,
  },
  {
    name: 'CSS',
    level: 5,
  },
  {
    name: 'Angular',
    level: 3,
  },
];

const mobileSkills: Skill[] = [
  {
    name: 'React Native',
    level: 4,
  },
  {
    name: 'Ionic',
    level: 4,
  },
  {
    name: 'Android',
    level: 2,
  },
  {
    name: 'Swift',
    level: 1,
  },
];

const backEndSkills: Skill[] = [
  {
    name: 'PHP',
    level: 3,
  },
  {
    name: 'Wordpress',
    level: 4,
  },
  {
    name: 'Laravel',
    level: 3,
  },
  {
    name: 'Node JS',
    level: 3,
  },
  {
    name: 'Adonis JS',
    level: 3,
  },
];

const databaseSkills: Skill[] = [
  {
    name: 'MySql',
    level: 4,
  },
  {
    name: 'GraphQL',
    level: 1,
  },
  {
    name: 'MongoDB',
    level: 1,
  },
];

const languageSkills: Skill[] = [
  {
    name: 'Português',
    level: 5,
  },
  {
    name: 'Inglês',
    level: 3,
  },
];

const Home = () => {
  return (
    <PageTransition>
      <PageTitle>Sobre min</PageTitle>

      <PageSubtitle>
        Jhonnatthan Santana<span>.</span>
      </PageSubtitle>

      <PageDescription>Desenvolvedor React Native e React JS.</PageDescription>

      <Description>
        Técnico de Informática pela{' '}
        <a
          href="https://etecdrc.com.br/"
          target="_blank"
          rel="noreferrer noopener"
        >
          ETEC Dra Ruth Cardoso
        </a>{' '}
        (jun/2017) e cursando Sistemas para Internet pela{' '}
        <a
          href="https://fatecrl.edu.br/"
          target="_blank"
          rel="noreferrer noopener"
        >
          FATEC Rubens Lara com
        </a>{' '}
        formação prevista para dez/2020. Focado em programação Mobile e Web com
        especialidade em ReactNative e ReactJS.
      </Description>

      <PageSubtitle>Habilidades</PageSubtitle>

      <Row>
        <Col xs={12} md={12} lg={6} xl={4} className="mb-3 ">
          <Skills Icon={FaStar} name="Front end" items={frontEndSkills} />
        </Col>
        <Col xs={12} md={12} lg={6} xl={4} className="mb-3">
          <Skills Icon={FaStar} name="Mobile" items={mobileSkills} />
        </Col>
        <Col xs={12} md={12} lg={6} xl={4} className="mb-3">
          <Skills Icon={FaStar} name="Back end" items={backEndSkills} />
        </Col>
        <Col xs={12} md={12} lg={6} xl={4} className="mb-3">
          <Skills Icon={FaStar} name="BD" items={databaseSkills} />
        </Col>
        <Col xs={12} md={12} lg={6} xl={4} className="mb-3">
          <Skills Icon={FaStar} name="Linguagem" items={languageSkills} />
        </Col>
      </Row>

      <ScrollIndicator breakpoint={992} />
    </PageTransition>
  );
};

export default Home;
