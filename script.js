const API_URL = 'https://your-backend.up.railway.app/api/products';

async function fetchProducts() {
  const res = await fetch(API_URL);
  const products = await res.json();

  document.getElementById('product-list').innerHTML =
    products.map(p => `<li>${p.name} - ₹${p.price}</li>`).join('');
}

async function addProduct() {
  const name = document.getElementById('name').value;
  const price = document.getElementById('price').value;

  await fetch(API_URL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ name, price })
  });

  fetchProducts();
}

fetchProducts();
