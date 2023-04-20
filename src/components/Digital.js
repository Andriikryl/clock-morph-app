const Digital = ({ c, time }) => {
  return (
    <text x={c} y={c} className="digital">
      {time.toTimeString().slice(0, 8)}
    </text>
  );
};

export default Digital;
