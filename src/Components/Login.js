import { checkValidData } from "../utils/validate";
import Header from "./Header";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { BG_URL, userAvatar } from "../utils/constants";
const Login = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const email = useRef("null");
  // const password = useRef("null");

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Validate the form data
    const error = checkValidData(email, password);
    setErrorMessage(error);
    if (error) return;

    if (!isSignInForm) {
      // Sign up Logic
       createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName,
            photoURL: userAvatar,
          })
            .then(() => {
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });

        })

        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + "-" + errorCode);

        });
    } else {
      // Sign in Logic
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + "-" + errorCode);
        });
    }
  };

  return (
    <div>
      <Header />
      <img
        className="absolute"
        src={BG_URL}
        alt="background-img"
      />

      <div className="relative inset-0 bg-gradient-to-b from-black/30" />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute px-20 py-24 w-1/3 bg-black/90 rounded-lg flex flex-col gap-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-95"  
      >
        <h1 className="text-3xl font-bold  mb-5">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            className="px-12 py-2 rounded-lg text-white bg-gray-600"
            type="text"
            placeholder="Full Name"
            onChange={(e) => setFullName(e.target.value)}
          />
        )}

        <input
          // ref={email}
          className="px-12 py-2 rounded-lg text-white bg-gray-600"
          type="email"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          // ref={password}
          className="px-12 py-2 rounded-lg bg-gray-600"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="button"
          className="p-2 bg-red-800 my-4 rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

        <p className="p-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix?Sign up Now"
            : "Already have an account?Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
