"use client";
import { useEffect, useState } from "react";
import Hero from "../landing-page/hero/Hero";
import BlogSection from "../landing-page/blogSection/BlogSection";
import Stats from "../landing-page/stats/Stats";
import Welcome from "../landing-page/welcome/Welcome";
import Process from "../landing-page/process/Process";
import styles from "./Home.module.css";

import OnForexCourseSection from "../onforexcourse/OnForexCourseSection";
import Work from "../landing-page/worktogather/Work";
import TopBar from "../landing-page/courses/TopBar";
import Courses from "../landing-page/courses/Courses";
import ChooseCourse from "../landing-page/chooseCourse/ChooseCourse";
import CoursesAPI from "@/utils/courses";

export default function Home({ courses }) {
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    const loadRandomCourses = async () => {
      try {
        // Fetch all courses from all categories
        const forexResponse = await CoursesAPI.getAllCourses({
          category: "Forex",
          limit: 100,
          page: 1,
        });
        const stocksResponse = await CoursesAPI.getAllCourses({
          category: "Stocks",
          limit: 100,
          page: 1,
        });
        const botsResponse = await CoursesAPI.getAllCourses({
          category: "Bots",
          limit: 100,
          page: 1,
        });
        const indicesResponse = await CoursesAPI.getAllCourses({
          category: "Indices",
          limit: 100,
          page: 1,
        });

        // Combine all courses
        const allCourses = [
          ...(forexResponse?.data?.data || []),
          ...(stocksResponse?.data?.data || []),
          ...(botsResponse?.data?.data || []),
          ...(indicesResponse?.data?.data || []),
        ];

        // Shuffle and select random 8 courses
        const shuffled = allCourses
          .sort(() => Math.random() - 0.5)
          .slice(0, 8);

        // Transform to match expected format
        const formatted = shuffled.map((course) => ({
          _id: course._id,
          image: course.image,
          title: course.title,
          desc: course.details || course.description,
        }));

        setCourseList(formatted);
      } catch (error) {
        console.error("Error loading courses:", error);
        // Fallback to dummy data
        fetch("/dummy/coursesData.json")
          .then((res) => res.json())
          .then((data) => setCourseList(data))
          .catch((err) => console.error("Error loading dummy data:", err));
      }
    };

    loadRandomCourses();
  }, []);

  return (
    <div className={styles.page}>
      <span className={styles["blue-ellipse-3"]}></span>

      <span className={styles["blue-ellipse-2"]}></span>

      <span className={styles["blue-ellipse-1"]}></span>
      <span className={styles["blue-ellipse-footer"]}></span>
      <Hero />
      <Stats />
      <Welcome />
      <Process />
      <TopBar />
      <Courses
        courseList={courseList}
        cardsPerView={4}
        sectionTitle="Our Latest Courses"
      />
      <ChooseCourse />
      <OnForexCourseSection courseList={courses} />
      <Work />
      <BlogSection />
    </div>
  );
}
