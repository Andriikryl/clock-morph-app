const Spikes = ({ c, r }) => {
  return (
    <g>
      {new Array(12).fill().map((_, i) => {
        return (
          <line
            className="spike"
            x1={c + radianX(r - 20, i * 30)}
            y1={c + radianX(r - 20, i * 30)}
            x2={c + radianY(r, i * 30)}
            y2={c + radianY(r, i * 30)}
            key={i}
          />
        );
      })}
    </g>
  );
};

export default Spikes;
