import {createContext, useEffect, useState} from "react";
import {createUserDocumentFromAuth, onAuthStateChangedListener,} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = {currentUser, setCurrentUser};
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    return onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user).then(r => {
        });
      }
      setCurrentUser(user);
    });
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
