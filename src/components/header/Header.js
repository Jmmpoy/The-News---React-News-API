import React from "react";
import Hamburger from "hamburger-react";
import "./Header.scss";
import { motion } from "framer-motion";

export default function Header() {
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: -150,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const items = [{ title: "the News", className: "Menu-Title" }];

  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={variants}
      className="Menu">
      <motion.div className="Menu-Title" variants={item}>
        The News
      </motion.div>

      <motion.div className="Menu-Sign" variants={item}>
        Sign In
      </motion.div>
      <motion.div className="Menu-Subscribe" variants={item}>
        <p>Subscribe</p>
      </motion.div>
    </motion.section>
  );
}
