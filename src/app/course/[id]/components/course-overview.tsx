// src/app/course/[id]/components/CourseOverview.tsx
import React from "react";
import { Course, ColorClasses } from "@/lib/types";

interface CourseOverviewProps {
  selectedCourse: Course;
  colorClasses: ColorClasses;
  toggleLesson: (moduleIdx: number, lessonIdx: number) => void;
}

const CourseOverview: React.FC<CourseOverviewProps> = ({
  selectedCourse,
  colorClasses,
  toggleLesson,
}) => {
  const handleStartLesson = () => {
    toggleLesson(0, 0);
    // Optional: scroll to top after starting first lesson
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Welcome Banner */}
      <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8">
        <div
          className={`w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-br ${colorClasses.bg} rounded-xl flex items-center justify-center mb-6`}
        >
          <div className="text-center text-white px-4">
            <svg
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-4 opacity-90"
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
            <h3 className="text-xl sm:text-2xl font-bold">
              Materi Pembelajaran Interaktif
            </h3>
            <p className="text-white/80 mt-2 text-sm sm:text-base">
              Klik lesson di sidebar untuk memulai
            </p>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          Selamat Datang di {selectedCourse.title}
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
          {selectedCourse.description}
        </p>

        {/* ... (Stats boxes, Yang Akan Anda Pelajari, dan Keunggulan Course sama) ... */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
          <div className="bg-gray-50 p-4 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <div
                className={`w-10 h-10 rounded-full bg-gradient-to-r ${colorClasses.bg} flex items-center justify-center flex-shrink-0`}
              >
                <svg
                  className="w-5 h-5 text-white"
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
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-gray-800">
                  {selectedCourse.lessons}
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  Total Lessons
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <div
                className={`w-10 h-10 rounded-full bg-gradient-to-r ${colorClasses.bg} flex items-center justify-center flex-shrink-0`}
              >
                <svg
                  className="w-5 h-5 text-white"
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
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-gray-800">
                  {selectedCourse.duration}
                </p>
                <p className="text-xs sm:text-sm text-gray-600">Durasi</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-2">
              <div
                className={`w-10 h-10 rounded-full bg-gradient-to-r ${colorClasses.bg} flex items-center justify-center flex-shrink-0`}
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-gray-800">
                  {selectedCourse.level}
                </p>
                <p className="text-xs sm:text-sm text-gray-600">Level</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-6">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
            Yang Akan Anda Pelajari:
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {selectedCourse.modules.map((module, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div
                  className={`w-6 h-6 rounded-full bg-gradient-to-r ${colorClasses.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}
                >
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
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm sm:text-base">
                    {module.title}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {module.items.length} materi pembelajaran
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
            Keunggulan Course Ini
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">
                  Materi Komprehensif
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Pembelajaran lengkap dari dasar hingga mahir
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-blue-600"
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
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">
                  Video Tutorial
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Penjelasan visual yang mudah dipahami
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-purple-600"
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
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">
                  Studi Kasus
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Contoh praktis dari lapangan
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">
                  Dukungan Komunitas
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Forum diskusi dan konsultasi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl shadow-lg p-6 sm:p-8 text-center text-white">
        <h3 className="text-xl sm:text-2xl font-bold mb-4">
          Siap Memulai Pembelajaran?
        </h3>
        <p className="text-emerald-100 mb-6 text-sm sm:text-base">
          Pilih lesson pertama di sidebar untuk memulai perjalanan budidaya
          bioflok Anda
        </p>
        <button
          onClick={handleStartLesson}
          className="bg-white text-emerald-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-emerald-50 transition-colors shadow-lg"
        >
          Mulai Lesson Pertama
        </button>
      </div>
    </>
  );
};

export default CourseOverview;
