import React from "react";
import { Slider, Order, Footer } from "./components";

const App = () => {
  return (
    <div className="main-page">
      <div className="container">
        <Slider />
        <Order />
        <Footer />
      </div>
    </div>
  );
};

export default App;
