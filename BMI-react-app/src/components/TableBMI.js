import React from 'react';
import './App.css'

const TableBMI = () => {

 const styles = {
   table: {
     fontSize: "10px",
     fontWeight: "600",
     borderCollapse: 'collapse',
     color:'black'
   }
 };

    return (
      <div>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>BMI</th>
              <th>Min.</th>
              <th>Max.</th>
            </tr>
          </thead>
          <tbody>
            <tr className="red-bg">
              <td>Wygłodzenie</td>
              <td></td>
              <td>{"<16"}</td>
            </tr>
            <tr className="orange-bg">
              <td>Znaczna niedowaga</td>
              <td>16</td>
              <td>17</td>
            </tr>
            <tr className="yellow-bg">
              <td>Niedowaga</td>
              <td>17</td>
              <td>18,5</td>
            </tr>
            <tr className="green-bg">
              <td>W normie</td>
              <td>18,5</td>
              <td>25</td>
            </tr>
            <tr className="yellow-bg">
              <td>Nadwaga</td>
              <td>25</td>
              <td>30</td>
            </tr>
            <tr className="orange-bg">
              <td>Otyłość I klasy</td>
              <td>30</td>
              <td>35</td>
            </tr>
            <tr className="red-bg">
              <td>Otyłość II klasy</td>
              <td>35</td>
              <td>40</td>
            </tr>
            <tr className="darkred-bg">
              <td>Otyłość III klasy</td>
              <td>{">40"}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}
 
export default TableBMI;