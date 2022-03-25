const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const colLen = matrix[0].length - 1;
  const rowLen = matrix.length - 1;
  const result = matrix.map(
    (row, rowNum) => {
      return row.map((el, colNum) => {
        let mineSum = 0;
        for (let y = rowNum - 1; y <= rowNum + 1; y++) {
          for (let x = colNum - 1; x <= colNum + 1; x++) {
            if (x < 0 || y < 0 || y > rowLen || x > colLen || (x == colNum && y == rowNum)) continue
            if (matrix[y][x]) mineSum += 1
          }
        }
        return mineSum
      })
    }
  )
  return result
}

module.exports = {
  minesweeper
};
