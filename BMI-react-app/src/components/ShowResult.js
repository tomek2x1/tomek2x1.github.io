import React from 'react';
import TableBMI from "./TableBMI";
import './App.css'

const ShowResult = (props) => {

const styles = {
  showResult: {
    flexBasis: "50%",
    paddingLeft: "25px"
  },
}

    const {resultClass, result, fat, motto} = props
    const { showResult } = styles;

    return (
      <div style={showResult}>
        <h2>
          BMI dla twojego ciała to:
          <span id="result" className={resultClass}>
            {" " + result}
          </span>
        </h2>
        <h3>
          <span>
            {fat
              ? "Poziom tkanki tłuszczowej to: " + fat + "%"
              : ""}
          </span>
        </h3>
        <h3 id="sentence" className={resultClass}>
          {motto}
        </h3>
        {result ? <TableBMI /> : false}
      </div>
    );
}
 
export default ShowResult;