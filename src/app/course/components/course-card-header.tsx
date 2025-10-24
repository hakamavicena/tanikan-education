import React from "react";
import { ColorClasses } from "@/lib/types"; 

interface CourseCardHeaderProps {
  colorClasses: ColorClasses;
}

const CourseCardHeader: React.FC<CourseCardHeaderProps> = ({
  colorClasses,
}) => {
  return (
    <div
      className={`h-48 bg-gradient-to-br ${colorClasses.bg} flex items-center justify-center relative overflow-hidden`}
    >
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
      <svg
        className="w-20 h-20 text-white opacity-90"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    </div>
  );
};

export default CourseCardHeader;
