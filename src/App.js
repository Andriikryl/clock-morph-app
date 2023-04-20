import "./App.css";
import Circle from "./components/Circle";
import Hands from "./components/Hands";
import Spikes from "./components/Spikes";

function App() {
  const size = 400;

  const c = size / 2;
  const r = (size - 30) / 2;

  const time = new Date();

  return (
    <svg
      xmlns="http://www.w3.org/svg/2000"
      viewBox={`0 0 ${size} 400`}
      width={size}
      height={size}
    >
      <Circle cx={c} cy={c} r={r} className="clock" />
      <Spikes c={c} r={r} />
      <Hands time={time} r={r} />
    </svg>
  );
}

export default App;
