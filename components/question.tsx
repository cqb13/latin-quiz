"use client";

import { useState, useEffect } from "react";
import { QuestionType, Question } from "@/lib/questions";

export default function QuestionDisplay({
  question,
  submitted,
  updateQuestionResults,
  attempts,
  index
}: {
  question: Question;
  submitted: boolean;
  updateQuestionResults: (index: number, result: boolean) => void;
  attempts: number;
  index: number;
}) {
  const [selectAnswerIndex, setSelectAnswerIndex] = useState<number>();
  const [blankInputs, setBlankInputs] = useState<string[]>([]);
  const [selected, setSelected] = useState<number>();
  const [response, setResponse] = useState<string>();

  useEffect(() => {
    if (question.type === QuestionType.MultipleChoice) {
      setSelectAnswerIndex(question.correctChoiceIndex);
    } else if (question.type === QuestionType.TrueFalse) {
      if (question.answer === true) {
        setSelectAnswerIndex(0);
      } else {
        setSelectAnswerIndex(1);
      }
    }
  }, [question]);

  useEffect(() => {
    if (submitted === true) {
      if (question.type === QuestionType.MultipleChoice) {
        if (selected === question.correctChoiceIndex) {
          updateQuestionResults(index, true);
        } else {
          updateQuestionResults(index, false);
        }
      } else if (question.type === QuestionType.TrueFalse) {
        if (selected === 0 && question.answer === true) {
          updateQuestionResults(index, true);
        } else if (selected === 1 && question.answer === false) {
          updateQuestionResults(index, true);
        } else {
          updateQuestionResults(index, false);
        }
      } else if (question.type === QuestionType.ShortAnswer) {
        if (response === question.answer) {
          updateQuestionResults(index, true);
        } else {
          updateQuestionResults(index, false);
        }
      } else if (question.type === QuestionType.FillInTheBlank) {
        let correct = true;
        question.answers.forEach((answer, answerIndex) => {
          if (answer !== blankInputs[answerIndex]) {
            correct = false;
          }
        });
        updateQuestionResults(index, correct);
      }
    }
  }, [submitted]);

  useEffect(() => {
    if (attempts > 0) {
      setSelected(undefined);
      setResponse("");
      setBlankInputs([]);
    }
  }, [attempts]);

  const handleSelect = (index: number) => {
    if (submitted) return;
    if (selected == index) {
      setSelected(undefined);
    } else {
      setSelected(index);
    }
  };

  const handleResponse = (event: any) => {
    if (submitted) return;
    setResponse(event.target.value);
  };

  const handleBlankUpdate = (event: any, index: number) => {
    if (submitted) return;
    const value = event.target.value;
    const newBlankInputs = blankInputs;
    newBlankInputs[index] = value;
    setBlankInputs(newBlankInputs);
  };

  const replaceBlankWord = (
    word: string,
    wordIndex: number,
    submitted: boolean
  ) => {
    if (question.type !== QuestionType.FillInTheBlank) return;
    let newWord = word;

    if (word === "" && !submitted) {
      newWord = "____";
    } else if (word === "" && submitted) {
      const answers = question.answers;

      let count = 0;
      for (let i = 0; i < wordIndex; i++) {
        if (question.question[i] === "") {
          count++;
        }
      }

      newWord = answers[count];
    }

    if (question.question.length - 1 === wordIndex) {
      newWord = newWord + question.ending;
    }

    return newWord;
  };

  return (
    <section className='flex flex-col gap-2'>
      {question.type === QuestionType.FillInTheBlank ? (
        <div className='flex gap-2'>
          <h2 className='font-belgrano text-2xl text-black'>{index + 1}.</h2>
          {question.question.map((word, wordIndex) => (
            <h2
              key={index}
              className={`${word === "" && !submitted ? "" : "font-belgrano"} ${
                word === "" && submitted ? "text-green-700" : ""
              } text-2xl text-black`}
            >
              {replaceBlankWord(word, wordIndex, submitted)}
            </h2>
          ))}
        </div>
      ) : (
        <h2 className='font-belgrano text-2xl text-black'>
          {index + 1}. {question.question}
        </h2>
      )}

      <section className='grid grid-cols-2 grid-rows-2 gap-2'>
        {question.type === QuestionType.MultipleChoice
          ? question.choices.map((answer, answerIndex) => (
              <div
                key={answerIndex}
                onClick={() => handleSelect(answerIndex)}
                className='bg-gunmetal p-10 rounded-3xl cursor-pointer hover:bg-opacity-95 transition-all'
              >
                <h2
                  className={` ${
                    selected == answerIndex ? "text-non_photo_blue-200" : ""
                  } ${
                    answerIndex == selectAnswerIndex &&
                    submitted &&
                    selected !== answerIndex
                      ? "text-green-700"
                      : ""
                  } font-belgrano text-xl`}
                >
                  {answer}
                </h2>
              </div>
            ))
          : null}
      </section>

      <section>
        {question.type === QuestionType.ShortAnswer ? (
          <div className='w-full relative'>
            <textarea
              className='w-full rounded-3xl bg-gunmetal placeholder-gray text-lavender_blush font-belgrano p-4'
              placeholder='Type your answer here...'
              cols={30}
              rows={10}
              onChange={handleResponse}
              value={response}
            />
            {submitted ? (
              <h2 className='absolute bottom-6 left-6 text-green-700 font-belgrano text-xl'>
                {question.answer}
              </h2>
            ) : null}
          </div>
        ) : null}
      </section>

      {question.type === QuestionType.TrueFalse ? (
        <section className='flex gap-2 w-full'>
          <div
            key={0}
            onClick={() => handleSelect(0)}
            className='bg-gunmetal p-10 rounded-3xl cursor-pointer hover:bg-opacity-95 transition-all flex-1'
          >
            <h2
              className={`${
                0 == selectAnswerIndex && submitted && selected !== 0
                  ? "text-green-700"
                  : ""
              } ${
                selected == 0 ? "text-non_photo_blue-200" : ""
              } font-belgrano text-xl`}
            >
              True
            </h2>
          </div>
          <div
            key={1}
            onClick={() => handleSelect(1)}
            className='bg-gunmetal p-10 rounded-3xl cursor-pointer hover:bg-opacity-95 transition-all flex-1'
          >
            <h2
              className={`${
                1 == selectAnswerIndex && submitted && selected !== 1
                  ? "text-green-700"
                  : ""
              }${
                selected == 1 ? "text-non_photo_blue-200" : ""
              } font-belgrano text-xl`}
            >
              False
            </h2>
          </div>
        </section>
      ) : null}

      {question.type === QuestionType.FillInTheBlank ? (
        <section className='flex gap-2 max-sm:flex-col'>
          {question.type === QuestionType.FillInTheBlank
            ? question.answers.map((answer, answerIndex) => (
                <div key={answerIndex} className='w-1/2 relative max-sm:w-full'>
                  <input
                    type='text'
                    value={blankInputs[answerIndex]}
                    onChange={(event) => handleBlankUpdate(event, answerIndex)}
                    className='w-full rounded-3xl bg-gunmetal placeholder-gray text-lavender_blush font-belgrano p-4'
                    placeholder='Type your answer here...'
                  />
                  {answer !== blankInputs[answerIndex] && submitted ? (
                    <h2 className='absolute top-3 right-6 text-green-700 font-belgrano text-xl'>
                      {answer}
                    </h2>
                  ) : null}
                </div>
              ))
            : null}
        </section>
      ) : null}
    </section>
  );
}
