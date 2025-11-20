"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import CourseCard from "../onforexcourse/courseCard/CourseCard";
import Tag from "../common/tag/Tag";
import styles from "./page.module.css";
import Work from "../landing-page/worktogather/Work";

export default function ForexPage({
  courses = [],
  category,
  priceFrom,
  priceTo,
  priceRange = { min: 0, max: 1000 },
  currentPage = 1,
  totalPages = 1,
}) {
  const router = useRouter();
  const currentSearchParams = useSearchParams();

  // Ensure this component only hydrates on client
  const [isClient, setIsClient] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPriceFrom, setFilterPriceFrom] = useState("");
  const [filterPriceTo, setFilterPriceTo] = useState("");

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Filter courses based on search and price
  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      !searchTerm ||
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.details.toLowerCase().includes(searchTerm.toLowerCase());

    const coursePrice = parseFloat(course.price);
    const minPrice = filterPriceFrom ? parseFloat(filterPriceFrom) : 0;
    const maxPrice = filterPriceTo ? parseFloat(filterPriceTo) : Infinity;

    const matchesPrice = coursePrice >= minPrice && coursePrice <= maxPrice;

    return matchesSearch && matchesPrice;
  });

  // Handle pagination
  const handlePageChange = (pageNumber) => {
    const params = new URLSearchParams(currentSearchParams);
    params.set("page", pageNumber.toString());
    router.push(`/courses?${params.toString()}`);
    window.scrollTo(0, 0);
  };

  // Get category display name
  const getCategoryDisplayName = () => {
    if (!category) return "All";
    return (
      category.charAt(0).toUpperCase() + category.slice(1).replace(/[/_]/g, " ")
    );
  };

  return (
    <>
      <section className={styles.hero}>
        <Tag className={styles.bannerTag}>
          <img src="/svg/forexstar.svg" alt="★" width={20} height={20} />
          Find new & advance your career opportunities
        </Tag>
        <h1 className={styles.heading}>
          {category
            ? `${getCategoryDisplayName()} Courses`
            : "Browse Online Trading Courses"}
        </h1>
        <p className={styles.subheading}>
          {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.`}
        </p>
      </section>

      <section className={styles.courses}>
        <span className={styles["white-ellipse-forex"]}></span>
        <span className={styles["blue-ellipse-forex"]}></span>

        <div className={styles.searchFilterContainer}>
          <div className={styles.searchBox}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search courses by title or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className={styles.priceFilterContainer}>
            <span className={styles.priceFilterLabel}>Price Filter</span>
            <div className={styles.priceFilterInputs}>
              <input
                type="number"
                className={styles.priceInput}
                placeholder="Min"
                value={filterPriceFrom}
                onChange={(e) => setFilterPriceFrom(e.target.value)}
              />
              <span className={styles.priceInputSeparator}>-</span>
              <input
                type="number"
                className={styles.priceInput}
                placeholder="Max"
                value={filterPriceTo}
                onChange={(e) => setFilterPriceTo(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className={styles.cardGrid}>
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard
                key={course._id}
                data={course}
                className={styles.forexCard}
                imageWrapperClass={styles.forexImageWrapper}
                titleClass={styles.forexCardTitle}
                contentClass={styles.forexCardContent}
                buttonsRowClass={styles.forexCardButtonsRow}
                viewMoreBtnClass={styles.forexViewMoreBtn}
                quickBuyBtnClass={styles.forexQuickBuyBtn}
                onViewMore={() => router.push(`/courses/${course._id}`)}
              />
            ))
          ) : (
            <div className={styles.noCourses}>
              <h3>No courses found</h3>
              <p>Try adjusting your search criteria.</p>
            </div>
          )}
        </div>

        {isClient && totalPages > 1 && (
          <div className={styles.paginationContainer}>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`${styles.pageButton} ${
                  page === currentPage ? styles.activePageButton : ""
                }`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </section>

      <Work className="forexWorkWrapper" />
    </>
  );
}
