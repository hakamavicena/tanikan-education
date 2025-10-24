import React from "react";
import { Course, ColorClasses } from "@/lib/types";
import { getLevelColor } from "@/lib/utils"; 

interface CourseCardBodyProps {
  course: Course;
  colorClasses: ColorClasses;
}

const CourseCardBody: React.FC<CourseCardBodyProps> = ({
  course,
  colorClasses,
}) => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-3">
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${getLevelColor(
            course.level
          )}`}
        >
          {course.level}
        </span>
        <span className="text-emerald-600 font-bold text-lg">
          {course.price}
        </span>
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">
        {course.title}
      </h3>

      <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>

      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
        <div className="flex items-center gap-1">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <span>{course.lessons} Lessons</span>
        </div>
        <div className="flex items-center gap-1">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{course.duration}</span>
        </div>
      </div>

      <button
        className={`w-full py-3 rounded-full border-2 ${colorClasses.border} ${colorClasses.text} font-semibold ${colorClasses.hover} transition-all group-hover:bg-gradient-to-r ${colorClasses.hover_bg_full} group-hover:text-white`}
      >
        Mulai Belajar
      </button>
    </div>
  );
};

export default CourseCardBody;
