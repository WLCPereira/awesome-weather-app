/* eslint-disable react/display-name */
import { Suspense } from 'react';
import { LoadingFrame } from 'Components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as Pages from 'Pages';

const routeSchema = [
  {
    name: 'home',
    path: '/',
    render: (props) => <Pages.Home {...props} />,
  },
  {
    name: 'weather',
    path: '/weatherInfos',
    render: (prpos) => <Pages.Weather {...prpos} />,
  },
];

export default function Routes() {
  let mapRoutes = (route) => (
    <Route key={route.name} path={route.path} render={route.render} exact />
  );

  return (
    <Router>
      <Switch>
        <Suspense fallback={<LoadingFrame />}>
          {routeSchema.map(mapRoutes)}
        </Suspense>
      </Switch>
    </Router>
  );
}
