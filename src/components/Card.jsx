import Button from "./Button";
import Slider from "./Slider";
//import data from "./data.js";

function Card({
  logo,
  name,
  description,
  key,
  id,
  isActive,
  isRemoved,
  backgroundImage,
  altBackgroundImage,
  onClick,
  onToggleActive,
}) {
  //  let cardData = data[0];

  return (
    <>
      <div className={isActive ? "card active" : "card inactive"}>
        <img src={logo} alt="image not imported"></img>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{key}</p>
        <p>{id}</p>
        <p>{isActive}</p>
        <p>{isRemoved}</p>
        <Button buttonText={"remove extension"} onClick={() => onClick(id)} />
        <Slider
          backgroundImage={backgroundImage}
          altBackgroundImage={altBackgroundImage}
          isActive={isActive}
          onToggle={() => onToggleActive(id)}
        />
      </div>
    </>
  );
}

export default Card;
