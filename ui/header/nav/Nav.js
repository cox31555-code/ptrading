"use client";
import React, { useState } from "react";
import classes from "./nav.module.css";
import Link from "next/link";
import Image from "next/image";
import Button from "@/ui/common/button/Button";
import { FiPhone } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function Navbar({ variant = "default" }) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const containerClass = `${classes.container} ${classes[variant] || ""}`;

  return (
    <>
      {variant === "contact" && <div className={classes.contactBackground} />}

      {variant === "checkout" && <div className={classes.checkoutBackground} />}

      <div
        className={`
  ${variant === "forex" ? classes.forexNavWrapper : ""}
  ${variant === "contact" ? classes.contactNavWrapper : ""}
  ${variant === "checkout" ? classes.checkoutNavWrapper : ""}
  ${variant === "login" ? classes.loginNavWrapper : ""}
  ${variant === "forgetpass" ? classes.forgetpassNavWrapper : ""}
  ${variant === "signup" ? classes.signupNavWrapper : ""}
`}
      >
        <div className={containerClass}>
          <Image
            className={classes.logo}
            width={140}
            height={60}
            src="/svg/logo.svg"
            alt="logo"
            onClick={() => router.push("/")}
          />
          <nav className={classes.nav}>
              <Link href="/courses?category=forex" className={classes.option}>
              FOREX
            </Link>
            <Link href="/stocks" className={classes.option}>
              STOCKS/INDICES
            </Link>
            <Link href="/courses?category=crypto" className={classes.option}>
              CRYPTO
            </Link>
            <Link href="/bots" className={classes.option}>
              TRADING BOTS
            </Link>
            <Link href="/courses?category=software" className={classes.option}>
              SOFTWARE
            </Link>
            <Link href="/contact-us" className={classes.option}>
              CONTACT US
            </Link>
          </nav>
          <Link href="/login" passHref legacyBehavior>
            <a>
              <Button className={classes.desktopBtn}>Login/Members</Button>
            </a>
          </Link>
          <div className={classes.responsiveRight}>
            <span className={classes.phone}>
              <FiPhone className={classes.phoneIcon} />
              <span className={classes.phoneNum}>+44 (0) 7729213427</span>
            </span>
            <button
              className={classes.menuBtn}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <img src="/svg/menu.svg" alt="Open menu" width={24} height={24} />
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <>
          <div
            className={classes.mobileOverlay}
            onClick={() => setMenuOpen(false)}
          />
          <div className={classes.mobileMenu}>
            <button
              className={classes.mobileCloseBtn}
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <img
                src="/svg/close.svg"
                alt="Close menu"
                width={24}
                height={24}
              />
            </button>
            <nav className={classes.mobileNav}>
              <Link
                href="/courses?category=forex"
                className={classes.option}
                onClick={() => setMenuOpen(false)}
              >
                FOREX
              </Link>
              <Link
                href="/stocks"
                className={classes.option}
                onClick={() => setMenuOpen(false)}
              >
                STOCKS/INDICES
              </Link>
              <Link
                href="/courses?category=crypto"
                className={classes.option}
                onClick={() => setMenuOpen(false)}
              >
                CRYPTO
              </Link>
              <Link
                href="/bots"
                className={classes.option}
                onClick={() => setMenuOpen(false)}
              >
                TRADING BOTS
              </Link>
              <Link
                href="/courses?category=software"
                className={classes.option}
                onClick={() => setMenuOpen(false)}
              >
                SOFTWARE
              </Link>
              <Link
                href="/contact-us"
                className={classes.option}
                onClick={() => setMenuOpen(false)}
              >
                CONTACT US
              </Link>
            </nav>
            <Link href="/login" passHref legacyBehavior>
              <a>
                <Button className={classes.mobileLoginBtn}>
                  Login/Members
                </Button>
              </a>
            </Link>
          </div>
        </>
      )}
    </>
  );
}
