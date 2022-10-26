import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.init";

export const userContext = createContext({});
const AuthContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  // methods
  const auth = getAuth(app);
  const signUpwithEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (displayName, photoUrl) => {
    setLoading(true);
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
    setLoading(true);

    return signInWithPopup(auth, googleProvider);
  };

  const signupWithGithub = () => {
    setLoading(true);

    return signInWithPopup(auth, githubProvider);
  };
  const emailPasswordLogin = (email, password) => {
    return signUpwithEmailPassword(auth, email, password);
  };
  const signout = () => {
    return signOut(auth);
  };
  useEffect(() => {
    //this part will execute once the component is mounted.
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      //this part will execute once the component is unmounted.
      unsubscribe();
    };
  }, []);

  const userMethodes = {
    user,
    loading,
    signout,
    signUpwithEmailPassword,
    updateUserProfile,
    singUpwithGooglePopup,
    signupWithGithub,
    emailPasswordLogin,
  };
  return (
    <userContext.Provider value={userMethodes}>{children}</userContext.Provider>
  );
};

export default AuthContext;
