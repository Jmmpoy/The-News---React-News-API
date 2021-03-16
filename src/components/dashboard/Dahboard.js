import React, { useContext, useEffect } from "react";
import Main from "../layout/Main";
import "./Dashboard.scss";
import Search from "../Search/Search";
import { GenericContext } from "../../Context/GenericContext";

// MAIN DASHBOARD LAYOUT
export default function Dashboard() {
  const { data } = useContext(GenericContext);
  useEffect(() => {
    console.log("dashboard", data);
  }, []);
  return (
    <div className="Dashboard">
      <Search />
      <Main />
    </div>
  );
}
