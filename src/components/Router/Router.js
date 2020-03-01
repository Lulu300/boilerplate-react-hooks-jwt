import React, { useContext } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import LoginPage from '../LoginPage';
import { AuthContext } from '../../contexts/auth/AuthContext';
import * as jwt from 'jsonwebtoken';

export const routes = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup'
}

export const Router = () => {

  const { auth } = useContext(AuthContext);

  function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.token !== null ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: routes.LOGIN,
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  return ( 
    <BrowserRouter>
      <div>
        <Switch>
          <PrivateRoute path={ routes.HOME } exact>
            <ProtectedPage />
          </PrivateRoute>
          <Route path={ routes.LOGIN } exact>
            <LoginPage />
          </Route>
          <Route path={ routes.SIGNUP } exact>
            <LoginPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

function ProtectedPage() {
  return <h3>Protected</h3>;
}