import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  getIdToken,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => {
    setLoading(true);
    signOut(auth).then(setUser("")).finally(setLoading(false));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getIdToken(user).then((idToken) => {
          localStorage.setItem("idToken", `Bearer ${idToken}`);
        });
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
  });

  return {
    signInWithGoogle,
    logout,
    user,
    setUser,
    error,
    setError,
    isLoading,
    setLoading,
  };
};

export default useFirebase;
