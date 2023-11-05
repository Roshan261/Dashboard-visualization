import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Card from "react-bootstrap/Card";

function MyLineChart({ energyData }) {
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
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={energyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="topic" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="intensity"
              stroke="#8884d8"
              name="Intensity"
            />
            <Line
              type="monotone"
              dataKey="relevance"
              stroke="#82ca9d"
              name="Relevance"
            />
            <Line
              type="monotone"
              dataKey="likelihood"
              stroke="#ffc658"
              name="Likelihood"
            />
          </LineChart>
        </ResponsiveContainer>
      </Card.Body>
    </Card>
  );
}

export default MyLineChart;
