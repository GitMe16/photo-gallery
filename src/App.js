import React from 'react';
import routes from 'routes';
import { Switch, Route, Redirect } from 'react-router-dom';

const RouteItem = (item) => {
  return (
    <Route 
      path={ item.path } 
      component={ item.component } 
      { ...item } />
  );
}

function App() {
  return (
    <Switch>
      {
        routes.map((each, index) => 
          each.path !== '*' ?
          <RouteItem 
            path={each.path} 
            component={each.component} 
            exact={each.exact} 
            key={index} /> :
          <Redirect 
            to="/error-404" 
            key={index} />
        )
      }
    </Switch>
  );
}

export default App;

// Color Palette
// Blue: #DEECFB #BEDAF7 #7AB3EF #368CE7 #1666BA