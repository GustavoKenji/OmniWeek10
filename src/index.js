const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect(
  "mongodb+srv://kenji:240400guti@cluster0-acaxr.mongodb.net/omniweek10?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(routes);

app.listen(3333);

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

// Query Params: req.query (Filtros, ordenação, paginação, ...)
// Route Params: req.params (Identificar um recurso na alteração ou remoção)
// Body: req.body (Dados para a criação ou alteração de um registro)

//MongoDB (Não-relacional)