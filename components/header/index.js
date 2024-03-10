import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import { SiGradleplaypublisher } from "react-icons/si";

function Header() {
  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles.headerWrapper}>
        <Link className={styles.logo} href="/">
          <SiGradleplaypublisher /> EBRU
        </Link>
        <nav className={styles.navigationMenu}>
          <Link href="#">Popular TV Series</Link>
          <Link href="#">Popular Movies</Link>
        </nav>
      </div>
    </header>
  );
}

export { Header };
