import React from "react";
import { Helmet } from "react-helmet";
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ReactGA from "react-ga";

/** Style Imports*/
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";

/** Containers */
import NotFound from 'components/Containers/NotFound';

/** Helpers */
import getComponentByRoute from "helpers/componentByRoutes";


/** Styles */
const MainContainer = styled.div`
  display: grid;
  grid-template-areas:
    "header header header"
    "left content right"
    "footer footer footer";
  grid-template-columns: ${({theme}) => `${theme.spacings.layoutMargin} 1fr ${theme.spacings.layoutMargin}`};
  grid-template-rows: ${({theme}) => theme.spacings.headerHeight} 1fr auto;
  grid-gap: 10px;
  height: 100vh;
  @media (max-width: ${({theme}) => theme.breakpoints.tabletLandscape}px) {
    grid-template-columns: ${({theme}) => `${theme.spacings.layoutSmallMargin} 1fr ${theme.spacings.layoutSmallMargin}`};
  }
  @media (min-width: ${({theme}) => theme.breakpoints.desktopLarge}px) {
    grid-template-columns: ${({theme}) => `1fr ${theme.breakpoints.desktop}px 1fr`};
  }
  @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    grid-template-columns: 0px 1fr 0px;
  }
`;

const MainSection = styled.main`
  grid-area: content;
`;

const Wrapper = styled.div`

  .fade-appear {
    opacity: 0.01;
    border: 1px solid red;
  }
  .fade-appear.fade-appear-active {
    opacity: 1;
    transition: all 2s ease 0s;
    border: 1px solid orange;
  }

  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }

  div.transition-group {
    position: relative;
  }
`;

function Layout({ location }) {
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <link rel="shortcut icon" href='/assets/logo.png' />
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="description" content="Comité Nacional de Árbitros (CNA) - Real Federación Española de Hockey" />
        <title>Comité Nacional de Árbitros (CNA) - RFEH</title>
      </Helmet>
      <MainContainer>
        <MainSection>
          <Wrapper>
            <TransitionGroup className="transition-group">
              <CSSTransition
                key={location.key}
                timeout={300}
                classNames="fade"
                exit={false}
                >
                <div>
                  <Switch location={location}>
                    <Route exact path="/" component={getComponentByRoute('inicio')} />
                    <Route component={NotFound} />
                  </Switch>
                </div>
              </CSSTransition>
            </TransitionGroup>
          </Wrapper>
        </MainSection>
      </MainContainer>
    </>
  );
}
export default withRouter(Layout);