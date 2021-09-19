export interface User {
  user_id: number;
  user_email: string;
  display_name: string;
}

export interface Statistics {
  correct_answer_count: number;
  wrong_answer_count: number;
}

export interface QuizUserAnswerType {
  user_answer_id: number;
  user_id: number;
  course_id: number;
  quiz_id: number;
  question_id: number;
  user_answer: string;
  correct_answer: number;
  attempt_number: number;
}

export interface QuizUserType {
  user_quiz_id: number;
  user_id: number;
  progress: number;
  status: string;
  user: User;
  statistics: Statistics;
  answers: QuizUserAnswerType[];
}
