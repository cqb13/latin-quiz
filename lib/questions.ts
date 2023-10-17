export type MultipleChoiceQuestion = {
  question: string;
  type: QuestionType.MultipleChoice;
  choices: string[];
  correctChoiceIndex: number;
};

export type ShortAnswerQuestion = {
  question: string;
  type: QuestionType.ShortAnswer;
  answer: string;
};

export type TrueFalseQuestion = {
  question: string;
  type: QuestionType.TrueFalse;
  answer: boolean;
};

export type FillInTheBlankQuestion = {
  question: string[];
  type: QuestionType.FillInTheBlank;
  answers: string[];
  ending: string;
};

export type Question =
  | MultipleChoiceQuestion
  | ShortAnswerQuestion
  | TrueFalseQuestion
  | FillInTheBlankQuestion;

export enum QuestionType {
  MultipleChoice,
  ShortAnswer,
  TrueFalse,
  FillInTheBlank
}

const questions: Question[] = [
  {
    question: "What is the capital of France?",
    type: QuestionType.MultipleChoice,
    choices: ["London", "Paris", "Rome", "Madrid"],
    correctChoiceIndex: 1
  },
  {
    question: "Why am I here?",
    type: QuestionType.ShortAnswer,
    answer: "Why not."
  },
  {
    question: "Is this a question?",
    type: QuestionType.TrueFalse,
    answer: true
  },
  {
    question: ["This", "is", "a", ""],
    ending: ".",
    type: QuestionType.FillInTheBlank,
    answers: ["placeholder"],
  }
];

export default questions;
