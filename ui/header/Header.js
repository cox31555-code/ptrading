"use client";
import { Suspense } from "react";
import { usePathname } from "next/navigation";
import TopMenu from "./topMenu/TopMenu";
import Navbar from "./nav/Nav";
import classes from "./header.module.css";

export default function Header() {
  const pathname = usePathname();

  let variant = "default";
  if (pathname.startsWith("/forex")) variant = "forex";
  else if (pathname.startsWith("/stocks")) variant = "forex";
  else if (pathname.startsWith("/crypto")) variant = "crypto";
  else if (pathname.startsWith("/contact-us")) variant = "contact";
  else if (pathname.startsWith("/checkout")) variant = "checkout";
  else if (pathname.startsWith("/login")) variant = "login";
  else if (pathname.startsWith("/forgetpass")) variant = "forgetpass";
  else if (pathname.startsWith("/signup")) variant = "signup";
  // else if (pathname.startsWith("/courses")) variant = "courses";

  return (
    <header className={classes.header}>
      <TopMenu />

      <Suspense fallback={<div>Loading...</div>}>
        <Navbar variant={variant} />
      </Suspense>
    </header>
  );
}
