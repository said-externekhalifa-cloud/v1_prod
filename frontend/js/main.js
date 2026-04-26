import { getProducts } from './apiService.js';
import { renderProducts } from './productUI.js';

document.addEventListener('DOMContentLoaded', async () => {
  const products = await getProducts();
  renderProducts(products);
});
