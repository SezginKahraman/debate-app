// src/components/RoleBasedRoute.js

import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const RoleBasedRoute = ({ component: Component, roles, ...rest }) => {
  const { currentUser } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={props =>
        currentUser && roles.includes(currentUser.role) ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default RoleBasedRoute;