const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API Produits',
    version: '1.0.0',
    description: 'Une API pour gérer une base de données de produits.',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Serveur de développement',
    },
  ],
  components: {
    schemas: {
      Product: {
        type: 'object',
        required: ['name', 'price', 'quantity'],
        properties: {
          id: {
            type: 'integer',
            format: 'int64',
            readOnly: true,
          },
          name: {
            type: 'string',
            example: 'PC Gamer Pro',
          },
          description: {
            type: 'string',
            example: 'Un PC puissant pour les jeux.',
          },
          price: {
            type: 'number',
            format: 'float',
            example: 1500.50,
          },
          quantity: {
            type: 'integer',
            example: 10,
          },
          category: {
            type: 'string',
            example: 'Électronique',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            readOnly: true,
          },
          updatedAt: {
            type: 'string',
            format: 'date-time',
            readOnly: true,
          },
        },
      },
    },
  },
};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js'], // Path to the API docs
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
