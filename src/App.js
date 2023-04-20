import { useEffect, useState } from "react";
import "./App.css";
import Circle from "./components/Circle";
import Hands from "./components/Hands";
import Spikes from "./components/Spikes";
import Triangle from "./components/Triangel";
import Digital from "./components/Digital";

function App() {
  const size = 400;

  const c = size / 2;
  const r = (size - 30) / 2;

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    window.setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/svg/2000"
      viewBox={`0 0 ${size} 400`}
      width={size}
      height={size}
    >
      <Circle cx={c} cy={c} r={r} className="clock" />
      <Spikes c={c} r={r} />
      <Triangle time={time} r={r} c={c} />
      <Hands time={time} r={r} c={c} />
      <Digital time={time} c={c} />
    </svg>
  );
}

export default App;
