import React from "react";
import Header from "../header/Header";
import Articles from "../dashboard/Dahboard";
import "./App.scss";
import { GenericContextProvider } from "../../Context/GenericContext";

function App() {
  return (
    <GenericContextProvider>
      <div className="Container">
        <Header />
        <Articles />
      </div>
    </GenericContextProvider>
  );
}

export default App;
