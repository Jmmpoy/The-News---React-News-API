import React from "react";
import Main from "../layout/Main";
import "./Dashboard.scss";
import Search from "../Search/Search";

// MAIN DASHBOARD LAYOUT
export default function Dashboard() {
  return (
    <div className="Dashboard">
      <Search />
      <Main />
    </div>
  );
}
