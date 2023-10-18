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
  },
  {
    question: "What construction is placandum in \“...ad serenissimum Regem nostrum placandum…\”.",
    type: QuestionType.MultipleChoice,
    choices: ["Gerund", "Gerundive", "Perfect passive participle", "Present active participle"],
    correctChoiceIndex: 1,
  },
  {
    question: "What characteristics are the same between people?",
    type: QuestionType.MultipleChoice,
    choices: ["Thought, emotion, behavior", "Culture, language, cognition", "Form, habit, speech", "DNA, growth, mortality"],
    correctChoiceIndex: 2,
  },
  {
    question: "What construction is endurandam in \“...quia Indi proni erunt ad sanctam Christi fidem conversionem endurandam\”.",
    type: QuestionType.MultipleChoice,
    choices: ["Gerund", "Gerundive", "Perfect passive participle", "Present active participle"],
    correctChoiceIndex: 1,
  },
  {
    question: "What happened between Columbus and the natives? \“Cum his suam mercaturam exercent et inter eos commertia fiunt\”",
    type: QuestionType.MultipleChoice,
    choices: ["Fighting", "Nothing", "Peace", "Trade"],
    correctChoiceIndex: 3,
  },
  {
    question: "How many islands did Columbus sail to?",
    type: QuestionType.MultipleChoice,
    choices: ["Innumerable", "Fifty", "Thousands", "Hundreds"],
    correctChoiceIndex: 0,
  },
  {
    question: "In what time were the natives able to understand Columbus",
    type: QuestionType.MultipleChoice,
    choices: ["In a few hours", "A long time", "A short time", "In a few days"],
    correctChoiceIndex: 2,
  },
  {
    question: ["Columbus", "said", "the", "natives", "are", "not", "", "or", ""],
    type: QuestionType.FillInTheBlank,
    answers: ["slow", "wild"],
    ending: ".",
  },
  {
    question: "Translate: \"In omnibus his insulis nulla est diversitas inter gentis effigies nulla, in moribus atque loquela\".",
    type: QuestionType.ShortAnswer,
    answer: "In all these islands there is no difference between the form of people, no difference in habits and speech."
  },
  {
    question: "Translate: \"Haec res pertutilis est, reor, ad serenissimum Regem nostrum placandum, quia Indi proni erunt ad sanctum Christi fidem conversionem endurandam.\".",
    type: QuestionType.ShortAnswer,
    answer: "."
  },
  {
    question: "Translate: \"Brevi tempore nos ipsos et hi nos gestu ac signis, tum verbis, intellexerunt.\".",
    type: QuestionType.ShortAnswer,
    answer: "In a short time they themselves understood us through gestures and signs, then words."
  }
];

export default questions;
