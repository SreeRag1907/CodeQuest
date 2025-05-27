"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Trophy } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Course, Difficulty } from  '@/types';

interface CourseCardProps {
  course: Course;
  onClick: (courseId: string) => void;
}

const difficultyColors = {
  [Difficulty.Beginner]: 'bg-green-100 text-green-800',
  [Difficulty.Intermediate]: 'bg-yellow-100 text-yellow-800',
  [Difficulty.Advanced]: 'bg-red-100 text-red-800',
};

const CourseCard: React.FC<CourseCardProps> = ({ course, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Card 
        className="h-full overflow-hidden cursor-pointer hover:shadow-md transition-all duration-300"
        onClick={() => onClick(course.id)}
      >
        <div 
          className="w-full h-32 bg-cover bg-center" 
          style={{ backgroundImage: `url(${course.imageUrl})` }}
        >
          <div className="w-full h-full flex items-end p-4" style={{ background: `linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.7) 100%)` }}>
            <Badge className={difficultyColors[course.difficulty]}>
              {course.difficulty}
            </Badge>
          </div>
        </div>
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2 mb-1">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: course.color }}
            />
            <CardDescription>{course.language}</CardDescription>
          </div>
          <CardTitle className="line-clamp-1">{course.title}</CardTitle>
        </CardHeader>
        <CardContent className="pb-2">
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
            {course.description}
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
            <div className="flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              <span>{course.lessons} lessons</span>
            </div>
            <div className="flex items-center gap-1">
              <Trophy className="w-4 h-4" />
              <span>{course.xpReward} XP</span>
            </div>
          </div>
          <div className="flex items-center mt-2 gap-2">
            <Progress value={course.progress} className="h-2" />
            <span className="text-xs font-medium">{course.progress}%</span>
          </div>
        </CardContent>
        <CardFooter className="pt-0">
          <div className="w-full flex justify-between items-center">
            <span className="text-xs text-gray-500">{course.duration}</span>
            <motion.div
              whileHover={{ x: 3 }}
              transition={{ type: 'spring', stiffness: 500 }}
            >
              <ArrowRight className="w-5 h-5 text-primary" />
            </motion.div>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default CourseCard;