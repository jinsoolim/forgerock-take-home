import * as React from 'react';
import * as d3 from 'd3';

import './BubbleChart.scss';
import { IPerson } from '../Interfaces';

type BubbleChartProps = {
  width: number;
  height: number;
  data: IPerson[];
  setCharacter: React.Dispatch<React.SetStateAction<IPerson>>;
  setShowRightBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const BubbleChart: React.FC<BubbleChartProps> = ({ width, height, data, setCharacter, setShowRightBar }) => {
  const svgRef = React.useRef(null);

  const margin = {
    top: 40,
    right: 40,
    bottom: 40,
    left: 40
  }

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  React.useEffect(() => {
    //Create Bubble Chart
    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("transform", `translate(${margin.left}, ${margin.top})`)
      .style("border", "1px solid black")
  }, []);

  React.useEffect(() => {
    draw();
  }, [data]);

  const draw = () => {
    const svg = d3.select(svgRef.current)

    // Create a group for bubbles, bubble text, and connecting line
    let bubbleGroup = svg.selectAll("g")
      .data(data)
      .enter()
      .append("g")
      .attr("class", "bubbles")


    // Take X, Y data and put into separate Arrays for easy access for D3
    let weightData: number[] = data.map((person) => person.weight);
    let heightData: number[] = data.map((person) => person.height);
    let ageData: number[] = data.map((person) => person.age);

    // Create X and Y range from weightData and heightData
    let xScale = d3.scaleLinear()
      .domain([(d3.min(heightData) - 10), (d3.max(heightData) + 10)])
      .range([0, innerWidth]);

    let yScale = d3.scaleLinear()
      .domain([d3.min(weightData) - 20, d3.max(weightData) + 20])
      .range([innerHeight, 0]);

    const x_axis = d3.axisBottom(xScale).ticks(10);
    const y_axis = d3.axisLeft(yScale).ticks(10);
    const xAxisGrid = d3.axisBottom(xScale).tickSize(-innerHeight).tickFormat('').ticks(10);
    const yAxisGrid = d3.axisLeft(yScale).tickSize(-innerWidth).tickFormat('').ticks(10);

    // Create Title for Bubble Chart
    svg.append("text")
      .attr("x", innerWidth / 2)
      .attr("y", -10)
      .attr("transform", `translate(70,35)`)
      .attr("class", "title")
      .style("text-anchor", "middle")
      .style("font-size", "200%")
      .style("font-weight", "800")
      .text("Age by Height and Weight")

    // Create Y Axis
    svg.append("g")
      .attr("class", "chart-axis")
      .attr("transform", `translate(70,35)`)
      .call(y_axis)
      .append("text")
        .attr("fill", "black")
        .attr("transform", "rotate(-90)")
        .attr("y", - margin.left)
        .attr("x", - innerHeight / 2)
        .style("text-anchor", "middle")
        .style("font-size", "150%")
        .text("Weight")

    // Create Y Grid
    svg.append("g")
      .attr("class", "chart-grid")
      .attr("transform", `translate(70,35)`)
      .call(yAxisGrid)

    // Create X Axis
    svg.append("g")
      .attr("class", "chart-axis")
      .attr("transform", `translate(70, ${innerHeight + 35})`)
      .call(x_axis)
      .append("text")
        .attr("fill", "black")
        .attr("x", innerWidth / 2)
        .attr("y", margin.bottom)
        .style("text-anchor", "middle")
        .style("font-size", "150%")
        .text("Height")

    // Create X Grid
    svg.append("g")
      .attr("class", "chart-grid")
      .attr("transform", `translate(70, ${innerHeight + 35})`)
      .call(xAxisGrid)

    // Create Bubbles
    bubbleGroup
      .append("circle")
        .attr("class", "circles")
        .attr("transform", "translate(70,35)")
        .attr("fill", (d) => `rgb(249, ${160 * (Math.min(...ageData)/d.age)}, 0)`)
        .attr("opacity", 0.5)
        .attr("stroke", "none")
        .attr("cx", (d) => xScale(d.height))
        .attr("cy", (d) => yScale(d.weight))
        .attr("r", (d) => d.age / 1.5)
        .style("cursor", "pointer")
        .on("mouseover", (d, i) => {
          d3.select(d.target).attr("opacity", 1)
          d3.select(d.target.nextSibling).style("fill", "#214395")
        }
        )
        .on("mouseout", (d, i) => {
          d3.select(d.target).attr("opacity", 0.5)
          d3.select(d.target.nextSibling).style("fill", "rgba(50, 170, 255)")
        })
        .on("click", (d) => {
          setCharacter(d.target.__data__);
          setShowRightBar(true);
        })

    // Create text associated with Bubble
    bubbleGroup
      .append("text")
        .attr("class", "circle-text")
        .attr("font-family", "sans-serif")
        .attr("font-size", 12)
        .attr("fill", "rgb(50, 170, 255)")
        .attr("x", d => xScale(d.height) + 70)
        .attr("y", d => yScale(d.weight) + 35)
        .text(d => d.firstName + ' ' + d.lastName)

    bubbleGroup
      .append("rect")
      .attr("class", "text-to-circle")
      .attr("fill", "black")
      .attr("x", d => xScale(d.height) + 70)
      .attr("y", d => yScale(d.weight) + 35)
      .attr("width", "15px")
      .attr("height", "2px")

  }

  return (
    <div className="bubble-chart">
      <svg ref={svgRef} style={{margin: "30 30 30 30"}}></svg>
    </div>
  );
}

export default BubbleChart;
