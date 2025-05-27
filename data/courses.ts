import { Course, Difficulty, Language } from '../types';

export const courses: Course[] = [
  {
    id: 'js-fundamentals',
    title: 'JavaScript Fundamentals',
    description: 'Learn the core concepts of JavaScript programming including variables, data types, functions, and control flow.',
    language: Language.JavaScript,
    difficulty: Difficulty.Beginner,
    duration: '10 hours',
    lessons: 24,
    xpReward: 1200,
    modules: [
      {
        id: 'js-intro',
        title: 'Introduction to JavaScript',
        lessons: [
          {
            id: 'js-intro-1',
            title: 'What is JavaScript?',
            duration: '15 mins',
            xpReward: 25,
            completed: true
          },
          {
            id: 'js-intro-2',
            title: 'Setting Up Your Development Environment',
            duration: '20 mins',
            xpReward: 30,
            completed: true
          },
          {
            id: 'js-intro-3',
            title: 'Your First JavaScript Program',
            duration: '25 mins',
            xpReward: 35,
            completed: false
          }
        ]
      },
      {
        id: 'js-basics',
        title: 'JavaScript Basics',
        lessons: [
          {
            id: 'js-basics-1',
            title: 'Variables and Data Types',
            duration: '30 mins',
            xpReward: 40,
            completed: false
          },
          {
            id: 'js-basics-2',
            title: 'Operators and Expressions',
            duration: '25 mins',
            xpReward: 35,
            completed: false
          },
          {
            id: 'js-basics-3',
            title: 'Control Flow: Conditionals',
            duration: '35 mins',
            xpReward: 45,
            completed: false
          },
          {
            id: 'js-basics-4',
            title: 'Control Flow: Loops',
            duration: '35 mins',
            xpReward: 45,
            completed: false
          }
        ]
      },
      {
        id: 'js-functions',
        title: 'Functions',
        lessons: [
          {
            id: 'js-functions-1',
            title: 'Function Declarations and Expressions',
            duration: '30 mins',
            xpReward: 40,
            completed: false
          },
          {
            id: 'js-functions-2',
            title: 'Parameters and Arguments',
            duration: '25 mins',
            xpReward: 35,
            completed: false
          },
          {
            id: 'js-functions-3',
            title: 'Return Values',
            duration: '20 mins',
            xpReward: 30,
            completed: false
          },
          {
            id: 'js-functions-4',
            title: 'Arrow Functions',
            duration: '25 mins',
            xpReward: 35,
            completed: false
          }
        ]
      }
    ],
    imageUrl: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: '#f7df1e',
    progress: 65
  },
  {
    id: 'python-basics',
    title: 'Python Basics',
    description: 'Learn the fundamentals of Python programming including syntax, data structures, control flow, and functions.',
    language: Language.Python,
    difficulty: Difficulty.Beginner,
    duration: '8 hours',
    lessons: 20,
    xpReward: 1000,
    modules: [
      {
        id: 'py-intro',
        title: 'Introduction to Python',
        lessons: [
          {
            id: 'py-intro-1',
            title: 'What is Python?',
            duration: '15 mins',
            xpReward: 25,
            completed: true
          },
          {
            id: 'py-intro-2',
            title: 'Installing Python and Setting Up',
            duration: '20 mins',
            xpReward: 30,
            completed: true
          },
          {
            id: 'py-intro-3',
            title: 'Your First Python Program',
            duration: '25 mins',
            xpReward: 35,
            completed: false
          }
        ]
      },
      {
        id: 'py-basics',
        title: 'Python Basics',
        lessons: [
          {
            id: 'py-basics-1',
            title: 'Variables and Data Types',
            duration: '30 mins',
            xpReward: 40,
            completed: false
          },
          {
            id: 'py-basics-2',
            title: 'Operators and Expressions',
            duration: '25 mins',
            xpReward: 35,
            completed: false
          },
          {
            id: 'py-basics-3',
            title: 'Strings and String Methods',
            duration: '35 mins',
            xpReward: 45,
            completed: false
          }
        ]
      },
      {
        id: 'py-control',
        title: 'Control Flow',
        lessons: [
          {
            id: 'py-control-1',
            title: 'Conditional Statements',
            duration: '30 mins',
            xpReward: 40,
            completed: false
          },
          {
            id: 'py-control-2',
            title: 'For Loops',
            duration: '25 mins',
            xpReward: 35,
            completed: false
          },
          {
            id: 'py-control-3',
            title: 'While Loops',
            duration: '20 mins',
            xpReward: 30,
            completed: false
          }
        ]
      }
    ],
    imageUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: '#3776ab',
    progress: 30
  },
  {
    id: 'java-essentials',
    title: 'Java Essentials',
    description: 'Master the essentials of Java programming, from basic syntax to object-oriented programming concepts.',
    language: Language.Java,
    difficulty: Difficulty.Beginner,
    duration: '12 hours',
    lessons: 28,
    xpReward: 1400,
    modules: [
      {
        id: 'java-intro',
        title: 'Introduction to Java',
        lessons: [
          {
            id: 'java-intro-1',
            title: 'What is Java?',
            duration: '15 mins',
            xpReward: 25,
            completed: false
          },
          {
            id: 'java-intro-2',
            title: 'Setting Up Your Java Environment',
            duration: '25 mins',
            xpReward: 35,
            completed: false
          }
        ]
      }
    ],
    imageUrl: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: '#007396',
    progress: 0
  },
  {
    id: 'typescript-basics',
    title: 'TypeScript Fundamentals',
    description: 'Learn how to use TypeScript to build scalable JavaScript applications with static typing.',
    language: Language.TypeScript,
    difficulty: Difficulty.Intermediate,
    duration: '10 hours',
    lessons: 22,
    xpReward: 1300,
    modules: [
      {
        id: 'ts-intro',
        title: 'Introduction to TypeScript',
        lessons: [
          {
            id: 'ts-intro-1',
            title: 'What is TypeScript?',
            duration: '20 mins',
            xpReward: 30,
            completed: false
          },
          {
            id: 'ts-intro-2',
            title: 'TypeScript vs JavaScript',
            duration: '25 mins',
            xpReward: 35,
            completed: false
          }
        ]
      }
    ],
    imageUrl: 'https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: '#3178c6',
    progress: 0
  },
  {
    id: 'react-fundamentals',
    title: 'React Fundamentals',
    description: 'Learn to build interactive UIs with React, including components, props, state, and hooks.',
    language: Language.JavaScript,
    difficulty: Difficulty.Intermediate,
    duration: '14 hours',
    lessons: 30,
    xpReward: 1600,
    modules: [
      {
        id: 'react-intro',
        title: 'Introduction to React',
        lessons: [
          {
            id: 'react-intro-1',
            title: 'What is React?',
            duration: '20 mins',
            xpReward: 30,
            completed: false
          },
          {
            id: 'react-intro-2',
            title: 'Setting Up a React Project',
            duration: '30 mins',
            xpReward: 40,
            completed: false
          }
        ]
      }
    ],
    imageUrl: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: '#61dafb',
    progress: 0
  },
  {
    id: 'python-data-science',
    title: 'Python for Data Science',
    description: 'Learn how to use Python for data analysis, visualization, and basic machine learning.',
    language: Language.Python,
    difficulty: Difficulty.Intermediate,
    duration: '16 hours',
    lessons: 35,
    xpReward: 1800,
    modules: [
      {
        id: 'py-data-intro',
        title: 'Introduction to Data Science',
        lessons: [
          {
            id: 'py-data-intro-1',
            title: 'What is Data Science?',
            duration: '20 mins',
            xpReward: 30,
            completed: false
          },
          {
            id: 'py-data-intro-2',
            title: 'Python Libraries for Data Science',
            duration: '30 mins',
            xpReward: 40,
            completed: false
          }
        ]
      }
    ],
    imageUrl: 'https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: '#3776ab',
    progress: 0
  }
];

export const getLessonContent = (lessonId: string) => {
  // This would be a fetch from an API in a real application
  return {
    id: lessonId,
    title: 'Variables and Data Types',
    sections: [
      {
        id: 'section-1',
        title: 'Introduction to Variables',
        content: `
          <p>Variables are containers for storing data values. In JavaScript, you declare a variable using the <code>let</code>, <code>const</code>, or <code>var</code> keyword.</p>
          <p>The <code>let</code> keyword was introduced in ES6 (2015) and allows you to declare variables with block scope.</p>
          <p>The <code>const</code> keyword was also introduced in ES6 and allows you to declare variables with block scope, but the value cannot be changed.</p>
          <p>The <code>var</code> keyword was used in older versions of JavaScript and declares a variable with function scope.</p>
        `,
        codeSnippets: [
          {
            id: 'snippet-1',
            language: 'javascript',
            code: `// Using let
let name = 'John';
name = 'Jane'; // This is allowed

// Using const
const PI = 3.14159;
// PI = 3.14; // This would cause an error

// Using var (not recommended in modern JavaScript)
var age = 25;`,
            description: 'Examples of variable declarations in JavaScript'
          }
        ]
      },
      {
        id: 'section-2',
        title: 'JavaScript Data Types',
        content: `
          <p>JavaScript has several data types that you should be familiar with:</p>
          <ul>
            <li><strong>String</strong>: Used for text. Enclosed in single or double quotes.</li>
            <li><strong>Number</strong>: Used for numeric values.</li>
            <li><strong>Boolean</strong>: true or false.</li>
            <li><strong>Object</strong>: Used for more complex data structures.</li>
            <li><strong>Array</strong>: Used for lists or collections of items.</li>
            <li><strong>Null</strong>: Represents a deliberate non-value.</li>
            <li><strong>Undefined</strong>: Represents an uninitialized variable.</li>
          </ul>
        `,
        codeSnippets: [
          {
            id: 'snippet-2',
            language: 'javascript',
            code: `// String
let name = "John";

// Number
let age = 25;
let price = 19.99;

// Boolean
let isActive = true;

// Object
let person = {
  name: "John",
  age: 25,
  isActive: true
};

// Array
let colors = ["red", "green", "blue"];

// Null
let empty = null;

// Undefined
let notDefined;
console.log(notDefined); // undefined`,
            description: 'Examples of different data types in JavaScript'
          }
        ]
      }
    ],
    quizQuestions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'Which keyword cannot be used to declare a variable in JavaScript?',
        options: ['let', 'var', 'const', 'variable'],
        correctAnswer: 'variable',
        explanation: 'JavaScript uses let, var, and const for variable declarations. "variable" is not a valid keyword for declaring variables.',
        xpReward: 25
      },
      {
        id: 'q2',
        type: 'multiple-choice',
        question: 'What will happen if you try to reassign a value to a variable declared with const?',
        options: [
          'It will work fine',
          'It will throw a TypeError',
          'It will automatically convert to let',
          'It will work but show a warning'
        ],
        correctAnswer: 'It will throw a TypeError',
        explanation: 'Variables declared with const cannot be reassigned. Attempting to do so will result in a TypeError.',
        xpReward: 25
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'Which of these is NOT a primitive data type in JavaScript?',
        options: ['String', 'Number', 'Boolean', 'Array'],
        correctAnswer: 'Array',
        explanation: 'Array is not a primitive data type; it\'s an object. The primitive data types in JavaScript are String, Number, Boolean, Null, Undefined, Symbol, and BigInt.',
        xpReward: 25
      }
    ],
    codeChallenge: {
      id: 'challenge-1',
      title: 'Variable Challenge',
      description: 'Test your understanding of variables and data types',
      instructions: 'Create variables of different types according to the requirements',
      starterCode: `// 1. Create a constant named PI with the value 3.14159
// Your code here

// 2. Create a variable named greeting with the value "Hello, World!"
// Your code here

// 3. Create a variable named isJavaScript and set it to true
// Your code here

// 4. Create an object named person with properties: name, age, and isStudent
// Your code here

// Don't modify the code below
console.log(PI);
console.log(greeting);
console.log(isJavaScript);
console.log(person);`,
      testCases: [
        {
          input: '',
          expectedOutput: '3.14159\nHello, World!\ntrue\n{ name: any, age: any, isStudent: any }',
          isHidden: false
        }
      ],
      solution: `const PI = 3.14159;
let greeting = "Hello, World!";
let isJavaScript = true;
let person = {
  name: "John",
  age: 25,
  isStudent: false
};`,
      hints: [
        'Use const for values that won\'t change',
        'Strings need to be enclosed in quotes',
        'Boolean values are either true or false (no quotes)',
        'Objects use curly braces {} and can contain multiple properties'
      ],
      xpReward: 50
    }
  };
};