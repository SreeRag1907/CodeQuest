export enum Language {
  JavaScript = 'JavaScript',
  TypeScript = 'TypeScript',
  Python = 'Python',
  Java = 'Java',
  CSharp = 'C#',
  CPlusPlus = 'C++',
  Ruby = 'Ruby',
  Go = 'Go',
  Swift = 'Swift',
  Kotlin = 'Kotlin',
  Rust = 'Rust',
  PHP = 'PHP'
}

export enum Difficulty {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Advanced = 'Advanced'
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  xpReward: number;
  completed: boolean;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  language: Language;
  difficulty: Difficulty;
  duration: string;
  lessons: number;
  xpReward: number;
  modules: Module[];
  imageUrl: string;
  color: string;
  progress: number;
}

export interface QuizQuestion {
  id: string;
  type: 'multiple-choice' | 'fill-in-blank' | 'code-challenge';
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
  xpReward: number;
}

export interface CodeChallenge {
  id: string;
  title: string;
  description: string;
  instructions: string;
  starterCode: string;
  testCases: TestCase[];
  solution: string;
  hints: string[];
  xpReward: number;
}

export interface TestCase {
  input: string;
  expectedOutput: string;
  isHidden: boolean;
}

export interface LessonContent {
  id: string;
  title: string;
  sections: LessonSection[];
  quizQuestions: QuizQuestion[];
  codeChallenge?: CodeChallenge;
}

export interface LessonSection {
  id: string;
  title: string;
  content: string;
  codeSnippets?: CodeSnippet[];
}

export interface CodeSnippet {
  id: string;
  language: string;
  code: string;
  description?: string;
}

export interface UserProgress {
  userId: string;
  totalXp: number;
  streak: number;
  longestStreak: number;
  badgesEarned: number;
  coursesStarted: number;
  coursesCompleted: number;
  lessonsCompleted: number;
  quizzesCompleted: number;
  challengesCompleted: number;
}