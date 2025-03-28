import React, { useRef, useState } from "react";
import Header from "./Header";
import validate from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignin, setisSignin] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);

  const toggleSignIn = () => {
    setisSignin(!isSignin);
  };

  const handleButtonClick = () => {
    const message = validate(email.current.value, password.current.value);

    seterrorMessage(message);
    if (message === null) {
      if (!isSignin) {
        //sign up logic
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrorMessage(errorCode + "-", errorMessage);
          });
      } else {
        //sign in
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            console.log("successfull");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrorMessage(errorCode + "-", errorMessage);
          });
      }
    } else {
      return;
    }
  };

  return (
    <>
      <Header />

      <div className="h-[100vh] bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web/IN-en-20250324-TRIFECTA-perspective_d7c906ec-0531-47de-8ece-470d5061c88a_small.jpg)]">
        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-opacity-90 bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-white text-3xl font-bold mb-6 text-left">
              {isSignin ? "Sign In" : "Sign Up"}
            </h2>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col"
            >
              {!isSignin && (
                <input
                  ref={fullname}
                  type="text"
                  placeholder="Name or Phone Number "
                  className="p-3 mb-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              )}
              <input
                ref={email}
                type="email"
                placeholder="Email or phone number"
                className="p-3 mb-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <input
                ref={password}
                type="password"
                placeholder="Password"
                className="p-3 mb-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />

              <button
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg"
                onClick={handleButtonClick}
              >
                {isSignin ? "Sign In" : "Sign Up"}
              </button>

              <p className="text-red-800 font-bold py-3 ">{errorMessage}</p>
            </form>
            <div className="flex justify-between text-gray-400 text-sm mt-4">
              <div>
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <a href="#" className="hover:underline">
                Need help?
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-6 text-center">
              {isSignin ? "New to Netflix?" : "Already have an account ?"}
              <p
                onClick={toggleSignIn}
                className="text-white hover:underline cursor-pointer"
              >
                {isSignin ? "Sign Up now" : "Sign In now"}
              </p>
            </p>

            <div className="text-gray-400 text-sm text-center my-4">OR</div>
            <button className="flex items-center justify-center bg-gray-800 text-white font-bold py-3 rounded-lg w-full hover:bg-gray-200 cursor-pointer">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google logo"
                className="w-5 h-5 mr-2"
              />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
