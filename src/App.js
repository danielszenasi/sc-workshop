import React from 'react';
import { Root, Routes, addPrefetchExcludes } from 'react-static';
//
import { Link, Router } from 'components/Router';
import Dynamic from 'containers/Dynamic';

import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    scroll-behavior: smooth;
  }
  body {
    font-family: 'Roboto', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',
    Helvetica, Arial, 'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: #108db8;
    font-weight: bold;
  }

  img {
    max-width: 100%;
  }
`;

const Nav = styled.nav`
  width: 100%;
  background: #108db8;
  display: flex;
  & a {
    color: white;
    padding: 1rem;
    display: inline-block;
  }
`;

const Content = styled.div`
  padding: 1rem;
`;

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic']);

function App() {
  return (
    <Root>
      <GlobalStyle />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/dynamic">Dynamic</Link>
      </Nav>
      <Content>
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </Content>
    </Root>
  );
}

export default App;
