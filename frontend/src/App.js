import React from "react";
import { createContext, useState } from "react";
import Views from "./View";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({ loggedIn: false });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Views />
    </UserContext.Provider>
  );
}

export default App;
