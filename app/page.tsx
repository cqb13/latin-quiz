"use client";

import Question from "@/components/question";
import questions from "@/lib/questions";
import { useState } from "react";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className='flex flex-col gap-10 px-60 py-20 bg-gray bg-opacity-30'>
      {questions.map((question, index) => (
        <Question question={question} submitted={submitted} index={index} key={index} />
      ))}
      <button
        className='bg-gunmetal rounded-3xl text-lavender_blush font-belgrano p-4 hover:bg-opacity-95 transition-all'
        onClick={() => setSubmitted(true)}
      >
        Submit
      </button>
    </main>
  );
}
