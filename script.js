const products = [
  {
    name: "Wireless Headphones",
    category: "Electronics",
    price: "₹2,999",
    image: "https://picsum.photos/300/200?random=1"
  },
  {
    name: "T-Shirt",
    category: "Clothing",
    price: "₹799",
    image: "https://picsum.photos/300/200?random=2"
  },
  {
    name: "JavaScript Book",
    category: "Books",
    price: "₹499",
    image: "https://picsum.photos/300/200?random=3"
  },
  {
    name: "Smart Watch",
    category: "Electronics",
    price: "₹4,999",
    image: "https://picsum.photos/300/200?random=4"
  },
  {
    name: "Jeans",
    category: "Clothing",
    price: "₹1,299",
    image: "https://picsum.photos/300/200?random=5"
  }
];

const productsContainer = document.getElementById("products");
const searchInput = document.getElementById("search");

function displayProducts(list) {
  productsContainer.innerHTML = "";

  list.forEach(product => {
   
