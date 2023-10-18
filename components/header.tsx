"use client";

import SignInPopup from "./signInPopup";
import { useState } from "react";
import { useAuthContext } from "@/lib/context/authContext";

export default function Header() {
  const [signInPopup, setSignInPopup] = useState(false);

  const { username, password, setSignedIn } = useAuthContext() as {
    username: string;
    password: string;
    setSignedIn: (status: boolean | null) => void;
  };

  const signIn = (inputUsername: string, inputPassword: string) => {
    if (inputUsername === username && inputPassword === password) {
      setSignInPopup(false);
      setSignedIn(true);
      document.body.style.overflow = "auto";
    }
  };

  const cancel = () => {
    setSignInPopup(false);
    document.body.style.overflow = "auto";
  };

  const signInPopupVisibility = () => {
    setSignInPopup(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <header className='h-[90vh] bg-gunmetal p-24'>
      <button
        className='absolute top-6 right-6 font-belgrano text-xl text-lavender_blush'
        onClick={signInPopupVisibility}
      >
        Sign In
      </button>
      <h1 className='font-signika text-non_photo_blue text-9xl'>Latin Quiz</h1>
      <sub className='font-signika text-gray text-3xl'>
        Columbus&rsquo; Parts Quarta et Pars Quinta
      </sub>
      {signInPopup ? <SignInPopup signIn={signIn} cancel={cancel} /> : null}
    </header>
  );
}
