"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Difficulty, Language } from '@/types';
interface CourseFilterProps {
  selectedLanguage: Language | null;
  setSelectedLanguage: (language: Language | null) => void;
  selectedDifficulty: Difficulty | null;
  setSelectedDifficulty: (difficulty: Difficulty | null) => void;
  showCompletedCourses: boolean;
  setShowCompletedCourses: (show: boolean) => void;
}

const CourseFilter: React.FC<CourseFilterProps> = ({
  selectedLanguage,
  setSelectedLanguage,
  selectedDifficulty,
  setSelectedDifficulty,
  showCompletedCourses,
  setShowCompletedCourses
}) => {
  const languages = Object.values(Language);
  const difficulties = Object.values(Difficulty);

  return (
    <div className="mb-6 space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Filter by Language</h3>
        <div className="flex flex-wrap gap-2">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              selectedLanguage === null
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
            }`}
            onClick={() => setSelectedLanguage(null)}
          >
            All
          </motion.button>
          {languages.map((language) => (
            <motion.button
              key={language}
              whileTap={{ scale: 0.95 }}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedLanguage === language
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
              }`}
              onClick={() => setSelectedLanguage(language)}
            >
              {language}
            </motion.button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Filter by Difficulty</h3>
        <div className="flex flex-wrap gap-2">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              selectedDifficulty === null
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
            }`}
            onClick={() => setSelectedDifficulty(null)}
          >
            All
          </motion.button>
          {difficulties.map((difficulty) => (
            <motion.button
              key={difficulty}
              whileTap={{ scale: 0.95 }}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedDifficulty === difficulty
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
              }`}
              onClick={() => setSelectedDifficulty(difficulty)}
            >
              {difficulty}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="showCompleted"
          className="mr-2 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
          checked={showCompletedCourses}
          onChange={(e) => setShowCompletedCourses(e.target.checked)}
        />
        <label htmlFor="showCompleted" className="text-sm font-medium">
          Show completed courses
        </label>
      </div>
    </div>
  );
};

export default CourseFilter;