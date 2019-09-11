
function rectCover(number) {
    // write code herere
    if (number <= 1) return 1;
    return rectCover(number - 1) + rectCover(number - 2)
}

console.log(rectCover(10))