import CharBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <CharBar
            key={dataPoint.label}
            value={dataPoint.value}
            max={totalMaximum}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
}
export default Chart;
