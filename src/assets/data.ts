import { Assignment, User } from "@/types/user";

export const users: User[] = [
  {
    id: 1,
    profile: {
      img_url: "https://example.com/img1.jpg",
      name: "John Doe",
      email: "john@example.com",
    },
    scores: {
      behavioural: 9,
      communication: 8,
      situation_handling: 6,
    },
    about: "I am a software engineer with 5 years of experience.",
    experience: "5 years",
    hobbies: ["Reading", "Hiking"],
    introduction: "Hello, I'm John Doe.",
    answers_submission: [
      { question: "What is your favorite color?", answer: "Blue" },
      { question: "What is your favorite food?", answer: "Pizza" },
    ],
  },
  {
    id: 2,
    profile: {
      img_url: "https://example.com/img2.jpg",
      name: "Alice Smith",
      email: "alice@example.com",
    },
    scores: {
      behavioural: 7,
      communication: 8,
      situation_handling: 9,
    },
    about: "I am a marketing manager with a passion for digital marketing.",
    experience: "8 years",
    hobbies: ["Traveling", "Photography"],
    introduction: "Hi, I'm Alice Smith.",
    answers_submission: [
      { question: "What is your favorite movie?", answer: "The Godfather" },
      {
        question: "What is your favorite book?",
        answer: "Pride and Prejudice",
      },
    ],
  },
  {
    id: 3,
    profile: {
      img_url: "https://example.com/img3.jpg",
      name: "Michael Johnson",
      email: "michael@example.com",
    },
    scores: {
      behavioural: 5,
      communication: 4,
      situation_handling: 4,
    },
    about:
      "I am a teacher passionate about education and helping students succeed.",
    experience: "10 years",
    hobbies: ["Cooking", "Gardening"],
    introduction: "Hello everyone, I'm Michael Johnson.",
    answers_submission: [
      { question: "What is your favorite animal?", answer: "Dogs" },
      {
        question: "What is your favorite hobby?",
        answer: "Playing the guitar",
      },
    ],
  },
  {
    id: 4,
    profile: {
      img_url: "https://example.com/img4.jpg",
      name: "Emily Brown",
      email: "emily@example.com",
    },
    scores: {
      behavioural: 9,
      communication: 9,
      situation_handling: 7,
    },
    about: "I am a graphic designer who loves creating beautiful designs.",
    experience: "6 years",
    hobbies: ["Painting", "Reading"],
    introduction: "Hi, I'm Emily Brown.",
    answers_submission: [
      { question: "What is your favorite sport?", answer: "Tennis" },
      { question: "What is your favorite season?", answer: "Spring" },
    ],
  },
  {
    id: 5,
    profile: {
      img_url: "https://example.com/img5.jpg",
      name: "David Wilson",
      email: "david@example.com",
    },
    scores: {
      behavioural: 8,
      communication: 9,
      situation_handling: 8,
    },
    about:
      "I am a project manager experienced in leading cross-functional teams.",
    experience: "7 years",
    hobbies: ["Traveling", "Cooking"],
    introduction: "Hello, I'm David Wilson.",
    answers_submission: [
      { question: "What is your favorite music genre?", answer: "Rock" },
      {
        question: "What is your favorite holiday destination?",
        answer: "Bali",
      },
    ],
  },
  {
    id: 6,
    profile: {
      img_url: "https://example.com/img6.jpg",
      name: "Sophia Miller",
      email: "sophia@example.com",
    },
    scores: {
      behavioural: 1,
      communication: 2,
      situation_handling: 3,
    },
    about:
      "I am a content writer who loves storytelling and creating engaging content.",
    experience: "4 years",
    hobbies: ["Writing", "Hiking"],
    introduction: "Hi there, I'm Sophia Miller.",
    answers_submission: [
      { question: "What is your favorite TV show?", answer: "Friends" },
      { question: "What is your favorite holiday?", answer: "Christmas" },
    ],
  },
  {
    id: 7,
    profile: {
      img_url: "https://example.com/img7.jpg",
      name: "William Taylor",
      email: "william@example.com",
    },
    scores: {
      behavioural: 8,
      communication: 9,
      situation_handling: 7,
    },
    about:
      "I am a financial analyst with expertise in financial modeling and analysis.",
    experience: "6 years",
    hobbies: ["Playing basketball", "Reading"],
    introduction: "Hello, I'm William Taylor.",
    answers_submission: [
      { question: "What is your favorite dish?", answer: "Sushi" },
      { question: "What is your favorite movie genre?", answer: "Action" },
    ],
  },
  {
    id: 8,
    profile: {
      img_url: "https://example.com/img8.jpg",
      name: "Olivia Anderson",
      email: "olivia@example.com",
    },
    scores: {
      behavioural: 2,
      communication: 5,
      situation_handling: 4,
    },
    about:
      "I am a UX designer passionate about creating intuitive and user-friendly interfaces.",
    experience: "5 years",
    hobbies: ["Drawing", "Traveling"],
    introduction: "Hi, I'm Olivia Anderson.",
    answers_submission: [
      { question: "What is your favorite animal?", answer: "Cats" },
      {
        question: "What is your favorite book?",
        answer: "Harry Potter series",
      },
    ],
  },
];

export const AssignmentData: Assignment[] = [
  { id: 1, title: "Assignment Link", value: "https://tiny.url/asknakdna/" },
  { id: 2, title: "Assignment Hour", value: "3 hours" },
  { id: 3, title: "Assignment Ends at", value: "11 March 2024" },
];
