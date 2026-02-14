import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
    navigate("/");
  // Sign-out successful.
  }).catch((error) => {
  // An error happened.
  navigate("/error"); 
});
  }
  return (
    <div className='absolute w-screen px-4 py-2 m-2 z-10 flex items-center justify-between'>
      <img
      className='w-44'
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="Netflix Logo" style={{ width: '150px' }} />  

      <div className='flex p-2'>
      <img
        className='w-12 h-12'
        alt='usericon' src="https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e" 
        />

        <button className='text-white font-bold m- mb-2 px-2 py-2 ' onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  )
}

export default Header