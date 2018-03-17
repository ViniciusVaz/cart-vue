const express = require('express')

const consign = require('consign')

var cors = require('cors')

const app = express()

app.use(cors())

consign().include('app/routes').then('app/controllers').then('app/servers').into(app)

module.exports = app