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

  .pagination {
    display: inline-block;
    padding-left: 15px;
    padding-right: 15px;
}

  .pagination li {
      display: inline-block;
      padding: 5px;
    margin: 5px;
    border: solid black 1px;
  }

  .netlify-identity-menu {
    display: flex;
    margin: 0;
    list-style-type: none;
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

// Any routes that start with 'appointmens' will be treated as non-static routes
addPrefetchExcludes(['appointments']);

function App() {
  return (
    <Root>
      <GlobalStyle />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/listings">Listings</Link>
        <Link to="/appointments">Appointments</Link>
        <div data-netlify-identity-menu />
      </Nav>
      <Content>
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path="appointments" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </Content>
    </Root>
  );
}

export default App;
