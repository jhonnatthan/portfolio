import React from 'react';
import { Container } from 'reactstrap';
import styled, { createGlobalStyle } from 'styled-components';
import Routes from './routes';

import { FaBriefcase, FaBuilding, FaEnvelope, FaUserAlt } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #252526;
        color: #ff79c6;
    }

    * {
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }

`;

const Main = styled.main`
  display: flex;
  flex: 1;
  min-height: 100vh;
  min-width: 100%;
  padding: 20px 0;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(14, 15, 45, 1), rgba(45, 11, 42, 1));
  background-size: cover;
  background-position: center center;
`;

const BoxBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #282a37;
  -webkit-filter: blur(1px);
  -moz-filter: blur(1px);
  -o-filter: blur(1px);
  -ms-filter: blur(1px);
  filter: blur(1px);
  z-index: -1;
  opacity: 0.4;
  border-radius: 15px;
`;

const Box = styled.div`
  display: flex;
  flex: 1;
  position: relative;

  min-height: 80vh;
  z-index: 2;
`;

const SideBar = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  height: 80vh;
  padding: 20px;
  min-width: 75px;

  will-change: width;
  transition: width 500ms;

  @media (min-width: 767px) {
    width: 30%;
  }

  @media (min-width: 992px) {
    width: 25%;
  }

  @media (min-width: 1200px) {
    width: 20%;
  }
`;

const Content = styled.div`
  flex: 1;
  background-color: #282a37;

  padding: 30px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const ProfilePhoto = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 200px;
  margin-bottom: 30px;

  will-change: width, height;
  transition: width 1s, height 1s;

  @media (min-width: 767px) {
    width: 120px;
    height: 120px;
  }
`;

const MenuList = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: column;
  list-style-type: none;
  width: 100%;
  align-items: flex-start;
`;

const MenuItem = styled.li`
  display: flex;
  width: 100%;
  color: white;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;

const MenuItemLink = styled(NavLink)`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-decoration: none !important;
  padding: 10px 0;
  margin: 10px 0;

  svg {
    width: 25px;
    height: 25px;
    will-change: fill;
    transition: fill 500ms;
  }

  p {
    will-change: color;
    transition: color 500ms;
  }

  &:before {
    content: '';
    position: absolute;
    width: 8px;
    height: 100%;
    left: -20px;
    background-color: transparent;
    will-change: background-color;
    transition: background-color 500ms;
  }

  &.active {
    svg {
      fill: #ff79c6;
    }

    p {
      color: #ff79c6;
    }

    &:before {
      background-color: #ff79c6;
    }
  }

  @media (min-width: 767px) {
    padding: 10px;
    justify-content: flex-start;
  }
`;

const MenuItemText = styled.p`
  display: none;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 20px;
  margin: 0;

  @media (min-width: 767px) {
    display: flex;
  }
`;

type MenuItemData = {
  title: string;
  route: string;
  Icon: IconType;
};

const menuItems: MenuItemData[] = [
  {
    title: 'Sobre min',
    Icon: FaUserAlt,
    route: '/',
  },
  {
    title: 'Experiencia',
    Icon: FaBriefcase,
    route: '/experiencias',
  },
  {
    title: 'Formação',
    Icon: FaBuilding,
    route: '/formacao',
  },
  {
    title: 'Contato',
    Icon: FaEnvelope,
    route: '/contato',
  },
];

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Main>
        <Container>
          <Box>
            <BoxBackground />
            <SideBar>
              <ProfilePhoto src="https://avatars3.githubusercontent.com/u/8497163?s=460&u=f2a1978c7962799b353155322a928dc0d42298cc&v=4" />

              <MenuList>
                {menuItems.map(({ title, route, Icon }, index) => (
                  <MenuItem key={String(index)}>
                    <MenuItemLink to={route} exact activeClassName="active">
                      <Icon className="text-white mr-md-2" />
                      <MenuItemText>{title}</MenuItemText>
                    </MenuItemLink>
                  </MenuItem>
                ))}
              </MenuList>
            </SideBar>
            <Content>
              <Routes />
            </Content>
          </Box>
        </Container>
      </Main>
    </Router>
  );
}

export default App;
