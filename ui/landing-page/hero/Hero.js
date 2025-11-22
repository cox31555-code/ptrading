"use client";
import React from "react";
import classes from "./hero.module.css";
import Image from "next/image";
import Button from "@/ui/common/button/Button";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <div className={classes.heroBg}>
      <div className={classes.container}>
        <div className={classes.content}>
          <p className={classes.subheading}>
            Welcome To Polar Trading Services
          </p>
          <h1 className={classes.heading}>
            Transform Your Life Through Expert{" "}
            <span className={classes.highlight}>Forex Trading</span> Education
          </h1>
          <Button
            onClick={() => {
              router.push("/forex");
            }}
          >
            Join Membership
          </Button>
        </div>

        <div
          onClick={() => {
            router.push("/forex");
            console.log("clicked");
          }}
          className={classes.imageContainer}
        >
          <picture>
            <source media="(max-width: 850px)" srcSet="/heromobile.png" />
            <img
              src="/svg/laptop.svg"
              alt="Hero Image"
              className={classes.image}
            />
          </picture>

          <button className={classes.viewCoursesBtn}>
            <img
              src="/svg/viewcourses.svg"
              alt="View Courses"
              className={classes.viewCoursesImg}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
