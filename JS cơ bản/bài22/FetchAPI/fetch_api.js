// cú pháp
// fetch(url, options)
//   .then(response => response.json()) // Chuyển đổi response thành JSON
//   .then(data => console.log(data))   // Xử lý dữ liệu
//   .catch(error => console.error('Lỗi:', error)); // Xử lý lỗi



fetch('https://dummyjson.com/products/categories')
    .then(response => response.json()) // chờ khi có phản hồi thì convert sang json
    .then(data => {
        let htmls = '';
        data.forEach(element => {
            htmls += `
                <div class="category-item">${element.name}</div>
            `
        });

        let div_category = document.querySelector('#category');
        div_category.innerHTML = htmls;

    }); // chờ convert sang thì nhận được data