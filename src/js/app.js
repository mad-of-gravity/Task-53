import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  //Create a new attribute with name data-price
  const dataPriceAttribute = document.createAttribute("data-price");

  //Get all elements with class name product
  const products = document.getElementsByClassName("product");

  //Get all elements with class name product
  const price = document.getElementsByClassName("price");

  //Set the data-price attribute for each of them
  for (let productIndex in products) {
    dataPriceAttribute.value = price[productIndex].textContent;
    products[productIndex].setAttribute(dataPriceAttribute);
  }
});
