"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import CourseCard from "../onforexcourse/courseCard/CourseCard";
import Tag from "../common/tag/Tag";
import styles from "./page.module.css";
import Work from "../landing-page/worktogather/Work";

export default function ForexPage({
  courses = [],
  allCourses = [],
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

  // Get average rating for a course
  const getAverageRating = (course) => {
    if (!course?.reviews || course.reviews.length === 0) return 0;
    const totalRating = course.reviews.reduce(
      (sum, review) => sum + (review.rating || 0),
      0
    );
    return Math.round(totalRating / course.reviews.length);
  };

  // Get top 3 highest rated courses from ALL courses (not just current page)
  const getTopRatedCourses = () => {
    const coursesToRank = allCourses.length > 0 ? allCourses : courses;
    return coursesToRank
      .sort((a, b) => {
        const ratingA = getAverageRating(a);
        const ratingB = getAverageRating(b);
        return ratingB - ratingA;
      })
      .slice(0, 3);
  };

  // Format price to GBP currency
  const formatGBP = (value) => {
    if (!value) return "";
    const num = parseFloat(value);
    if (isNaN(num)) return "";
    return `£${num.toFixed(2)}`;
  };

  // Handle price input with validation
  const handlePriceInput = (value, setter) => {
    if (value === "") {
      setter("");
      return;
    }
    const num = parseFloat(value);
    if (!isNaN(num) && num >= 0) {
      setter(value);
    }
  };

  const topRatedCourses = getTopRatedCourses();

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

  // Get category description
  const getCategoryDescription = () => {
    if (!category) {
      return "Discover comprehensive trading education from beginner to expert level. Master forex, stocks, crypto, and automated trading strategies.";
    }
    const descriptions = {
      forex: "Master global currency markets with expert-led courses covering trading strategies, technical analysis, and risk management. Start your forex trading journey today.",
      stocks: "Learn stock trading and index investing from market fundamentals to advanced strategies. Build confidence trading individual stocks and major indices.",
      crypto: "Explore cryptocurrency trading and blockchain technology. From Bitcoin basics to advanced DeFi strategies, master the digital asset revolution.",
      bots: "Automate your trading with algorithmic strategies. Build, deploy, and optimize custom trading bots for consistent market performance.",
      software: "Leverage cutting-edge trading platforms and tools. Professional software for advanced analysis, execution, and comprehensive portfolio management.",
    };
    const categoryKey = category.toLowerCase().replace(/[/_]/g, "");
    return descriptions[categoryKey] || descriptions.forex;
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
          {getCategoryDescription()}
        </p>
      </section>

      <section className={styles.courses}>
        <span className={styles["white-ellipse-forex"]}></span>
        <span className={styles["blue-ellipse-forex"]}></span>

        {topRatedCourses.length > 0 && (
          <div className={styles.recommendedSection}>
            <h2 className={styles.recommendedTitle}>Recommended For You</h2>
            <p className={styles.recommendedSubtitle}>Top rated courses by our community</p>
            <div className={styles.recommendedGrid}>
              {topRatedCourses.map((course) => (
                <CourseCard
                  key={course._id}
                  data={course}
                  className={styles.recommendedCard}
                  imageWrapperClass={styles.recommendedImageWrapper}
                  titleClass={styles.recommendedCardTitle}
                  contentClass={styles.recommendedCardContent}
                  buttonsRowClass={styles.recommendedButtonsRow}
                  viewMoreBtnClass={styles.recommendedViewMoreBtn}
                  quickBuyBtnClass={styles.recommendedQuickBuyBtn}
                  onViewMore={() => router.push(`/courses/${course._id}`)}
                />
              ))}
            </div>
          </div>
        )}

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
                placeholder="Min (£)"
                min="0"
                step="0.01"
                value={filterPriceFrom}
                onChange={(e) => handlePriceInput(e.target.value, setFilterPriceFrom)}
                title="Enter minimum price in GBP"
              />
              <span className={styles.priceInputSeparator}>-</span>
              <input
                type="number"
                className={styles.priceInput}
                placeholder="Max (£)"
                min="0"
                step="0.01"
                value={filterPriceTo}
                onChange={(e) => handlePriceInput(e.target.value, setFilterPriceTo)}
                title="Enter maximum price in GBP"
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
              <p>
                {searchTerm || filterPriceFrom || filterPriceTo
                  ? "Try adjusting your search or price filter criteria."
                  : "No courses available."}
              </p>
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
