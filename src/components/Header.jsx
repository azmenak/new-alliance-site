require('../styles/Header.sass');

import React from 'react';
import { Grid } from 'react-bootstrap';
import Typeform from './Typeform';

class HeaderComponent extends React.Component {
  render() {
    return (
      <div className="header-component">
        <Grid>
          <div className="logo-main">New Alliance Logo</div>
          <div className="contact">
            <p>t. (905) 637 8883</p>
            <Typeform />
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
