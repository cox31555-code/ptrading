import React, { useEffect, useState } from "react";
import classes from "./topMenu.module.css";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdOutlineStarPurple500 } from "react-icons/md";

const TopMenu = () => {
  const [socialLinks, setSocialLinks] = useState({
    facebook: "",
    twitter: "",
    instagram: "",
    telegram: "",
  });

  useEffect(() => {
    // Using default social links - update these with your actual social media URLs
    const defaultSocialLinks = {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      telegram: "https://telegram.org",
    };

    setSocialLinks(defaultSocialLinks);

    // Optional: Uncomment below to fetch from API if endpoint becomes available
    // const fetchSocialLinks = async () => {
    //   try {
    //     const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/social`;
    //     const response = await fetch(apiUrl, {
    //       method: "GET",
    //       credentials: "include",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     });

    //     if (!response.ok) {
    //       throw new Error(`HTTP Error: ${response.status}`);
    //     }

    //     const data = await response.json();
    //     if (data?.data?.data?.[0]) {
    //       setSocialLinks(data.data.data[0]);
    //     }
    //   } catch (error) {
    //     console.warn("Could not fetch social links from API, using defaults");
    //   }
    // };

    // fetchSocialLinks();
  }, []);

  const handleSocialClick = (url) => {
    console.log("url", url);

    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className={classes["container"]}>
      <div className={classes["social"]}>
        <div
          className={classes["social-elem"]}
          onClick={() => handleSocialClick(socialLinks.facebook)}
          style={{ cursor: "pointer" }}
        >
          <FaFacebookF className={classes["social-icon"]} />
        </div>
        <div
          className={classes["social-elem"]}
          onClick={() => handleSocialClick(socialLinks.twitter)}
          style={{ cursor: "pointer" }}
        >
          <FaXTwitter className={classes["social-icon"]} />
        </div>
        <div
          className={classes["social-elem"]}
          onClick={() => handleSocialClick(socialLinks.instagram)}
          style={{ cursor: "pointer" }}
        >
          <FaInstagram className={classes["social-icon"]} />
        </div>
        <div
          className={classes["social-elem"]}
          onClick={() => handleSocialClick(socialLinks.telegram)}
          style={{ cursor: "pointer" }}
        >
          <FaTelegram className={classes["social-icon"]} />
        </div>
      </div>
      <div className={classes["info"]}>
        <div className={classes["trustpilot"]}>
          <MdOutlineStarPurple500 className={classes["star"]} />
          <p className={classes["para"]}>Trustpilot</p>
          <div className={classes["five-stars"]}>
            <Image
              src="/svg/fivestar.svg"
              alt="five stars"
              width={84.1}
              height={15.75}
            />
          </div>
        </div>
        <div className={classes["phone"]}>
          <div className={classes["phone-wrapper"]}>
            <FiPhone className={classes["phone-icon"]} />
          </div>
          <p className={classes["num"]}>+44 (0) 7729213427</p>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
