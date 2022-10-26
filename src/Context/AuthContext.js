import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
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

  // sign up using google
  const googleProvider = new GoogleAuthProvider();
  // sign up useig github
  const githubProvider = new GithubAuthProvider();

  const singUpwithGooglePopup = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const signupWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const userMethodes = {
    signUpwithEmailPassword,
    updateUserProfile,
    singUpwithGooglePopup,
    signupWithGithub,
  };
  return (
    <userContext.Provider value={userMethodes}>{children}</userContext.Provider>
  );
};

export default AuthContext;
