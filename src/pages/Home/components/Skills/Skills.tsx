import React, { Fragment } from 'react';
import { IconType } from 'react-icons';
import { FaStar } from 'react-icons/fa';
import { UncontrolledTooltip } from 'reactstrap';
import styled from 'styled-components';
import PageDescription from '~/components/PageDescription/PageDescription';

// import { Container } from './styles';

type SkillItemProps = {
  index: number;
};

const SkillList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`;

const SkillItemContainer = styled.div`
  width: fit-content;
`;

const SkillItem = styled.li<SkillItemProps>`
  display: flex;
  flex-direction: row;
  align-items: center;

  animation-name: fadeInLeft;
  animation-duration: ${(props) => props.index / 2}s;
  margin-bottom: 15px;

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

const SkillItemText = styled.h2`
  font-size: 1.2rem;
  color: white;
  margin: 0;
  margin-right: 0.5rem;
`;

const SkillStars = styled.div`
  display: flex;
  flex-direction: reverse;
  flex-wrap: wrap;
  justify-content: center;
`;

export type Skill = {
  name: string;
  level: number;
};

type Props = {
  Icon?: IconType;
  name: string;
  items: Skill[];
};

const skillLabel: { [key in number]: string } = {
  1: 'Estudando',
  2: 'Básico',
  3: 'Intermediário',
  4: 'Avançado',
  5: 'Ninja',
};

const Skills = ({ Icon, name, items }: Props) => {
  const renderStars = (str: string, index: number) => {
    return (
      <div className="ml-1">
        <FaStar key={String(index)} color="#FFD700" />
      </div>
    );
  };

  const renderSkillItem = (item: Skill, index: number) => {
    const sanitizedName = item.name.replaceAll(' ', '-').toLowerCase();

    const starsArr = Array(item.level).fill('');

    const ID = `${sanitizedName}-${index}`;

    return (
      <SkillItemContainer id={ID}>
        <SkillItem index={index}>
          <SkillItemText>{item.name}</SkillItemText>
          <SkillStars>{starsArr.map(renderStars)}</SkillStars>
        </SkillItem>
        <UncontrolledTooltip placement="top" target={ID}>
          {skillLabel[item.level]}
        </UncontrolledTooltip>
      </SkillItemContainer>
    );
  };

  return (
    <Fragment>
      <PageDescription>
        {Icon && <Icon className="mr-2" />}
        {name}
      </PageDescription>

      <SkillList>{items.map(renderSkillItem)}</SkillList>
    </Fragment>
  );
};

export default Skills;
