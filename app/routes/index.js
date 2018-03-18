module.exports = (app) => {
    app.get('/products', (req, res) => {
        app.app.controllers.index.getProducts( app, req, res )
    })
}