import React from "react";

const Parametr = (props) => {
  const styles = {
    label: {
      display: "flex",
      justifyContent: "flex-end",
      marginBottom: "20px",
      fontWeight: "700",
      cursor: "pointer",
    },
    input: {
      padding: "5px 10px",
      border: "2px solid darkgreen",
      marginLeft: "20px",
      cursor: "pointer",
      outline: "none",
    },
  };

  const uppercaseFirstLetter = (word) => {
    const wordWithFirstLetterUp = word[0].toUpperCase() + word.slice(1) + ": ";
    return wordWithFirstLetterUp;
  };

  const { label, input } = styles;
  const { name, type, id, value, change } = props;

  return (
    <label style={label} htmlFor={name}>
      {uppercaseFirstLetter(name)}
      <input
        type={type}
        style={input}
        id={id}
        name={name}
        value={value}
        onChange={change}
      />
    </label>
  );
};

export default Parametr;
