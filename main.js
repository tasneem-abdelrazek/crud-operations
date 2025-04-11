let productName = document.getElementById("productName")
let productPrice = document.getElementById("productPrice")
let category = document.getElementById("category")
let description = document.getElementById("description")

let productContainer = []

let id = "";

if (localStorage.getItem("product") != null) {
    productContainer = JSON.parse(localStorage.getItem("product"))

    displayProduct()
}

function addProduct() {
    let product = {
        name: productName.value,
        price: productPrice.value,
        category: category.value,
        description: description.value,
    }
    productContainer.push(product)

    localStorage.setItem("product", JSON.stringify(productContainer))

    clearProduct()
    displayProduct()
}

function clearProduct() {
    productName.value = " "
    productPrice.value = " "
    category.value = " "
    description.value = " "
}


function displayProduct() {
    let data = " ";
    for (let i = 0; i < productContainer.length; i++) {
        data += `<tr>
                <th scope="row">${i + 1}</th>
                <td>${productContainer[i].name}</td>
                <td>${productContainer[i].price}</td>
                <td>${productContainer[i].category}</td>
                <td>${productContainer[i].description}</td>
                <td><button class="btn btn-danger" onclick="deleteProduct(${i})">Delete</button></td>
                <td><button class="btn btn-info" onclick="updateProduct(${i})">Update</button></td>
              </tr>`
    }

    document.getElementById("demo").innerHTML = data

}

function deleteProduct(index) {
    productContainer.splice(index, 1)
    localStorage.setItem("product", JSON.stringify(productContainer))
    displayProduct()
}

function updateProduct(index) {

    id = index
    productName.value = productContainer[index].name
    productPrice.value = productContainer[index].price
    category.value = productContainer[index].category
    description.value = productContainer[index].description

    document.getElementById("update").setAttribute("onclick", "finalUpdate()");

    document.getElementById("update").style.display = "block"
    document.getElementById("add").style.display = "none"
}

function finalUpdate() {
    productContainer[id].name = productName.value;
    productContainer[id].price = productPrice.value;
    productContainer[id].category = category.value;
    productContainer[id].description = description.value;

    localStorage.setItem("product", JSON.stringify(productContainer));

    displayProduct();
    clearProduct();

    document.getElementById("add").style.display = "block";
    document.getElementById("update").style.display = "none";
}
