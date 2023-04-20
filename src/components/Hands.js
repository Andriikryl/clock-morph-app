import { timePoints } from "../helper";

const Hands = ({ time, c, r }) => {
  const { hourX, hourY, minuteX, minuteY, secondX, secondY } = timePoints(
    r,
    time
  );

  return <g></g>;
};

export default Hands;
