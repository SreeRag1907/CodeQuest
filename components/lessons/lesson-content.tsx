'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Editor from '@monaco-editor/react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ChevronRight, ChevronLeft, Check, X } from 'lucide-react';

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
}

interface LessonSection {
  id: string;
  title: string;
  content: string;
  codeExample?: string;
  quiz?: Question[];
  codingChallenge?: {
    instructions: string;
    starterCode: string;
    solution: string;
    testCases: { input: string; expected: string }[];
  };
}

interface LessonContentProps {
  sections: LessonSection[];
}

export function LessonContent({ sections }: LessonContentProps) {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [showSolution, setShowSolution] = useState(false);
  const [userCode, setUserCode] = useState('');
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const currentSection = sections[currentSectionIndex];
  const progress = ((currentSectionIndex + 1) / sections.length) * 100;

  const handleNextSection = () => {
    if (currentSectionIndex < sections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
      setQuizSubmitted(false);
      setShowSolution(false);
    }
  };

  const handlePreviousSection = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
      setQuizSubmitted(false);
      setShowSolution(false);
    }
  };

  const handleQuizSubmit = () => {
    setQuizSubmitted(true);
  };

  const handleCodeChange = (value: string | undefined) => {
    if (value) {
      setUserCode(value);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <Progress value={progress} className="mb-2" />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Section {currentSectionIndex + 1} of {sections.length}</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{currentSection.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose dark:prose-invert">
                {currentSection.content}
              </div>

              {currentSection.codeExample && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2">Code Example</h3>
                  <Editor
                    height="200px"
                    defaultLanguage="javascript"
                    theme="vs-dark"
                    value={currentSection.codeExample}
                    options={{
                      readOnly: true,
                      minimap: { enabled: false },
                      fontSize: 14,
                    }}
                  />
                </div>
              )}

              {currentSection.quiz && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">Quiz</h3>
                  {currentSection.quiz.map((question) => (
                    <div key={question.id} className="mb-6">
                      <p className="mb-3">{question.question}</p>
                      <RadioGroup
                        value={selectedAnswers[question.id]}
                        onValueChange={(value) => 
                          setSelectedAnswers({ ...selectedAnswers, [question.id]: value })
                        }
                      >
                        {question.options.map((option, index) => (
                          <div key={index} className="flex items-center space-x-2 mb-2">
                            <RadioGroupItem value={option} id={`${question.id}-${index}`} />
                            <Label htmlFor={`${question.id}-${index}`}>{option}</Label>
                            {quizSubmitted && (
                              option === question.correctAnswer ? (
                                <Check className="h-4 w-4 text-green-500 ml-2" />
                              ) : selectedAnswers[question.id] === option ? (
                                <X className="h-4 w-4 text-red-500 ml-2" />
                              ) : null
                            )}
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  ))}
                  {!quizSubmitted && (
                    <Button onClick={handleQuizSubmit}>Submit Answers</Button>
                  )}
                </div>
              )}

              {currentSection.codingChallenge && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2">Coding Challenge</h3>
                  <p className="mb-4">{currentSection.codingChallenge.instructions}</p>
                  <Editor
                    height="300px"
                    defaultLanguage="javascript"
                    theme="vs-dark"
                    value={userCode || currentSection.codingChallenge.starterCode}
                    onChange={handleCodeChange}
                    options={{
                      minimap: { enabled: false },
                      fontSize: 14,
                    }}
                  />
                  <div className="flex gap-4 mt-4">
                    <Button onClick={() => setShowSolution(!showSolution)}>
                      {showSolution ? 'Hide Solution' : 'Show Solution'}
                    </Button>
                    <Button>Run Tests</Button>
                  </div>
                  {showSolution && (
                    <div className="mt-4">
                      <h4 className="text-md font-semibold mb-2">Solution</h4>
                      <Editor
                        height="200px"
                        defaultLanguage="javascript"
                        theme="vs-dark"
                        value={currentSection.codingChallenge.solution}
                        options={{
                          readOnly: true,
                          minimap: { enabled: false },
                          fontSize: 14,
                        }}
                      />
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePreviousSection}
              disabled={currentSectionIndex === 0}
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            <Button
              onClick={handleNextSection}
              disabled={currentSectionIndex === sections.length - 1}
            >
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}