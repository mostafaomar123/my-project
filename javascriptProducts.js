
var xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://dummyjson.com/products");
xhttp.send();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200 ) {
    let responseString = xhttp.responseText;
    productsFetcher(responseString);
  }
}
function productsFetcher(responseString) {
  let products = JSON.parse(responseString).products;
  createPage(products);
  return products;
};
function createProductsDiv() {
  let divProducts = document.createElement("div");
  divProducts.setAttribute("class", "products");
  return divProducts;
}
function createCardDiv(product) {
  let classCard = document.createElement("div");
  classCard.setAttribute("class", "card");
  let img = document.createElement("img");
  img.src = product["thumbnail"];
  classCard.appendChild(img);
  let title = document.createElement("h4");
  title.innerHTML = product["title"];
  classCard.appendChild(title);

  function informationCard() {
    let elements = document.createElement("dl");
    let entries = Array.from(Object.entries(product)).filter(
      (el) =>
        el[0] == "id" ||
        el[0] == "title" ||
        el[0] == "description" ||
        el[0] == "price" ||
        el[0] == "discountPercentage" ||
        el[0] == "rating" ||
        el[0] == "stock" ||
        el[0] == "brand" ||
        el[0] == "category"
    );
    entries.forEach((item) => {
      let keysDt = document.createElement("dt");
      let valuesDd = document.createElement("dd");
      keysDt.innerText = item[0];
      valuesDd.innerText = item[1];
      elements.appendChild(keysDt).appendChild(valuesDd);
    });
    classCard.appendChild(elements);
    return elements;
  }

  function addImagesLinks() {
    let ul = document.createElement("ul");
    let images = product.images;
    images.forEach((item) => {
      let li = document.createElement("li");
      let a = document.createElement("a");
      a.href = item;
      a.target = "_blank";
      a.innerHTML = "images";
      classCard.appendChild(ul).appendChild(li).appendChild(a);
    });
    return ul;
  }
  informationCard();
  addImagesLinks();
  return classCard;
}
function createPage(products) {
  let resultProducts = createProductsDiv();
  for (let i in products) {
    resultProducts.appendChild(createCardDiv(products[i]));
  }
  filter(products);
  document.body.appendChild(resultProducts);
}

function search(e) {
  let searchValue = e.value;
  let classCard = document.querySelectorAll(".card");
  let products = productsFetcher();
  for (let i = 0; i < products.length; i++) {
    if (
      products[i].title.toUpperCase().indexOf(searchValue.toUpperCase()) >= 0
    ) {
      classCard[i].style.display = "";
    } else {
      classCard[i].style.display = "none";
    }
  }
}
function filter(products) {
  let categories = Array.from(
    new Set(products.map((el) => el.category))
  );
  let select = document.getElementById("category");
  categories.forEach((ele) => {
    let option = document.createElement("option");
    option.innerHTML = ele;
    select.appendChild(option);
  });
  return categories;
}
function selectFilter(e) {
  let filterValue = e.value;
  let classCard = document.querySelectorAll(".card");
  let products = productsFetcher();
  for (let i = 0; i < products.length; i++) {
    if (
      products[i].category.indexOf(filterValue) >= 0 ||
      filterValue === "All Products"
    ) {
      classCard[i].style.display = "";
      console.log("ok");
    } else {
      classCard[i].style.display = "none";
    }
  }
}
function darkMode() {
  document.body.classList.toggle("dark-mode");
}


