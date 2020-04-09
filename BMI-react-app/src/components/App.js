import React, { Component } from "react";
import AddParametr from "./AddParametr";
import ShowResult from "./ShowResult";
import "./App.css";

class App extends Component {
  state = {
    weight: "",
    height: "",
    waist: "",
    fatLevel: "",
    bmi: "",
    resultClass: "",
    motto: "",
  };
  // START START START
  handleChange = (e) => {
    const { name, value } = e.target;
    const valueParse = parseFloat(value);

    if (typeof valueParse == "number" && valueParse > 0) {
      this.setState({
        [name]: valueParse,
      });
    } else {
      this.setState({
        [name]: "",
      });
    }
  };

  motivationalSentence = () => {
    const { bmi } = this.state;
    const sentenceArray = ["Pora coś zjeść", "Świetna forma", "Czas pobiegać"];
    if (bmi < 18.5) {
      this.setState({
        motto: sentenceArray[0],
      });
    } else if (bmi <= 25) {
      this.setState({
        motto: sentenceArray[1],
      });
    } else {
      this.setState({
        motto: sentenceArray[2],
      });
    }
  };

  // Round Number exp from 12,3456 to 12,35
  round = (x, y) => {
    const floor = Math.pow(10, y);
    return Math.round(floor * x) / floor;
  };

  waistSize = () => {
    const { waist, weight } = this.state;
    const a = 4.15 * waist;
    const b = a / 2.54;
    const c = 0.082 * weight * 2.2;
    const d = b - c - 98.42;
    const e = weight * 2.2;
    const result = this.round((d / e) * 100, 2);
    this.setState({
      fatLevel: result > 0 ? result : 0,
    });
  };

  // check BMI result and show backgroundColor for this result
  resultColor = () => {
    const { bmi } = this.state;
    if (bmi < 16 || (bmi > 35 && bmi <= 40)) {
      this.setState({
        resultClass: "red",
      });
    } else if ((bmi >= 16 && bmi < 17) || (bmi > 30 && bmi <= 35)) {
      this.setState({
        resultClass: "orange",
      });
    } else if ((bmi >= 17 && bmi < 18.5) || (bmi > 25 && bmi <= 30)) {
      this.setState({
        resultClass: "yellow",
      });
    } else if (bmi >= 18.5 && bmi < 25) {
      this.setState({
        resultClass: "green",
      });
    } else if (bmi > 40) {
      this.setState({
        resultClass: "darkred",
      });
    }
  };

  // BMI function
  handleSubmit = (e) => {
    e.preventDefault();
    const { weight, height, waist } = this.state;
    if (weight || height || waist) {
      const weightParse = parseFloat(weight, 2);
      const heightParse = parseFloat(height, 2) / 100;
      const exp = Math.pow(heightParse, 2);
      const bmi = weightParse / exp;
      const bmiResult = this.round(bmi, 2);
      this.setState({
        bmi: bmiResult,
        weight: "",
        height: "",
        waist: "",
      });
      this.waistSize();
      setTimeout(this.motivationalSentence, 1);
      setTimeout(this.resultColor, 1);
    } else {
      this.setState({
        bmi: "",
        resultClass: "",
        motto: "",
        fatLevel: "",
      });
    }
  };

  styles = {
    app: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      color: "darkgreen",
    },
    header: {
      flexBasis: "100%",
      margin: "0",
      padding: "20px 0px 10px",
      textAlign: "center",
      height: "50px",
    },
    board: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
    },
  };

  render() {
    const { app, header, board } = this.styles;
    const {
      weight,
      height,
      waist,
      bmi,
      resultClass,
      motto,
      fatLevel,
    } = this.state;
    return (
      <div style={app}>
        <h1 style={header}>Kalkulator BMI</h1>
        <div style={board}>
          <AddParametr
            weight={weight}
            height={height}
            waist={waist}
            change={this.handleChange}
            submit={this.handleSubmit}
          />
          <ShowResult
            result={bmi}
            bmi={this.bmi}
            resultClass={resultClass}
            motto={motto}
            fat={fatLevel}
          />
        </div>
      </div>
    );
  }
}

export default App;
