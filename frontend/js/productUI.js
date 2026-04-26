const productList = document.getElementById('productList');

const renderProducts = (products) => {
  productList.innerHTML = '';
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p><strong>Prix:</strong> ${product.price} €</p>
      <p><strong>Quantité:</strong> ${product.quantity}</p>
      <p><strong>Catégorie:</strong> ${product.category}</p>
      <div class="card-buttons">
        <button class="edit-btn" data-id="${product.id}">Modifier</button>
        <button class="delete-btn" data-id="${product.id}">Supprimer</button>
      </div>
    `;
    productList.appendChild(productCard);
  });
};

export { renderProducts };
