var prosime1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 3000);
});

console.log(prosime1);

setTimeout(() => {
    console.log('sau 1s', prosime1);
}, 1000);

setTimeout(() => {
    console.log('sau 2s', prosime1);
}, 2000);

setTimeout(() => {
    console.log('sau 3s', prosime1);
}, 3000);
