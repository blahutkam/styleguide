import React from "react";

//context API
import GithubState from "../context/github/GithubState";
import AlertState from "../context/alert/AlertState";
import ContactState from "../context/contact/ContactState";

//react router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";

import UserDetails from "./components/users/UserDetails";

import Logger from "./pages/logger/LoggerPage";
import ContactsPage from "./pages/contacts/ContactsPage";
import Styleguide from "./pages/styleguide/StyleguidePage";
import UsersPage from "./pages/users/UsersPage";

import Buttons from "./pages/styleguide/Buttons";
import Charts from "./pages/styleguide/Charts";
import Colors from "./pages/styleguide/Colors";
import Grid from "./pages/styleguide/Grid";
import Datepicker from "./pages/styleguide/Datepicker";
import Lightbox from "./pages/styleguide/Lightbox";
import Loading from "./pages/styleguide/Loading";
import Pagination from "./pages/styleguide/Pagination";
import Panel from "./pages/styleguide/Panel";
import Table from "./pages/styleguide/Table";
import Tooltip from "./pages/styleguide/Tooltip";

import Navbar from "./components/layout/Navbar";

const App = () => {
  return (
    <ContactState>
      <GithubState>
        <AlertState>
          <Router>
            <div className="App">
              <Navbar />

              <div className="container">
                <Switch>
                  <Route exact path="/" component={LandingPage} />
                  {/* users*/}
                  <Route exact path="/users" component={UsersPage} />
                  <Route exact path="/user/:login" component={UserDetails} />

                  <Route exact path="/logger" component={Logger} />
                  <Route exact path="/contacts" component={ContactsPage} />
                  {/* styleguide */}
                  <Route exact path="/styleguide" component={Styleguide} />
                  <Route exact path="/buttons" component={Buttons} />
                  <Route exact path="/charts" component={Charts} />
                  <Route exact path="/colors" component={Colors} />
                  <Route exact path="/grid" component={Grid} />
                  <Route exact path="/datepicker" component={Datepicker} />
                  <Route exact path="/lightbox" component={Lightbox} />
                  <Route exact path="/loading" component={Loading} />
                  <Route exact path="/pagination" component={Pagination} />
                  <Route exact path="/panel" component={Panel} />
                  <Route exact path="/table" component={Table} />
                  <Route exact path="/tooltip" component={Tooltip} />

                  <Route component={NotFound} />
                </Switch>
              </div>
            </div>
          </Router>
        </AlertState>
      </GithubState>
    </ContactState>
  );
};

export default App;
