import React from "react";
import CourseCard from "./components/course-card";
import { courses } from "@/lib/data";

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      <div className="container mx-auto px-6 py-12">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Katalog Pembelajaran
          </h2>
          <p className="text-xl text-gray-600">
            Pilih course yang sesuai dengan kebutuhan Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
