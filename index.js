let listProduct = [];

function addProduct() {
  let stt = document.getElementById("stt").value;
  let nameProduct = document.getElementById("namePro").value;
  let giaProduct = document.getElementById("giaPro").value;
  let maProduct = document.getElementById("maPro").value;
  let numberProduct = document.getElementById("soPro").value;

  let tableProduct = {
    stt: stt,
    nameProduct: nameProduct,
    giaProduct: giaProduct,
    maProduct: maProduct,
    numberProduct: numberProduct,
  };
  listProduct.push(tableProduct);
  localStorage.setItem("saveProduct", JSON.stringify(listProduct));
  renderProduct();
}

function renderProduct() {
  let listProductLocal = JSON.parse(localStorage.getItem("saveProduct"));
  let result = `
    <tr>
    <td>Stt</td>
    <td>Tên sản phẩm</td>
    <td>Giá sản phẩm</td>
    <td>Mã sản phẩm</td>
    <td>số lượng</td>
    <td colspan=2 style="text-align: center">Button</td>
  </tr>
    `;
  for (let i = 0; i < listProductLocal.length; i++) {
    result += `
      <tr>
      <td>${i + 1}</td>
      <td>${listProductLocal[i].nameProduct}</td>
      <td>${listProductLocal[i].giaProduct}</td>
      <td>${listProductLocal[i].maProduct}</td>
      <td>${listProductLocal[i].numberProduct}</td>
      <td onclick="handleEditShow(${i})"><button>sửa</button></td>
      <td onclick="handleDelete(${i})"><button>xóa</button></td>
      
    </tr>
      `;
  }
  document.getElementById("tableProduct").innerHTML = result;
}
renderProduct();

// Nút Xóa

function handleDelete(id) {
  let listProduct = JSON.parse(localStorage.getItem("saveProduct"));
  listProduct.splice(id, 1);
  localStorage.setItem("saveProduct", JSON.stringify(listProduct));

  renderProduct();
}

// Edit products

function handleEditShow(id) {
  let listProduct = JSON.parse(localStorage.getItem("saveProduct"));
  document.getElementById("stt").value = listProduct[id].stt;
  document.getElementById("namePro").value = listProduct[id].nameProduct;
  document.getElementById("giaPro").value = listProduct[id].giaProduct;
  document.getElementById("maPro").value = listProduct[id].giaProduct;
  document.getElementById("soPro").value = listProduct[id].nameProduct;
}

function handleEdit(id) {
  let listProduct = JSON.parse(localStorage.getItem("saveProduct"));
  let nameProduct = document.getElementById("namePro").value;
  let giaProduct = document.getElementById("giaPro").value;
  let maProduct = document.getElementById("maPro").value;
  let numberProduct = document.getElementById("soPro").value;
  console.log(listProduct);
  let tableProduct = {
    stt: 0,
    nameProduct: nameProduct,
    giaProduct: giaProduct,
    maProduct: maProduct,
    numberProduct: numberProduct,
  };

  for (let i = 0; i < listProduct.length; i++) {
    console.log(listProduct[i].stt);
  }
  listProduct.splice(id, 1, tableProduct);
  // listProduct.push(tableProduct);

  localStorage.setItem("saveProduct", JSON.stringify(listProduct));
  renderProduct();
}

// // setItems, getItems, removeItems
// // setItem => Lưu

// localStorage.setItem("listStudent", JSON.stringify(arrUser));

// //getItems => Lấy dữ liệu ra

// let a = JSON.parse(localStorage.getItem("listStudent"));
// // let a = localStorage.getItem("listStudent");
// console.log(a);
