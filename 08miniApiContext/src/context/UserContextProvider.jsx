import React from "react";
import UserContext from "./UserContext";

//children -> jo v as it is aa rha h , usko pass kr do
//in value={{we are passing an object}}

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
