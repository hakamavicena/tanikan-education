// src/app/course/[id]/components/CourseHeaderBar.tsx
import React from "react";
import Link from "next/link";
import { ColorClasses } from "@/lib/types";

interface CourseHeaderBarProps {
  colorClasses: ColorClasses;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

const CourseHeaderBar: React.FC<CourseHeaderBarProps> = ({
  colorClasses,
  setIsSidebarOpen,
}) => (
  <header className={`bg-gradient-to-r ${colorClasses.bg} shadow-lg mt-4`}>
    <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
      <div className="flex items-center justify-between">
        {/* Mobile Sidebar Toggle Button */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="lg:hidden text-white p-2 hover:bg-white/20 rounded-lg"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Back to Course Link */}
        {/* Asumsikan katalog kursus ada di '/course' */}
        <Link
          href="/course"
          className="text-white hover:bg-white/20 px-3 sm:px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm sm:text-base"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span className="hidden sm:inline">Kembali ke Course</span>
          <span className="sm:hidden">Kembali</span>
        </Link>
      </div>
    </div>
  </header>
);

export default CourseHeaderBar;
