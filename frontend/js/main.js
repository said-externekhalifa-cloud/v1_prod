import { getProducts, createProduct, updateProduct, deleteProduct } from './apiService.js';
import { renderProducts } from './productUI.js';

const modal = document.getElementById('productModal');
const addProductBtn = document.getElementById('addProductBtn');
const closeBtn = document.querySelector('.close-btn');
const productForm = document.getElementById('productForm');

const refreshProducts = async () => {
  const products = await getProducts();
  renderProducts(products);
};

addProductBtn.onclick = () => {
  productForm.reset();
  document.getElementById('productId').value = '';
  modal.style.display = 'block';
};

closeBtn.onclick = () => {
  modal.style.display = 'none';
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

productForm.onsubmit = async (event) => {
  event.preventDefault();
  const id = document.getElementById('productId').value;
  const productData = {
    name: document.getElementById('name').value,
    description: document.getElementById('description').value,
    price: parseFloat(document.getElementById('price').value),
    quantity: parseInt(document.getElementById('quantity').value, 10),
    category: document.getElementById('category').value,
  };

  if (id) {
    await updateProduct(id, productData);
  } else {
    await createProduct(productData);
  }

  modal.style.display = 'none';
  refreshProducts();
};

document.getElementById('productList').addEventListener('click', async (event) => {
  if (event.target.classList.contains('delete-btn')) {
    const id = event.target.dataset.id;
    await deleteProduct(id);
    refreshProducts();
  }

  if (event.target.classList.contains('edit-btn')) {
    const id = event.target.dataset.id;
    const products = await getProducts();
    const product = products.find(p => p.id == id);
    if (product) {
      document.getElementById('productId').value = product.id;
      document.getElementById('name').value = product.name;
      document.getElementById('description').value = product.description;
      document.getElementById('price').value = product.price;
      document.getElementById('quantity').value = product.quantity;
      document.getElementById('category').value = product.category;
      modal.style.display = 'block';
    }
  }
});


document.addEventListener('DOMContentLoaded', refreshProducts);
