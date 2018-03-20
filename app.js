const express = require('express')
    , cors = require('cors')
    , consign = require('consign')
    , port = process.env.PORT || 5000
    , app = express()

app.use(cors())

app.use(express.static('./'))

consign().include('app/controllers').then('app/routes').into(app)

app.listen(port, () => {
    console.log(`Server on port: ${port}`)
})