//- Kiểm tra mảng có đối xứng không? Có trả về 1, không có trả về 0
let arr1 = [3, 2, 4, 2, 3];
let arr2 = [3, 2, 2, 3];
let arr3 = [3, 4, 2, 4, 2];
let arr4 = [3, 2, 4, 3];

function check(arr) {
    let mid = Math.floor(arr.length / 2);
    let check = false;
    //let divMid = arr.length % 2
    // if (divMid === 1) {
    //     for (let i = 0; i < mid; i++) {
    //         if (arr[i] === arr[arr.length - 1 - i]) {
    //             check = true;
    //
    //         } else {
    //             check = false;
    //             break;
    //         }
    //     }
    //     if (check === false) {
    //         return 0;
    //     } else {
    //         return 1;
    //     }
    // } else {
    //     for (let i = 0; i <= mid; i++) {
    //         if (arr[i] === arr[arr.length - 1 - i]) {
    //             check = true;
    //
    //         } else {
    //             check = false;
    //             break;
    //         }
    //     }
    //     if (check === false) {
    //         return 0;
    //     } else {
    //         return 1;
    //     }
    // }
    for (let i = 0; i <= mid; i++) {
                if (arr[i] === arr[arr.length - 1 - i]) {
                    check = true;

                } else {
                    check = false;
                    break;
                }
            }
            if (check === false) {
                return 0;
            } else {
                return 1;
            }
}

console.log(check(arr1))
console.log(check(arr2))
console.log(check(arr3))
console.log(check(arr4))

