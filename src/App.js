import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Layout from "./components/layout";

// components
import HomeBanner from "./components/homePage/homeBanner";
import Work from "./components/work";
import ProjectDetails from "./components/projects/projectDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Route
            render={({ location }) => (
              <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                  <Route exact path="/" component={HomeBanner} />
                  <Route exact path="/work/:id" component={ProjectDetails} />
                  {/* <Route path="/about" component={About} /> */}
                  <Route exact path="/work" component={Work} />
                </Switch>
              </AnimatePresence>
            )}
          />
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
