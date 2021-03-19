import React from "react";
import "./Loader.scss";

export default function Loader() {
  return (
    <div className="Loader-Container">
      <div class="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
