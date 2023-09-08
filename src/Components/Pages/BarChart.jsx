import React, { useState, useRef, useEffect } from "react";
import * as d3 from "d3";
import { getTableData } from "../../Config/API";
import GetRule from "../../helper/getRule";
const BarChart = () => {
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    renderChart();
  }, [chartData]);
  const renderChart = () => {
    // Define the dimensions of the SVG container and margins
    const margin = { top: 40, right: 30, bottom: 40, left: 40 };
    const width = 800 - margin.left - margin.right;
    const height = 600 - margin.top - margin.bottom;

    // Create an SVG element and set its dimensions
    const svg = d3
      .select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Create a scale for the x-axis
    const xScale = d3
      .scaleBand()
      .domain(chartData.map((d) => d.population))
      .range([0, width])
      .padding(0.1);

    // Create a scale for the y-axis
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(chartData, (d) => d.year)])
      .nice()
      .range([height, 0]);

    // Create and append the x-axis
    svg
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale));

    // Create and append the y-axis
    svg.append("g").attr("class", "y-axis").call(d3.axisLeft(yScale));
    let getColor = GetRule("chart");
    // console.log()
    // Create and append the bars
    svg
      .selectAll(".bar")
      .data(chartData)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => xScale(d.population))
      .attr("y", (d) => yScale(d.year))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => height - yScale(d.year))
      .style("fill", getColor.params.fill);
  };
  async function getData() {
    const response = await getTableData(GetRule("chart").rule);
    if (response.status === 200) {
      setChartData(response.data);
    }
  }
  const svgRef = useRef();

  return <svg ref={svgRef}></svg>;
};

export default BarChart;
