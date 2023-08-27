import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignForm, setisSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setisSignInForm(!isSignForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Logo"
        />
      </div>
      <form className="w-[33%] absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full rounded-lg bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Adress"
          className="p-4 my-4 w-full rounded-lg bg-gray-700"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full rounded-lg bg-gray-700"
        />
        <button className="w-full p-4 my-6 rounded-lg bg-red-700">
          {isSignForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignForm
            ? "New to Netflix? Sign Up now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
