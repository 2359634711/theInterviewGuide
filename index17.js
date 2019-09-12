//输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，例如，如果输入如下4 X 4矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.
function printMatrix(matrix) {
    // write code here
    let arr = [];

    while (matrix.length > 0) {
        matrix[0].map(val => {
            //将第一行添加到arr
            arr.push(val)
        })
        //将第一行删去
        matrix.shift()
        //旋转矩阵
        matrix = changeMatrix(matrix)
    }
    return arr
}

//旋转矩阵
function changeMatrix(matrix) {
    let outArr = [];
    matrix.forEach((v, i) => {
        v.forEach((val, index) => {
            outArr[v.length - index - 1] = outArr[v.length - index - 1] ? outArr[v.length - index - 1] : []
            outArr[v.length - index - 1][i] = val
        })
    })
    return outArr
}
