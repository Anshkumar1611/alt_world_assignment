export interface User {
  id: number;
  profile: {
    img_url: string;
    name: string;
    email: string;
  };
  scores: {
    behavioural: number;
    communication: number;
    situation_handling: number;
  };
  about: string;
  experience: string;
  hobbies: string[];
  introduction: string;
  answers_submission: {
    question: string;
    answer: string;
  }[];
}

export interface Assignment {
  id: number;
  title: string;
  value: string;
}
