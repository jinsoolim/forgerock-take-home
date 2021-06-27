import * as React from 'react';
import * as d3 from 'd3';

interface IPerson {
  title: string;
  firstName: string;
  lastName: string;
  age: number;
  height: number;
  weight: number;
  gender: string;
  city: string;
  country: string;
}

type BubbleChartProps = {
  width: number;
  height: number;
  data: IPerson[];
}

const BubbleChart: React.FC<BubbleChartProps> = ({ width, height, data }) => {
  const svgRef = React.useRef(null);

  React.useEffect(() => {
    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("border", "1px solid black")
  }, []);

  React.useEffect(() => {
    draw();
  }, [data]);

  const draw = () => {
    const svg = d3.select(svgRef.current)
    let selection = svg.selectAll("circle").data(data);

    let weightData = data.map((person) => person.weight);
    console.log('weightData: ', weightData);

    let heightData = data.map((person) => person.height);
    console.log('heightData: ', heightData);

    let xScale = d3.scaleLinear()
      .domain([0, d3.max(heightData)])
      .range([0, width - 100]);

    let yScale = d3.scaleLinear()
      .domain([0, d3.max(weightData)])
      .range([height - 30, 0]);

    let x_axis = d3.axisBottom(xScale);
    let y_axis = d3.axisLeft(yScale);

    svg.append('g')
      .attr("transform", "translate(50,10)")
      .call(y_axis);

    let xAxisTranslate = height - 20;

    svg.append('g')
      .attr("transform", `translate(50, ${xAxisTranslate})`)
      .call(x_axis);

    selection
      .enter()
      .append("circle")
        .attr("fill", "rgba(255, 165, 0, 0.5)")
        .attr("stroke", "none")
        .attr("cx", function(d) { return xScale(d.height) })
        .attr("cy", function(d) { return yScale(d.weight) })
        .attr("r", (d) => 10);

    selection
      .exit()
      .transition().duration(300)
        .attr("y", (d) => height)
        .attr("height", 0)
      .remove()
  }

      return (
        <svg ref={svgRef} ></svg>
  );
}

export default BubbleChart;
