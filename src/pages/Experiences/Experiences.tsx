import React from 'react';
import { FaLink } from 'react-icons/fa';

import styled from 'styled-components';
import PageDescription from '~/components/PageDescription/PageDescription';
import PageSubtitle from '~/components/PageSubtitle/PageSubtitle';
import PageTitle from '~/components/PageTitle/PageTitle';
import PageTransition from '~/components/PageTransition/PageTransition';

type Experience = {
  title: string;
  link: string;
  location: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
};

const experiencesData: Experience[] = [
  {
    title: 'Desenvolvedor Front-End',
    link: 'https://www.linkedin.com/in/jhonnatthan/',
    location: 'Santos',
    company: 'Netuno Tech',
    startDate: 'Nov/2019',
    endDate: 'Atual',
    description:
      'Desenvolvimento de aplicações, interfaces, soluções e animações com as tecnologias React JS e React Native',
  },
  {
    title: 'Desenvolvedor Front-End',
    link: 'https://www.linkedin.com/in/jhonnatthan/',
    location: 'Santos',
    company: 'JWM Development',
    startDate: 'Jun/2019',
    endDate: 'Atual',
    description:
      'Desenvolvimento de aplicações, interfaces, soluções e animações com as tecnologias React JS e React Native',
  },
  {
    title: 'Desenvolvedor Mobile',
    link: '',
    location: 'Santos',
    company: 'Pague com Crypto',
    startDate: 'Out/2019',
    endDate: 'Fev/2020',
    description:
      'Desenvolvimento da aplicação mobile do projeto Pague com Crypto, utilizando as tecnologias React Native, Redux, Redux Sagas e recursos como câmera para escanear código de barras',
  },
  {
    title: 'Desenvolvedor Full Stack',
    link: 'https://www.linkedin.com/company/edulabzz/',
    location: 'São Paulo',
    company: 'Edulabzz',
    startDate: 'Jun/2019',
    endDate: 'Nov/2020',
    description:
      'Desenvolvimento, manutenção e correções de aplicações utilizando os frameworks React JS e React Native. Desenvolvimento de aplicações utilizando JavaScript, HTML, CSS. Desenvolvimento e manutenção de aplicações web utilizando framework Laravel.',
  },
  {
    title: 'Desenvolvedor Full Stack',
    link: 'https://www.linkedin.com/company/agenciamanga/',
    location: 'Santos',
    company: 'Agência Manga',
    startDate: 'Abr/2018',
    endDate: 'Jul/2019',
    description:
      'Encarregado em manter interfaces de sistemas web, além de desenvolver o back-end (lado do servidor) destes sistemas. Trabalhou com as tecnologias: Laravel 5+, Angular 2+, Ionic e React Native. Responsável pelo desenvolvimento e manutenção de sites personalizados, criação de temas e utilização de plugins WordPress. Trabalhou com as tecnologias front-end: Redux, Sagas, HTML5, CSS3 (Sass) e JS (ES6+), além de Gulp, Git e jQuery.',
  },
  {
    title: 'Desenvolvedor Full Stack',
    link: '',
    location: 'São Vicente',
    company: 'Workless',
    startDate: 'Jun/2016',
    endDate: 'Jun/2017',
    description:
      'Desenvolvimento de sistemas, interfaces e novos recursos usando PHP, HTML, Jquery, Tecnologias Javascript e CSS.',
  },
  {
    title: 'Estágio Técnico em Informática',
    link: '',
    location: 'Santos',
    company: 'Condomínio Vila Residencial Jardins de Santa Thereza',
    startDate: 'Out/2016',
    endDate: 'Jun/2017',
    description:
      'Desenvolvimento de sistemas, interfaces e novos recursos usando PHP, HTML, Jquery, Tecnologias Javascript e CSS. Manutenção e montagem de equipamentos, suporte para equipamentos defeituosos',
  },
  {
    title: 'Estágio Desenvolvedor Full-Stack',
    link: 'https://etecrdc.com.br',
    location: 'São Vicente',
    company: 'ETEC Dra Ruth Cardoso',
    startDate: 'Fev/2017',
    endDate: 'Jun/2017',
    description:
      'Desenvolvimento de sistemas, interfaces e novos recursos utilizando as tecnologias PHP, HTML, Jquery, Javascript e CSS.',
  },
  {
    title: 'Estágio Instalação e Manutenção',
    link: 'https://etecrdc.com.br',
    location: 'São Vicente',
    company: 'ETEC Dra Ruth Cardoso',
    startDate: 'Ago/2016',
    endDate: 'Mai/2017',
    description:
      'Manutenção e montagem de equipamentos, suporte para equipamentos defeituosos e verificações de laboratório.',
  },
];

const ExperienceContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
  padding-left: 0;

  @media (min-width: 767px) {
    padding-left: 60px;

    &:before {
      content: '';
      position: absolute;
      width: 4px;
      height: calc(100% + 2rem);
      background-color: white;
      left: 17.5px;
    }

    &:after {
      content: '';
      position: absolute;
      width: 40px;
      height: 40px;
      border-radius: 20px;
      background-color: #ff79c6;
      border: 2px solid white;
      left: 0px;
      top: 10px;
    }
  }
`;

const ExperienceImageContainer = styled.div``;

const ExperienceImage = styled.img``;

const ExperienceContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const ExperienceTitle = styled.h2`
  font-size: 1.7rem;
  margin: 0;
  margin-bottom: 0.5rem;
`;

const ExperienceCompanyContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 1rem;
`;

const ExperienceCompany = styled.a`
  font-size: 1.5rem;
  text-decoration: none !important;
  color: white;
  margin: 0;

  &:hover {
    color: white;
  }

  svg {
    color: #ff79c6;
  }
`;

const ExperienceDivider = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.5);
`;

const ExperienceDuration = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
`;

const ExperienceLocation = styled.h3`
  font-size: 1rem;
  color: white;
  margin: 0;
`;

const ExperienceDescription = styled.p`
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
`;

const Experiences = () => {
  const renderExperiences = (experience: Experience, index: number) => (
    <ExperienceContainer>
      <ExperienceImageContainer>
        <ExperienceImage />
      </ExperienceImageContainer>
      <ExperienceContent>
        <ExperienceTitle>{experience.title}</ExperienceTitle>
        <ExperienceCompanyContainer>
          <ExperienceCompany
            href={experience.link}
            target="_blank"
            rel="noopener"
          >
            {experience.company} {experience.link && <FaLink size={12} />}
          </ExperienceCompany>
          <ExperienceDivider className="mx-2" />
          <ExperienceDuration>
            {experience.startDate} - {experience.endDate}
          </ExperienceDuration>
          <ExperienceDivider className="mx-2" />
          <ExperienceLocation>{experience.location}</ExperienceLocation>
        </ExperienceCompanyContainer>
        <ExperienceDescription>{experience.description}</ExperienceDescription>
      </ExperienceContent>
    </ExperienceContainer>
  );

  return (
    <PageTransition>
      <PageTitle>Experiencias</PageTitle>

      <PageSubtitle>Linha do tempo de experiencias</PageSubtitle>

      {experiencesData.map(renderExperiences)}
    </PageTransition>
  );
};

export default Experiences;
