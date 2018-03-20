const data = require('../../products.json')

module.exports = (app) => {
    app.get('/products', (req, res) => {
        console.log("------------")
        console.log(app)
        res.send(data)
    })
}