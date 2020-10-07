import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Routes from './routes';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #252526;
        color: #ff79c6;
    }

`;

const Main = styled.main`
  display: flex;
  flex: 1;
  min-height: 100vh;
  min-width: 100%;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 50%;
  height: 50%;
  background-color: black;
  -webkit-filter: blur(2px);
  -moz-filter: blur(2px);
  -o-filter: blur(2px);
  -ms-filter: blur(2px);
  filter: blur(2px);
`;

const SideBar = styled.aside``;

function App() {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Box>
          <SideBar />
          <Routes />
        </Box>
      </Main>
    </>
  );
}

export default App;
