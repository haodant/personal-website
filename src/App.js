import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from './components/layout';

// components
import HomeBanner from "./components/homePage/homeBanner"
import Research from "./components/research"
import DesignCode from './components/designCode';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path='/' component={HomeBanner} />
          <Route path='/research' component={Research} />
          <Route path='/code-design' component={DesignCode} />
        </Switch>
      </Layout>
    </div>
    </BrowserRouter>
  );
}

export default App;
