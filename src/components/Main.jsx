require('normalize.css');
require('styles/App.sass');
require('bootstrap/less/bootstrap.less');

import React from 'react';

import Header from './Header';
import Body from './Body';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Header />
        <Body />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
