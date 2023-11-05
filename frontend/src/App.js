import React from "react";
import TableData from "./TableData";
import ToFilter from "./ToFilter";
import "./App.css";
import Sidebar from "./Sidebar";
import "./MainContent.css"

const App = () => {
  return (
    <div>
      <Sidebar/>
      <div className="main-content">
        <h6
          style={{
            textAlign: "center",
            fontSize: "50px",
            marginTop: "0px",
            fontFamily: "sans-serif",
          }}
        >
          Data Visualisation Dashboard
        </h6>
        <ToFilter />
        <TableData />
      </div>
    </div>
  );
};

export default App;
