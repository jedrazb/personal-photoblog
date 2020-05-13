import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import PhotoBookTemplate from "./templates/insta-index";
import "./App.css";

function App() {
  const photos = [
    {
      date: "12/03/1232",
      caption: "Just chilling here",
      imgUrl:
        "https://img3.stockfresh.com/files/m/moses/m/12/2659982_stock-photo-tropical-beach-square-composition.jpg",
    },
  ];
  return (
    <Router>
      <PhotoBookTemplate photos={photos} />
    </Router>
  );
}

export default App;
