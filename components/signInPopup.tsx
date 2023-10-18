"use client";

import { useState } from "react";

export default function SignInPopup({
  signIn,
  cancel
}: {
  signIn: (username: string, password: string) => void;
  cancel: () => void;
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className='absolute top-0 left-0 z-20 w-screen h-screen bg-gray-200 bg-opacity-60 flex flex-col items-center justify-center'>
      <section className='bg-gunmetal rounded-3xl p-14 w-4/5'>
        <h2 className="text-non_photo_blue text-3xl font-signika">Sign In</h2>
        <section className='flex flex-col gap-2 w-full'>
          <input
            type='text'
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className='w-full rounded-3xl bg-gunmetal placeholder-gray text-lavender_blush font-belgrano p-4 outline-none'
            placeholder='Enter username here...'
          />
          <input
            type='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className='w-full rounded-3xl bg-gunmetal placeholder-gray text-lavender_blush font-belgrano p-4 outline-none'
            placeholder='Enter password here...'
          />
        </section>
        <div className="flex gap-2">
          <button
            className='bg-gunmetal rounded-3xl text-lavender_blush font-belgrano p-4 hover:bg-opacity-95 transition-all w-full'
            onClick={() => signIn(username, password)}
          >
            Sign In
          </button>
          <button
            className='bg-gunmetal rounded-3xl text-lavender_blush font-belgrano p-4 hover:bg-opacity-95 transition-all w-full'
            onClick={cancel}
          >
            Cancel
          </button>
        </div>
      </section>
    </div>
  );
}
