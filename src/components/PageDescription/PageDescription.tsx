import React, { memo, ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.p`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;

  @media (min-width: 767px) {
    font-size: 1.7rem;
  }
`;

type Props = {
  children: ReactNode;
};

const PageDescription = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default memo(PageDescription);
