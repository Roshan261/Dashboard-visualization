import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

function TableData() {
  const [energyData, setEnergyData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [regionFilter, setRegionFilter] = useState("");
  const [topicFilter, setTopicFilter] = useState("");
  const [countryFilter, setCountryFilter] = useState("");

  const fetchData = () => {
    axios
      .get("http://localhost:5000/api/energyData", {
        params: {
          region: regionFilter,
          topic: topicFilter,
          country: countryFilter,
        },
      })
      .then((response) => {
        setEnergyData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [regionFilter, topicFilter, countryFilter]);

  const checkEmptyValue = (value) => {
    return value || "-";
  };

  const filteredData = energyData.filter((item) => {
    return (
      (regionFilter === "" || item.region === regionFilter) &&
      (topicFilter === "" || item.topic === topicFilter) &&
      (countryFilter === "" || item.country === countryFilter)
    );
  });

  const filterDropdownStyle = {
    backgroundColor: "#f2f2f2",
    padding: "5px 0",
    borderRadius: "5px",
    width: "250px",
    cursor: "pointer",
    fontSize: "16px",
  };

  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
    border: "1px solid #ddd",
  };

  const cellStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "center",
  };

  const headerStyle = {
    background: "#BCBCBC",
    fontWeight: "bold",
  };

  const showAllStyle = {
    cursor: "pointer",
    background: "#595959",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const tableContainerStyle = {
    maxHeight: "500px",
    overflowY: "auto",
    marginTop: "10px",
  };

  return (
    <Card
      style={{
        backgroundColor: "#f2f2f2",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        borderRadius: "10px",
        padding: "20px",
        marginTop: "40px",
      }}
    >
      <Card.Body>
        <h1 style={{ fontFamily: "sans-serif", fontSize: "25px" }}>
          {" "}
          Data Table
        </h1>
        <div
          style={{
            display: "flex",
            backgroundColor: "#f2f2f2",
            padding: "10px",
            borderBottom: "1px solid #BCBCBC",
            marginBottom: "10px",
            textAlign: "center",
          }}
          className="filter-container"
        >
          <div className="filter" style={{ marginRight: "20px" }}>
            <label
              style={{
                fontSize: "16px",
                fontStyle: "italic",
                fontFamily: "monospace",
              }}
            >
              Filter by Region{" "}
            </label>
            <select
              onChange={(e) => setRegionFilter(e.target.value)}
              style={filterDropdownStyle}
            >
              <option value="">All Regions</option>
              <option value="Eastern Europe">Eastern Europe</option>
              <option value="Northern America">Northern America</option>
              <option value="Central America">Central America</option>
              <option value="World">World</option>
              <option value="Western Africa">Western Africa</option>
              <option value="Western Asia">Western Asia</option>
            </select>
          </div>
          <div className="filter" style={{ marginRight: "20px" }}>
            <label
              style={{
                fontSize: "16px",
                fontStyle: "italic",
                fontFamily: "monospace",
              }}
            >
              Filter by Topic{" "}
            </label>
            <select
              onChange={(e) => setTopicFilter(e.target.value)}
              style={filterDropdownStyle}
            >
              <option value="">All Topics</option>
              <option value="oil">Oil</option>
              <option value="gas">Gas</option>
              <option value="market">Market</option>
              <option value="gdp">Gdp</option>
              <option value="export">Exports</option>
              <option value="policy">Policy</option>
              <option value="production">Production</option>
              <option value="money">Money</option>
              <option value="energy">Energy</option>
              <option value="trade">Trade</option>
              <option value="risk">Risk</option>
              <option value="economy">Economy</option>
              <option value="bank">Bank</option>
              <option value="security">Security</option>
              <option value="population">Population</option>
              <option value="growth">Growth</option>
              <option value="industry">Industry</option>
              <option value="biofuel">Biofuel</option>
              <option value="finance">Finance</option>
              <option value="plastic">Plastic</option>
              <option value="investment">Investment</option>
              <option value="software">Software</option>
            </select>
          </div>
          <div className="filter">
            <label
              style={{
                fontSize: "16px",
                fontStyle: "italic",
                fontFamily: "monospace",
              }}
            >
              Filter by Country{" "}
            </label>
            <select
              onChange={(e) => setCountryFilter(e.target.value)}
              style={filterDropdownStyle}
            >
              <option value="">All Countries</option>
              <option value="Russia">Russia</option>
              <option value="United States of America">
                United States of America
              </option>
              <option value="Mexico">Mexico</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Angola">Angola</option>
              <option value="Lebanon">Lebanon</option>
              <option value="Saudi Arabia	">Saudi Arabia</option>
              <option value="Libya">Libya</option>
              <option value="Canada">Canada</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Estonia">Estonia</option>
              <option value="Japan">Japan</option>
              <option value="India">India</option>
              <option value="Australia">Australia</option>
              <option value="Oman">Oman</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="China">China</option>
              <option value="Morocco">Morocco</option>
              <option value="Australia">Australia</option>
              <option value="South Africa	">South Africa</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Iraq">Iraq</option>
              <option value="Iran">Iran</option>
              <option value="Spain">Spain</option>
              <option value="Denmark">Denmark</option>
              <option value="Ukraine">Ukraine</option>
              <option value="Palestine">Palestine</option>
            </select>
          </div>
        </div>
        <button style={showAllStyle} onClick={toggleShowAll}>
          {showAll ? "Show Less" : "Show All"}
        </button>
        <div style={tableContainerStyle}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={{ ...cellStyle, ...headerStyle }}>Region</th>
                <th style={{ ...cellStyle, ...headerStyle }}>Topic</th>
                <th style={{ ...cellStyle, ...headerStyle }}>Country</th>
                <th style={{ ...cellStyle, ...headerStyle }}>Title</th>
                <th style={{ ...cellStyle, ...headerStyle }}>Start Year</th>
                <th style={{ ...cellStyle, ...headerStyle }}>End Year</th>
                <th style={{ ...cellStyle, ...headerStyle }}>Relevance</th>
                <th style={{ ...cellStyle, ...headerStyle }}>Likelihood</th>
                <th style={{ ...cellStyle, ...headerStyle }}>Intensity</th>
              </tr>
            </thead>
            <tbody>
              {showAll
                ? filteredData.map((item) => (
                    <tr key={item._id}>
                      <td style={cellStyle}>{checkEmptyValue(item.region)}</td>
                      <td style={cellStyle}>{checkEmptyValue(item.topic)}</td>
                      <td style={cellStyle}>{checkEmptyValue(item.country)}</td>
                      <td style={cellStyle}>{checkEmptyValue(item.title)}</td>
                      <td style={cellStyle}>
                        {checkEmptyValue(item.start_year)}
                      </td>
                      <td style={cellStyle}>
                        {checkEmptyValue(item.end_year)}
                      </td>
                      <td style={cellStyle}>
                        {checkEmptyValue(item.relevance)}
                      </td>
                      <td style={cellStyle}>
                        {checkEmptyValue(item.likelihood)}
                      </td>
                      <td style={cellStyle}>
                        {checkEmptyValue(item.intensity)}
                      </td>
                    </tr>
                  ))
                : filteredData.slice(0, 25).map((item) => (
                    <tr key={item._id}>
                      <td style={cellStyle}>{checkEmptyValue(item.region)}</td>
                      <td style={cellStyle}>{checkEmptyValue(item.topic)}</td>
                      <td style={cellStyle}>{checkEmptyValue(item.country)}</td>
                      <td style={cellStyle}>{checkEmptyValue(item.title)}</td>
                      <td style={cellStyle}>
                        {checkEmptyValue(item.start_year)}
                      </td>
                      <td style={cellStyle}>
                        {checkEmptyValue(item.end_year)}
                      </td>
                      <td style={cellStyle}>
                        {checkEmptyValue(item.relevance)}
                      </td>
                      <td style={cellStyle}>
                        {checkEmptyValue(item.likelihood)}
                      </td>
                      <td style={cellStyle}>
                        {checkEmptyValue(item.intensity)}
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </Card.Body>
    </Card>
  );
}

export default TableData;
