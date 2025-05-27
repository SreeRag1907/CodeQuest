'use client';

import { LessonContent } from '@/components/lessons/lesson-content';

// Example lesson data - in a real app, this would come from your database
const exampleLesson = {
  sections: [
    {
      id: '1',
      title: 'Introduction to JavaScript Variables',
      content: `Variables are containers for storing data values. In JavaScript, you can declare variables using 'var', 'let', or 'const'.`,
      codeExample: `// Using let for variables that can be reassigned
let age = 25;
age = 26;

// Using const for variables that cannot be reassigned
const name = "John";

// Using var (older way, not recommended in modern JavaScript)
var score = 100;`,
    },
    {
      id: '2',
      title: 'Quiz: Variables',
      content: 'Test your knowledge about JavaScript variables.',
      quiz: [
        {
          id: 'q1',
          question: 'Which keyword is used to declare a constant variable in JavaScript?',
          options: ['var', 'let', 'const', 'static'],
          correctAnswer: 'const'
        },
        {
          id: 'q2',
          question: 'Can you reassign a value to a const variable?',
          options: ['Yes', 'No', 'Only with numbers', 'Only with strings'],
          correctAnswer: 'No'
        }
      ]
    },
    {
      id: '3',
      title: 'Coding Challenge: Variables',
      content: 'Practice working with variables by completing this challenge.',
      codingChallenge: {
        instructions: 'Create three variables: one using const for PI (3.14), one using let for radius (5), and calculate the area of a circle.',
        starterCode: `// Declare your variables here
const PI = 
let radius = 

// Calculate the area
let area = `,
        solution: `const PI = 3.14;
let radius = 5;

// Calculate the area
let area = PI * radius * radius;
console.log(area); // 78.5`,
        testCases: [
          { input: '5', expected: '78.5' }
        ]
      }
    }
  ]
};

export default function LessonPage() {
  return (
    <div className="min-h-screen bg-background py-8">
      <LessonContent sections={exampleLesson.sections} />
    </div>
  );
}