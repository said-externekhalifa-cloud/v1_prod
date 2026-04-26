const express = require('express');
const app = express();
const port = 3000;
const sequelize = require('./src/config/database');
const productRoutes = require('./src/routes/productRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./src/config/swagger');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Bienvenue sur l'API Produits!");
});

app.use('/api/products', productRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
  });
});

