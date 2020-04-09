import React from "react";
import Parametr from "./Parametr";
import "./App.css";

const AddParametr = (props) => {
  const styles = {
    addParametr: {
      flexBasis: "50%",
      paddingRight: "25px",
    },
    h2: {
      textAlign: "right",
      paddingRight: "100px",
    },
    form: {
      textAlign: "right",
    },
    label: {
      cursor: "pointer",
      display: "block",
    },
    button: {
      width: "183px",
      margin: "0 auto 20px",
      padding: "5px 0px",
      fontWeight: "800",
      letterSpacing: "1px",
      cursor: "pointer",
      border: "2px solid darkgreen",
      color: "darkgreen",
    },
  };
  const { weight, change, submit, height, waist } = props;
  const { addParametr, h2, form, button } = styles;

  return (
    <div style={addParametr}>
      <h2 style={h2}>Podaj dane:</h2>
      <form style={form} onSubmit={submit} noValidate autocomplete="off">
        <Parametr
          type={"number"}
          name={"weight"}
          id={"weight"}
          value={weight}
          change={change}
        />
        <Parametr
          type={"number"}
          name={"height"}
          id={"height"}
          value={height}
          change={change}
        />
        <Parametr
          type={"number"}
          name={"waist"}
          id={"waist"}
          value={waist}
          change={change}
        />
        <button style={button}>Sprawdź BMI</button>
      </form>
    </div>
  );
};

export default AddParametr;
