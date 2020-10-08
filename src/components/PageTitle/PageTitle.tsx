import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.p`
  color: white;
  width: fit-content;
  font-size: 25px;
  border-bottom: 3px solid #ff79c6;
  margin-bottom: 30px;
`;

type Props = {
  children: ReactNode;
};

const PageTitle = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default PageTitle;
