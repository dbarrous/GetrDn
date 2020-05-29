import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store";
import { Auth0Provider } from "./react-auth0-spa";

import history from "./utils/history";
// A function that routes the user to the right place
// after login
const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};
const domain = process.env.REACT_APP_DOMAIN;
const clientId = process.env.REACT_APP_CLIENTID;

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    client_id={clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>,
  document.getElementById("root")
);
