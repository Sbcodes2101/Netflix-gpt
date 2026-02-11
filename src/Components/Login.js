import Header from "./Header";
import { useState } from "react";
const Login = ()=>{

    const[isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return(
        <div>
            <Header />
            <img className="absolute" src="https://assets.nflxext.com/ffe/siteui/vlv3/e49aba81-ee7c-4f19-baef-7c54bbab003e/web/IN-en-20260202-TRIFECTA-perspective_04f5de39-b518-493c-9a8d-6aef11af0457_large.jpg" alt="background-img" />

            <div className="relative inset-0 bg-gradient-to-b from-black/30" />
            <form className="absolute px-20 py-24 w-100 bg-black/90 rounded-lg flex flex-col gap-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-95">
            <h1 className="text-3xl font-bold  mb-5">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
             {!isSignInForm && <input className="px-12 py-2 rounded-lg text-black bg-gray-600" type="text" placeholder="Full Name" />}
             
                <input className="px-12 py-2 rounded-lg text-black bg-gray-600" type="email" placeholder="Email Address" />

               

                <input className="px-12 py-2 rounded-lg bg-gray-600" type="password" placeholder="Password" />
                <button type="button" className="p-2 bg-red-800 my-4 rounded-lg" onClick={toggleSignInForm}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="p-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix?Sign up Now" : "Already have an account?Sign In Now"}</p>
            </form>
        </div>
    )
}

export default Login;