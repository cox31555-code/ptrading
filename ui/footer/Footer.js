import React from "react";
import classes from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { FiPhone, FiMail } from "react-icons/fi";
const Footer = () => {
  return (
    <footer className={classes["container"]}>
      <div className={classes["top"]}>
        <div className={classes["first"]}>
          <Image
            width={100}
            height={80}
            src="/svg/logo.svg"
            alt="logo"
            className={classes.logo}
          />
          <div className={classes["options"]}>
            <div className={classes.contactRow}>
              <Image
                src="/svg/location.svg"
                width={20}
                height={20}
                alt="location"
                className={classes.icon}
              />
              <span className={classes["option"]}>
                189 Wulfstan Street London, W120AB, United kingdom
              </span>
            </div>
            <div className={classes.contactRow}>
              <FiMail className={classes.icon} size={20} />
              <span className={classes["option"]}>
                Polartradingservices@proton.me
              </span>
            </div>
            <div className={classes.contactRow}>
              <FiPhone className={classes.icon} size={20} />
              <span className={classes["option"]}>+447729213427</span>
            </div>
          </div>
        </div>
        <div className={classes["second"]}>
          <h4 className={classes["title"]}>Our Courses</h4>
          <div className={classes["optionsSecond"]}>
            {[
              { label: "Forex Trading Course (For Beginners)", href: "/courses?category=forex" },
              { label: "Forex Trading Advance Course (Level 1 + Level 2)", href: "/courses?category=forex" },
              { label: "Forex Trading Advance Course (Level - 1)", href: "/courses?category=forex" },
              { label: "Forex Trading Advance Course (Level - 2)", href: "/courses?category=forex" },
              { label: "Forex Trading Complete Package", href: "/courses?category=forex" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={classes.footerOptionSecondary}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className={classes["third"]}>
          <h4 className={classes["title"]}>Quick Links</h4>
          <div className={classes["optionsThird"]}>
            {[
              { label: "Home", href: "/" },
              { label: "About Polar Trading Services", href: "/" },
              { label: "Contact Us", href: "/contact-us" },
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms & Conditions", href: "/tandc" },
              { label: "Refund Policy", href: "/refund-policy" },
            ].map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={classes.footerOptionSecondary}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={classes["bottom"]}>
        <p className={classes["copywrite"]}>
          © 2024 Polar Trading Services. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
