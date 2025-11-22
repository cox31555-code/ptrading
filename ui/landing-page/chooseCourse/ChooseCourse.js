"use client";
import { useEffect, useState } from 'react';
import styles from './chooseCourse.module.css';
import Tag from '@/ui/common/tag/Tag';

export default function ChooseCourse() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('/dummy/chooseCourseData.json')
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);

  return (
    <section className={styles.chooseCourseSection}>
      <Tag>Best Trading Academy in the UK</Tag>
      <h2 className={styles.heading}>
        Choose The Right Trading Course For Learning
      </h2>
      <p className={styles.subheading}>
        Glad you're here in our trading institute's course section! Check out
        our variety of best trading courses with Polar tailored to match your
        unique interests and aims. No matter if you're a novice looking to grasp
        the fundamentals or a seasoned trader in search of advanced techniques,
        we've got a course for you.
      </p>

      <div className={styles.coursesGrid}>
        {courses.map((course, idx) => (
          <div className={styles.card} key={idx}>
            <div className={styles.iconWrapper}>
              <img src={course.icon} alt={course.title} />
            </div>
            <div className={styles.cardTitle}>{course.title}</div>
            <div className={styles.cardDesc}>{course.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
