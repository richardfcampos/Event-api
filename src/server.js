const fs = require('fs')
const https = require('https')
const app = require('./app')
https.createServer({
    key: fs.readFileSync(process.env.CERT_KEY),
    cert: fs.readFileSync(process.env.CERT_CERT)
}, app).listen(process.env.PORT || 3000)
