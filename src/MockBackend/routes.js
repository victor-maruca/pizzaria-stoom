const cors = require('cors')

module.exports = app => {
    app.route('/bordas').get((req, res) => { res.status(200).json([0, 1, 2]) });
    app.route('/sabores').get((req, res) => { res.status(200).json([0, 1, 2, 3, 4, 5]) });
    app.route('/tamanhos').get((req, res) => { res.status(200).json([0, 1, 2]) });
}