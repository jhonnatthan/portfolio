import React, { memo, ReactNode } from 'react';

import styled from 'styled-components';

export const Container = styled.div`
  animation-name: fadeInLeft;
  animation-duration: 1s;

  @keyframes fadeInLeft {
    from {
      transform: translateX(-20px);
      opacity: 0;
    }

    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

type Props = {
  children: ReactNode;
};

const PageTransition = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default memo(PageTransition);
