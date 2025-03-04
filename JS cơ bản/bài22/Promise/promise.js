var a = 10;

var promise_test = new Promise((resolve, reject) => {
    if (a) {
        resolve(a);  // thành công. Nếu thành công chạy vào hàm then() ở dưới
    } else {
        reject();   // thất bại. Nếu thất bại chạy vào hàm catch() ở dưới
    }
})

promise_test
    .then((success) => {
        console.log(success);
        return success; // khi  giá trị return này ra thì hàm then tiếp theo nhận giá trị đó làm đối số
    })
    .then((success1) => {
        console.log(success1);
        return success1;
    })
    .then((success2) => {
        console.log(success2);
    })
    .catch((error) => {
        console.log('lỗi: ', error);
    })
    .finally(() => {
        console.log('Luôn vào đây');
    })