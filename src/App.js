import React, { Component } from 'react';
import Navbar from './comps/navbar';
import Navbar2 from './comps/navbar2';
import Navbar3 from './comps/navbar3';
import Content from './comps/content';
import CollapsableNav from './comps/collapsablenav';
import NavMenu from './comps/navmenu';
//import Gallery from './comps/gallery';
import Gallery from './comps/gallery2';
import logo from './logo.svg';
import './App.css';

import CSSAnimation from './pages/cssanimation'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CSSAnimation />
        <hr />
        <Navbar2 />
        <Content />
        <Navbar3 />
        <Navbar />
        <CollapsableNav />
        <NavMenu />
        <Gallery />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React.js + FlexBox</h1>
        </header>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
