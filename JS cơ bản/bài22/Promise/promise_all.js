var a = 1;
var b = 3;
var c = 5;
var d = 7;
var e = 8;
var f = 11;

let sum1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(a + b); // sẽ trả ra a + b
    }, 3000);
});

let sum2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(c + d); // sẽ trả ra c + d
    }, 4000);
});

let sum3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(e + f); // sẽ trả ra e + f
    }, 6000);
});

Promise.all([sum1, sum2, sum3])
    .then(([tong1, tong2, tong3]) => {
        let tong = tong1 + tong2 + tong3
        console.log(tong);
    })
    .catch((error) => {
        console.log('error: ', error);
    })
    .finally(() => {
        console.log('luôn vào đây');

    })