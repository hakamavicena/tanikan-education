import React from "react";
import Link from "next/link";
import { Course } from "@/lib/types";
import { getColorClasses } from "@/lib/utils";
import CourseCardHeader from "./course-card-header";
import CourseCardBody from "./course-card-body";

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const colorClasses = getColorClasses(course.color);

  return (
    <Link
      href={`/course/${course.id}`}
      id={`course-${course.id}`}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer block"
    >
      <CourseCardHeader colorClasses={colorClasses} />
      <CourseCardBody course={course} colorClasses={colorClasses} />
    </Link>
  );
};

export default CourseCard;
