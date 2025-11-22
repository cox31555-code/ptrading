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
  const [current, setCurrent] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isMounted, setIsMounted] = useState(false);

  const calcCards = (w) => (w <= 1024 ? 1 : 3);

  useEffect(() => {
    setIsMounted(true);
    const resize = () => setCardsPerView(calcCards(window.innerWidth));
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const totalSlides = Math.ceil(courseList.length / cardsPerView);
  const currentSlide = Math.floor(current / cardsPerView);

  const goToSlide = (i) => setCurrent(i * cardsPerView);
  const prev = () => setCurrent((p) => Math.max(p - cardsPerView, 0));
  const next = () =>
    setCurrent((p) =>
      Math.min(p + cardsPerView, (totalSlides - 1) * cardsPerView)
    );

  return (
    <section className={styles.section} suppressHydrationWarning>
      {showBlueEllipse && <span className={styles.blueEllipse} />}

      <div className={styles.topRow} suppressHydrationWarning>
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

        {isMounted && cardsPerView > 1 && (
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
          {courseList.slice(current, current + cardsPerView).map((course) => (
            <CourseCard
              key={course._id}
              data={course}
              onViewMore={() => router.push(`/courses/${course._id}`)}
              onQuickBuy={() => {}}
            />
          ))}
        </div>
      </div>

      {/* -------- Dots ---------- */}
      {isMounted && (
        <div className={styles.dotsRow}>
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <span
              key={idx}
              className={idx === currentSlide ? styles.activeDot : styles.dot}
              onClick={() => goToSlide(idx)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
