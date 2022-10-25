import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import React, { createContext } from "react";
import app from "../firebase/firebase.init";

export const userContext = createContext({});
const AuthContext = ({ children }) => {
  // methods
  const auth = getAuth(app);
  const signUpwithEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (displayName, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoUrl,
    });
  };

  const userMethodes = {
    signUpwithEmailPassword,
    updateUserProfile,
  };
  return (
    <userContext.Provider value={userMethodes}>{children}</userContext.Provider>
  );
};

export default AuthContext;
