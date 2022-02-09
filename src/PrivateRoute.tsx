import * as React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { UserContext } from "Context/AuthContext";
import { useRefreshToken } from "Hooks/useLogin";

export const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const { user, setToken, logout } = React.useContext(UserContext);
  const { data: refreshTokenData, isError: isRefreshTokenError, isLoading: isRefreshTokenLoading } = useRefreshToken();

  React.useEffect(() => {

    if (refreshTokenData && !isRefreshTokenError && !isRefreshTokenLoading) setToken({ type: "access_token", token: refreshTokenData?.access_token });

    if (isRefreshTokenError) logout();

  }, [refreshTokenData, isRefreshTokenError, isRefreshTokenLoading]); // eslint-disable-line

  return (
    <Route
      {...rest}
      render={({ location }) => user?.email ? (children) : <Redirect to={{ pathname: "/login", state: { from: location } }} />}
    />
  );
};