// src/app/course/[id]/components/course-content.tsx
"use client";
import React, { useState } from "react";
import { Course } from "@/lib/types";
import { getColorClasses } from "@/lib/utils";

// Import Sub-Komponen
import CourseHeaderBar from "./course-headbar";
import CourseSidebar from "./course-sidebar";
import LessonContent from "./lesson-content";
import CourseOverview from "./course-overview";

interface CourseContentProps {
  selectedCourse: Course;
}

export default function CourseContent({ selectedCourse }: CourseContentProps) {
  const [expandedModule, setExpandedModule] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [selectedLesson, setSelectedLesson] = useState<{
    moduleIdx: number;
    lessonIdx: number;
  } | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State untuk mobile sidebar

  const colorClasses = getColorClasses(selectedCourse.color);

  const totalLessons = selectedCourse.modules.reduce(
    (acc, m) => acc + m.items.length,
    0
  );
  const progress =
    Math.round((completedLessons.length / totalLessons) * 100) || 0;

  const toggleLesson = (moduleIdx: number, lessonIdx: number) => {
    const lessonId = `${selectedCourse.id}-${moduleIdx}-${lessonIdx}`;
    setSelectedLesson({ moduleIdx, lessonIdx });

    // Tandai sebagai selesai saat dibuka pertama kali
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }

    // Tutup sidebar di perangkat kecil
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  };

  // Mendapatkan data lesson yang sedang aktif
  const currentLesson = selectedLesson
    ? selectedCourse.modules[selectedLesson.moduleIdx]?.items[
        selectedLesson.lessonIdx
      ]
    : null;

  const currentModule = selectedLesson
    ? selectedCourse.modules[selectedLesson.moduleIdx]
    : null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. Header Bar (Mobile Sidebar Toggle & Back Button) */}
      <CourseHeaderBar
        colorClasses={colorClasses}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div className="flex relative">
        {/* 2. Sidebar (Navigation & Progress) */}
        <CourseSidebar
          course={selectedCourse}
          colorClasses={colorClasses}
          progress={progress}
          totalLessons={totalLessons}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          expandedModule={expandedModule}
          setExpandedModule={setExpandedModule}
          completedLessons={completedLessons}
          selectedLesson={selectedLesson}
          toggleLesson={toggleLesson}
        />

        {/* 3. Main Content Area */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8 w-full lg:w-auto">
          <div className="max-w-4xl mx-auto">
            {currentLesson && currentModule && selectedLesson ? (
              // Tampilan Konten Lesson
              <LessonContent
                selectedCourse={selectedCourse}
                colorClasses={colorClasses}
                selectedLesson={selectedLesson}
                currentLesson={currentLesson}
                currentModule={currentModule}
                toggleLesson={toggleLesson}
              />
            ) : (
              // Tampilan Halaman Selamat Datang / Overview
              <CourseOverview
                selectedCourse={selectedCourse}
                colorClasses={colorClasses}
                toggleLesson={toggleLesson}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
