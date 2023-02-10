import "./ChartBar.css";

function CharBar(props) {
  let barFillHeigth = "0%";

  if (props.max > 0) {
    barFillHeigth = Math.round((props.value / props.max) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ heigth: barFillHeigth }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}

export default CharBar;
