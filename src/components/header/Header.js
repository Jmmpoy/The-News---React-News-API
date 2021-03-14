import React from "react";
import Date from "./DateTime";
import Hour from "./Hour";
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

  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={variants}
      className="News-Header">
      <motion.div className="News-Header-Hour" variants={item}>
        <Date />
      </motion.div>
      <motion.div className="News-Header-Date" variants={item}>
        <Hour />
      </motion.div>
      <motion.div className="News-Header-Title" variants={item}>
        The News
      </motion.div>
      <motion.div className="News-Header-Sign" variants={item}>
        Sign In
      </motion.div>
      <motion.div className="News-Header-Subscribe" variants={item}>
        <p>Subscribe</p>
      </motion.div>
    </motion.section>
  );
}
