import React, { useContext, useEffect, useState } from "react";
import Header from "./components/header/Header";
import Articles from "./components/Articles";
import "./style/App.scss";
import axios from "axios";
import { TopHeadlinesContextProvider } from "./Context/TopHeadlinesContext";
import { TechContextProvider } from "./Context/TechContext";
import { ScienceContextProvider } from "./Context/ScienceContext";
import { DesignContextProvider } from "./Context/DesignContext";
import { SportsContextProvider } from "./Context/SportsContext";

function App() {
  return (
    <TopHeadlinesContextProvider>
      <TechContextProvider>
        <ScienceContextProvider>
          <DesignContextProvider>
            <SportsContextProvider>
              <div className="News">
                <Header />
                <Articles />
              </div>
            </SportsContextProvider>
          </DesignContextProvider>
        </ScienceContextProvider>
      </TechContextProvider>
    </TopHeadlinesContextProvider>
  );
}

export default App;
