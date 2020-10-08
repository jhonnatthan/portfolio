import React, { memo, ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.h1`
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

type Props = {
  children: ReactNode;
};

const PageSubtitle = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default memo(PageSubtitle);
