import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import { connect } from 'react-redux';


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
    user: state.auth.user
})


export  default connect(mapStateToProps)(PrivateRoute);
