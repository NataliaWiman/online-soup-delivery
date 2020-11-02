import React, { useContext } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";

export const PrivateRoute: React.FC<RouteProps> = ({ component: RouteComponent, ...rest}) => {
  const {authenticated, loadingAuthState} = useContext(AuthContext);
  if (loadingAuthState) {
    return (
      <div>
        {/* <h1>Loading...</h1>  */}
      </div>
   );
  };
  if (!RouteComponent) return null;
  return (
    <Route
      {...rest}
      render={routeProps =>
        authenticated ? (
        <RouteComponent {...routeProps} />
        ) : (
        <Redirect to={{pathname: "/signin", state: {prevPath: rest.path}}} />
        )
      }
    />
  );
};