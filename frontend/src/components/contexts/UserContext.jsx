import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import useLocalStorage from "../hooks/useLocalStorage";

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);

  /*const logout = () => {
    setUser(null);
  };*/

  return (
    <UserContext.Provider value={{ user, setUser, /*logout*/ }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
