"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import CourseCard from "../onforexcourse/courseCard/CourseCard";
import Tag from "../common/tag/Tag";
import styles from "./page.module.css";
import Work from "../landing-page/worktogather/Work";

export default function TandCPage({
  courses = [],
  priceFrom,
  priceTo,
  priceRange = { min: 0, max: 1000 },
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

    router.push(`/tandc?${params.toString()}`);
  };

  // Handle view all - clear all params
  const handleViewAll = () => {
    router.push("/tandc");
  };

  const percent =
    ((sliderValue - priceRange.min) / (rangeMax - priceRange.min)) * 100;

  return (
    <>
      <Work className="forexWorkWrapper" />
    </>
  );
}
