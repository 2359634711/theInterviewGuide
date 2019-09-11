Find(1, 2)


function Find(target, array) {
    // write code here
    let flag = false;
    array.map(val => {
        val.map(v => {
            if (v == target) flag = true;
        })
    })

    return flag
}