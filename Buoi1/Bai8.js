let N = 320;
let rs = 0;
if(N<=9){
    rs = 1;
} else {
    rs = Math.ceil(N/9)
}
console.log(rs);