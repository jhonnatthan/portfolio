import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import styled from 'styled-components';

type BreakpointProps = {
  breakpoint: number;
};

const Container = styled.div<BreakpointProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 25px;
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  opacity: 0.8;

  svg {
    animation-name: shake;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }

  @media (min-width: ${(props) => props.breakpoint}px) {
    display: none;
  }

  @keyframes shake {
    0% {
      transform: translateY(-5px);
    }

    25% {
      transform: translateY(5px);
    }

    50% {
      transform: translateY(0);
    }

    75% {
      transform: translateY(5px);
    }

    100% {
      transform: translateY(-5px);
    }
  }
`;

type ScrollIndicatorProps = BreakpointProps & {
  onClick?: () => void;
};

const ScrollIndicator = ({ breakpoint, onClick }: ScrollIndicatorProps) => {
  return (
    <Container breakpoint={breakpoint} onClick={onClick}>
      <FaArrowDown size={20} />
    </Container>
  );
};

export default ScrollIndicator;
