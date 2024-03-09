import React from "react";
import Link from "next/link";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>Made with ❤️ and 💻 </div>
      <Link href="https://github.com/ebrubastug">
        <FaSquareGithub size={40} />
      </Link>
      <Link href="https://www.linkedin.com/in/ebrubastug/">
        <FaLinkedin size={40} />
      </Link>
    </footer>
  );
}

export { Footer };
