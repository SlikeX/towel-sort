module.exports = function towelSort(matrix) {
  if (matrix === undefined) { return [] };
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < matrix[i].length; j++) {
        result.push(matrix[i][j]);
      }
    }
    else {
      for (let k = matrix[i].length - 1; k >= 0; k--) {
        result.push(matrix[i][k]);
      }
    }
  }
  return result;
};