function reOrderArray(array)
{
    // write code here
    let outLeftArr = [];
    let outRightArr = [];
    for (const v of array) {
        if(v % 2 == 0){
            //偶数
            outRightArr.push(v)
        } else{
            //奇数
            outLeftArr.push(v)
        }
    }
    return outLeftArr.concat(outRightArr)
}
