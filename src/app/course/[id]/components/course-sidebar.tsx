// src/app/course/[id]/components/CourseSidebar.tsx
import React from "react";
import { Course, ColorClasses } from "@/lib/types";
import { getLevelColor } from "@/lib/utils"; // Impor getLevelColor

interface SelectedLessonState {
  moduleIdx: number;
  lessonIdx: number;
}

interface CourseSidebarProps {
  course: Course;
  colorClasses: ColorClasses;
  totalLessons: number;
  progress: number;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
  expandedModule: number;
  setExpandedModule: (idx: number) => void;
  completedLessons: string[];
  selectedLesson: SelectedLessonState | null;
  toggleLesson: (moduleIdx: number, lessonIdx: number) => void;
}

const CourseSidebar: React.FC<CourseSidebarProps> = ({
  course,
  colorClasses,
  progress,
  isSidebarOpen,
  setIsSidebarOpen,
  expandedModule,
  setExpandedModule,
  completedLessons,
  selectedLesson,
  toggleLesson,
}) => {
  return (
    <>
      {/* Sidebar Content Wrapper */}
      <div
        className={`fixed lg:static inset-y-0 left-0 z-50 w-80 sm:w-96 bg-white shadow-xl 
          transform transition-transform duration-300 ease-in-out lg:flex-shrink-0 overflow-y-auto
          ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }`}
        style={{ top: "64px", height: "calc(100vh - 64px)" }}
      >
        {/* Sidebar Header & Progress */}
        <div className="p-4 sm:p-6 border-b sticky top-0 bg-white z-10">
          <div className="flex items-start justify-between mb-2">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 pr-2">
              {course.title}
            </h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden text-gray-500 hover:text-gray-700 p-1"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4 flex-wrap">
            <span
              className={`px-3 py-1 rounded-full ${getLevelColor(
                course.level
              )}`}
            >
              {course.level}
            </span>
            <span>{course.lessons} Lessons</span>
          </div>

          <div className="mb-2">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">Progress</span>
              <span className={`font-bold ${colorClasses.text}`}>
                {progress}% complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`bg-gradient-to-r ${colorClasses.bg} h-2 rounded-full transition-all duration-500`}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Modules List */}
        <div className="pb-20">
          {course.modules.map((module, moduleIdx) => (
            <div key={moduleIdx} className="border-b">
              <button
                onClick={() =>
                  setExpandedModule(
                    expandedModule === moduleIdx ? -1 : moduleIdx
                  )
                }
                className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                {/* Module Title & Icon Logic */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-full ${colorClasses.bg} bg-gradient-to-r flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                  >
                    {moduleIdx + 1}
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                      {module.title}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {module.items.length} lessons
                    </p>
                  </div>
                </div>
                {/* Expand Icon */}
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${
                    expandedModule === moduleIdx ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Lesson Items */}
              {expandedModule === moduleIdx && (
                <div className="bg-gray-50">
                  {module.items.map((item, itemIdx) => {
                    const lessonId = `${course.id}-${moduleIdx}-${itemIdx}`;
                    const isCompleted = completedLessons.includes(lessonId);
                    const isActive =
                      selectedLesson?.moduleIdx === moduleIdx &&
                      selectedLesson?.lessonIdx === itemIdx;
                    return (
                      <div
                        key={itemIdx}
                        onClick={() => toggleLesson(moduleIdx, itemIdx)}
                        className={`flex items-center gap-3 p-3 sm:p-4 pl-12 sm:pl-16 hover:bg-gray-100 cursor-pointer transition-colors border-l-4 ${
                          isActive
                            ? `border-emerald-500 bg-emerald-50`
                            : isCompleted
                            ? "border-transparent"
                            : "border-transparent hover:border-emerald-500"
                        }`}
                      >
                        {/* Checkmark/Status Icon */}
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                            isCompleted
                              ? `bg-gradient-to-r ${colorClasses.bg} border-transparent`
                              : "border-gray-300"
                          }`}
                        >
                          {isCompleted && (
                            <svg
                              className="w-3 h-3 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                        </div>
                        {/* Lesson Title */}
                        <div className="flex items-center gap-2 flex-1 min-w-0">
                          <svg
                            className="w-4 h-4 text-gray-400 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                            />
                          </svg>
                          <span
                            className={`text-xs sm:text-sm ${
                              isCompleted
                                ? "text-gray-500 line-through"
                                : isActive
                                ? "text-emerald-700 font-semibold"
                                : "text-gray-700"
                            }`}
                          >
                            {item}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Backdrop for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};

export default CourseSidebar;
