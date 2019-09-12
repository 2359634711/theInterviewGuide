
let lines  = '000001234 -4213353'
let arr = lines.split(' ')
if((arr[0].length>5100) || (arr[1].length>5100)) return 0
let out = (parseInt(Math.abs(arr[0]))+ parseInt(Math.abs(arr[1])))
// print(obj)
if(out) print(out)
else print(0)


function print(v) {
    console.log(v)
}