function Matrix(rows, columns) {
    const jaggedArray = new Array(rows);

    for (let i = 0; i < columns; i++) {
        jaggedArray[i] = new Array(rows);
    }

    return jaggedArray;
}

function spiralPrint(matrix) {
    if (matrix.length === 0) return [];

    const output = [];
    let topRow = 0;
    let leftCol = 0;
    let bottomRow = matrix.length - 1;
    let rightCol = matrix[0].length - 1;

    while (topRow <= bottomRow && leftCol <= rightCol) {

        for (let col = leftCol; col <= rightCol; col++) {
            output.push(matrix[topRow][col]);
        }

        topRow++;

        for (let row = topRow; row <= bottomRow; row++) {
            output.push(matrix[row][rightCol])
        }

        rightCol--;

        if (topRow <= bottomRow) {
            for (let col = rightCol; col >= leftCol; col--) {
                output.push(matrix[bottomRow][col])
            }
            bottomRow--;
        }

        if (leftCol <= rightCol) {
            for (let row = bottomRow; row >= topRow; row--) {
                output.push(matrix[row][leftCol]);
            }
            leftCol++;
        }
    }

    return output;

}

module.exports = {
    Matrix,
    spiralPrint
}