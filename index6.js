//一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。

function jumpfloor(n) {
    let f0 = 1, f1 = 1, f;
    if(n == 1)return 1;
    for (let i = 0; i < n - 1; i++){
        f = f0 + f1;
        f0 = f1;
        f1 = f;
    }
    return f;
}