module.exports = (application) => {
    application.get('/products', (req, res) => {
        application.app.controllers.index.getProducts( application, req, res)
    })
}