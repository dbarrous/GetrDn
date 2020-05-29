import React from "react";
import Todo from "./Todo";
import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import Navbar from "./Navbar";
import { useAuth0 } from "../react-auth0-spa";
import history from "../utils/history";

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/local-list" exact component={Todo} />
        <Route path="/404" component={NotFound} />
        <PrivateRoute path="/profile" exact component={Profile} />

        <Redirect from="*" to="/404" />
      </Switch>
    </Router>
  );
};

export default App;
