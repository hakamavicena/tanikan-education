// src/app/course/[id]/components/LessonContent.tsx
import React from "react";
import { Course, ColorClasses } from "@/lib/types";
import { getLevelColor } from "@/lib/utils";

interface SelectedLessonState {
  moduleIdx: number;
  lessonIdx: number;
}

interface LessonContentProps {
  selectedCourse: Course;
  colorClasses: ColorClasses;
  selectedLesson: SelectedLessonState;
  currentLesson: string;
  currentModule: Course["modules"][0]; // Tipe untuk satu module
  toggleLesson: (moduleIdx: number, lessonIdx: number) => void;
}

const LessonContent: React.FC<LessonContentProps> = ({
  selectedCourse,
  colorClasses,
  selectedLesson,
  currentLesson,
  currentModule,
  toggleLesson,
}) => {
  // Logic untuk Previous/Next Button ada di sini

  const isFirstLesson =
    selectedLesson.moduleIdx === 0 && selectedLesson.lessonIdx === 0;

  const isLastLesson =
    selectedLesson.moduleIdx === selectedCourse.modules.length - 1 &&
    selectedLesson.lessonIdx ===
      selectedCourse.modules[selectedLesson.moduleIdx].items.length - 1;

  const handlePrev = () => {
    if (selectedLesson.lessonIdx > 0) {
      toggleLesson(selectedLesson.moduleIdx, selectedLesson.lessonIdx - 1);
    } else if (selectedLesson.moduleIdx > 0) {
      const prevModule = selectedCourse.modules[selectedLesson.moduleIdx - 1];
      toggleLesson(selectedLesson.moduleIdx - 1, prevModule.items.length - 1);
    }
  };

  const handleNext = () => {
    const currentModuleItems =
      selectedCourse.modules[selectedLesson.moduleIdx].items;
    if (selectedLesson.lessonIdx < currentModuleItems.length - 1) {
      toggleLesson(selectedLesson.moduleIdx, selectedLesson.lessonIdx + 1);
    } else if (selectedLesson.moduleIdx < selectedCourse.modules.length - 1) {
      toggleLesson(selectedLesson.moduleIdx + 1, 0);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
        {/* Lesson Title & Video Preview */}
        <div className="mb-4">
          <span
            className={`text-xs sm:text-sm font-semibold px-3 py-1 rounded-full ${getLevelColor(
              selectedCourse.level
            )}`}
          >
            {currentModule.title}
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          {currentLesson}
        </h1>
        <div
          className={`w-full aspect-video bg-gradient-to-br ${colorClasses.bg} rounded-xl flex items-center justify-center mb-6`}
        >
          <div className="text-center text-white">
            <svg
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-4 opacity-90 cursor-pointer hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-base sm:text-lg lg:text-xl font-semibold">
              Video Pembelajaran
            </p>
            <p className="text-sm text-white/80 mt-2">
              Klik untuk memutar video
            </p>
          </div>
        </div>

        {/* Lesson Details */}
        <div className="prose max-w-none">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
            Deskripsi Materi
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Dalam lesson ini, Anda akan mempelajari tentang{" "}
            <strong>{currentLesson}</strong> secara mendalam. Materi ini
            merupakan bagian penting dari modul{" "}
            <strong>{currentModule.title}</strong> yang akan membantu Anda
            memahami konsep dan praktik dalam budidaya ikan bioflok.
          </p>

          {/* ... Poin-poin Penting & Materi Tambahan (dapat juga dijadikan komponen terpisah) ... */}
          <h4 className="text-base sm:text-lg font-bold text-gray-800 mt-6 mb-3">
            Poin-poin Penting:
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-600">
            <li>Pemahaman konsep dasar dan teori</li>
            <li>Aplikasi praktis di lapangan</li>
            <li>Studi kasus dan contoh nyata</li>
            <li>Tips dan tricks dari ahli</li>
          </ul>

          <h4 className="text-base sm:text-lg font-bold text-gray-800 mt-6 mb-3">
            Materi Tambahan:
          </h4>
          <div className="space-y-3">
            {/* ... Tautan File ... */}
            <a
              href="#"
              className="flex items-center gap-3 p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-800 text-sm sm:text-base">
                  Slide Presentasi
                </p>
                <p className="text-xs sm:text-sm text-gray-500">PDF - 2.5 MB</p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0"
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
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-800 text-sm sm:text-base">
                  Worksheet & Checklist
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  DOCX - 450 KB
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <button
          onClick={handlePrev}
          disabled={isFirstLesson}
          className="flex-1 sm:flex-none px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm sm:text-base"
        >
          ← Lesson Sebelumnya
        </button>

        <button
          onClick={handleNext}
          disabled={isLastLesson}
          className={`flex-1 sm:flex-none px-6 py-3 bg-gradient-to-r ${colorClasses.bg} text-white rounded-full font-semibold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm sm:text-base`}
        >
          Lesson Selanjutnya →
        </button>
      </div>
    </div>
  );
};

export default LessonContent;
