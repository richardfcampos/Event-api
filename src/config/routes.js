const app = require("express").Router()
const cors = require('cors')
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const path = require('path')
const yamlFile = path.resolve(__dirname, '..', '..', 'swagger.yaml')
const swaggerDocument = YAML.load(yamlFile)
const timeout = require('connect-timeout')
const options = {}
app.use(timeout('30s'))
app.use(cors())
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
app.use(bodyParser.urlencoded({extended: true}))

module.exports = app