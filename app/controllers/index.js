const data = require('../../products.json')

module.exports.getProducts = ( app, req, res ) => {
    res.send(data)
}