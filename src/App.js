import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routeUrl from "./constants/routeUrl";
import PageNotFound from "./pages/404";
import About from "./pages/About";
import HomePage from "./pages/Home";
import Nav from "./components/Nav";
import Toggle from "./components/Toggle";
import ModelProvider from "./context/providers/ModelProvider";
import NavProvider from "./context/providers/NavProvider";
import { HelmetProvider } from "react-helmet-async";
import DestinationsProvider from "./context/providers/DestinationsProvider";
function App() {
  //! State

  //! Function

  //! Render
  return (
    <Router>
      <ModelProvider>
        <NavProvider>
          <DestinationsProvider>
            <Toggle />
            <Nav />
            <HelmetProvider>
              <Switch>
                <Route path={routeUrl.HOME_PAGE} exact>
                  <HomePage />
                </Route>
                <Route path={routeUrl.ABOUT_PAGE}>
                  <About />
                </Route>
                {/*  */}
                <Route>
                  <PageNotFound />
                </Route>
              </Switch>
            </HelmetProvider>
          </DestinationsProvider>
        </NavProvider>
      </ModelProvider>
    </Router>
  );
}

export default App;
