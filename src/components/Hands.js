import { timePoints } from "../helper";
import Circle from "./Circle";

const Hands = ({ time, c, r }) => {
  const { hourX, hourY, minuteX, minuteY, secondX, secondY } = timePoints(
    r,
    time
  );

  return (
    <g>
      <Circle className="hands" cx={c + hourX} cy={c + hourY} r={15} />
      <Circle className="hands" cx={c + minuteX} cy={c + minuteY} r={10} />
      <Circle className="hands" cx={c + secondX} cy={c + secondY} r={5} />
    </g>
  );
};

export default Hands;
