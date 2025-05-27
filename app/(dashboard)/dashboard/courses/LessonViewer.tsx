"use client";

import React from "react";
import { useParams } from "next/navigation";
import LessonContent from "./LessonContent";

const LessonViewer = () => {
  // useParams returns an object with dynamic route params
  const params = useParams() as { courseId?: string; lessonId?: string };

  return (
    <div className="max-w-4xl mx-auto">
      <LessonContent courseId={params.courseId} lessonId={params.lessonId} />
    </div>
  );
};

export default LessonViewer;