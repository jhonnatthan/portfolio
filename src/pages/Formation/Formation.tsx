import React from 'react';
import { FaLink } from 'react-icons/fa';
import styled from 'styled-components';
import PageSubtitle from '~/components/PageSubtitle/PageSubtitle';
import PageTitle from '~/components/PageTitle/PageTitle';
import PageTransition from '~/components/PageTransition/PageTransition';

type Formation = {
  institution: string;
  link: string;
  formation: string;
  area: string;
  startDate: string;
  endDate: string;
  description: string;
};

const formations: Formation[] = [
  {
    institution: 'FATEC Rubens lara',
    link: 'https://fatecrl.edu.br/',
    formation: 'Superior',
    area: 'Sistemas para Internet',
    startDate: 'Jan/2018',
    endDate: 'Dez/2020',
    description:
      'O tecnólogo formado neste curso ocupa-se do desenvolvimento de programas, de interfaces e aplicativos, do comércio e do marketing eletrônicos, além de sítios e portais para internet e intranet. Gerencia projetos de sistemas, inclusive com acesso a banco de dados, desenvolvendo projetos de aplicações para a rede mundial de computadores e integra mídias nos sítios da internet. Atua com tecnologias emergentes como computação móvel, redes sem fio e sistemas distribuídos. Cuidar da implantação, atualização, manutenção e segurança dos sistemas para internet também são suas atribuições.',
  },
  {
    institution: 'ETEC Dra Ruth Cardoso',
    link: 'https://etecdrc.com.br/',
    formation: 'Técnico',
    area: 'Técnico em informática',
    startDate: 'Jan/2016',
    endDate: 'Jul/2017',
    description:
      'O técnico em informática é o profissional que desenvolve programas de computador, seguindo as especificações e paradigmas da lógica de programação e das linguagens de programação. Utiliza ambientes de desenvolvimento de sistemas, sistemas operacionais e banco de dados. Realiza testes de programas de computador, mantendo registros que possibilitem análises e refinamento dos resultados. Executa manutenção de programas de computadores implantados.',
  },
];

const FormationContainer = styled.div`
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

const FormationImageContainer = styled.div``;

const FormationImage = styled.img``;

const FormationContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const FormationTitle = styled.h2`
  font-size: 1.7rem;
  margin: 0;
  margin-bottom: 0.5rem;
`;

const FormationTitleLink = styled.a`
  text-decoration: none !important;
  color: #ff79c6 !important;
`;

const FormationCompanyContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 1rem;
`;

const FormationFormation = styled.p`
  font-size: 1rem;
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

const FormationDivider = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.5);
`;

const FormationDuration = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
`;

const FormationArea = styled.h3`
  font-size: 1rem;
  color: white;
  margin: 0;
`;

const FormationDescription = styled.p`
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
`;

const Formation = () => {
  const renderFormations = (formation: Formation, index: number) => (
    <FormationContainer>
      <FormationImageContainer>
        <FormationImage />
      </FormationImageContainer>
      <FormationContent>
        <FormationTitle>
          <FormationTitleLink href={formation.link} target="_blank">
            {formation.institution} {formation.link && <FaLink size={12} />}
          </FormationTitleLink>
        </FormationTitle>
        <FormationCompanyContainer>
          <FormationFormation>{formation.formation}</FormationFormation>
          <FormationDivider className="mx-2" />
          <FormationDuration>
            {formation.startDate} - {formation.endDate}
          </FormationDuration>
          <FormationDivider className="mx-2" />
          <FormationArea>{formation.area}</FormationArea>
        </FormationCompanyContainer>
        <FormationDescription>{formation.description}</FormationDescription>
      </FormationContent>
    </FormationContainer>
  );

  return (
    <PageTransition>
      <PageTitle>Formação</PageTitle>

      <PageSubtitle>Linha do tempo de formação</PageSubtitle>

      {formations.map(renderFormations)}
    </PageTransition>
  );
};

export default Formation;
