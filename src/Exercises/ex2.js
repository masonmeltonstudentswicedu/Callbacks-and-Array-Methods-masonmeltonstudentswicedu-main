const products = [
  { name: "Laptop", price: 899, category: "Electronics", inStock: true },
  { name: "Coffee Mug", price: 15, category: "Kitchen", inStock: false },
  { name: "Notebook", price: 8, category: "Office", inStock: true },
  { name: "Headphones", price: 199, category: "Electronics", inStock: true },
  { name: "Desk Lamp", price: 45, category: "Office", inStock: false },
];

const saleProducts = products.map(product => {
  const salePrice = (product.price * 0.8).toFixed(2);
  return {
    ...product,
    originalPrice: product.price,
    price: parseFloat(salePrice),
    onSale: true,
  };
});
console.log("EX2.1", saleProducts);

const availableElectronics = products
  .filter(product => product.inStock)
  .filter(product => product.category === "Electronics");
console.log("EX2.2", availableElectronics);

console.log("EX2.3");
products.forEach(product => {
  const availability = product.inStock ? "✅ In Stock" : "❌ Out of Stock";
  console.log(`${product.name} - $${product.price} ${availability}`);
});