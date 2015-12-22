require('../styles/Header.sass');

import React from 'react';
import { Grid } from 'react-bootstrap';
import Typeform from './Typeform';

const logoImg = require('../images/new-alliance-logo.png');

class HeaderComponent extends React.Component {
  render() {
    return (
      <div className="header-component">
        <Grid>
          <div className="logo-main">
            <img src={logoImg} />
          </div>
          <div className="contact">
            <h4>Get a free consultation</h4>
            <p>call us (905) 637-8883 or <Typeform /></p>
          </div>
        </Grid>
      </div>
    );
  }
}

HeaderComponent.displayName = 'HeaderComponent';

// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
