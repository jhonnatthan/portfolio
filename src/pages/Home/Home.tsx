import React, { Fragment } from 'react';
import styled from 'styled-components';
import PageTitle from '~/components/PageTitle/PageTitle';

const Title = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 1rem;

  span {
    color: #ff79c6;
  }

  @media (min-width: 767px) {
    font-size: 2.5rem;
  }
`;

const Role = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;

  @media (min-width: 767px) {
    font-size: 1.7rem;
  }
`;

const Description = styled.p`
  color: white;
  margin: 0;
  font-size: 1.2rem;

  @media (min-width: 767px) {
    font-size: 1.5rem;
  }
`;

const Home: React.FC = () => {
  return (
    <Fragment>
      <PageTitle>Sobre min</PageTitle>

      <Title>
        Jhonnatthan Santana<span>.</span>
      </Title>

      <Role>Web and Mobile developer.</Role>

      <Description>
        Graduated in Computer Technician at ETEC Dra Ruth Cardoso (June / 2017)
        and studying Internet Systems at FATEC Rubens Lara. Developer Focused on
        Mobile and Web programming.
      </Description>
    </Fragment>
  );
};

export default Home;
