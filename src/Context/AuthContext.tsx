import * as React from "react";

import { User } from "../Interfaces/User";

type TokenType = "refresh_token" | "access_token";

interface TokenInfo {
  type: TokenType;
  token: string;
}
interface IUserContext {
  user: User;
  setUser(user: User): void;
  setToken(tokenInfo: TokenInfo): void;
  logout(): void;
}

export const UserContext = React.createContext<IUserContext>({} as IUserContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUserValue] = React.useState<User>({} as User);

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("access_token");
    setUserValue({} as User);
  };

  const setUser = (user: User) => {
    setUserValue(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const setToken = (tokenInfo: TokenInfo) => {
    localStorage.setItem(tokenInfo.type, tokenInfo.token);
  };

  React.useEffect(() => {
    const userFromStorage = localStorage.getItem("user");
    if (userFromStorage) {
      const userObj: User = JSON.parse(userFromStorage);
      if (userObj.email) {
        setUserValue(userObj);
      }
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, setToken, logout }}>
      {children}
    </UserContext.Provider>
  );
};
