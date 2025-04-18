function Slider({ backgroundImage, altBackgroundImage, isActive, onToggle }) {
  return (
    <div className="wrapper">
      <input
        type="checkbox"
        name="checkbox"
        className="switch"
        style={{
          backgroundImage: `url(${
            isActive ? altBackgroundImage : backgroundImage
          })` /*alters bg image conditional on isActive */,
        }}
        checked={isActive}
        onChange={onToggle}
      />
    </div>
  );
}
export default Slider;
