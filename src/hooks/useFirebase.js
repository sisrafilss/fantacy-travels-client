import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  // Register new user using email and password
  const registerUser = (name, email, password, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setAuthError("");

        // Set user to user state
        const newUser = { email, displayName: name };
        setUser(newUser);

        // Send User data to server
        // axios
        //   .post("https://gentle-lake-31657.herokuapp.com/users", newUser)
        //   .then(() => {});

        // Set user to firebase
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Redirect user to the home page after successfully registration
            navigate("/", { replace: true });
          })
          .catch((error) => {
            setAuthError(error);
          });
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Login user using email and password
  const loginUser = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setAuthError("");

        // Redirect user where he/she wanted to go
        redirectInitialPage(navigate, location);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setAuthError(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Sing In Using Google
  const signInWithGoogle = (location, navigate) => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        // setAuthError("");
        setUser(user);

        // Set user data to database
        /*  axios
          .put("https://gentle-lake-31657.herokuapp.com/users", {
            displayName: user.displayName,
            email: user.email,
          })
          .then(() => {}); */

        // Redirect user to the home page after successfully registration
        redirectInitialPage(navigate, location);
      })
      .catch((error) => {
        // const errorMessage = error.message;
        // setAuthError(errorMessage);
      });
  };

  // Observing user state
  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setAuthError("");
      } else {
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  // Log Out
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setAuthError(error);
      });
  };

  // Check admin status
  /*   useEffect(() => {
    axios.get(`https://gentle-lake-31657.herokuapp.com/users/${user.email}`).then((res) => {
      setAdmin(res?.data?.admin);
    });
  }, [user.email]); */

  // Redirect Initial Page
  const redirectInitialPage = (navigate, location) => {
    const from = location.state?.from?.pathname || "/";
    navigate(from, { replace: true });
  };

  return {
    user,
    isLoading,
    authError,
    // admin,
    signInWithGoogle,
    registerUser,
    loginUser,
    setAuthError,
    logOut,
    // setAdmin,
  };
};

export default useFirebase;
