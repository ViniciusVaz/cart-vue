module.exports = (application) => {
    application.get('/products', (req, res) => {
        console.log(application.app)
        application.app.controllers.index.getProducts( application, req, res )
    })
}