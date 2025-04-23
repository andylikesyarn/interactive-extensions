function Button({ buttonText, onClick, isSelected }) {
  return (
    <>
      <button onClick={onClick} className={isSelected ? "selected" : ""}>
        {buttonText}
      </button>
    </>
  );
}

export default Button;
