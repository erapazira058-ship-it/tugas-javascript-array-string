// ===== Case 1: String Manipulation =====
// GANTI string ini dengan string asli dari soal (bagian atas soal)
const rawNames = "  Riyanda Azis, Arifian   Saputra ,  HASAN Harahap  ";

const cleaned = rawNames.trim();
const namesArray = cleaned.split(",");
const formattedNames = namesArray.map((name) =>
  name.trim().toLowerCase().split(/\s+/).join("_")
);
const result1 = formattedNames.join(" | ");

console.log("Case 1:", result1);
// Output: riyanda_azis | arifian_saputra | hasan_harahap


// ===== Case 2: E-Commerce Product Filter =====
const products = [
  { name: "Laptop", price: 1000, active: true },
  { name: "Mouse", price: 20, active: false },
  { name: "Keyboard", price: 50, active: true },
];

const activeProducts = products.filter((product) => product.active);

const upperCaseNames = activeProducts.map((product) =>
  product.name.toUpperCase()
);

const totalPrice = activeProducts.reduce(
  (total, product) => total + product.price,
  0
);

console.log("Case 2 - Produk aktif:", activeProducts);
console.log("Case 2 - Nama kapital:", upperCaseNames);
console.log("Case 2 - Total harga:", totalPrice);
