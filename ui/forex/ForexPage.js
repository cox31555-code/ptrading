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

  // Initialize state with props
  const [rangeMax, setRangeMax] = useState(priceTo || priceRange.max);
  const [sliderValue, setSliderValue] = useState(priceFrom || priceRange.min);
  const [maxPrice, setMaxPrice] = useState(priceTo || priceRange.max);

  // Update state when props change
  useEffect(() => {
    setSliderValue(priceFrom || priceRange.min);
    setMaxPrice(priceTo || priceRange.max);
    setRangeMax(priceTo || priceRange.max);
  }, [priceFrom, priceTo, priceRange]);

  const handleChevronClick = () => {
    const newMax = rangeMax + 100;
    setRangeMax(newMax);
    setMaxPrice(newMax);
  };

  const handleSliderChange = (value) => {
    setSliderValue(value);
    console.log(value);
    updatePriceParams(value, maxPrice);
  };

  const handleMaxPriceChange = (value) => {
    setMaxPrice(value);
    updatePriceParams(sliderValue, value);
  };

  // Update URL params with price range
  const updatePriceParams = (newPriceFrom, newPriceTo) => {
    const params = new URLSearchParams(currentSearchParams);

    // Set price range params
    if (newPriceFrom > priceRange.min) {
      params.set("priceFrom", newPriceFrom.toString());
    } else {
      params.delete("priceFrom");
    }

    if (newPriceTo < priceRange.max) {
      params.set("priceTo", newPriceTo.toString());
    } else {
      params.delete("priceTo");
    }

    // Reset to first page when filtering
    params.delete("page");

    router.push(`/courses?${params.toString()}`);
  };

  // Handle view all - clear all params
  const handleViewAll = () => {
    router.push("/courses");
  };

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

  const percent =
    ((sliderValue - priceRange.min) / (rangeMax - priceRange.min)) * 100;

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

        <div className={styles.filterContainer}>
          <div className={styles.tabs}>
            <button className={styles.bots}>{getCategoryDisplayName()}</button>
            <button className={styles.viewAllBtn} onClick={handleViewAll}>
              View All
            </button>
          </div>

          <div className={styles.priceRow}>
            <span className={styles.priceLabel}>Price</span>
            <button className={styles.chevron} onClick={handleChevronClick}>
              ^
            </button>
          </div>

          <div className={styles.priceLabelsRow}>
            <span className={styles.priceNumber}>£{sliderValue}</span>
            <span className={styles.priceNumber}>£{maxPrice}</span>
          </div>

          <input
            type="range"
            min={priceRange.min}
            max={rangeMax}
            value={sliderValue}
            // step={100}
            onChange={(e) => handleSliderChange(Number(e.target.value))}
            className={styles.slider}
            style={{
              "--slider-bg": `linear-gradient(to right, #00D4FE 0%, #00D4FE ${percent}%, #fff ${percent}%, #fff 100%)`,
            }}
          />
        </div>
        <div className={styles.cardGrid}>
          {courses.length > 0 ? (
            courses.map((course) => (
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
              <p>Try adjusting your filters or search criteria.</p>
              <button onClick={handleViewAll} className={styles.viewAllBtn}>
                View All Courses
              </button>
            </div>
          )}
        </div>

        {totalPages > 1 && (
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
