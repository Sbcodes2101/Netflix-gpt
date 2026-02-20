import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { LOGO } from "../utils/constants";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        await user.reload();
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
      
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });

    
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-4 py-2 m-2 z-10 flex items-center justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="Netflix Logo"
        style={{ width: "150px" }}
      />

      {/* Right side */}
<div className="flex items-center gap-4">
  {user && (
    <>
      <img
        className="h-9 w-9 rounded object-cover md:h-10 md:w-10"
        src="https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e"
        alt="User avatar"
      />

      <button
        onClick={handleSignOut}
        className="rounded bg-red-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-red-700 md:px-5 md:py-2 md:text-base transition-colors"
      >
        Sign Out
      </button>
    </>
  )}
    </div>
    </div>
  );
};

export default Header;
