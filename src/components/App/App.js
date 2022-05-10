import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import ConfigureIcons from './ConfigureIcons';

import {
  HomePage,
  TestimonialsPage,
  AboutPage,
  ContactPage,
  PhotosPage,
  SafetyPage,
  PostPage,
} from '../../pages';

import { Header, Footer } from 'components/index';
import { HashRouter } from 'react-router-dom/cjs/react-router-dom.min';

const AnimatedSwitch = withRouter(({ location }) => {
  window.scrollTo(0, 0);

  if (location.pathname.includes('post')) {
    return <Route exact path="/post/:id" component={PostPage} />;
  }
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="slide" timeout={600}>
        <Switch location={location}>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/testimonials" component={TestimonialsPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/safety" component={SafetyPage} />
          <Route exact path="/photos" component={PhotosPage} />
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
});

function App() {
  ConfigureIcons();
  const renderLoader = () => <div className="loader"></div>;
  return (
    <div className="app">
      <div className="main-container">
        <Suspense fallback={renderLoader()}>
          <HashRouter>
            <Header></Header>
            <div className="app-component-container">
              <AnimatedSwitch />
            </div>
            <Footer></Footer>
          </HashRouter>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
