// vd1: dạng bình thường
function ham1() {
    console.log('ham1');
}

function ham2() {
    console.log('ham2');
}

ham1();
ham2();

// vd2: dạng callback
function ham3(callback) {
    console.log('ham3');
    callback();
}

function ham4() {
    console.log('ham4');
}

ham3(ham4);

// vd3: viết dạng bình thường
function tong(a, b) {
    let kq = a + b;
    console.log(kq);
    kiemtraSoDuong(kq);
    kiemtraSoChan(kq);
}

function kiemtraSoDuong(so) {
    if (so >= 0) {
        console.log('so duong');
    } else {
        console.log('so am');
    }
}

function kiemtraSoChan(so) {
    if (so % 2 == 0) {
        console.log('so chan');
    } else {
        console.log('so le');
    }
}

// viết dạng callback
function tong1(a, b, callback) {
    let kq = a + b;
    callback(kq);
}

tong(10, 11); // viết dạng bình thường
tong1(1, 2, kiemtraSoChan);
