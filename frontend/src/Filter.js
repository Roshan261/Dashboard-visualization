import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

const filterContainerStyle = {
  display: "flex",
  justifyContent: "flex-end",
  margin: "10px",
};

const filterStyle = {
  marginLeft: "10px",
};

const filterDropdownStyle = {
  backgroundColor: "#f2f2f2",
  padding: "5px 0",
  borderRadius: "2px",
  width: "125px",
  cursor: "pointer",
};

function Filter({
  uniqueTopics,
  uniqueCountries,
  selectedRegion,
  setSelectedRegion,
  selectedTopic,
  setSelectedTopic,
  selectedCountry,
  setSelectedCountry,
}) {
  useEffect(() => {
    setSelectedRegion("Northern America");
  }, []);

  return (
    <div style={filterContainerStyle} className="filter-container">
      <div style={filterStyle} className="filter">
        <Form.Group controlId="filterRegion">
          <Form.Select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            style={filterDropdownStyle}
          >
            <option value="">All Regions</option>

            <option value="Northern America">Northern America</option>
            <option value="Eastern Europe">Eastern Europe</option>
            <option value="Central America">Central America</option>
            <option value="World">World</option>
            <option value="Western Africa">Western Africa</option>
            <option value="Western Asia">Western Asia</option>
          </Form.Select>
        </Form.Group>
      </div>
      <div style={filterStyle} className="filter">
        <Form.Group controlId="filterTopic">
          <Form.Select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            style={filterDropdownStyle}
          >
            <option value="">All Topics</option>
            {uniqueTopics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </div>
      <div style={filterStyle} className="filter">
        <Form.Group controlId="filterCountry">
          <Form.Select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            style={filterDropdownStyle}
          >
            <option value="">All Countries</option>
            {uniqueCountries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </div>
    </div>
  );
}

export default Filter;
