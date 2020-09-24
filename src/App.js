import React from "react";
import "./styles.css";

import Navbar from "./components/Navbar/Navbar";
import NewsItems from "./components/NewsItems/NewsItems";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <NewsItems />
    </div>
  );
}
