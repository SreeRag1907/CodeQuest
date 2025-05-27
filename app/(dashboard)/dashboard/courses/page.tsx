"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import CourseList from './CourseList';
import { BookOpen } from 'lucide-react';

const Courses = () => {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <BookOpen className="w-6 h-6 text-primary" />
              <div>
                <CardTitle>All Courses</CardTitle>
                <CardDescription>Browse and enroll in our programming courses</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <CourseList />
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Courses;