require('normalize.css');
require('styles/App.sass');
require('bootstrap/less/bootstrap.less');

import React from 'react';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
