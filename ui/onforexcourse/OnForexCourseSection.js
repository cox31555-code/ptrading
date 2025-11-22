"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CourseCard from "./courseCard/CourseCard";
import styles from "./onforexcourseSection.module.css";

export default function OnForexCourseSection({
  heading = "No matter your level of expertise or interest, our courses provide valuable insights and practical knowledge to help you succeed in the financial markets. Enroll now and take the next step in your trading journey!",
  showBlueEllipse = true,
  courseList = [],
}) {
  const router = useRouter();
  const [courses, setCourses] = useState(courseList);
  console.log(courses);
  const [current, setCurrent] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const calcCards = (w) => (w <= 1024 ? 1 : 3);
  useEffect(() => {
    const resize = () => setCardsPerView(calcCards(window.innerWidth));
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // Debug logging for troubleshooting
  if (typeof window !== "undefined") {
    console.log(
      "cardsPerView:",
      cardsPerView,
      "window width:",
      window.innerWidth
    );
  }
  console.log("courses.length:", courses.length);

  const totalSlides = Math.ceil(courses.length / cardsPerView);
  const currentSlide = Math.floor(current / cardsPerView);

  const goToSlide = (i) => setCurrent(i * cardsPerView);
  const prev = () => setCurrent((p) => Math.max(p - cardsPerView, 0));
  const next = () =>
    setCurrent((p) =>
      Math.min(p + cardsPerView, (totalSlides - 1) * cardsPerView)
    );

  return (
    <section className={styles.section}>
      {showBlueEllipse && <span className={styles.blueEllipse} />}

      <div className={styles.topRow}>
        <div className={styles.textBlock}>
          <p
            className={
              heading === "Related Courses"
                ? `${styles.relatedCoursesHeading}`
                : styles.subheading
            }
          >
            {heading}
          </p>
        </div>

        {cardsPerView > 1 && (
          <div className={styles.arrowsRow}>
            <button
              className={styles.arrow}
              onClick={prev}
              disabled={current === 0}
            >
              <img src="/svg/leftarrow.svg" alt="Previous" />
            </button>
            <button
              className={styles.arrow}
              onClick={next}
              disabled={current + cardsPerView >= courses.length}
            >
              <img src="/svg/righarrow.svg" alt="Next" />
            </button>
          </div>
        )}
      </div>

      {/* ---------- Cards---------- */}
      <div className={styles.sliderContainer}>
        <div className={styles.cardsRow}>
          {courses.slice(current, current + cardsPerView).map((course, idx) => (
            <CourseCard
              key={course.id ?? current + idx}
              data={course}
              onViewMore={() => router.push(`/courses/${course._id}`)}
              onQuickBuy={() => {}}
            />
          ))}
        </div>
      </div>

      {/* -------- Dots ---------- */}
      <div className={styles.dotsRow}>
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <span
            key={idx}
            className={idx === currentSlide ? styles.activeDot : styles.dot}
            onClick={() => goToSlide(idx)}
          />
        ))}
      </div>
    </section>
  );
}
