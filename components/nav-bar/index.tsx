import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Lottie from "lottie-react"
import menuAnimation from "@/public/svg/menu.json";
import styles from "./navBar.module.scss";

let mobile = null as any;
const NavBar = () => {
  const hamburgerRef = useRef(null) as any;
  const menuRef = useRef(null) as any;
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    mobile = window?.matchMedia("(max-width: 1080px)");
    resizeProjectList(mobile);

    mobile.addEventListener("change", resizeProjectList);

    return () => {
      mobile.removeEventListener("change", resizeProjectList);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(`.${styles.Mlink}`);
    const frame = window;

    let currentSection = "home";
    if (!frame) return;
    sections.forEach((section, i) => {
      console.log(frame.scrollY)
      if (frame.scrollY >= section.offsetTop) {
        currentSection = section.id;
      }
    });
    navLinks.forEach((link, i) => {
      if (link.getAttribute("href")?.includes(currentSection)) {
        const oldClassName = link?.classList.item(1);
        if (oldClassName) link?.classList.remove(oldClassName);
        link.classList.add(`${styles[`active`]}`);
      }
    });

    window?.addEventListener("scroll", () => {
      sections.forEach((section, i) => {
        console.log(frame.scrollY)
        if (frame.scrollY >= section.offsetTop) {
          currentSection = section.id;
        }
      });

      navLinks.forEach((link, i) => {
        if (link.getAttribute("href")?.includes(currentSection)) {
          const oldClassName = link?.classList.item(1);
          if (oldClassName) link?.classList.remove(oldClassName);
          link.classList.add(`${styles[`active`]}`);
        } else {
          link.classList.remove(`${styles[`active`]}`);
        }
      });
    });
  }, []);

  const resizeProjectList = (e: any) => {
    if (mobile.matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const scrollToPage = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
         behavior: "smooth"
    })
  };

   const toggleMenu = (isTrue: boolean) => {
    setShowMenu(isTrue);
    if (isTrue) {
      hamburgerRef.current.playSegments([0, 15], true, "menuAnim");
    } else {
      hamburgerRef.current.playSegments([16, 0], true, "menuAnim");
    }
  };

  const MobileNavBar = () => {
    return (
      <div className={styles["mobile-nav-loader"]} ref={menuRef}>
        <nav className={styles["mobile-nav-section"]}>
          <div className={styles.right} style={{ color: "white" }}>
            <Link
              href={"#home"}
              className={styles.Mlink}
              onClick={scrollToPage}
            >
              Home
            </Link>
            <Link
              href={"#media"}
              className={styles.Mlink}
              onClick={scrollToPage}
            >
              Media
            </Link>
            <Link
              href={"#character"}
              className={styles.Mlink}
              onClick={scrollToPage}
            >
              Character
            </Link>
            <Link
              href={"#about"}
              className={styles.Mlink}
              onClick={scrollToPage}
            >
              About
            </Link>
          </div>
        </nav>
      </div>
    );
  };

  const DesktopNavBar = () => {
    return (
      <nav className={styles.navSection}>
        <div className={styles.container}>
          <div className={styles.left}>
            <Link
              href={"#home"}
              className={styles.Mlink}
              onClick={scrollToPage}
            >
              Home
            </Link>
            <Link
              href={"#media"}
              className={styles.Mlink}
              onClick={scrollToPage}
            >
              Media
            </Link>
          </div>
          <div className={styles.center}>
            <img
              className={styles.logo}
              src="/images/logoWithourBorder.svg"
              alt="Picture of the gta logo"
            />
          </div>
          <div className={styles.right}>
            <Link
              href={"#character"}
              className={styles.Mlink}
              onClick={scrollToPage}
            >
              Character
            </Link>
            <Link
              href={"#about"}
              className={styles.Mlink}
              onClick={scrollToPage}
            >
              About
            </Link>
          </div>
        </div>
      </nav>
    );
  };

  return (
    <>
      {isMobile && (
        <Lottie
          lottieRef={hamburgerRef}
          animationData={menuAnimation}
          className={styles.breadcrumb}
          loop={false}
          autoplay={false}
          onClick={() => toggleMenu(!showMenu)}
        />
      )}
      {isMobile && showMenu && <MobileNavBar />}
      {!isMobile && <DesktopNavBar />}
    </>
  );
};

export default NavBar;
