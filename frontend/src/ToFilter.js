import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import MyBarChart from "./MyBarChart";
import MyLineChart from "./MyLineChart";
import Filter from "./Filter";

function ToFilter() {
  const [energyData, setEnergyData] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/energyData")
      .then((response) => {
        setEnergyData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const uniqueTopics = [...new Set(energyData.map((item) => item.topic))];
  const uniqueCountries = [...new Set(energyData.map((item) => item.country))];
  const chartContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  const chartStyle = {
    flex: 1,
    margin: "10px",
  };

  const filteredData = energyData.filter((item) => {
    return (
      (!selectedRegion || item.region === selectedRegion) &&
      (!selectedTopic || item.topic === selectedTopic) &&
      (!selectedCountry || item.country === selectedCountry)
    );
  });

  return (
    <div className="App" style={{ marginTop: "-100px" }}>
      <Filter
        uniqueTopics={uniqueTopics}
        uniqueCountries={uniqueCountries}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />

      <div style={chartContainerStyle}>
        <div style={chartStyle}>
          <MyBarChart energyData={filteredData} />
        </div>
        <div style={chartStyle}>
          <MyLineChart energyData={filteredData} />
        </div>
      </div>
    </div>
  );
}

export default ToFilter;
