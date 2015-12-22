import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createMemoryHistory } from 'history';
import { Route, RoutingContext, match } from 'react-router';

import Html from './Html';
import Main from './Main';
const routes = <Route path="/" component={Main} />;

// Exported static site renderer:
export default (locals, callback) => {
  const history = createMemoryHistory();
  const location = history.createLocation(locals.path);

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    callback(null, <Html
        html={ReactDOMServer.renderToString(<RoutingContext {...renderProps} />)}
        assets={locals.assets}
      />
    );
  });
};
