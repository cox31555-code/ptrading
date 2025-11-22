"use client";
import styles from "./courseCard.module.css";
import Button from "../../common/button/Button";
import { useRouter } from "next/navigation";

export default function CourseCard({
  data,
  onViewMore,
  // onQuickBuy,
  className,
  imageWrapperClass,
  titleClass,
  buttonsRowClass,
  viewMoreBtnClass,
  quickBuyBtnClass,
}) {
  const router = useRouter();

  const getAverageRating = () => {
    if (!data?.reviews || data.reviews.length === 0) return 0;
    const totalRating = data.reviews.reduce(
      (sum, review) => sum + (review.rating || 0),
      0
    );
    return Math.round(totalRating / data.reviews.length);
  };

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
          className={styles.star}
        />
      );
    }
    return stars;
  };

  const averageRating = getAverageRating();

  return (
    <div className={className || styles.card}>
      <div className={imageWrapperClass || styles.imageWrapper}>
        <img
          src={data?.image || "/forexcourse.png"}
          alt={data?.title || "Course"}
          className={styles.image}
        />
      </div>
      <div className={styles.ratingContainer}>
        {renderStars(averageRating)}
        <span className={styles.reviewCount}>({data?.reviews?.length || 0})</span>
      </div>
      <div className={titleClass || styles.title}>{data?.title}</div>
      {data?.price && (
        <div className={styles.priceSection}>£{data.price}</div>
      )}
      <div className={buttonsRowClass || styles.buttonsRow}>
        <Button
          className={viewMoreBtnClass || styles.viewMoreBtn}
          onClick={onViewMore}
        >
          View More
        </Button>
        <button
          className={quickBuyBtnClass || styles.quickBuyBtn}
          onClick={() => router.push(`/checkout?id=${data._id}`)}
        >
          Quick Buy
        </button>
      </div>
    </div>
  );
}
