require('../styles/Footer.sass');

import React from 'react';
import { Grid, Jumbotron } from 'react-bootstrap';
import Typeform from './Typeform';

export default function() {
  return (
    <Grid className="footer-component">
      <Jumbotron>
        <Typeform /> for a free consultation or call (905) 637-8883.
      </Jumbotron>
    </Grid>
  )
}
