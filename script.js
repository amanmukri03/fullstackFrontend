const API_URL = 'https://fullstackbackend-production-1714.up.railway.app/api/products';

async function fetchProducts() {
  const res = await fetch(API_URL);
  const products = await res.json();

  document.getElementById('product-list').innerHTML =
    products.map(p =>
      `<li>
        ${p.name} - ₹${p.price}
        <button onclick="deleteProduct('${p._id}')" style="float:right; background:red; color:white; border:none; border-radius:4px; padding:4px 8px; cursor:pointer;">X</button>
      </li>`
    ).join('');
}

async function addProduct() {
  let nameInput = document.getElementById('name');
  let priceInput = document.getElementById('price');

  const name = nameInput.value;
  const price = priceInput.value;

  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, price })
  });
  name.value = ""
  price.value = ""

  fetchProducts();
}

async function deleteProduct(id) {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });

  fetchProducts();
}

fetchProducts();
