import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Slider from "./components/Slider.jsx";
import { useState } from "react";

function App() {
  const day = "public/assets/images/day.png";
  const night = "public/assets/images/night.png";
  //var for night mode toggle
  const [isDaytime, setIsDaytime] = useState(true);

  //function to toggle day/night
  function handleBackgroundToggle() {
    setIsDaytime((prev) => !prev);
  }

  return (
    <BrowserRouter>
      <div className={isDaytime ? "day" : "night"}>
        <div className="headerContainer">
          <Link to="/">
            <img
              id="headerLogo"
              src="public/assets/images/logo.svg"
              alt="Logo"
            />
          </Link>
          <Slider
            backgroundImage={night}
            altBackgroundImage={day}
            isActive={isDaytime}
            onToggle={handleBackgroundToggle}
          />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
