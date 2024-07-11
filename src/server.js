const express = require('express');
const sequelize = require('./config/database');
const todoRoutes = require('./routes/toDoRoutes');
const { FORCE } = require('sequelize/lib/index-hints');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/todos', todoRoutes);

sequelize.sync({ force: true }).then(() => {
  console.log('Database connected');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

