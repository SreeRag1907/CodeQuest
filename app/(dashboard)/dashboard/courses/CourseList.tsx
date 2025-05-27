"use client"
import React, { useState } from 'react';

import { motion } from 'framer-motion';
import CourseCard from './CourseCard';
import CourseFilter from './CourseFilter';
import { Difficulty, Language } from '@/types';
import { courses } from '@/data/courses';

const CourseList: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | null>(null);
  const [showCompletedCourses, setShowCompletedCourses] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = courses.filter((course) => {
    // Filter by language
    if (selectedLanguage !== null && course.language !== selectedLanguage) {
      return false;
    }
    
    // Filter by difficulty
    if (selectedDifficulty !== null && course.difficulty !== selectedDifficulty) {
      return false;
    }
    
    // Filter by completion status
    if (!showCompletedCourses && course.progress === 100) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery && !course.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  const handleCourseClick = (courseId: string) => {
    console.log(`Navigate to course: ${courseId}`);
    // In a real app, this would navigate to the course page
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Courses</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search courses..."
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <svg
            className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <CourseFilter
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        selectedDifficulty={selectedDifficulty}
        setSelectedDifficulty={setSelectedDifficulty}
        showCompletedCourses={showCompletedCourses}
        setShowCompletedCourses={setShowCompletedCourses}
      />

      {filteredCourses.length === 0 ? (
        <div className="text-center py-10">
          <h3 className="text-xl font-medium text-gray-600 mb-2">No courses found</h3>
          <p className="text-gray-500">Try adjusting your filters or search query</p>
        </div>
      ) : (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {filteredCourses.map((course) => (
            <motion.div key={course.id} variants={item}>
              <CourseCard course={course} onClick={handleCourseClick} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default CourseList;