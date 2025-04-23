import { useState } from "react";
import Card from "../components/Card.jsx";
import data from "../data.js";
import Slider from "../components/Slider.jsx";
import Button from "../components/Button.jsx";

function Home() {
  //vars for bg images in sliders
  const red = "public/assets/images/red.svg";
  const green = "public/assets/images/green.svg";
  const day = "public/assets/images/day.png";
  const night = "public/assets/images/night.png";

  //vars for buttons
  const [filter, setFilter] = useState("all");

  //var for night mode toggle
  const [isDaytime, setIsDaytime] = useState(true);

  //initial list of extensions (i am NOT filtering this)
  const [extensionList, setExtensionList] = useState(
    data.map((extension) => ({
      ...extension,
      isRemoved: false,
    }))
  );
  //function that sets extensionlist isRemoved value to true so it's removed from filteredExtensions
  function handleRemove(id) {
    setExtensionList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, isRemoved: true } : item))
    );
  }

  //filtered list of extensions
  const filteredExtensions = extensionList.filter((item) => {
    if (item.isRemoved) return false; //if item.isRemoved===false, don't return
    if (filter === "active") return item.isActive; ///if fiter is set to activereturn items where item.isActive===true
    if (filter === "inactive")
      return !item.isActive; //if filter set 2 inactive, return items where item.isActive===false || !item.isActive===true
    else return true; //otherwise return everything
  });

  //function to toggle day/night
  function handleBackgroundToggle() {
    setIsDaytime((prev) => !prev);
  }

  //to toggle active
  function handleToggleActive(id) {
    setExtensionList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isActive: !item.isActive } : item
      )
    );
  }

  /*code for switch adapted from: https://codepen.io/ahmadbassamemran/pen/yLBXBmy*/

  return (
    <>
      <div>
        <div id="buttonBox">
          <Button
            buttonText="ACTIVE"
            onClick={() => setFilter("active")}
            isSelected={filter === "active"}
          />
          <Button
            buttonText="INACTIVE"
            onClick={() => setFilter("inactive")}
            isSelected={filter === "inactive"}
          />
          <Button
            buttonText="ALL"
            onClick={() => setFilter("all")}
            isSelected={filter === "all"}
          />
        </div>
        <h2>Extensions List</h2>
        <div className="container">
          {filteredExtensions
            .filter((item) => !item.isRemoved)
            .map((item) => (
              <Card
                key={item.id}
                id={item.id}
                logo={item.logo}
                name={item.name}
                description={item.description}
                isRemoved={item.isRemoved}
                backgroundImage={red}
                altBackgroundImage={green}
                onClick={handleRemove}
                isActive={item.isActive}
                onToggleActive={handleToggleActive}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default Home;
