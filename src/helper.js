const toRadian = (angle) => (Math.PI * (angle - 90)) / 180;

const getTimeParts = (t) => ({
  hour: t.getHours(),
  minute: t.getMinutes(),
  second: t.getSeconds(),
});

export const radianX = (r, a) => r * Math.cos(toRadian(a));
export const radianY = (r, a) => r * Math.sin(toRadian(a));
