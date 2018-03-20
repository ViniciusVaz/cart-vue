const express = require('express')
    , cors = require('cors')
    , consign = require('consign')
    , app = express()

app.use(cors())

app.use(express.static('./'))

consign().include('app/routes').then('app/controllers').into(app)

app.listen(8181, () => {
    console.log("I'm listing you at port 8181")
})