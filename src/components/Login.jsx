import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { AVATAR_URL, BgIMG_URL } from "../utils/constants";
const Login = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const confirmPassword = useRef(null);

  const handleButtonClick = (e) => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    //sign in/ sign up logic
    if (!isSignIn) {
      //Sign up logic
      if(confirmPassword.current.value!=password.current.value){
        setErrorMessage("Password mismatch, Try again!")
        return
      }
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          // const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: AVATAR_URL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const { uid, email, displayName, photoURL } = userCredential.user;
          dispatch(addUser({ uid, email, displayName, photoURL }));
        })
        .catch((error) => {
          setErrorMessage("User Not Found");
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BgIMG_URL} alt="bg-img" className="h-screen object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80"></div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute rounded-lg w-full md:w-3/12 p-12 bg-black/50 md:bg-black/80 my-30 md:my-60 mx-auto right-0 left-0"
      >
        <h1 className="font-bold py-4 text-3xl text-white">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="bg-gray-400/70 p-3 my-2 rounded w-full"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="bg-gray-400/70 p-3 my-2 rounded w-full focus:bg-white"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="bg-gray-400/70 p-3 my-2 rounded w-full focus:bg-white"
        />
        {!isSignIn && (
          <input
            ref={confirmPassword}
            type="password"
            placeholder="Confirm Password"
            className="bg-gray-400/70 p-3 my-2 rounded w-full focus:bg-white"
          />
        )}
        <p className="text-red-700">{errorMessage}</p>
        <button
          className=" bg-red-700  p-2 my-6 rounded w-full cursor-pointer"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <span className="text-white">
          {isSignIn ? "New to Netflix?" : "Already a User?"}
        </span>
        <span
          className="text-white cursor-pointer underline"
          onClick={toggleSignIn}
        >
          {isSignIn ? "Sign Up Now." : "Sign In."}
        </span>
      </form>
    </div>
  );
};
export default Login;
