import { useContext } from "react";

import AuthContext from "./context";

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = () => {
    setUser(true);
  };

  const logOut = () => {
    setUser(false);
  };

  return { user, logIn, logOut };
};

export default useAuth;
