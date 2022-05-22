import React, { createContext, useState } from "react";
import { auth } from "../Config/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext({});

export default function AuthContextProvider(props) {
  const [Authentication, setauthentication] = useState("user");
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      setUser(user);
    } else {
      setUser({});
    }
  });

  return (
    <AuthContext.Provider value={user}>{props.children}</AuthContext.Provider>
  );
}
