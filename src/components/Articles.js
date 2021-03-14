import React from "react";
import Right from "./layout/Right";
import Left from "./layout/Left";
import "../style/Articles.scss";

export default function Articles() {
 
  return (
    <div className="News-Articles">
      <Left />
      <Right/>
    </div>
  );
}
