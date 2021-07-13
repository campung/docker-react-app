import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./scss/style.scss";
import Auth from "./hoc/auth";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));

// Pages
const Login = React.lazy(() => import("./views/pages/login/Login"));
const Register = React.lazy(() => import("./views/pages/register/Register"));

class App extends Component {
  render() {
    return (
      <Router>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route
              expact
              path="/login"
              name="Login Page"
              // render={(props) => <Login {...props} />}
              component={Auth(Login, false)}
            />
            <Route
              path="/register"
              name="Register Page"
              // render={(props) => <Register {...props} />}
              component={Auth(Register, false)}
            />

            <Route
              path="/"
              name="Home"
              // render={(props) => <TheLayout {...props} />}

              component={Auth(TheLayout, true)}
            />
          </Switch>
        </React.Suspense>
      </Router>
    );
  }
}

export default App;
