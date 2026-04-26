const productRepository = require('../repositories/productRepository');

const findAll = async () => {
  return await productRepository.findAll();
};

const findByPk = async (id) => {
  return await productRepository.findByPk(id);
};

const create = async (productData) => {
  return await productRepository.create(productData);
};

const update = async (id, productData) => {
  return await productRepository.update(id, productData);
};

const deleteProduct = async (id) => {
  return await productRepository.delete(id);
};

module.exports = {
  findAll,
  findByPk,
  create,
  update,
  delete: deleteProduct,
};
