const Product = require('../models/Product');

const findAll = async () => {
  return await Product.findAll();
};

const findByPk = async (id) => {
  return await Product.findByPk(id);
};

const create = async (productData) => {
  return await Product.create(productData);
};

const update = async (id, productData) => {
  const product = await Product.findByPk(id);
  if (product) {
    return await product.update(productData);
  }
  return null;
};

const deleteProduct = async (id) => {
  const product = await Product.findByPk(id);
  if (product) {
    await product.destroy();
    return true;
  }
  return false;
};

module.exports = {
  findAll,
  findByPk,
  create,
  update,
  delete: deleteProduct,
};
