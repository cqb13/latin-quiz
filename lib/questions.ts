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
    question: "The natives have seen clothes and ships like those of Columbus.",
    type: QuestionType.TrueFalse,
    answer: false
  },
  {
    question: "The natives admired what Columbus shared or communicated with them.",
    type: QuestionType.TrueFalse,
    answer: true
  },
  {
    question: "The natives were not able to understand Columbus\' people.",
    type: QuestionType.TrueFalse,
    answer: false
  },
  {
    question: "The small boats were guided with one ore.",
    type: QuestionType.TrueFalse,
    answer: false
  },
  {
    question: "Every island had large boats.",
    type: QuestionType.TrueFalse,
    answer: false
  }
];

export default questions;
