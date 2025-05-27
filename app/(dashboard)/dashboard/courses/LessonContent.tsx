"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BookOpen, CheckCircle, Code, Trophy } from 'lucide-react';
import Editor from "@monaco-editor/react";
import { getLessonContent } from '@/data/courses';

interface LessonContentProps {
  courseId?: string;
  lessonId?: string;
}

const LessonContent: React.FC<LessonContentProps> = ({ courseId, lessonId }) => {
  const [activeSection, setActiveSection] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [codeValue, setCodeValue] = useState('');
  const [showSolution, setShowSolution] = useState(false);

  const lesson = getLessonContent(lessonId || '');

  const handleQuizSubmit = (questionId: string, answer: string) => {
    setQuizAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleCodeChange = (value: string | undefined) => {
    setCodeValue(value || '');
  };

  return (
    <div className="space-y-6">
      {/* Lesson Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>{lesson.title}</CardTitle>
              <div className="flex items-center space-x-2 mt-2">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-sm text-gray-600">Section {activeSection + 1} of {lesson.sections.length}</span>
              </div>
            </div>
            <Progress value={(activeSection / lesson.sections.length) * 100} className="w-32" />
          </CardHeader>
        </Card>
      </motion.div>

      {/* Lesson Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Card>
          <CardContent className="p-6">
            <div className="prose max-w-none">
              <div dangerouslySetInnerHTML={{ __html: lesson.sections[activeSection].content }} />
            </div>

            {/* Code Examples */}
            {lesson.sections[activeSection].codeSnippets?.map((snippet) => (
              <div key={snippet.id} className="mt-6">
                <h3 className="text-sm font-medium mb-2">{snippet.description}</h3>
                <Editor
                  height="200px"
                  defaultLanguage={snippet.language}
                  value={snippet.code}
                  theme="vs-dark"
                  options={{
                    readOnly: true,
                    minimap: { enabled: false }
                  }}
                />
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>

      {/* Quiz Section */}
      {activeSection === lesson.sections.length - 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-primary" />
                <span>Quiz Time!</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {lesson.quizQuestions.map((question) => (
                <div key={question.id} className="mb-6">
                  <p className="font-medium mb-3">{question.question}</p>
                  <div className="space-y-2">
                    {question.options?.map((option) => (
                      <label
                        key={option}
                        className={`flex items-center space-x-2 p-3 rounded-lg border cursor-pointer transition-colors ${
                          quizAnswers[question.id] === option
                            ? 'bg-primary/10 border-primary'
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name={question.id}
                          value={option}
                          checked={quizAnswers[question.id] === option}
                          onChange={() => handleQuizSubmit(question.id, option)}
                          className="hidden"
                        />
                        <span>{option}</span>
                        {quizAnswers[question.id] === option && (
                          <CheckCircle className="w-4 h-4 text-primary ml-auto" />
                        )}
                      </label>
                    ))}
                  </div>
                  {quizAnswers[question.id] === question.correctAnswer && (
                    <p className="text-sm text-green-600 mt-2">{question.explanation}</p>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Coding Challenge */}
      {lesson.codeChallenge && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Code className="w-5 h-5 text-primary" />
                <span>{lesson.codeChallenge.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>{lesson.codeChallenge.description}</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium mb-2">Instructions:</p>
                  <p>{lesson.codeChallenge.instructions}</p>
                </div>
                <Editor
                  height="300px"
                  defaultLanguage="javascript"
                  value={showSolution ? lesson.codeChallenge.solution : lesson.codeChallenge.starterCode}
                  onChange={handleCodeChange}
                  theme="vs-dark"
                />
                <div className="flex justify-between">
                  <button
                    onClick={() => setShowSolution(!showSolution)}
                    className="text-primary hover:underline"
                  >
                    {showSolution ? 'Hide Solution' : 'Show Solution'}
                  </button>
                  <button
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                    onClick={() => {/* Implement test running logic */}}
                  >
                    Run Tests
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={() => setActiveSection(prev => Math.max(0, prev - 1))}
          disabled={activeSection === 0}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          onClick={() => setActiveSection(prev => Math.min(lesson.sections.length - 1, prev + 1))}
          disabled={activeSection === lesson.sections.length - 1}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default LessonContent;