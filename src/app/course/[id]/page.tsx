import { getCourseById } from "@/lib/data";
import { notFound } from "next/navigation";
import CourseContent from "./components/course-content";

interface CourseDetailProps {
  params: {
    id: string;
  };
}

export default async function CourseDetailPage({ params }: CourseDetailProps) {
  const courseId = parseInt(params.id);
  const selectedCourse = getCourseById(courseId);

  if (!selectedCourse) {
    notFound();
  }

  return <CourseContent selectedCourse={selectedCourse} />;
}
