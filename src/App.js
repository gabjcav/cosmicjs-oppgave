import React from 'react';
import Cosmic from 'cosmicjs';
import SiteNavigation from './components/SiteNavigation'; 
import HomeContainer from './containers/HomeContainer';
import AboutContainer from './containers/AboutContainer';
import ContactContainer from './containers/ContactContainer'; 
import BlogListContainer from './containers/BlogListContainer';
import BlogPostContainer from './containers/BlogPostContainer';
import GlobalStyle from './components/GlobalStyle';
import {
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <SiteNavigation />
        <Switch>
          <Route path="/about" component={AboutContainer} />
          <Route path="/contact" component={ContactContainer} />
          <Route path="/blogg/:slug" component={BlogPostContainer} />
          <Route path="/blogg" component={BlogListContainer} />
          <Route path="/" component={HomeContainer} />
        </Switch>
      </Router>
    </>
  )
};

export default App;