//输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。
NumberOf1(-16)
function NumberOf1(n) {
    // write code here
    let flag = 1, count;
    while (flag) {
        if (n & flag)++count
        flag = flag << 1
    }
    return count
}


