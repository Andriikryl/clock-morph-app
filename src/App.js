import "./App.css";
import Circle from "./components/Circle";

function App() {
  const size = 400;

  const c = size / 2;
  const r = (size - 30) / 2;

  return (
    <svg
      xmlns="http://www.w3.org/svg/2000"
      viewBox={`0 0 ${size} 400`}
      width={size}
      height={size}
    >
      <Circle cx={c} cy={c} r={r} className="clock" />
    </svg>
  );
}

export default App;
