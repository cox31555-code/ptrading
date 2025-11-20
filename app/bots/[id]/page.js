import ForexCourseDetail from "@/ui/forex/ForexCourseDetail";
import CoursesAPI from "@/utils/courses";

export default async function BotCourseDetailPage({ params }) {
  const { id } = await params;

  // Fetch course data from backend
  let courseData = null;
  try {
    const response = await CoursesAPI.getCourseById(id);
    courseData = response.data.data;
  } catch (error) {
    console.error("Error fetching course:", error);
  }

  return <ForexCourseDetail courseData={courseData} courseId={id} />;
}
