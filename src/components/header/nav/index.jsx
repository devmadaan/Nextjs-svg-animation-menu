import styles from "./styles.module.scss";
import Link from "./Link/index";
import { menuSlides } from "../anim";
import { motion } from "framer-motion";
import Curve from "./Curve";

export default function index() {
  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Work",
      href: "/work",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];
  return (
    <motion.div
      variants={menuSlides}
      animate="enter"
      exit="exit"
      initial="initial"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return <Link key={index} data={{ ...data, index }}></Link>;
          })}
        </div>
        <div className={styles.footer}>
          <div className={styles.footerHeader}>
            <p>Socials</p>
          </div>
          <div className={styles.footerBody}>
            <a>Awwwards</a>
            <a>Instagram</a>
            <a>Dribble</a>
            <a>LinkedIn</a>
          </div>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}
