"use client";
import { useEffect, useState } from "react";
import styles from "./detail.module.css";
import Button from "../common/button/Button";
import OnForexCourseSection from "../onforexcourse/OnForexCourseSection";

export default function ForexCourseDetail({ courseData }) {
  const course = courseData;
  console.log(course);
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewComment, setReviewComment] = useState("");
  const [isUserPaid, setIsUserPaid] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 850);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate discount percentage and discounted price
  const getDiscountedPrice = () => {
    if (!course)
      return { originalPrice: 0, discountedPrice: 0, discountPercentage: 0 };

    const originalPrice = parseFloat(course.price) || 0;
    const discountPercentage = parseInt(course.discount) || 0;
    const discountedPrice =
      originalPrice - (originalPrice * discountPercentage) / 100;

    return {
      originalPrice,
      discountedPrice,
      discountPercentage,
    };
  };

  // Get average rating from reviews
  const getAverageRating = () => {
    if (!course?.reviews || course.reviews.length === 0) return 0;
    const totalRating = course.reviews.reduce(
      (sum, review) => sum + (review.rating || 0),
      0
    );
    return Math.round(totalRating / course.reviews.length);
  };

  // Render star rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <img
          key={i}
          src={
            i <= rating
              ? "/svg/bluestar-single.svg"
              : "/svg/whitestar-single.svg"
          }
          alt={i <= rating ? "Blue Star" : "White Star"}
          className={styles.detailStarImg}
        />
      );
    }
    return stars;
  };

  // Generate random name based on index
  const getRandomName = (index) => {
    const firstNames = [
      "James",
      "Sarah",
      "Michael",
      "Emma",
      "David",
      "Olivia",
      "Robert",
      "Sophia",
      "John",
      "Ava",
      "William",
      "Isabella",
      "Richard",
      "Mia",
      "Joseph",
      "Charlotte",
      "Thomas",
      "Amelia",
      "Christopher",
      "Harper",
    ];

    const lastNames = [
      "Smith",
      "Johnson",
      "Williams",
      "Brown",
      "Jones",
      "Garcia",
      "Miller",
      "Davis",
      "Rodriguez",
      "Martinez",
      "Hernandez",
      "Lopez",
      "Gonzalez",
      "Wilson",
      "Anderson",
      "Thomas",
      "Taylor",
      "Moore",
      "Jackson",
      "Martin",
    ];

    return (
      firstNames[index % firstNames.length] +
      " " +
      lastNames[index % lastNames.length]
    );
  };

  // Handle review submission
  const handleSubmitReview = async (e) => {
    e.preventDefault();
    if (!isUserPaid) return;

    // TODO: Submit review to API
    console.log("Review submitted:", {
      rating: reviewRating,
      comment: reviewComment,
      courseId: course._id,
    });

    setReviewRating(0);
    setReviewComment("");
  };

  if (!course)
    return (
      <div style={{ color: "#fff", textAlign: "center" }}>
        Course not found.
      </div>
    );

  const { originalPrice, discountedPrice, discountPercentage } =
    getDiscountedPrice();
  const averageRating = getAverageRating();

  return (
    <>
      <div className={styles.detailPage}>
        <div className={styles.bgImage}></div>
        <div className={styles.effectWrapper}>
          <div className={styles.blueEllipseEffect}></div>
          <img
            src="/svg/salt.svg"
            alt="salt effect"
            className={styles.saltEffect}
          />
        </div>
        <div className={styles.detailContent}>
          {isMobile ? (
            <>
              <div className={styles.detailInfo}>
                <h1 className={styles.detailTitle}>{course.title}</h1>
                <div className={styles.detailStarsRow}>
                  {renderStars(averageRating)}
                  <span className={styles.detailReviewText}>
                    {course.reviews?.length || 0} Reviews
                  </span>
                </div>
                <div className={styles.detailPrice}>
                  £{discountedPrice.toFixed(2)}
                  {discountPercentage > 0 && (
                    <>
                      <span className={styles.detailOldPrice}>
                        £{originalPrice.toFixed(2)}
                      </span>
                      <span className={styles.detailDiscount}>
                        {discountPercentage}% OFF
                      </span>
                    </>
                  )}
                </div>
              </div>
              <div>
                <img
                  src="/forexcourse.png"
                  alt={course.title}
                  className={styles.detailImage}
                />
              </div>
              <div>
                <div className={styles.detailSectionTitle}>Course Detail</div>
                <div className={styles.detailSectionLine}></div>
                <div className={styles.detailDesc}>{course.details}</div>
              </div>
              <div>
                <Button className={styles.detailBuyBtn}>Buy Now</Button>
              </div>
            </>
          ) : (
            <div className={styles.detailHeader}>
              <div className={styles.blueEllipseEffectRight}></div>
              <img
                src="/forexcourse.png"
                alt={course.title}
                className={styles.detailImage}
              />
              <div className={styles.detailInfo}>
                <h1 className={styles.detailTitle}>{course.title}</h1>
                <div className={styles.detailStarsRow}>
                  {renderStars(averageRating)}
                  <span className={styles.detailReviewText}>
                    {course.reviews?.length || 0} Reviews
                  </span>
                </div>
                <div className={styles.detailPrice}>
                  £{discountedPrice.toFixed(2)}
                  {discountPercentage > 0 && (
                    <>
                      <span className={styles.detailOldPrice}>
                        £{originalPrice.toFixed(2)}
                      </span>
                      <span className={styles.detailDiscount}>
                        {discountPercentage}% OFF
                      </span>
                    </>
                  )}
                </div>
                <div className={styles.detailSectionTitle}>Course Detail</div>
                <div className={styles.detailSectionLine}></div>
                <div className={styles.detailDesc}>{course.details}</div>
                <Button className={styles.detailBuyBtn}>Buy Now</Button>
              </div>
            </div>
          )}
        </div>
        <div className={styles.detailBody}>
          <h2 className={styles.detailAboutTitle}>About Course</h2>
          <div className={styles.detailTabs}>
            <button
              className={
                activeTab === "description"
                  ? styles.detailTabActive
                  : styles.detailTab
              }
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={
                activeTab === "reviews"
                  ? styles.detailTabActive
                  : styles.detailTab
              }
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </button>
          </div>

          {activeTab === "description" ? (
            <div className={styles.detailBodyText}>{course.description}</div>
          ) : (
            <div className={styles.reviewsSection}>
              <div className={styles.reviewsList}>
                {course.reviews && course.reviews.length > 0 ? (
                  course.reviews.map((review, index) => (
                    <div key={index} className={styles.reviewCard}>
                      <div className={styles.reviewHeader}>
                        <div className={styles.reviewRating}>
                          {renderStars(review.rating)}
                        </div>
                        <span className={styles.reviewUser}>
                          {review.userName || "Anonymous"}
                        </span>
                      </div>
                      <p className={styles.reviewComment}>{review.comment}</p>
                    </div>
                  ))
                ) : (
                  <p className={styles.noReviews}>
                    No reviews yet. Be the first to review!
                  </p>
                )}
              </div>

              <div className={styles.reviewFormSection}>
                <h3 className={styles.reviewFormTitle}>Leave a Review</h3>
                {isUserPaid ? (
                  <form
                    onSubmit={handleSubmitReview}
                    className={styles.reviewForm}
                  >
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Rating</label>
                      <div className={styles.ratingSelector}>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            className={styles.starButton}
                            onClick={() => setReviewRating(star)}
                          >
                            <img
                              src={
                                star <= reviewRating
                                  ? "/svg/bluestar-single.svg"
                                  : "/svg/whitestar-single.svg"
                              }
                              alt="star"
                              className={styles.starIcon}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Comment</label>
                      <textarea
                        className={styles.commentField}
                        placeholder="Share your thoughts about this course..."
                        value={reviewComment}
                        onChange={(e) => setReviewComment(e.target.value)}
                        rows="5"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className={styles.submitButton}
                      disabled={!reviewRating || !reviewComment}
                    >
                      Submit Review
                    </button>
                  </form>
                ) : (
                  <div className={styles.unpaidMessage}>
                    <p>Buy this course to leave a review</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div className={styles.relatedCoursesMargin}>
          <OnForexCourseSection
            heading="Related Courses"
            showBlueEllipse={false}
          />
        </div>
      </div>
    </>
  );
}
