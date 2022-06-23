const getElemOfRange = (firstElem, limit) => {
  const elemOfRange = [];

  let n = 0;

  while (n < limit) {
    const nextElem = firstElem + n;
    elemOfRange.push(nextElem);
    n += 1;
  }
  return elemOfRange;
};

module.exports = {
  getElemOfRange,
};
