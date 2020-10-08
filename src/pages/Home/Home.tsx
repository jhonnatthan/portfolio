import React, { Fragment } from 'react';
import styled from 'styled-components';
import PageDescription from '~/components/PageDescription/PageDescription';
import PageSubtitle from '~/components/PageSubtitle/PageSubtitle';
import PageTitle from '~/components/PageTitle/PageTitle';
import PageTransition from '~/components/PageTransition/PageTransition';

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
    <PageTransition>
      <PageTitle>Sobre min</PageTitle>

      <PageSubtitle>
        Jhonnatthan Santana<span>.</span>
      </PageSubtitle>

      <PageDescription>Web and Mobile developer.</PageDescription>

      <Description>
        Graduated in Computer Technician at ETEC Dra Ruth Cardoso (June / 2017)
        and studying Internet Systems at FATEC Rubens Lara. Developer Focused on
        Mobile and Web programming.
      </Description>
    </PageTransition>
  );
};

export default Home;
