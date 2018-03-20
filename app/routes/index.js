const data = require('../../products.json')
module.exports = (app) => {
    app.get('/products', (req, res) => {
        res.send(data)
    })
}