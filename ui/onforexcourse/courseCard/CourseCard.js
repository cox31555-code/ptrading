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
  return (
    <div className={className || styles.card}>
      <div className={imageWrapperClass || styles.imageWrapper}>
        <img
          src={data?.image || "/forexcourse.png"}
          alt={data?.title || "Course"}
          className={styles.image}
        />
      </div>
      <div className={styles.tagsRow}>
        <span className={styles.tag}>{data?.level}</span>
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
