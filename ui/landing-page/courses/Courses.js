"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import classes from "./courses.module.css";

const Courses = ({
  courseList = [],
  cardsPerView: initialCardsPerView = 4,
  sectionTitle = "Our Latest Courses",
}) => {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(initialCardsPerView);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px)");

    const handleMediaChange = (e) => {
      if (e.matches) {
        setCardsPerView(1);
        setCurrent(0);
      } else {
        setCardsPerView(initialCardsPerView);
        setCurrent(0);
      }
    };

    handleMediaChange(mediaQuery);
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, [initialCardsPerView]);

  const DOTS_COUNT = Math.ceil(courseList.length / cardsPerView);
  const startIdx = current * cardsPerView;
  const visibleCards = courseList.slice(startIdx, startIdx + cardsPerView);

  const goLeft = () => setCurrent((prev) => Math.max(0, prev - 1));
  const goRight = () =>
    setCurrent((prev) => Math.min(DOTS_COUNT - 1, prev + 1));
  const goTo = (idx) => setCurrent(idx);

  const handleViewMore = (courseId, category) => {
    // Determine the correct route based on category
    let route = "/courses";
    if (category === "Stocks" || category === "Indices") {
      route = "/stocks";
    } else if (category === "Bots") {
      route = "/bots";
    }
    router.push(`${route}/${courseId}`);
  };

  return (
    <>
      <div className={classes.headingRow}>
        <h2 className={classes.heading}>{sectionTitle}</h2>
        <div className={classes.arrowsContainer}>
          <button
            className={classes.arrowBtn}
            onClick={goLeft}
            disabled={current === 0}
          >
            <img src="/svg/leftarrow.svg" alt="Left Arrow" />
          </button>
          <button
            className={classes.arrowBtn}
            onClick={goRight}
            disabled={current === DOTS_COUNT - 1}
          >
            <img src="/svg/righarrow.svg" alt="Right Arrow" />
          </button>
        </div>
      </div>
      <div className={classes.coursesSection}>
        <div className={classes.container}>
          <div className={classes.coursesGrid}>
            {visibleCards.map((course, idx) => (
              <div className={classes.card} key={startIdx + idx}>
                <div className={classes.imageWrapper}>
                  <img
                    src={course.image}
                    alt={course.title}
                    className={classes.image}
                  />
                </div>
                <div className={classes.cardContent}>
                  <h3 className={classes.title}>{course.title}</h3>
                  <p className={classes.desc}>{course.desc}</p>
                  <button className={classes.viewMore}>View More</button>
                </div>
              </div>
            ))}
          </div>

          <div className={classes.dotsContainer}>
            {[...Array(DOTS_COUNT)].map((_, idx) => (
              <button
                key={idx}
                className={`${classes.dot} ${
                  current === idx ? classes.activeDot : ""
                }`}
                onClick={() => goTo(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
