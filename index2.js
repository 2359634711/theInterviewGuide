function replaceSpace(str) {
    // write code here
    let outStr = ''
    for (const v of str) {
        outStr += v == ' ' ? '%20' : v
    }
    return outStr
}