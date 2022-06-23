const getLargestArea = (integerList) => {
  const isArrNum = integerList.every((elem) => (Number.isInteger(elem)));
  try {
    if (isArrNum) {
      const arrLength = integerList.length
      // Check if the array length is greater than or equal to 104 and less than or equal to 2.
      if (arrLength >= 2 && arrLength <= 105) {
        let obj = {
          lastElemts: integerList,
          elem: 0,
        };
        const areaList = [];
        let i = 0
        while (i < arrLength) {
          for (var index = 0; index < obj.lastElemts.length; index += 1) {
            const elem = obj.lastElemts[index]
            // Check if the elements are greater than or equal to 104 and less than or equal to 2.
            if (elem >= 0 && elem <= 104) {
              const lastElemts = obj.lastElemts.slice(index + 1);
              obj = { lastElemts, elem };
              break;
            } else {
              throw 'The array elements must be >= 0 and <= 104';
            }
          }

          const currentElem = obj.elem
          for (let index = 0; index < obj.lastElemts.length; index++) {
            const lastElemt = obj.lastElemts[index]
            if (currentElem >= lastElemt) {
              areaList.push(lastElemt * (index + 1));
            } else {
              areaList.push(currentElem * (index + 1));
            }
          }
          i++;
        }
        // Sort the area of the list in descending order.
        const descAreaList = areaList.sort((a, b) => b - a);
        const largestArea = descAreaList[0];
        return largestArea;
      }
      throw 'The array length must be >= 2 and <= 105';
    }
    throw 'The array must be a number integer list';
  } catch (error) {
    throw error;
  }
};

// console.log(getLargestArea([1, 104, 103, 6, 0]));

/*
  [1, 104, 103, 6, 0]
  1 * 1 => 1
  1 * 2 => 2
  1 * 3 => 3
  103 * 1 => 103
  6 * 2 => 12
  6 * 1 => 6
  6 * 0 => 0

  [56, 34, 32, 2, 38]
  34 * 1 => 34
  32 * 2 => 64
  2 * 3 => 6
  38 * 4 => 152
  32 * 1 => 32
  2 * 2 => 4
  34 * 3 => 102
  2 * 2 => 4
  32 * 2 => 64
  2 * 1 => 1
*/

module.exports = {
  getLargestArea,
};
