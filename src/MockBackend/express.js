const express    = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

module.exports = () => {
  const app = express();
  app.set('port', 8080);
  app.use(bodyParser.json());

  app.get('/bordas', cors(), (req, res) => {
    res.status(200).json([0, 1, 2])
  });

  app.get('/sabores', cors(), (req, res) => {
    res.status(200).json([0, 1, 2, 3, 4, 5])
  });

  app.get('/tamanhos', cors(), (req, res) => {
    res.status(200).json([0, 1, 2])
  });

  return app;
};