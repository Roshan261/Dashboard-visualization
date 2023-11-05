import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Card from "react-bootstrap/Card";

function MyBarChart({ energyData }) {
  return (
    <Card
      style={{
        backgroundColor: "#f2f2f2",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        borderRadius: "10px",
        padding: "15px 15px 0px 0px",
      }}
    >
      <Card.Body>
        {}
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={energyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="topic" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="intensity" fill="#8884d8" name="Intensity" />
            <Bar dataKey="relevance" fill="#82ca9d" name="Relevance" />
            <Bar dataKey="likelihood" fill="#ffc658" name="Likelihood" />
          </BarChart>
        </ResponsiveContainer>
      </Card.Body>
    </Card>
  );
}

export default MyBarChart;
