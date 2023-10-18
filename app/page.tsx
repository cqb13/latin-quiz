"use client";

import Question from "@/components/question";
import questions, { QuestionType } from "@/lib/questions";
import getQuestions from "@/utils/getQuestions";
import { useState, useEffect } from "react";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [questionResults, setQuestionResults] = useState<boolean[]>([]);
  const [absoluteResults, setAbsoluteResults] = useState<number>(0);
  const [uncertainResultsIndex, setUncertainResultsIndex] = useState<number[]>(
    []
  );
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    let tempAbsoluteResults = 0;
    questions.forEach((question) => {
      if (
        question.type === QuestionType.MultipleChoice ||
        question.type === QuestionType.TrueFalse ||
        question.type === QuestionType.FillInTheBlank
      ) {
        tempAbsoluteResults++;
        setAbsoluteResults(absoluteResults + 1);
      } else {
        setUncertainResultsIndex([
          ...uncertainResultsIndex,
          tempAbsoluteResults
        ]);
      }
    });

    //getQuestions().then((questions) => {
    //  console.log(questions);
    //});
  }, []);

  const updateQuestionResults = (index: number, result: boolean) => {
    const newQuestionResults = questionResults;
    newQuestionResults[index] = result;
    updateScore(newQuestionResults);
    setQuestionResults(newQuestionResults);
  };

  const updateScore = (results: boolean[]) => {
    let tempScore = 0;
    results.forEach((result) => {
      if (result === true) {
        tempScore++;
      }
    });
    setScore(tempScore);
  };

  const reset = () => {
    setSubmitted(false);
    setQuestionResults([]);
    setScore(0);
    setAttempts(attempts + 1);
  };

  return (
    <main className='flex flex-col gap-10 px-60 py-20 bg-gray bg-opacity-30'>
      {questions.map((question, index) => (
        <Question
          question={question}
          submitted={submitted}
          updateQuestionResults={updateQuestionResults}
          attempts={attempts}
          index={index}
          key={index}
        />
      ))}
      <section className='w-full flex flex-col gap-2'>
        {!submitted ? (
          <button
            className='bg-gunmetal rounded-3xl text-lavender_blush font-belgrano p-4 hover:bg-opacity-95 transition-all w-full'
            onClick={() => setSubmitted(true)}
          >
            Submit
          </button>
        ) : (
          <button
            className='bg-gunmetal rounded-3xl text-lavender_blush font-belgrano p-4 hover:bg-opacity-95 transition-all w-full'
            onClick={reset}
          >
            Try Again
          </button>
        )}
        {submitted ? (
          <section className='bg-gunmetal flex items-center justify-between rounded-3xl text-lavender_blush font-belgrano p-4'>
            <div className='flex items-center gap-2'>
              <h2>{`${score}/${
                questions.length - uncertainResultsIndex.length
              }`}</h2>
              <h2>or</h2>
              <h2>{`${Number(
                (score / (questions.length - uncertainResultsIndex.length)) *
                  100
              ).toFixed(2)}%`}</h2>
            </div>
            <h2>{`${uncertainResultsIndex.length} incalculable questions`}</h2>
          </section>
        ) : null}
      </section>
    </main>
  );
}
